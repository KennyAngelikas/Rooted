import { useCallback, useEffect } from "react";
import { useEdgesState, useNodesState, addEdge, Connection, Node, Edge } from "reactflow";

export interface UseFlowStateProps {
  visibleNodes: Node[];
  visibleEdges: Edge[];
  nodePositions: Map<string, { x: number; y: number }>;
  onUpdateNodePosition: (id: string, position: { x: number; y: number }) => void;
}

export function useFlowState({
  visibleNodes,
  visibleEdges,
  nodePositions,
  onUpdateNodePosition,
}: UseFlowStateProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(visibleNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(visibleEdges);

  const handleNodesChange = useCallback(
    (changes: any) => {
      onNodesChange(changes);
      changes.forEach((change: any) => {
        if (change.type === "position" && change.position) {
          onUpdateNodePosition(change.id, change.position);
        }
      });
    },
    [onNodesChange, onUpdateNodePosition]
  );

  useEffect(() => {
    setNodes((currentNodes) => {
      const currentPosMap = new Map<string, { x: number; y: number }>();
      currentNodes.forEach((node) => {
        currentPosMap.set(node.id, node.position);
      });

      const customElements = currentNodes.filter(
        (node) => node.type === "customBox" || node.type === "stickyNote"
      );

      const allVisibleNodes = [...visibleNodes];
      customElements.forEach((customEl) => {
        if (!allVisibleNodes.find((node) => node.id === customEl.id)) {
          allVisibleNodes.push(customEl);
        }
      });

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
  }, [visibleNodes, nodePositions, setNodes]);

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
