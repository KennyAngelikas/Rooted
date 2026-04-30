export interface SemanticPillarDefinition {
  id: string;
  title: string;
  summary: string;
  memberNodeIds: string[];
}

export interface SemanticDiscussionManifest {
  discussionId: string;
  pillars: SemanticPillarDefinition[];
}

export const semanticManifest: SemanticDiscussionManifest[] = [
  {
    discussionId: "sabrina-carpenter",
    pillars: [
      {
        id: "transition-shock",
        title: "AI May Grow Output While Still Creating a Painful Jobs Gap",
        summary:
          "Several replies accept the long-run Jevons framing but argue the near-term transition still matters: firms can shrink existing teams immediately, workers can be stranded for years, and the labor market may reward only a narrower class of roles.",
        memberNodeIds: ["oilysqx", "oim7ba0", "oinbsue", "oilsm4a"],
      },
      {
        id: "demand-elasticity",
        title: "The Core Assumption Is Unproven Demand Elasticity",
        summary:
          "A second cluster questions whether software demand can keep expanding forever. These comments focus on saturation, limits on time and consumption, and whether Jevons even applies when the cheaper input is labor displacement rather than a broader market expansion.",
        memberNodeIds: ["oilz8j3", "oilua8h", "oilvtns", "oiptb1r", "oimzab1"],
      },
      {
        id: "automation-substitution",
        title: "If AI Can Do the Work, More Software Does Not Mean More Human Jobs",
        summary:
          "This is the dominant anti-thesis: the missing link is human labor. Even if total software output increases, commenters argue that autonomous or near-autonomous systems could capture the marginal work themselves, bending growth away from people and toward models.",
        memberNodeIds: [
          "oilwgy9",
          "oils12i",
          "oilxjli",
          "oim0cv9",
          "oilwkyq",
          "oiq4cp4",
          "oilvald",
          "oilx80e",
          "oim7r1o",
          "oilsssr",
          "oilsjwn",
          "oiq8ra4",
          "oiluher",
          "oilw6qx",
        ],
      },
      {
        id: "labor-market-composition",
        title: "The Jobs That Remain Could Be Worse, Cheaper, or More Unequal",
        summary:
          "Another theme shifts the debate from job count to job quality. These replies argue the likely outcome is wage compression, offshoring, concentration into elite roles, and employers using AI to strengthen their bargaining power rather than broaden prosperity.",
        memberNodeIds: ["oiltj50", "oipeuyq", "oirjw1h", "oit1qtz"],
      },
      {
        id: "historical-political",
        title: "History Suggests Efficiency Gains Can Concentrate Power",
        summary:
          "A smaller but distinct group reaches for historical analogy and political economy. Their argument is that automation can expand output while still consolidating wealth, hollowing out local expertise, and reproducing old hierarchies in a new technical form.",
        memberNodeIds: ["oiml8t0", "oinxnvd", "oim6vpq"],
      },
      {
        id: "fringe-and-meta",
        title: "Meta Reactions, Skepticism, and Peripheral Takes",
        summary:
          "This bucket captures low-signal or tangential responses that still shape the atmosphere of the thread: sarcasm, meta commentary, reminders, and brief objections that do not develop into one of the main substantive pillars.",
        memberNodeIds: ["oilzvyv", "oim1dbx", "oiov68m", "oimj7jk"],
      },
    ],
  },
  {
    discussionId: "ai-jobs",
    pillars: [
      {
        id: "post-work-transition",
        title: "A Post-Work Future Is Possible, but the Transition Still Matters",
        summary:
          "This pillar reframes the debate away from simple job counts. The argument is that even if society eventually moves beyond traditional employment, the real policy and human problem is the painful gap between automation-led displacement and whatever social system replaces wages as the default survival mechanism.",
        memberNodeIds: ["o9onlag"],
      },
      {
        id: "current-ai-limits",
        title: "Current AI Is Overstated and Still Constrained by Real Technical Limits",
        summary:
          "A major counterargument is that present-day AI is being oversold. These comments stress plateau risks, data bottlenecks, hallucinations, robotics limits, and the gap between CEO hype and what deployed systems can reliably replace today.",
        memberNodeIds: ["o9oogkk", "o9pnbcr"],
      },
      {
        id: "demand-and-jevons",
        title: "Demand Growth and Jevons Effects Could Still Create More Work Around AI",
        summary:
          "Another cluster argues the historical pattern is not dead yet. If AI makes software and other knowledge work cheaper, it can increase demand for adjacent labor, new startups, operations, and complementary roles even if some existing jobs shrink.",
        memberNodeIds: ["o9p3il5", "o9p108q"],
      },
      {
        id: "coding-is-special",
        title: "Software May Be an Early Target, but It Does Not Generalize Cleanly to Every Job",
        summary:
          "These replies push back on extrapolating from coding alone. The fact that software is highly legible, testable, and tool-friendly may make it an unusually favorable domain for automation without proving that all white-collar or manual work follows the same curve.",
        memberNodeIds: ["o9r98tl"],
      },
    ],
  },
  {
    discussionId: "ai-industry",
    pillars: [
      {
        id: "inference-economics",
        title: "Inference Economics Are Improving Faster Than the Post Assumes",
        summary:
          "This pillar argues the post bundles together training burn and serving economics too loosely. Commenters emphasize that inference costs keep falling, product usefulness is compounding, and AI can remain commercially viable even if frontier training becomes more selective.",
        memberNodeIds: ["oatmp94", "oatqup0", "oaswdwq"],
      },
      {
        id: "enterprise-demand",
        title: "Enterprise and Specialized Demand Can Sustain the Market",
        summary:
          "Several replies argue consumer subscriptions are not the main story. Enterprise automation, scientific workloads, and niche high-value use cases can justify substantial spend even if broad consumer pricing remains unsettled.",
        memberNodeIds: ["oask3s1", "oasctoo", "oasesa4"],
      },
      {
        id: "bubble-not-collapse",
        title: "A Bubble Could Hurt Specific Firms Without Resetting the Technology",
        summary:
          "This group separates company failure from technological disappearance. Even if some labs overextend, diversified incumbents, secondary buyers, and open infrastructure can absorb the assets and keep deployment moving forward.",
        memberNodeIds: ["oase08b", "oatyakn"],
      },
      {
        id: "moviepass-analogy",
        title: "The MoviePass Analogy Misses AI's Pricing Power and Investor Logic",
        summary:
          "These comments challenge the underlying analogy itself. The case is that AI already delivers real value, can likely command higher prices, and still fits the long-horizon investor logic that has historically funded unprofitable but transformative platforms.",
        memberNodeIds: ["oasug58", "oasfmm1"],
      },
    ],
  },
];

export function getSemanticManifestForDiscussion(discussionId: string) {
  return semanticManifest.find((manifest) => manifest.discussionId === discussionId);
}
