import { Node, Edge } from "reactflow";

export interface DiscussionNodeData {
  label: string;
  fullText: string;
  isOriginalPost: boolean;
  upvotes: number;
  depth: number;
  parentId: string | null;
  isDelta?: boolean;
  discussionTitle?: string;
}

export type DiscussionNode = Node<DiscussionNodeData>;
export type DiscussionEdge = Edge;

export interface Discussion {
  id: string;
  title: string;
  nodes: DiscussionNode[];
  edges: DiscussionEdge[];
}
