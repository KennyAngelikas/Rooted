import { useCallback, useState, useMemo } from "react";
import { layoutTree } from "../utils/layoutTree.ts";
import { Node, Edge, NodeProps } from "reactflow";
import { AnimatePresence } from "motion/react";
import { Home } from "lucide-react";
import { Link } from "react-router";
import { useVisualizationState } from "../../hooks/useVisualizationState";
import { useFlowState } from "../../hooks/useFlowState";
import { useAnnotations } from "../../hooks/useAnnotations";
import { getVisibleDiscussionEdges, getVisibleDiscussionNodes } from "../../services/filterService";
import { DiscussionNodeData } from "../../types/discussion";
import { DiscussionPanel } from "../../components/DiscussionPanel";
import { SelectedNodeModal } from "../../components/SelectedNodeModal";
import { Canvas } from "../../components/Canvas";
import { ControlPanels } from "../../components/ControlPanels";
import { CustomBoxNode } from "../../components/CustomBoxNode";
import { StickyNoteNode } from "../../components/StickyNoteNode";

const nodeTypes = {
  customBox: CustomBoxNode,
  stickyNote: StickyNoteNode,
};

export default function Visualization() {
  const {
    discussions,
    selectedDiscussionIds,
    setSelectedDiscussionIds,
    isDiscussionPanelOpen,
    setIsDiscussionPanelOpen,
    currentDiscussion,
    expandedNodes,
    setExpandedNodes,
    selectedNode,
    setSelectedNode,
    isPanelExpanded,
    setIsPanelExpanded,
    depthFilter,
    setDepthFilter,
    upvoteFilter,
    setUpvoteFilter,
    highlightDelta,
    setHighlightDelta,
    nodePositions,
    setNodePositions,
    selectionMode,
    setSelectionMode,
    saveToHistory,
    undo,
    redo,
  } = useVisualizationState();

  const { annotationNodes, addBox, addNote } = useAnnotations();

  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);

  const layoutedNodes = useMemo(
    () => layoutTree(currentDiscussion.nodes, currentDiscussion.edges),
    [currentDiscussion]
  );

  const visibleNodes = useMemo(
    () =>
      getVisibleDiscussionNodes({
        nodes: layoutedNodes,
        depthFilter,
        upvotePercent: upvoteFilter,
        highlightDelta,
        expandedNodeIds: expandedNodes,
      }),
    [layoutedNodes, depthFilter, upvoteFilter, highlightDelta, expandedNodes]
  );

  const visibleEdges = useMemo(
    () =>
      getVisibleDiscussionEdges({
        nodes: currentDiscussion.nodes,
        edges: currentDiscussion.edges,
        visibleNodes,
        highlightDelta,
      }),
    [currentDiscussion.edges, currentDiscussion.nodes, visibleNodes, highlightDelta]
  );

  const handleDiscussionToggle = useCallback(
    (discussionId: string, checked: boolean) => {
      setSelectedDiscussionIds((current) =>
        checked ? [...current, discussionId] : current.filter((id) => id !== discussionId)
      );
      setExpandedNodes(new Set());
      setNodePositions(new Map());
      setSelectedNode(null);
    },
    [setExpandedNodes, setNodePositions, setSelectedDiscussionIds, setSelectedNode]
  );

  const handleDepthFilterChange = useCallback(
    (value: number | null) => {
      saveToHistory();
      setDepthFilter(value);
    },
    [saveToHistory, setDepthFilter]
  );

  const handleUpvoteFilterChange = useCallback(
    (value: number) => {
      saveToHistory();
      setUpvoteFilter(value);
    },
    [saveToHistory, setUpvoteFilter]
  );

  const handleHighlightDeltaChange = useCallback(
    (value: boolean) => {
      saveToHistory();
      setHighlightDelta(value);
    },
    [saveToHistory, setHighlightDelta]
  );

  const handleResetFilters = useCallback(() => {
    saveToHistory();
    setDepthFilter(null);
    setUpvoteFilter(0);
    setHighlightDelta(true);
  }, [saveToHistory, setDepthFilter, setUpvoteFilter, setHighlightDelta]);

  const {
    nodes,
    edges,
    handleNodesChange,
    onEdgesChange,
    onConnect,
  } = useFlowState({
    visibleNodes,
    visibleEdges,
    annotationNodes,
    nodePositions,
    onUpdateNodePosition: (id, position) => {
      setNodePositions((prev) => {
        const next = new Map(prev);
        next.set(id, position);
        return next;
      });
    },
  });

  // ...keep the click / selection handlers unchanged...

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <Canvas
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={handleNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        selectionMode={selectionMode}
      >
        <ControlPanels
          isPanelExpanded={isPanelExpanded}
          onToggleFilterExpanded={() => setIsPanelExpanded((prev) => !prev)}
          depthFilter={depthFilter}
          onDepthFilterChange={handleDepthFilterChange}
          upvoteFilter={upvoteFilter}
          onUpvoteFilterChange={handleUpvoteFilterChange}
          highlightDelta={highlightDelta}
          onHighlightDeltaChange={handleHighlightDeltaChange}
          onResetFilters={handleResetFilters}
          selectionMode={selectionMode}
          onToggleSelectionMode={() => setSelectionMode((prev) => !prev)}
          onAddBox={addBox}
          onAddNote={addNote}
        />
      </Canvas>

      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <DiscussionPanel
          discussions={discussions}
          selectedDiscussionIds={selectedDiscussionIds}
          isOpen={isDiscussionPanelOpen}
          onToggleOpen={() => setIsDiscussionPanelOpen((prev) => !prev)}
          onDiscussionToggle={handleDiscussionToggle}
        />
      </div>

      <AnimatePresence>
        {selectedNode && (
          <SelectedNodeModal selectedNode={selectedNode} onClose={() => setSelectedNode(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}