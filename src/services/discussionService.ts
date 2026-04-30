import { Discussion } from "../types/discussion";
import { sabrinaDiscussionNodes, sabrinaDiscussionEdges } from "../app/data/sabrina-carpenter-discussion";
import { aiArtDiscussionNodes, aiArtDiscussionEdges } from "../app/data/ai-art-discussion";

export function getDiscussionFixtures(): Discussion[] {
  return [
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
}
