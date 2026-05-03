import { Node, Edge } from "reactflow";

export const fruitsVegetablesDiscussionNodes: Node[] = [
  {
    id: "1warn13",
    type: "custom",
    data: {
      label: "CMV: Are all fruits vegetables, and only some vegetables fruits?",
      fullText: `This question is so hard to articulate. My kids keep asking me if an apple is a fruit and a broccoli is a vegetable and I say yes but then they asked me what a pumpkin is and I have no idea. I thought it was a vegetable but apparently it is now a fruit. Apparently it has something to do with the seeds being on the inside but no way a cucumber is a fruit.

So I thought maybe all edible plants are actually vegetables and then we just give the name fruit to the nice ones. Why is it so complicated?`,
      isOriginalPost: true,
      upvotes: 1,
      depth: 0,
      parentId: null,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "ii2lwoc",
    type: "custom",
    data: {
      label: "Botanical vs horticultural definitions are inconsistent",
      fullText: `The problem is there is a scientific definition and there is a horticultural definition, and there is inconsistency.

Generally things that don't have visible seeds (lettuce, carrots, broccoli) are vegetables. And generally things that have visible seeds are fruits. Apples, oranges, grapes, bananas. And yeah, tomatoes, cucumbers, pumpkins.

But colloquially those last three are "vegetables" and we just kind of know mostly which is which.

Fruits develop out of flowers, and they hold seeds. We eat the part with the seeds. Vegetables sprout. We eat the plant part.

Clear as mud, right? Tell your kids that fruits are what a plant makes, and vegetables are the plant. And that it doesn't always make sense. And that they should do what you say ;)`,
      isOriginalPost: false,
      upvotes: 6,
      depth: 1,
      parentId: "1warn13",
    },
    position: { x: 320, y: 0 },
  },
  {
    id: "ii2ma5c",
    type: "custom",
    data: {
      label: "Thanks, this is all I learned today.",
      fullText: `> And that they should do what you say

Thanks, this is all I learned today.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "ii2lwoc",
    },
    position: { x: 640, y: 0 },
  },
  {
    id: "ii2kuqp",
    type: "custom",
    data: {
      label: "Tomatoes are the fruit double-agent",
      fullText: `All fruits are fruits and all vegetables are vegetables; except for tomatoes which is the double-agent sent by the fruit to spy on the vegetables.`,
      isOriginalPost: false,
      upvotes: 4,
      depth: 1,
      parentId: "1warn13",
    },
    position: { x: 320, y: 220 },
  },
  {
    id: "ii2mi6c",
    type: "custom",
    data: {
      label: "Culinary categories are vague, botanical fruit is about seeds",
      fullText: `Yes. it all gets confusing, because there is a botanical definition of a fruit, and a common definition for fruits and vegetables.

Vegetable is a vague term, culinary, not botanical. A fruit, botanically speaking is the part of the plant that contains the seed(s), but foodwise, we tend to use it for sweeter seed bearing items. If the fruit is savory or bitter, we tend to call it a vegetable.

So foodwise, apples are fruit (they have seeds) as do oranges, bananas, and most all sweet ones you can think of. The pumpkin, cucumber, and tomatoes are all botanically fruits, but from a culinary perspective are all considered vegetables. Yes it is somewhat arbitrary, but for kids, maybe it is that fruits are sweet and have seeds.

The only plants that are always called vegetables are those that are leaves, flowers, and roots/tubers.`,
      isOriginalPost: false,
      upvotes: 4,
      depth: 1,
      parentId: "1warn13",
    },
    position: { x: 320, y: 440 },
  },
  {
    id: "ii2kmlt",
    type: "custom",
    data: {
      label: "Botanical fruit is the flowering part of the plant",
      fullText: `Botanically, fruits and vegetables are classified depending on which part of the plant they come from. A fruit develops from the flower of a plant, while the other parts of the plant are categorized as vegetables. Fruits contain seeds, while vegetables can consist of roots, stems and leaves.

Here's the article I pulled that from.

https://www.healthline.com/nutrition/fruits-vs-vegetables#TOC_TITLE_HDR_2`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1warn13",
    },
    position: { x: 320, y: 660 },
  },
  {
    id: "ii2kwkv",
    type: "custom",
    data: {
      label: "No way that's going to fly",
      fullText: `So I can stick cucumber, pumpkin and choko in a bowl and call it fruit salad? No way that's gonna fly.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "ii2kmlt",
    },
    position: { x: 640, y: 660 },
  },
  {
    id: "iq9wr5w",
    type: "custom",
    data: {
      label: "All fruits are fruits, all vegetables are vegetables",
      fullText: `This answer is common definitions, not the scientific ones or economic ones. A vegetable is vegetation grown for the table. Any plant material you eat is a vegetable. A fruit has seeds. All fruits are vegetables, but not all vegetables are fruits.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1warn13",
    },
    position: { x: 320, y: 880 },
  },
];

export const fruitsVegetablesDiscussionEdges: Edge[] = [
  { id: "e-1warn13-ii2lwoc", source: "1warn13", target: "ii2lwoc" },
  { id: "e-ii2lwoc-ii2ma5c", source: "ii2lwoc", target: "ii2ma5c" },
  { id: "e-1warn13-ii2kuqp", source: "1warn13", target: "ii2kuqp" },
  { id: "e-1warn13-ii2mi6c", source: "1warn13", target: "ii2mi6c" },
  { id: "e-1warn13-ii2kmlt", source: "1warn13", target: "ii2kmlt" },
  { id: "e-ii2kmlt-ii2kwkv", source: "ii2kmlt", target: "ii2kwkv" },
  { id: "e-1warn13-iq9wr5w", source: "1warn13", target: "iq9wr5w" },
];
