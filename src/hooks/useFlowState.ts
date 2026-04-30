import { useCallback, useEffect, useRef } from "react";
import { useEdgesState, useNodesState, addEdge, Connection, Node, Edge, NodeChange } from "reactflow";
import type { AnnotationEntity } from "../hooks/useAnnotations";

export interface UseFlowStateProps {
    visibleNodes: Node[];
    visibleEdges: Edge[];
    annotations: AnnotationEntity[];
    nodePositions: Map<string, { x: number; y: number }>;
    onUpdateNodePosition: (id: string, position: { x: number; y: number }) => void;
    onUpdateAnnotationPosition?: (id: string, position: { x: number; y: number }) => void;
    onUpdateAnnotation: (id: string, patch: Partial<Pick<AnnotationEntity, "label" | "text" | "color" | "width" | "height" | "position">>) => void;
    onDeleteAnnotation: (id: string) => void;
}

function annotationEntitiesToNodes(
    annotations: AnnotationEntity[],
    onUpdateAnnotation: (id: string, patch: Partial<Pick<AnnotationEntity, "label" | "text" | "color" | "width" | "height" | "position">>) => void,
    onDeleteAnnotation: (id: string) => void
): Node[] {
    return annotations.map((annotation) => ({
        id: annotation.id,
        type: annotation.type === "box" ? "customBox" : "stickyNote",
        position: annotation.position,
        data: {
            ...annotation,
            onDelete: onDeleteAnnotation,
            ...(annotation.type === "box"
                ? {
                    onLabelChange: (nodeId: string, label: string) => onUpdateAnnotation(nodeId, { label }),
                }
                : {
                    onTextChange: (nodeId: string, text: string) => onUpdateAnnotation(nodeId, { text }),
                }),
            onColorChange: (nodeId: string, color: string) => onUpdateAnnotation(nodeId, { color }),
        },
    }));
}

export function useFlowState({
    visibleNodes,
    visibleEdges,
    annotations,
    nodePositions,
    onUpdateNodePosition,
    onUpdateAnnotationPosition,
    onUpdateAnnotation,
    onDeleteAnnotation,
}: UseFlowStateProps) {
    const initialNodes = [...visibleNodes, ...annotationEntitiesToNodes(annotations, onUpdateAnnotation, onDeleteAnnotation)];
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(visibleEdges);

    const timeoutMap = useRef(new Map<string, NodeJS.Timeout>());

    const handleNodesChange = useCallback(
        (changes: NodeChange[]) => {
            onNodesChange(changes);

            changes.forEach((change) => {
                if (change.type === "position" && change.position) {
                    const id = change.id as string;
                    // Clear existing timeout for this id
                    const existingTimeout = timeoutMap.current.get(id);
                    if (existingTimeout) {
                        clearTimeout(existingTimeout);
                    }
                    // Set new timeout
                    const timeout = setTimeout(() => {
                        if (id.startsWith("box-") || id.startsWith("note-")) {
                            onUpdateAnnotationPosition?.(id, change.position);
                        } else {
                            onUpdateNodePosition(id, change.position);
                        }
                        timeoutMap.current.delete(id);
                    }, 300);
                    timeoutMap.current.set(id, timeout);
                }
            });
        },
        [onNodesChange, onUpdateAnnotationPosition, onUpdateNodePosition]
    );

    useEffect(() => {
        return () => {
            timeoutMap.current.forEach((timeout) => clearTimeout(timeout));
            timeoutMap.current.clear();
        };
    }, []);

    useEffect(() => {
        setNodes((currentNodes) => {
            const currentPosMap = new Map<string, { x: number; y: number }>();
            currentNodes.forEach((node) => {
                if (node.position) {
                    currentPosMap.set(node.id, node.position as { x: number; y: number });
                }
            });

            const annotationNodes = annotationEntitiesToNodes(
                annotations,
                onUpdateAnnotation,
                onDeleteAnnotation
            );

            const allVisibleNodes = [...visibleNodes, ...annotationNodes];

            return allVisibleNodes.map((node) => {
                const savedPos = nodePositions.get(node.id);
                const currentPos = currentPosMap.get(node.id);

                if (currentPos) {
                    return { ...node, position: currentPos };
                }

                if (savedPos) {
                    return { ...node, position: savedPos };
                }

                return node;
            });
        });
    }, [annotations, nodePositions, onDeleteAnnotation, onUpdateAnnotation, setNodes, visibleNodes]);

    useEffect(() => {
        setEdges(visibleEdges);
    }, [visibleEdges, setEdges]);

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return {
        nodes,
        edges,
        handleNodesChange,
        onEdgesChange,
        onConnect,
        setNodes,
        setEdges,
    };
}
