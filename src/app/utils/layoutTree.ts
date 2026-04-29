import { Node, Edge } from "reactflow";

export function layoutTree(nodes: Node[], _edges: Edge[], centerX=600): Node[] {
  const rootNode = nodes.find((node) => node.data.isOriginalPost);

  if (!rootNode) {
    return nodes;
  }

  const centerY = 400;
  const radiusStep = 350;

  const nodesByDepth = new Map<number, Node[]>();

  nodes.forEach((node) => {
    const depth = node.data.depth ?? 0;

    if (!nodesByDepth.has(depth)) {
      nodesByDepth.set(depth, []);
    }

    nodesByDepth.get(depth)!.push(node);
  });

  return nodes.map((node) => {
    const depth = node.data.depth ?? 0;

    if (node.data.isOriginalPost) {
      return {
        ...node,
        position: {
          x: centerX,
          y: centerY,
        },
      };
    }

    const nodesAtDepth = nodesByDepth.get(depth)!;
    const index = nodesAtDepth.findIndex((n) => n.id === node.id);

    const angle = (2 * Math.PI * index) / nodesAtDepth.length;
    const radius = depth * radiusStep;

    return {
      ...node,
      position: {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      },
    };
  });
} 