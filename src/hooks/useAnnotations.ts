import { useCallback, useState } from "react";
import { Node } from "reactflow";

type AnnotationNodeData = {
    label?: string;
    text?: string;
    color: string;
    width: number;
    height: number;
    onLabelChange?: (id: string, label: string) => void;
    onTextChange?: (id: string, text: string) => void;
    onColorChange?: (id: string, color: string) => void;
    onDelete?: (id: string) => void;
};

function updateAnnotationNode(nodes: Node[], id: string, patch: Partial<AnnotationNodeData>) {
    return nodes.map((node) =>
        node.id === id
            ? {
                ...node,
                data: {
                    ...node.data,
                    ...patch,
                },
            }
            : node
    );
}

export function useAnnotations() {
    const [annotationNodes, setAnnotationNodes] = useState<Node[]>([]);

    const deleteAnnotationNode = useCallback((id: string) => {
        setAnnotationNodes((nodes) => nodes.filter((node) => node.id !== id));
    }, []);

    const updateAnnotationData = useCallback((id: string, patch: Partial<AnnotationNodeData>) => {
        setAnnotationNodes((nodes) => updateAnnotationNode(nodes, id, patch));
    }, []);

    const addBox = useCallback(() => {
        const id = `box-${Date.now()}`;
        const node: Node = {
            id,
            type: "customBox",
            position: { x: 0, y: 0 },
            data: {
                label: "New Category",
                color: "#93c5fd",
                width: 400,
                height: 300,
                onLabelChange: (nodeId: string, label: string) => updateAnnotationData(nodeId, { label }),
                onColorChange: (nodeId: string, color: string) => updateAnnotationData(nodeId, { color }),
                onDelete: deleteAnnotationNode,
            },
        };
        setAnnotationNodes((nodes) => [...nodes, node]);
    }, [deleteAnnotationNode, updateAnnotationData]);

    const addNote = useCallback(() => {
        const id = `note-${Date.now()}`;
        const node: Node = {
            id,
            type: "stickyNote",
            position: { x: 0, y: 0 },
            data: {
                text: "Type here...",
                color: "#fef08a",
                width: 200,
                height: 200,
                onTextChange: (nodeId: string, text: string) => updateAnnotationData(nodeId, { text }),
                onColorChange: (nodeId: string, color: string) => updateAnnotationData(nodeId, { color }),
                onDelete: deleteAnnotationNode,
            },
        };
        setAnnotationNodes((nodes) => [...nodes, node]);
    }, [deleteAnnotationNode, updateAnnotationData]);

    return {
        annotationNodes,
        addBox,
        addNote,
        deleteAnnotationNode,
        updateAnnotationData,
    } as const;
}