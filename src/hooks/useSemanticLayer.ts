import { useMemo } from "react";
import { Discussion, DiscussionEdge, DiscussionNode } from "../types/discussion";
import { getSemanticManifestForDiscussion, type SemanticPillarDefinition } from "../data/semanticManifest";

interface UseSemanticLayerParams {
  discussion: Discussion;
  enabled: boolean;
}

function buildEdgeId(source: string, target: string) {
  return `semantic-edge-${source}-${target}`;
}

function buildSummaryNode(
  pillar: SemanticPillarDefinition,
  discussionId: string,
  rootNode: DiscussionNode,
  memberNodes: DiscussionNode[]
): DiscussionNode {
  const summaryId = `summary-${discussionId}-${pillar.id}`;
  const totalUpvotes = memberNodes.reduce((sum, node) => sum + node.data.upvotes, 0);

  return {
    id: summaryId,
    type: "default",
    position: rootNode.position,
    data: {
      label: `AI Summary: ${pillar.title}`,
      fullText: `${pillar.summary}\n\nRepresents ${memberNodes.length} top-level comments with a combined ${totalUpvotes} upvotes.`,
      isOriginalPost: false,
      upvotes: totalUpvotes,
      depth: 1,
      parentId: rootNode.id,
      discussionTitle: rootNode.data.discussionTitle,
      sourceDiscussionId: discussionId,
      isSemanticSummary: true,
      semanticPillarId: pillar.id,
      representedNodeIds: memberNodes.map((node) => node.id),
      representedCount: memberNodes.length,
    },
  };
}

function transformDiscussion(discussion: Discussion): Discussion {
  const nodeById = new Map(discussion.nodes.map((node) => [node.id, node]));
  const rootIdsByDiscussion = new Map<string, string>();

  discussion.nodes.forEach((node) => {
    if (node.data.isOriginalPost && node.data.sourceDiscussionId) {
      rootIdsByDiscussion.set(node.data.sourceDiscussionId, node.id);
    }
  });

  const manualSummaryNodes: DiscussionNode[] = [];
  const summaryIdByTopLevelId = new Map<string, string>();
  const topLevelIdsToShift = new Set<string>();

  rootIdsByDiscussion.forEach((rootId, discussionId) => {
    const manifest = getSemanticManifestForDiscussion(discussionId);
    if (!manifest) {
      return;
    }

    const rootNode = nodeById.get(rootId);
    if (!rootNode) {
      return;
    }

    manifest.pillars.forEach((pillar) => {
      const memberNodes = pillar.memberNodeIds
        .map((sourceNodeId) =>
          discussion.nodes.find(
            (node) =>
              node.data.sourceDiscussionId === discussionId &&
              node.data.sourceNodeId === sourceNodeId &&
              node.data.depth === 1
          )
        )
        .filter((node): node is DiscussionNode => Boolean(node));

      if (memberNodes.length === 0) {
        return;
      }

      const summaryNode = buildSummaryNode(pillar, discussionId, rootNode, memberNodes);
      manualSummaryNodes.push(summaryNode);

      memberNodes.forEach((node) => {
        summaryIdByTopLevelId.set(node.id, summaryNode.id);
        topLevelIdsToShift.add(node.id);
      });
    });

    const ungroupedTopLevelNodes = discussion.nodes.filter(
      (node) =>
        node.data.sourceDiscussionId === discussionId &&
        node.data.depth === 1 &&
        node.data.parentId === rootId &&
        !summaryIdByTopLevelId.has(node.id)
    );

    if (ungroupedTopLevelNodes.length > 0) {
      const fallbackPillar: SemanticPillarDefinition = {
        id: "additional-voices",
        title: "Additional Voices",
        summary:
          "These comments were not manually grouped into a primary pillar, so they remain collected here to preserve traceability without polluting the top-level semantic view.",
        memberNodeIds: ungroupedTopLevelNodes
          .map((node) => node.data.sourceNodeId)
          .filter((nodeId): nodeId is string => Boolean(nodeId)),
      };

      const fallbackSummaryNode = buildSummaryNode(
        fallbackPillar,
        discussionId,
        rootNode,
        ungroupedTopLevelNodes
      );
      manualSummaryNodes.push(fallbackSummaryNode);

      ungroupedTopLevelNodes.forEach((node) => {
        summaryIdByTopLevelId.set(node.id, fallbackSummaryNode.id);
        topLevelIdsToShift.add(node.id);
      });
    }
  });

  if (manualSummaryNodes.length === 0) {
    return discussion;
  }

  const topLevelAncestorCache = new Map<string, string | null>();

  const findShiftedTopLevelAncestor = (node: DiscussionNode): string | null => {
    if (topLevelAncestorCache.has(node.id)) {
      return topLevelAncestorCache.get(node.id) ?? null;
    }

    if (topLevelIdsToShift.has(node.id)) {
      topLevelAncestorCache.set(node.id, node.id);
      return node.id;
    }

    let currentParentId = node.data.parentId;
    const visited = new Set<string>();

    while (currentParentId && !visited.has(currentParentId)) {
      visited.add(currentParentId);

      if (topLevelIdsToShift.has(currentParentId)) {
        topLevelAncestorCache.set(node.id, currentParentId);
        return currentParentId;
      }

      currentParentId = nodeById.get(currentParentId)?.data.parentId ?? null;
    }

    topLevelAncestorCache.set(node.id, null);
    return null;
  };

  const transformedNodes = discussion.nodes.map((node) => {
    const summaryParentId = summaryIdByTopLevelId.get(node.id);
    if (summaryParentId) {
      return {
        ...node,
        data: {
          ...node.data,
          parentId: summaryParentId,
          depth: 2,
        },
      };
    }

    const shiftedAncestorId = findShiftedTopLevelAncestor(node);
    if (!shiftedAncestorId || node.data.depth === 0) {
      return node;
    }

    return {
      ...node,
      data: {
        ...node.data,
        depth: node.data.depth + 1,
      },
    };
  });

  const combinedNodes = [...transformedNodes, ...manualSummaryNodes];
  const generatedEdges: DiscussionEdge[] = combinedNodes
    .filter((node) => node.data.parentId)
    .map((node) => ({
      id: buildEdgeId(node.data.parentId!, node.id),
      source: node.data.parentId!,
      target: node.id,
    }));

  return {
    ...discussion,
    nodes: combinedNodes,
    edges: generatedEdges,
  };
}

export function useSemanticLayer({ discussion, enabled }: UseSemanticLayerParams) {
  return useMemo(() => {
    if (!enabled) {
      return discussion;
    }

    return transformDiscussion(discussion);
  }, [discussion, enabled]);
}
