import { Discussion } from "../types/discussion";
import { sabrinaDiscussionNodes, sabrinaDiscussionEdges } from "../app/data/sabrina-carpenter-discussion";
import { aiArtDiscussionNodes, aiArtDiscussionEdges } from "../app/data/ai-art-discussion";
import { aiJobsDiscussionNodes, aiJobsDiscussionEdges } from "../app/data/ai-jobs-discussion";
import { aiIndustryDiscussionNodes, aiIndustryDiscussionEdges } from "../app/data/ai-industry-discussion";

export function getDiscussionFixtures(): Discussion[] {
  return [
    {
      id: "sabrina-carpenter",
      title: "AI Tech Jobs and Jevons Paradox",
      nodes: sabrinaDiscussionNodes,
      edges: sabrinaDiscussionEdges,
    },
    {
      id: "ai-art",
      title: "AI Art and Artistic Legitimacy",
      nodes: aiArtDiscussionNodes,
      edges: aiArtDiscussionEdges,
    },
    {
      id: "ai-jobs",
      title: "AI Will Not Create More Jobs Than It Destroys",
      nodes: aiJobsDiscussionNodes,
      edges: aiJobsDiscussionEdges,
    },
    {
      id: "ai-industry",
      title: "AI Business-Model Wall and Job Comeback",
      nodes: aiIndustryDiscussionNodes,
      edges: aiIndustryDiscussionEdges,
    },
  ];
}
