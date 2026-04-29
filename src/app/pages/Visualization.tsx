import { useCallback, useState, useMemo, useEffect } from "react";
import { layoutTree } from "../utils/layoutTree.ts";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Node,
  Edge,
  BackgroundVariant,
  Panel,
  NodeProps,
  NodeResizer,
} from "reactflow";
import "reactflow/dist/style.css";
import { Resizable } from "re-resizable";
import { motion, AnimatePresence } from "motion/react";
import { X, Home, Info, ChevronUp, Square, StickyNote, MousePointer2, List } from "lucide-react";
import { Link } from "react-router";
import { sabrinaDiscussionNodes, sabrinaDiscussionEdges, CustomNodeData } from "../data/sabrina-carpenter-discussion";
import { aiArtDiscussionNodes, aiArtDiscussionEdges } from "../data/ai-art-discussion";

// Custom Box Node Component
function CustomBoxNode({ data, id }: NodeProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div
      style={{
        width: data.width || 400,
        height: data.height || 300,
        backgroundColor: (data.color || "#93c5fd") + "40",
        border: `3px solid ${data.color || "#93c5fd"}`,
        borderRadius: "12px",
        padding: "8px",
        zIndex: -1,
      }}
      className="flex flex-col"
    >
      <div className="flex items-center justify-between mb-2">
        {isEditing ? (
          <input
            type="text"
            value={data.label}
            onChange={(e) => data.onLabelChange?.(id, e.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setIsEditing(false);
            }}
            autoFocus
            className="px-2 py-1 bg-white rounded border-2 border-gray-300 flex-1 mr-2"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          />
        ) : (
          <h3
            onClick={() => setIsEditing(true)}
            className="font-semibold text-gray-800 flex-1 cursor-text px-2 py-1"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {data.label}
          </h3>
        )}
        <div className="flex items-center gap-1">
          <input
            type="color"
            value={data.color}
            onChange={(e) => data.onColorChange?.(id, e.target.value)}
            className="w-6 h-6 rounded cursor-pointer"
            title="Change color"
          />
          <button
            onClick={() => data.onDelete?.(id)}
            className="p-1 hover:bg-white/50 rounded transition-colors"
            title="Delete box"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="flex-1 text-xs text-gray-600 px-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
        Drag nodes here to organize
      </div>
      <NodeResizer
        isVisible={true}
        lineClassName="resize-line"
        handleClassName="resize-handle"
      />
    </div>
  );
}

// Custom Sticky Note Node Component
function StickyNoteNode({ data, id }: NodeProps) {
  return (
    <div
      style={{
        width: data.width || 200,
        height: data.height || 200,
        backgroundColor: data.color || "#fef08a",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        borderRadius: "8px",
        padding: "12px",
        zIndex: 1,
      }}
      className="flex flex-col"
    >
      <div className="flex items-center justify-between mb-2">
        <input
          type="color"
          value={data.color}
          onChange={(e) => data.onColorChange?.(id, e.target.value)}
          className="w-5 h-5 rounded cursor-pointer"
          title="Change color"
        />
        <button
          onClick={() => data.onDelete?.(id)}
          className="p-1 hover:bg-black/10 rounded transition-colors"
          title="Delete note"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>
      </div>
      <textarea
        value={data.text}
        onChange={(e) => data.onTextChange?.(id, e.target.value)}
        placeholder="Type your note here..."
        className="flex-1 bg-transparent resize-none outline-none text-sm text-gray-800 placeholder-gray-500"
        style={{ fontFamily: "Indie Flower, cursive" }}
      />
      <NodeResizer
        isVisible={true}
        lineClassName="resize-line"
        handleClassName="resize-handle"
      />
    </div>
  );
}

const nodeTypes = {
  customBox: CustomBoxNode,
  stickyNote: StickyNoteNode,
};

// Discussion interface
interface Discussion {
  id: string;
  title: string;
  nodes: Node[];
  edges: Edge[];
}

// Initial discussion data
const initialDiscussions: Discussion[] = [
  {
    id: "sabrina-carpenter",
    title: "Sabrina Carpenter Apology",
    nodes: sabrinaDiscussionNodes,
    edges: sabrinaDiscussionEdges,
  },
  {
    id: "ai-art",
    title: "AI Art Debate",
    nodes: aiArtDiscussionNodes,
    edges: aiArtDiscussionEdges,
  },
];

// Calculate node size based on upvotes
function getNodeSize(upvotes: number): { width: number; padding: string; fontSize: string } {
  const minSize = 120;
  const maxSize = 350;
  const minUpvotes = 0;
  const maxUpvotes = 1500;

  const normalized = Math.max(0, Math.min(1, (upvotes - minUpvotes) / (maxUpvotes - minUpvotes)));
  const width = minSize + normalized * (maxSize - minSize);

  const basePadding = 8 + normalized * 12;
  const baseFontSize = 11 + normalized * 5;

  return {
    width,
    padding: `${basePadding}px`,
    fontSize: `${baseFontSize}px`,
  };
}

// Apply styling to nodes
function applyNodeStyles(nodes: Node[], highlightDelta: boolean): Node[] {
  return nodes.map((node) => {
    const isOriginalPost = node.data.isOriginalPost;
    const isDelta = node.data.isDelta && highlightDelta;
    const size = getNodeSize(node.data.upvotes);

    let backgroundColor = "#3b82f6";
    let borderColor = "#2563eb";
    let shadowColor = "rgba(59, 130, 246, 0.3)";
    
    if (isOriginalPost) {
      backgroundColor = "#ea580c";
      borderColor = "#c2410c";
      shadowColor = "rgba(234, 88, 12, 0.3)";
    } else if (isDelta) {
      backgroundColor = "#a855f7";
      borderColor = "#9333ea";
      shadowColor = "rgba(168, 85, 247, 0.3)";
    }

    return {
      ...node,
      style: {
        background: backgroundColor,
        color: "white",
        border: `2px solid ${borderColor}`,
        borderRadius: "12px",
        padding: size.padding,
        width: size.width,
        fontSize: size.fontSize,
        fontWeight: isOriginalPost ? "600" : "500",
        boxShadow: isOriginalPost
          ? `0 10px 25px ${shadowColor}`
          : `0 4px 12px ${shadowColor}`,
      },
    };
  });
}

export default function Visualization() {
  // Discussion management
  const [discussions] = useState<Discussion[]>(initialDiscussions);
  const [selectedDiscussionIds, setSelectedDiscussionIds] = useState<string[]>([initialDiscussions[0].id]);
  const [isDiscussionPanelOpen, setIsDiscussionPanelOpen] = useState(true);
  
  // Get selected discussions and merge their data
  const currentDiscussion = useMemo(() => {
    const selected = discussions.filter((d) => selectedDiscussionIds.includes(d.id));
    if (selected.length === 0) return discussions[0];
    
    const mergedNodes: Node[] = [];
    const mergedEdges: Edge[] = [];
    
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
            // Update parentId to include discussion prefix
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
      id: selectedDiscussionIds.join('-'),
      title: selected.map(d => d.title).join(' & '),
      nodes: mergedNodes,
      edges: mergedEdges,
    };
  }, [discussions, selectedDiscussionIds]);

  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [selectedNode, setSelectedNode] = useState<CustomNodeData | null>(null);
  const [isPanelExpanded, setIsPanelExpanded] = useState(true);
  const [depthFilter, setDepthFilter] = useState<number | null>(null);
  const [upvoteFilter, setUpvoteFilter] = useState<number>(0);
  const [highlightDelta, setHighlightDelta] = useState<boolean>(true);
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);
  const [nodePositions, setNodePositions] = useState<Map<string, { x: number; y: number }>>(new Map());
  const [selectionMode, setSelectionMode] = useState(false);

  interface HistoryState {
    expandedNodes: Set<string>;
    nodePositions: Map<string, { x: number; y: number }>;
    depthFilter: number | null;
    upvoteFilter: number;
    highlightDelta: boolean;
  }

  const [history, setHistory] = useState<HistoryState[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const saveToHistory = useCallback(() => {
    const currentState: HistoryState = {
      expandedNodes: new Set(expandedNodes),
      nodePositions: new Map(nodePositions),
      depthFilter,
      upvoteFilter,
      highlightDelta,
    };

    setHistory((prev) => {
      const newHistory = prev.slice(0, historyIndex + 1);
      newHistory.push(currentState);
      if (newHistory.length > 50) {
        newHistory.shift();
        return newHistory;
      }
      return newHistory;
    });

    setHistoryIndex((prev) => Math.min(prev + 1, 49));
  }, [expandedNodes, nodePositions, depthFilter, upvoteFilter, highlightDelta, historyIndex]);

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
      if ((event.ctrlKey || event.metaKey) && event.key === 'z' && !event.shiftKey) {
        event.preventDefault();
        undo();
      }
      if (((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'z') || 
          ((event.ctrlKey || event.metaKey) && event.key === 'y')) {
        event.preventDefault();
        redo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo]);

  const layoutedNodes = useMemo(() => {
  return layoutTree(
    currentDiscussion.nodes,
    currentDiscussion.edges
    );
  }, [currentDiscussion]);

  const visibleNodes = useMemo(() => {
    const allNodes = layoutedNodes;
    let filtered = allNodes.filter((node) => {
      if (depthFilter !== null) {
        return node.data.depth <= depthFilter;
      }
      
      if (node.data.depth === 0) return true;
      if (!node.data.parentId) return false;
      return expandedNodes.has(node.data.parentId);
    });

    const nodesToKeep = new Set<string>();
    
    filtered.forEach((node) => {
      if (node.data.upvotes >= upvoteFilter) {
        nodesToKeep.add(node.id);
        let currentNode = node;
        while (currentNode.data.parentId) {
          nodesToKeep.add(currentNode.data.parentId);
          currentNode = allNodes.find(n => n.id === currentNode.data.parentId)!;
        }
      }
    });

    filtered.forEach((node) => {
      if (node.data.depth === 0) {
        nodesToKeep.add(node.id);
      }
    });

    filtered = filtered.filter((node) => nodesToKeep.size === 0 || nodesToKeep.has(node.id));

    return applyNodeStyles(filtered, highlightDelta);
  }, [expandedNodes, depthFilter, upvoteFilter, highlightDelta, currentDiscussion]);

  const visibleEdges = useMemo(() => {
    const allNodes = currentDiscussion.nodes;
    const allEdges = currentDiscussion.edges;
    const visibleNodeIds = new Set(visibleNodes.map((n) => n.id));
    
    const deltaPathNodes = new Set<string>();
    if (highlightDelta) {
      allNodes.forEach((node) => {
        if (node.data.isDelta) {
          deltaPathNodes.add(node.id);
          let currentNode = node;
          while (currentNode.data.parentId) {
            deltaPathNodes.add(currentNode.data.parentId);
            currentNode = allNodes.find(n => n.id === currentNode.data.parentId)!;
          }
        }
      });
    }
    
    return allEdges
      .filter((edge) => visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target))
      .map((edge) => {
        const isDeltaPath = highlightDelta && deltaPathNodes.has(edge.target);
        
        return {
          ...edge,
          animated: true,
          style: {
            stroke: isDeltaPath ? "#a855f7" : "#3b82f6",
            strokeWidth: isDeltaPath ? 3 : 2,
          },
        };
      });
  }, [visibleNodes, highlightDelta, currentDiscussion]);

  const [nodes, setNodes, onNodesChange] = useNodesState(visibleNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(visibleEdges);

  const handleNodesChange = useCallback(
    (changes: any) => {
      onNodesChange(changes);
      
      changes.forEach((change: any) => {
        if (change.type === 'position' && change.position) {
          setNodePositions((prev) => {
            const next = new Map(prev);
            next.set(change.id, change.position);
            return next;
          });
        }
      });
    },
    [onNodesChange]
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
        if (!allVisibleNodes.find((n) => n.id === customEl.id)) {
          allVisibleNodes.push(customEl);
        }
      });

      return allVisibleNodes.map((node) => {
        const savedPos = nodePositions.get(node.id);
        const currentPos = currentPosMap.get(node.id);
        
        if (currentPos) {
          return { ...node, position: currentPos };
        } else if (savedPos) {
          return { ...node, position: savedPos };
        } else {
          return node;
        }
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

  const handleNodeClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      if (node.type === "customBox" || node.type === "stickyNote") {
        return;
      }

      if (clickTimeout) {
        clearTimeout(clickTimeout);
        setClickTimeout(null);
        handleNodeDoubleClick(event, node);
      } else {
        const timeout = setTimeout(() => {
          setClickTimeout(null);
          handleNodeSingleClick(event, node);
        }, 250);
        setClickTimeout(timeout);
      }
    },
    [clickTimeout]
  );

  const handleNodeSingleClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      const nodeData = node.data as CustomNodeData;

      if (nodeData.isOriginalPost) {
        saveToHistory();
        setExpandedNodes((prev) => {
          const next = new Set(prev);
          next.add(node.id);
          return next;
        });
      }

      setSelectedNode(nodeData);
    },
    [saveToHistory]
  );

  const handleNodeDoubleClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      const nodeData = node.data as CustomNodeData;

      if (!nodeData.isOriginalPost) {
        saveToHistory();
        setExpandedNodes((prev) => {
          const next = new Set(prev);
          next.add(node.id);
          return next;
        });

        const currentPosition = nodePositions.get(node.id) || node.position;
        const children = currentDiscussion.nodes.filter((n) => n.data.parentId === node.id);
        
        if (children.length > 0) {
          setNodePositions((prev) => {
            const next = new Map(prev);
            children.forEach((child, index) => {
              if (!next.has(child.id)) {
                const offsetX = (index - (children.length - 1) / 2) * 250;
                next.set(child.id, {
                  x: currentPosition.x + offsetX,
                  y: currentPosition.y + 50,
                });
              }
            });
            return next;
          });
        }
      }
    },
    [nodePositions, saveToHistory, currentDiscussion]
  );

  const handleBoxLabelChange = useCallback((id: string, label: string) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, label } }
          : node
      )
    );
  }, [setNodes]);

  const handleBoxColorChange = useCallback((id: string, color: string) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, color } }
          : node
      )
    );
  }, [setNodes]);

  const handleBoxDelete = useCallback((id: string) => {
    setNodes((nds) => nds.filter((node) => node.id !== id));
  }, [setNodes]);

  const handleNoteTextChange = useCallback((id: string, text: string) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, text } }
          : node
      )
    );
  }, [setNodes]);

  const handleNoteColorChange = useCallback((id: string, color: string) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, color } }
          : node
      )
    );
  }, [setNodes]);

  const handleNoteDelete = useCallback((id: string) => {
    setNodes((nds) => nds.filter((node) => node.id !== id));
  }, [setNodes]);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        fitView
        attributionPosition="bottom-right"
        nodeTypes={nodeTypes}
        elevateNodesOnSelect={false}
        selectionOnDrag={selectionMode}
        panOnDrag={!selectionMode}
        selectionMode={selectionMode ? "partial" : undefined}
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#cbd5e1" />
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            if (node.data.isOriginalPost) return "#ea580c";
            return "#3b82f6";
          }}
          maskColor="rgba(0, 0, 0, 0.1)"
        />

        <Panel position="top-left" className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 m-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </Panel>

        <Panel position="top-right" className="m-4 flex flex-col gap-4 items-end">
          {!isPanelExpanded ? (
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={() => setIsPanelExpanded(true)}
              className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-3 hover:bg-white transition-colors"
              title="Show legend"
            >
              <Info className="w-6 h-6 text-orange-600" />
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-md"
            >
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-2xl" style={{ fontFamily: "Crimson Text, serif" }}>
                  Argument Map
                </h2>
                <button
                  onClick={() => setIsPanelExpanded(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  title="Hide legend"
                >
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Click once to view. Double-click to expand replies. Drag to rearrange.
              </p>
              <div className="space-y-2 text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-orange-600"></div>
                  <span className="text-gray-700">Original Post</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-blue-500"></div>
                  <span className="text-gray-700">Comments</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-purple-500"></div>
                  <span className="text-gray-700">Delta (Changed OP's Mind)</span>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-md"
          >
            <h3 className="text-lg mb-4" style={{ fontFamily: "Crimson Text, serif" }}>
              Filters
            </h3>

            <div className="space-y-4 text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
              <div>
                <label className="block text-gray-700 mb-2">Comment Depth</label>
                <select
                  value={depthFilter ?? "all"}
                  onChange={(e) => {
                    saveToHistory();
                    setDepthFilter(e.target.value === "all" ? null : Number(e.target.value));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">All levels</option>
                  <option value="1">First-level only</option>
                  <option value="2">Up to 2nd level</option>
                  <option value="3">Up to 3rd level</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Minimum Upvotes: {upvoteFilter}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1500"
                  step="50"
                  value={upvoteFilter}
                  onMouseDown={() => saveToHistory()}
                  onChange={(e) => setUpvoteFilter(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Delta Show</label>
                <input
                  type="checkbox"
                  checked={highlightDelta}
                  onChange={(e) => {
                    saveToHistory();
                    setHighlightDelta(e.target.checked);
                  }}
                  className="mr-2"
                />
              </div>

              <button
                onClick={() => {
                  saveToHistory();
                  setDepthFilter(null);
                  setUpvoteFilter(0);
                  setHighlightDelta(true);
                }}
                className="w-full px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </motion.div>
        </Panel>

        <Panel position="bottom-center" className="m-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 flex gap-2"
          >
            <button
              onClick={() => setSelectionMode(!selectionMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                selectionMode
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              style={{ fontFamily: "DM Sans, sans-serif" }}
              title="Toggle selection mode to select and move multiple nodes"
            >
              <MousePointer2 className="w-4 h-4" />
              <span>{selectionMode ? "Selection Mode ON" : "Select Multiple"}</span>
            </button>
            <button
              onClick={() => {
                const id = `box-${Date.now()}`;
                const newNode: Node = {
                  id,
                  type: "customBox",
                  position: { x: 0, y: 0 },
                  data: {
                    label: "New Category",
                    color: "#93c5fd",
                    width: 400,
                    height: 300,
                    onLabelChange: handleBoxLabelChange,
                    onColorChange: handleBoxColorChange,
                    onDelete: handleBoxDelete,
                  },
                };
                setNodes((nds) => [...nds, newNode]);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <Square className="w-4 h-4" />
              <span>Add Box</span>
            </button>
            <button
              onClick={() => {
                const id = `note-${Date.now()}`;
                const newNode: Node = {
                  id,
                  type: "stickyNote",
                  position: { x: 0, y: 0 },
                  data: {
                    text: "Type here...",
                    color: "#fef08a",
                    width: 200,
                    height: 200,
                    onTextChange: handleNoteTextChange,
                    onColorChange: handleNoteColorChange,
                    onDelete: handleNoteDelete,
                  },
                };
                setNodes((nds) => [...nds, newNode]);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <StickyNote className="w-4 h-4" />
              <span>Add Sticky Note</span>
            </button>
          </motion.div>
        </Panel>
      </ReactFlow>

      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
        {!isDiscussionPanelOpen ? (
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => setIsDiscussionPanelOpen(true)}
            className="bg-white/90 backdrop-blur-sm rounded-r-lg shadow-lg p-3 hover:bg-white transition-colors"
            title="Show discussions"
          >
            <List className="w-6 h-6 text-orange-600" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 w-80 max-h-[70vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800" style={{ fontFamily: "Crimson Text, serif" }}>
                Arguments
              </h3>
              <button
                onClick={() => setIsDiscussionPanelOpen(false)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
                title="Hide panel"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-2">
              {discussions.map((discussion) => (
                <label
                  key={discussion.id}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedDiscussionIds.includes(discussion.id)
                      ? "bg-orange-100 border-2 border-orange-600"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedDiscussionIds.includes(discussion.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedDiscussionIds((prev) => [...prev, discussion.id]);
                      } else {
                        setSelectedDiscussionIds((prev) => prev.filter((id) => id !== discussion.id));
                      }
                      setExpandedNodes(new Set());
                      setNodePositions(new Map());
                      setSelectedNode(null);
                    }}
                    className="w-4 h-4 text-orange-600 rounded focus:ring-2 focus:ring-orange-500"
                  />
                  <span
                    className={`text-sm flex-1 ${
                      selectedDiscussionIds.includes(discussion.id) ? "font-semibold text-orange-800" : "text-gray-700"
                    }`}
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {discussion.title}
                  </span>
                </label>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedNode && (
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50"
            style={{ pointerEvents: "auto" }}
          >
            <Resizable
              defaultSize={{
                width: 600,
                height: 400,
              }}
              minWidth={400}
              minHeight={300}
              maxWidth={1000}
              maxHeight={800}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50 cursor-move">
                  <div className="flex items-center gap-2">
                    <div
                      className={`px-4 py-2 rounded-full ${
                        selectedNode.isOriginalPost
                          ? "bg-orange-100 text-orange-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      <span className="text-xs tracking-wide" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        {selectedNode.isOriginalPost ? "ORIGINAL POST" : "COMMENT"} · {selectedNode.upvotes} upvotes
                      </span>
                    </div>
                    {selectedNode.isDelta && (
                      <div className="px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                        <span className="text-xs font-semibold tracking-wide" style={{ fontFamily: "DM Sans, sans-serif" }}>
                          Δ CHANGED OP'S MIND
                        </span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                  <h3
                    className="text-3xl mb-4 text-gray-900"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    {selectedNode.label}
                  </h3>

                  <p
                    className="text-lg text-gray-700 leading-relaxed"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {selectedNode.fullText}
                  </p>
                </div>

                <div className="p-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-xs text-gray-500" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    Drag header to move · Drag corners to resize
                  </p>
                </div>
              </div>
            </Resizable>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}