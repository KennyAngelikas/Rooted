import { Node, Edge } from "reactflow";

export const aiIndustryDiscussionNodes: Node[] = [
  {
    id: "1rvgi2j",
    type: "custom",
    data: {
      label: "CMV: The AI industry will hit a business-model wall, downsize, and some displaced jobs will come back",
      fullText: `Moviepass raised $240M of funding with the plan to try to become profitable before their runway ended. They took us all out to the movies for two years, on the investors' dime, and then ran out of capital and shut down.

In February 2026, OpenAI finished raising $110B. They're making around $13B every year, and spending something in the neighborhood of $80B per year.

If I use ChatGPT, even the paid version, I am costing the company more than I am making them. I like to imagine that they're taking me out to the movies.

OpenAI will run out of funding in 2027. The operating costs won't shrink by then. They'll likely grow because of scalability. With that in mind, I doubt anyone will want to pony up another $110B. What then? OpenAI will need to raise prices beyond what most people are willing to pay. The company will be forced to massively downsize.

AI will become a highly specialized, expensive product, reserved only for work that people can't do and for companies that can afford the now-exorbitant costs. Companies will begrudgingly have to start hiring again for the positions that they cut. The education and job market will eventually normalize.

Edit: OP later awarded deltas and explicitly revised several assumptions, especially around inference costs, training vs. serving, and the idea that AI-replaced jobs would simply come back once the funding bubble breaks.`,
      isOriginalPost: true,
      upvotes: 445,
      depth: 0,
      parentId: null,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "oatmp94",
    type: "custom",
    data: {
      label: "Revenue is higher than you think and inference costs are falling fast",
      fullText: `A few things:

1. You have the ARR of OpenAI wrong, it is close to $20B now, and Anthropic is getting there too.
2. Companies like Anthropic are making a real case that they can become profitable over the next two years.
3. Inference costs drop very quickly, roughly an order of magnitude year over year in some measurements, while task-level performance keeps improving.
4. Open source models are only months behind state of the art and some now run on phones.
5. Capabilities have exploded and are already affecting high-signal domains like math and science.
6. Continuous-learning style improvements are likely to keep compounding.

The core claim is that this technology is not close to going away, even if the specific leaders change.`,
      isOriginalPost: false,
      upvotes: 107,
      depth: 1,
      parentId: "1rvgi2j",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "oask3s1",
    type: "custom",
    data: {
      label: "Enterprise agentic adoption matters more than consumer subscriptions",
      fullText: `Your scope is too myopic. Enterprise organizations are investing heavily in agentic systems that are ramping up over the next few years with no looking back. Many are first focusing on optimizing data and ops infrastructure for multi-system agent ecosystems, with the goal of transforming business processes and development. This is where the profits and innovation will accelerate, not consumer use cases. The next 2-4 years is when the first real impacts start taking place, not a reset to a previous state.`,
      isOriginalPost: false,
      upvotes: 95,
      depth: 1,
      parentId: "1rvgi2j",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "oase08b",
    type: "custom",
    data: {
      label: "Even if OpenAI stumbles, the broader AI ecosystem survives",
      fullText: `The AI industry is far beyond OpenAI and Google. OpenAI itself may fail if it is overextended, but that would not mean the technology goes away. The knowledge is out there, hardware keeps improving, and most major "AI companies" are really diversified tech firms that can absorb losses. Open-source foundations and permissive models also mean smaller groups can keep building products even if high-profile frontier labs contract.`,
      isOriginalPost: false,
      upvotes: 38,
      depth: 1,
      parentId: "1rvgi2j",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "oatqup0",
    type: "custom",
    data: {
      label: "Efficiency gains and embodied AI make the product more useful over time",
      fullText: `The strongest counterpoint is efficiency. In coding and adjacent technical work, frontier models have gone from brittle assistants to systems that can solve niche, high-difficulty tasks quickly. If verification improves in real-world domains through robotics and better feedback loops, usefulness rises even without a huge jump in raw compute. Combine that with algorithmic improvements and reduced power consumption, and the product can become cheaper and more valuable even if today's hardware trajectory slows.`,
      isOriginalPost: false,
      upvotes: 13,
      depth: 1,
      parentId: "1rvgi2j",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "oasctoo",
    type: "custom",
    data: {
      label: "There are valuable scientific and specialized use cases beyond hype",
      fullText: `AI has uses beyond raising capital. Like cancer and folding proteins.

The brief point here is that even if a consumer-chat bubble pops, specialized domains still extract enough value that the technology would remain economically relevant.`,
      isOriginalPost: false,
      upvotes: 6,
      depth: 1,
      parentId: "1rvgi2j",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "oasesa4",
    type: "custom",
    data: {
      label: "Infrastructure stays valuable even if one company fails",
      fullText: `This prediction doesn't make sense because demand for AI exists at prices materially above the energy and low-level maintenance cost of serving models. OpenAI's losses come from more than token generation alone: training, free product tiers, and broader operating spend matter too. If a company fails, others can buy the infrastructure and keep inference running. That means datacenters do not just rot, and jobs displaced by existing AI capacity do not automatically come back.`,
      isOriginalPost: false,
      upvotes: 7,
      depth: 1,
      parentId: "1rvgi2j",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "oaswdwq",
    type: "custom",
    data: {
      label: "Training may be bubbly, but inference can still be sustainable",
      fullText: `The cost structure matters. Training may absolutely be a bubble that cannot continue forever, but inference, actually serving users and APIs, may already be near break-even or profitable. Once companies hit capital limits, they can cut back on frontier training while still operating and selling inference at close to current prices. That means we should expect a slowdown in training intensity before we expect a collapse in AI-generated output.`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 1,
      parentId: "1rvgi2j",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "oasug58",
    type: "custom",
    data: {
      label: "The MoviePass analogy breaks because AI is a real product with pricing power",
      fullText: `MoviePass failed because the underlying unit economics never made sense. AI is different: it is an actual product that users and companies already find valuable, and many would likely pay much more than they do today. This looks more like a standard tech loss-leadership strategy, build adoption first, then adjust pricing as costs fall and workflows harden. The hard questions are timing and pricing strategy, not whether there is any business model at all.`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 1,
      parentId: "1rvgi2j",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "oasfmm1",
    type: "custom",
    data: {
      label: "Unprofitability alone does not stop investors from funding a paradigm shift",
      fullText: `This is plausible, but it skips a weak link in the argument: why assume investors stop funding AI just because it is unprofitable in the near term? MoviePass died because there was no version of that business model that worked. Investors in AI see something closer to Amazon, Uber, Spotify, or the post-dotcom environment: lots of pain, lots of failures, but also the potential creation of extremely durable winners. That makes ongoing funding more plausible than the post suggests.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1rvgi2j",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "oatyakn",
    type: "custom",
    data: {
      label: "Open-source models weaken the idea that a capital crunch resets the market",
      fullText: `Your analysis leaves out open-source AI models:

- Only slightly behind frontier models
- Free to use now, basically
- No huge centralized capex required for every user
- Still capable of affecting jobs

The point is that even if OpenAI runs into a funding wall, capable open models remain available and continue pushing adoption, which weakens the idea that the market simply resets and rehiring follows.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1rvgi2j",
    },
    position: { x: 0, y: 0 },
  },
];

export const aiIndustryDiscussionEdges: Edge[] = [
  { id: "e-1rvgi2j-oatmp94", source: "1rvgi2j", target: "oatmp94" },
  { id: "e-1rvgi2j-oask3s1", source: "1rvgi2j", target: "oask3s1" },
  { id: "e-1rvgi2j-oase08b", source: "1rvgi2j", target: "oase08b" },
  { id: "e-1rvgi2j-oatqup0", source: "1rvgi2j", target: "oatqup0" },
  { id: "e-1rvgi2j-oasctoo", source: "1rvgi2j", target: "oasctoo" },
  { id: "e-1rvgi2j-oasesa4", source: "1rvgi2j", target: "oasesa4" },
  { id: "e-1rvgi2j-oaswdwq", source: "1rvgi2j", target: "oaswdwq" },
  { id: "e-1rvgi2j-oasug58", source: "1rvgi2j", target: "oasug58" },
  { id: "e-1rvgi2j-oasfmm1", source: "1rvgi2j", target: "oasfmm1" },
  { id: "e-1rvgi2j-oatyakn", source: "1rvgi2j", target: "oatyakn" },
];
