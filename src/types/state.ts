export interface FilterState {
  depth: number | null;
  upvotePercent: number;
  highlightDelta: boolean;
}

export interface NodePositionMap {
  [nodeId: string]: {
    x: number;
    y: number;
  };
}

export interface BoardState {
  selectedDiscussionIds: string[];
  expandedNodeIds: string[];
  selectedNodeId: string | null;
  filters: FilterState;
  nodePositions: NodePositionMap;
}
