import { useCallback, useMemo, useState, type MouseEvent } from "react";
import { AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { useVisualizationState } from "../../hooks/useVisualizationState";
import { useFlowState } from "../../hooks/useFlowState";
import { useAnnotations } from "../../hooks/useAnnotations";
import { useFilters } from "../../hooks/useFilters";
import { useSemanticLayer } from "../../hooks/useSemanticLayer";
import { getVisibleDiscussionEdges, getVisibleDiscussionNodes } from "../../services/filterService";
import { layoutTree } from "../../services/layoutService";
import { DiscussionNodeData } from "../../types/discussion";
import { SelectedNodeModal } from "../../components/SelectedNodeModal";
import { Canvas } from "../../components/Canvas";
import { Sidebar } from "../../components/Sidebar";
import { CustomBoxNode } from "../../components/CustomBoxNode";
import { StickyNoteNode } from "../../components/StickyNoteNode";

function DiscussionNode({ data }: NodeProps<CustomNodeData>) {
  const d = data as CustomNodeData;
  if (d.isDepth1Compact) {
    return (
      <>
        <Handle type="target" position={Position.Top} className="!size-2 !border-0 !bg-transparent" />
        <Handle type="source" position={Position.Bottom} className="!size-2 !border-0 !bg-transparent" />
        <div className="size-full shrink-0 rounded-full" aria-label={d.label} title="" />
      </>
    );
  }
  return (
    <>
      <Handle type="target" position={Position.Top} className="!size-2 !border-0 !bg-transparent" />
      <Handle type="source" position={Position.Bottom} className="!size-2 !border-0 !bg-transparent" />
      <div
        className="flex size-full flex-col overflow-hidden text-inherit"
        style={{ fontSize: "18px", fontWeight: "inherit" }}
      >
        <div className="min-h-0 flex-1 overflow-hidden leading-snug">{d.label}</div>
      </div>
    </>
  );
}

const nodeTypes = {
  custom: DiscussionNode,
  customBox: CustomBoxNode,
  stickyNote: StickyNoteNode,
};

export default function Visualization() {
  const [showAiSummaries, setShowAiSummaries] = useState(false);
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
    toggleExpandedNode,
    undo,
    redo,
  } = useVisualizationState();

  const { annotations, addBox, addNote, deleteAnnotation, updateAnnotation } = useAnnotations();
  const { depthFilter: depth, upvoteFilter: upvote, highlightDelta: delta, resetFilters } = useFilters({
    depthFilter,
    setDepthFilter,
    upvoteFilter,
    setUpvoteFilter,
    highlightDelta,
    setHighlightDelta,
  });
  const semanticDiscussion = useSemanticLayer({
    discussion: currentDiscussion,
    enabled: showAiSummaries,
  });

  const layoutedNodes = useMemo(
    () => layoutTree(semanticDiscussion.nodes, semanticDiscussion.edges),
    [semanticDiscussion]
  );

  const visibleNodes = useMemo(
    () =>
      getVisibleDiscussionNodes({
        nodes: layoutedNodes,
        edges: semanticDiscussion.edges,
        depthFilter: depth,
        upvotePercent: upvote,
        highlightDelta: delta,
        expandedNodeIds: expandedNodes,
      }),
    [layoutedNodes, semanticDiscussion.edges, depth, upvote, delta, expandedNodes]
  );

  const visibleEdges = useMemo(
    () =>
      getVisibleDiscussionEdges({
        nodes: semanticDiscussion.nodes,
        edges: semanticDiscussion.edges,
        visibleNodes,
        highlightDelta: delta,
      }),
    [semanticDiscussion.edges, semanticDiscussion.nodes, visibleNodes, delta]
  );

  const {
    nodes,
    edges,
    handleNodesChange,
    onEdgesChange,
    onConnect,
  } = useFlowState({
    visibleNodes,
    visibleEdges,
    annotations,
    nodePositions,
    onUpdateNodePosition: (id, position) => {
      setNodePositions((prev) => {
        const next = new Map(prev);
        next.set(id, position);
        return next;
      });
    },
    onUpdateAnnotationPosition: (id, position) => {
      updateAnnotation(id, { position });
    },
    onUpdateAnnotation: updateAnnotation,
    onDeleteAnnotation: deleteAnnotation,
  });

  const handleDiscussionToggle = useCallback(
  (discussionId: string, checked: boolean) => {
    setSelectedDiscussionIds((current) =>
      checked ? [...current, discussionId] : current.filter((id) => id !== discussionId)
    );

    setSelectedNode(null);
    },
    [setSelectedDiscussionIds, setSelectedNode]
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
    resetFilters();
  }, [resetFilters, saveToHistory]);

  // 1. Modify the left-click handler so it doesn't open the modal
  const handleNodeClick = useCallback(
    (_event: MouseEvent, node: any) => {
      // We leave this empty or use it for selecting without opening the modal
      console.log("Node left-clicked");
    },
    []
  );

  // 2. Add the right-click handler
  const handleNodeContextMenu = useCallback(
    (event: React.MouseEvent, node: any) => {
      event.preventDefault(); // CRITICAL: This stops the browser's right-click menu

      if (node?.data?.fullText) {
        setSelectedNode(node.data as DiscussionNodeData);
      }
    },
    [setSelectedNode]
  );

  const handleNodeDoubleClick = useCallback(
    (_event: MouseEvent, node: any) => {
      if (node?.data?.fullText) {
        toggleExpandedNode(node.id);
      }
    },
    [toggleExpandedNode]
  );

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative">
      {/* Sidebar */}
      <Sidebar
        discussions={discussions}
        selectedDiscussionIds={selectedDiscussionIds}
        isDiscussionPanelOpen={isDiscussionPanelOpen}
        onToggleDiscussionPanel={() => setIsDiscussionPanelOpen((prev) => !prev)}
        onDiscussionToggle={handleDiscussionToggle}
        isPanelExpanded={isPanelExpanded}
        onToggleFilterExpanded={() => setIsPanelExpanded((prev) => !prev)}
        depthFilter={depth}
        onDepthFilterChange={handleDepthFilterChange}
        upvoteFilter={upvote}
        onUpvoteFilterChange={handleUpvoteFilterChange}
        highlightDelta={delta}
        onHighlightDeltaChange={handleHighlightDeltaChange}
        showAiSummaries={showAiSummaries}
        onShowAiSummariesChange={setShowAiSummaries}
        onResetFilters={handleResetFilters}
        selectionMode={selectionMode}
        onToggleSelectionMode={() => setSelectionMode((prev) => !prev)}
        onAddBox={addBox}
        onAddNote={addNote}
      />

      {/* Canvas */}
      <Canvas
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={handleNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        onNodeDoubleClick={handleNodeDoubleClick}
        onNodeContextMenu={handleNodeContextMenu} // ADD THIS LINE
        selectionMode={selectionMode}
      />

      {/* Home Button - Top Right */}
      <Link
        to="/"
        className="fixed top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors z-50"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Home
      </Link>

      <AnimatePresence>
        {selectedNode && (
          <SelectedNodeModal selectedNode={selectedNode} onClose={() => setSelectedNode(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
