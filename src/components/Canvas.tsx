import { ReactNode } from "react";
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    BackgroundVariant,
    Node,
    Edge,
    Connection,
    NodeChange,
} from "reactflow";
import "reactflow/dist/style.css";

interface CanvasProps {
    nodes: Node[];
    edges: Edge[];
    nodeTypes: Record<string, any>;
    onNodesChange: (changes: NodeChange[]) => void;
    onEdgesChange: (changes: any) => void;
    onConnect: (params: Connection) => void;
    onNodeClick: (event: React.MouseEvent, node: Node) => void;
    selectionMode: boolean;
    children?: ReactNode;
}

export function Canvas({
    nodes,
    edges,
    nodeTypes,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onNodeClick,
    selectionMode,
    children,
}: CanvasProps) {
    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            fitView
            attributionPosition="bottom-right"
            nodeTypes={nodeTypes}
            elevateNodesOnSelect={false}
            selectionOnDrag={selectionMode}
            panOnDrag={!selectionMode}
            selectionMode={selectionMode ? ("partial" as any) : undefined}
        >
            <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#cbd5e1" />
            <Controls />
            <MiniMap
                nodeColor={(node) => {
                    if (node.data?.isOriginalPost) return "#ea580c";
                    return "#3b82f6";
                }}
                maskColor="rgba(0, 0, 0, 0.1)"
            />
            {children}
        </ReactFlow>
    );
}