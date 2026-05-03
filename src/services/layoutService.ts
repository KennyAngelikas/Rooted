import { Node, Edge } from "reactflow";

export function layoutTree(nodes: Node[], _edges: Edge[]): Node[] {
  if (nodes.length === 0) {
    return nodes;
  }

  const centerX = 600;
  const centerY = 400;
  const radiusStep = 350;

  const nodeById = new Map<string, Node>(nodes.map((node) => [node.id, node]));
  const rootPositions = new Map<string, { x: number; y: number }>();

  nodes.forEach((node) => {
    if (node.data.isOriginalPost && node.position) {
      rootPositions.set(node.id, node.position as { x: number; y: number });
    }
  });

  const findRootId = (node: Node): string | undefined => {
    if (node.data.isOriginalPost) {
      return node.id;
    }

    let current: Node | undefined = node;
    const visited = new Set<string>();

    while (current && !current.data.isOriginalPost && current.data.parentId && !visited.has(current.id)) {
      visited.add(current.id);
      current = nodeById.get(current.data.parentId);
    }

    return current?.data.isOriginalPost ? current.id : undefined;
  };

  const nodesByRootAndDepth = new Map<string, Map<number, Node[]>>();
  const rootLookup = new Map<string, string | undefined>();

  nodes.forEach((node) => {
    const rootId = findRootId(node);
    rootLookup.set(node.id, rootId);

    if (!rootId) {
      return;
    }

    const depth = node.data.depth ?? 0;
    const depthMap = nodesByRootAndDepth.get(rootId) ?? new Map<number, Node[]>();
    if (!nodesByRootAndDepth.has(rootId)) {
      nodesByRootAndDepth.set(rootId, depthMap);
    }

    const nodesAtDepth = depthMap.get(depth) ?? [];
    nodesAtDepth.push(node);
    depthMap.set(depth, nodesAtDepth);
  });

  return nodes.map((node) => {
    if (node.data.isOriginalPost) {
      return {
        ...node,
        position: node.position ?? { x: centerX, y: centerY },
      };
    }

    const rootId = rootLookup.get(node.id);
    if (!rootId) {
      return node;
    }

    const rootPosition = rootPositions.get(rootId) ?? { x: centerX, y: centerY };
    const depth = node.data.depth ?? 0;
    const depthMap = nodesByRootAndDepth.get(rootId);
    const nodesAtDepth = depthMap?.get(depth) ?? [];

    if (nodesAtDepth.length === 0) {
      return { ...node, position: node.position ?? rootPosition };
    }

    const index = nodesAtDepth.findIndex((candidate) => candidate.id === node.id);
    const angle = (2 * Math.PI * index) / nodesAtDepth.length;
    const radius = depth * radiusStep;

    return {
      ...node,
      position: {
        x: rootPosition.x + radius * Math.cos(angle),
        y: rootPosition.y + radius * Math.sin(angle),
      },
    };
  });
}
