import { useCallback, useEffect, useMemo, useState } from "react";
import { getDiscussionFixtures } from "../services/discussionService";
import { Discussion, DiscussionNodeData } from "../types/discussion";

interface HistoryState {
  expandedNodes: Set<string>;
  nodePositions: Map<string, { x: number; y: number }>;
  depthFilter: number | null;
  upvoteFilter: number;
  highlightDelta: boolean;
}

export function useVisualizationState() {
  const initialDiscussions = getDiscussionFixtures();
  const [discussions] = useState<Discussion[]>(initialDiscussions);
  const [selectedDiscussionIds, setSelectedDiscussionIds] = useState<string[]>([initialDiscussions[0].id]);
  const [isDiscussionPanelOpen, setIsDiscussionPanelOpen] = useState(true);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [selectedNode, setSelectedNode] = useState<DiscussionNodeData | null>(null);
  const [isPanelExpanded, setIsPanelExpanded] = useState(true);
  const [depthFilter, setDepthFilter] = useState<number | null>(null);
  const [upvoteFilter, setUpvoteFilter] = useState<number>(0);
  const [highlightDelta, setHighlightDelta] = useState<boolean>(true);
  const [nodePositions, setNodePositions] = useState<Map<string, { x: number; y: number }>>(new Map());
  const [selectionMode, setSelectionMode] = useState(false);
  const [history, setHistory] = useState<HistoryState[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const currentDiscussion = useMemo(() => {
    const selected = discussions.filter((discussion) => selectedDiscussionIds.includes(discussion.id));
    if (selected.length === 0) return discussions[0];

    const mergedNodes = [] as Discussion["nodes"];
    const mergedEdges = [] as Discussion["edges"];

    selected.forEach((discussion, index) => {
      const offsetX = index * 1200;

      discussion.nodes.forEach((node) => {
        mergedNodes.push({
          ...node,
          id: `${discussion.id}-${node.id}`,
          position: {
            x: node.position.x + offsetX,
            y: node.position.y,
          },
          data: {
            ...node.data,
            discussionTitle: discussion.title,
            sourceDiscussionId: discussion.id,
            sourceNodeId: node.id,
            parentId: node.data.parentId ? `${discussion.id}-${node.data.parentId}` : node.data.parentId,
          },
        });
      });

      discussion.edges.forEach((edge) => {
        mergedEdges.push({
          ...edge,
          id: `${discussion.id}-${edge.id}`,
          source: `${discussion.id}-${edge.source}`,
          target: `${discussion.id}-${edge.target}`,
        });
      });
    });

    return {
      id: selectedDiscussionIds.join("-"),
      title: selected.map((discussion) => discussion.title).join(" & "),
      nodes: mergedNodes,
      edges: mergedEdges,
    };
  }, [discussions, selectedDiscussionIds]);

  const saveToHistory = useCallback(() => {
    const currentState: HistoryState = {
      expandedNodes: new Set(expandedNodes),
      nodePositions: new Map(nodePositions),
      depthFilter,
      upvoteFilter,
      highlightDelta,
    };

    setHistory((previousHistory) => {
      const nextHistory = previousHistory.slice(0, historyIndex + 1);
      nextHistory.push(currentState);
      if (nextHistory.length > 50) {
        nextHistory.shift();
      }
      return nextHistory;
    });
    setHistoryIndex((previous) => Math.min(previous + 1, 49));
  }, [expandedNodes, historyIndex, highlightDelta, nodePositions, depthFilter, upvoteFilter]);

  const toggleExpandedNode = useCallback((nodeId: string) => {
    saveToHistory();
    setExpandedNodes((current) => {
      const next = new Set(current);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  }, [saveToHistory]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const previousState = history[historyIndex - 1];
      setExpandedNodes(new Set(previousState.expandedNodes));
      setNodePositions(new Map(previousState.nodePositions));
      setDepthFilter(previousState.depthFilter);
      setUpvoteFilter(previousState.upvoteFilter);
      setHighlightDelta(previousState.highlightDelta);
      setHistoryIndex(historyIndex - 1);
    }
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      setExpandedNodes(new Set(nextState.expandedNodes));
      setNodePositions(new Map(nextState.nodePositions));
      setDepthFilter(nextState.depthFilter);
      setUpvoteFilter(nextState.upvoteFilter);
      setHighlightDelta(nextState.highlightDelta);
      setHistoryIndex(historyIndex + 1);
    }
  }, [history, historyIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "z" && !event.shiftKey) {
        event.preventDefault();
        undo();
      }
      if (((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === "z") ||
          ((event.ctrlKey || event.metaKey) && event.key === "y")) {
        event.preventDefault();
        redo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [undo, redo]);

  return {
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
  } as const;
}
