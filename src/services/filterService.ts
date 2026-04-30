import { DiscussionNode, DiscussionEdge, DiscussionNodeData } from "../types/discussion";

interface GetVisibleNodesParams {
  nodes: DiscussionNode[];
  edges: DiscussionEdge[];
  depthFilter: number | null;
  upvotePercent: number;
  highlightDelta: boolean;
  expandedNodeIds: Set<string>;
}

function getNodeSize(upvotes: number, isOriginalPost: boolean) {
  if (isOriginalPost) {
    return {
      width: 200,
      height: 200,
      padding: "24px",
      fontSize: "20px",
    };
  }

  const minSize = 120;
  const maxSize = 350;
  const normalized = Math.max(0, Math.min(1, upvotes / 1500));
  const width = Math.min(maxSize, minSize + 2 * upvotes);
  const height = width;
  const basePadding = 8 + normalized * 12;
  const baseFontSize = 11 + (width / 320) * 5;

  return {
    width,
    height,
    padding: `${basePadding}px`,
    fontSize: `${baseFontSize}px`,
  };
}

function styleDiscussionNodes(
  nodes: DiscussionNode[],
  leafNodeIds: Set<string>,
  highlightDelta: boolean
): DiscussionNode[] {
  return nodes.map((node) => {
    const isOriginalPost = node.data.isOriginalPost;
    const isDelta = node.data.isDelta && highlightDelta;
    const isVisibleLeaf = leafNodeIds.has(node.id) && node.data.depth > 0;
    const size = getNodeSize(node.data.upvotes, isOriginalPost);

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

    const borderStyle = isVisibleLeaf ? "3px solid #000" : `2px solid ${borderColor}`;

    return {
      ...node,
      style: {
        background: backgroundColor,
        color: "white",
        border: borderStyle,
        borderRadius: "12px",
        padding: size.padding,
        width: size.width,
        height: size.height,
        fontSize: size.fontSize,
        fontWeight: isOriginalPost ? "600" : "500",
        boxShadow: isOriginalPost
          ? `0 10px 25px ${shadowColor}`
          : `0 4px 12px ${shadowColor}`,
      },
    };
  });
}

export function getVisibleDiscussionNodes({
  nodes,
  edges,
  depthFilter,
  upvotePercent,
  highlightDelta,
  expandedNodeIds,
}: GetVisibleNodesParams): DiscussionNode[] {
  const allNodes = nodes;
  const opNode = allNodes.find((node) => node.data.isOriginalPost);
  const opUpvotes = opNode ? opNode.data.upvotes : 100;

  let filtered = allNodes.filter((node) => {
    if (depthFilter !== null) {
      return node.data.depth <= depthFilter;
    }

    if (node.data.depth === 0) return true;
    if (!node.data.parentId) return false;
    return expandedNodeIds.has(node.data.parentId);
  });

  const nodesToKeep = new Set<string>();
  const requiredUpvotes = (upvotePercent / 100) * opUpvotes;

  filtered.forEach((node) => {
    if (node.data.upvotes >= requiredUpvotes) {
      nodesToKeep.add(node.id);
      let currentNode = node;
      while (currentNode.data.parentId) {
        nodesToKeep.add(currentNode.data.parentId);
        const parentNode = allNodes.find((n) => n.id === currentNode.data.parentId);
        if (!parentNode) break;
        currentNode = parentNode;
      }
    }
  });

  filtered.forEach((node) => {
    if (node.data.depth === 0) {
      nodesToKeep.add(node.id);
    }
  });

  filtered = filtered.filter((node) => nodesToKeep.size === 0 || nodesToKeep.has(node.id));

  const visibleNodeIds = new Set(filtered.map((node) => node.id));
  const outgoingEdgesBySource = new Map<string, DiscussionEdge[]>();

  edges.forEach((edge) => {
    const outgoing = outgoingEdgesBySource.get(edge.source) ?? [];
    outgoing.push(edge);
    outgoingEdgesBySource.set(edge.source, outgoing);
  });

  const leafNodeIds = new Set<string>();
  filtered.forEach((node) => {
    const outgoing = outgoingEdgesBySource.get(node.id) ?? [];
    const hasVisibleChild = outgoing.some((edge) => visibleNodeIds.has(edge.target));
    if (!hasVisibleChild && node.data.depth > 0) {
      leafNodeIds.add(node.id);
    }
  });

  return styleDiscussionNodes(filtered, leafNodeIds, highlightDelta);
}

interface GetVisibleEdgesParams {
  nodes: DiscussionNode[];
  edges: DiscussionEdge[];
  visibleNodes: DiscussionNode[];
  highlightDelta: boolean;
}

export function getVisibleDiscussionEdges({
  nodes,
  edges,
  visibleNodes,
  highlightDelta,
}: GetVisibleEdgesParams): DiscussionEdge[] {
  const visibleNodeIds = new Set(visibleNodes.map((node) => node.id));
  const deltaPathNodes = new Set<string>();

  if (highlightDelta) {
    nodes.forEach((node) => {
      if (node.data.isDelta) {
        deltaPathNodes.add(node.id);
        let currentNode = node;
        while (currentNode.data.parentId) {
          deltaPathNodes.add(currentNode.data.parentId);
          const parentNode = nodes.find((n) => n.id === currentNode.data.parentId);
          if (!parentNode) break;
          currentNode = parentNode;
        }
      }
    });
  }

  return edges
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
}
