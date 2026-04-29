import { Node, Edge } from "reactflow";

export interface CustomNodeData {
  label: string;
  fullText: string;
  isOriginalPost: boolean;
  upvotes: number;
  depth: number;
  parentId: string | null;
  isDelta?: boolean;
}

export const aiArtDiscussionNodes: Node[] = [
  // Original Post
  {
    id: "ai-1",
    type: "custom",
    data: {
      label: "CMV: AI-generated art is real art and deserves recognition",
      fullText: `I believe that AI-generated art is legitimate art that deserves the same recognition as traditional forms. Here's why:

1) Art is about the end result and emotional impact, not just the process. If an AI-generated piece moves someone emotionally or makes them think, it has fulfilled art's purpose. The tool used (brush, camera, or AI) shouldn't diminish that.

2) Artists have always used new technology. Photography was once dismissed as "not real art" because it didn't require hand-painting. Digital art faced similar criticism. AI is just the next evolution in artistic tools.

3) Creating good AI art requires skill. You need to understand composition, color theory, prompt engineering, and often need to do significant post-processing. It's not just typing random words and getting masterpieces.

4) The creative vision still comes from a human. The AI is a tool that executes based on human direction, similar to how a camera captures what a photographer envisions.

Change my view: AI art is real art and those who create it are real artists who deserve recognition for their work.`,
      isOriginalPost: true,
      upvotes: 2100,
      depth: 0,
      parentId: null,
    },
    position: { x: 400, y: 200 },
  },

  // Comment 1
  {
    id: "ai-2",
    type: "custom",
    data: {
      label: "The skill argument doesn't hold up",
      fullText: `The problem with your skill argument is that "prompt engineering" is fundamentally different from artistic skill. Traditional artists spend years learning anatomy, color theory, brushwork, composition through practice. They develop muscle memory and technical expertise.

Prompt engineering is more like art direction - telling someone else what to make. That has value, but it's not the same as actually making it. A movie director who tells the cinematographer what shot they want isn't doing cinematography.

The AI is doing the actual artistic creation - making decisions about forms, colors, textures, composition. The human is just providing high-level direction. That's a different skillset than creating art yourself.`,
      isOriginalPost: false,
      upvotes: 856,
      depth: 1,
      parentId: "ai-1",
    },
    position: { x: 100, y: 400 },
  },

  // Comment 2
  {
    id: "ai-3",
    type: "custom",
    data: {
      label: "But all tools abstract away some skill",
      fullText: `This argument applies to almost any technological advancement in art though. Digital art tools have auto-smoothing, perspective guides, color pickers, layer effects - all abstracting away skills that traditional artists had to master manually.

Photography cameras have autofocus, exposure metering, image stabilization - removing technical skills that early photographers needed.

Even traditional painting: pre-mixed paints eliminated the skill of grinding and mixing pigments that Renaissance artists mastered.

Every new tool abstracts away previous skills while requiring new ones. Why is AI different?`,
      isOriginalPost: false,
      upvotes: 423,
      depth: 2,
      parentId: "ai-2",
    },
    position: { x: 100, y: 600 },
  },

  // Comment 3 - Delta
  {
    id: "ai-4",
    type: "custom",
    data: {
      label: "AI removes the fundamental creative decisions - Δ",
      fullText: `You know what, this is a great point and it's making me reconsider. Let me give you a delta for this: Δ

The difference is that previous tools still required the artist to make the fundamental creative decisions. With digital painting, YOU still decide where every brushstroke goes, what exact color, what shape. The tool makes it easier, but you're still making all the creative choices.

With photography, YOU decide the composition, timing, framing, even if the camera helps with focus.

With AI art, the AI makes millions of micro-decisions about forms, shapes, colors, textures that you never specified. You give high-level direction, but the AI is making the actual creative choices about how to render things.

That's qualitatively different. It's more like commissioning art than creating it. The human is the client giving specifications, not the artist making creative decisions. That's a meaningful distinction I hadn't fully considered.`,
      isOriginalPost: false,
      upvotes: 1203,
      depth: 3,
      parentId: "ai-3",
      isDelta: true,
    },
    position: { x: 100, y: 800 },
  },

  // Comment 4
  {
    id: "ai-5",
    type: "custom",
    data: {
      label: "Intent matters more than process",
      fullText: `I think this misses the forest for the trees. What makes something art isn't the technical process, it's the intent to create something meaningful and the ability to communicate ideas or emotions.

Marcel Duchamp's "Fountain" was a urinal he bought and signed. He didn't make the urinal, didn't modify it, just selected and contextualized it. Is that not art? What about Andy Warhol's factory where assistants did most of the physical creation?

Art history is full of examples where the conceptual work and curation matter more than the manual execution. AI art fits perfectly in that tradition.`,
      isOriginalPost: false,
      upvotes: 634,
      depth: 1,
      parentId: "ai-1",
    },
    position: { x: 400, y: 400 },
  },

  // Comment 5
  {
    id: "ai-6",
    type: "custom",
    data: {
      label: "Conceptual art had human concepts",
      fullText: `The difference is that Duchamp personally selected THAT specific urinal and made a deliberate statement about art institutions. Warhol's assistants were executing HIS specific vision with his direct oversight.

With AI, you're not even selecting from existing objects or directing human assistants. You're describing what you want and an algorithm generates something based on its training data. The "concept" is just a text description that the AI interprets in ways you didn't specifically intend.

It's less like Duchamp or Warhol and more like asking an assistant "make me something cool" and then taking credit for what they create.`,
      isOriginalPost: false,
      upvotes: 392,
      depth: 2,
      parentId: "ai-5",
    },
    position: { x: 400, y: 600 },
  },

  // Comment 6
  {
    id: "ai-7",
    type: "custom",
    data: {
      label: "It threatens working artists' livelihoods",
      fullText: `Even if we accept AI art as legitimate, we need to consider the economic impact. AI art is being used to replace working illustrators, concept artists, and commercial artists at an alarming rate.

Companies are using AI to generate images instead of hiring artists. Stock photo sites are flooded with AI content. Art competitions have been won by AI pieces, taking recognition and prizes from human artists.

Whether or not it's "real art" philosophically, it's being used as a replacement for human artists in ways that harm the artistic community. That's a problem regardless of its artistic legitimacy.`,
      isOriginalPost: false,
      upvotes: 1547,
      depth: 1,
      parentId: "ai-1",
    },
    position: { x: 700, y: 400 },
  },

  // Comment 7
  {
    id: "ai-8",
    type: "custom",
    data: {
      label: "Technology always disrupts - that's not art's fault",
      fullText: `This is a labor economics issue, not an art philosophy issue. Photography put portrait painters out of work. Digital art reduced demand for traditional illustrators. CGI reduced need for practical effects artists.

Technology disrupts labor markets - that's unfortunate but it doesn't make the new technology "not art." We should support artists affected by economic changes, but that's separate from whether AI-generated images are artistically legitimate.

By this logic, photography wasn't real art because it threatened portrait painters' livelihoods. That would be absurd.`,
      isOriginalPost: false,
      upvotes: 289,
      depth: 2,
      parentId: "ai-7",
    },
    position: { x: 700, y: 600 },
  },

  // Comment 8
  {
    id: "ai-9",
    type: "custom",
    data: {
      label: "AI art is built on stolen training data",
      fullText: `There's a fundamental ethical problem you're ignoring: AI art models are trained on millions of images taken without permission or compensation from real artists.

The AI learned to create by studying the work of artists who never consented to their art being used this way. Then it generates images in their styles, effectively letting someone replicate their unique artistic voice without permission.

That's not like learning from other artists the way humans do - it's an industrial-scale automated system that can instantly replicate any artist's style. How can we call it legitimate art when it's built on what amounts to mass copyright infringement?`,
      isOriginalPost: false,
      upvotes: 1876,
      depth: 1,
      parentId: "ai-1",
    },
    position: { x: 1000, y: 400 },
  },

  // Comment 9
  {
    id: "ai-10",
    type: "custom",
    data: {
      label: "Humans also learn by studying others' work",
      fullText: `Artists have always learned by studying and copying other artists. Art students copy masterpieces. Artists are influenced by and sometimes deliberately emulate styles they admire.

AI training is just an automated version of this learning process. The AI isn't storing and reproducing the original images - it's learning patterns and styles, similar to how a student learns techniques by studying masters.

Copyright protects specific expressions, not styles or techniques. You can't copyright "impressionism" or "art nouveau." If AI learns a style without copying specific works, that's transformative, not theft.`,
      isOriginalPost: false,
      upvotes: 167,
      depth: 2,
      parentId: "ai-9",
    },
    position: { x: 1000, y: 600 },
  },

  // Comment 10
  {
    id: "ai-11",
    type: "custom",
    data: {
      label: "Scale and intent make it different - Δ",
      fullText: `Actually, you've changed my mind here. Δ Let me award a delta for this perspective.

The scale and automation of AI training IS different from human learning in meaningful ways. A human artist might study hundreds of works over years of education. AI systems process millions of images in days, creating a commercial product that can instantly replicate any of those styles.

More importantly, when humans learn from art, they're learning for personal growth and creative development. AI training is explicitly designed to create a commercial tool that replaces the artists it learned from.

A student copying paintings to learn is different from a company scanning every painting in existence to build a product that competes with painters. The intent and scale make it qualitatively different, not just quantitatively.

That's actually theft in a way human learning isn't. You've convinced me the training data issue is more serious than I initially thought.`,
      isOriginalPost: false,
      upvotes: 934,
      depth: 3,
      parentId: "ai-10",
      isDelta: true,
    },
    position: { x: 1000, y: 800 },
  },
];

export const aiArtDiscussionEdges: Edge[] = [
  { id: "e-ai-1-2", source: "ai-1", target: "ai-2" },
  { id: "e-ai-2-3", source: "ai-2", target: "ai-3" },
  { id: "e-ai-3-4", source: "ai-3", target: "ai-4" },
  { id: "e-ai-1-5", source: "ai-1", target: "ai-5" },
  { id: "e-ai-5-6", source: "ai-5", target: "ai-6" },
  { id: "e-ai-1-7", source: "ai-1", target: "ai-7" },
  { id: "e-ai-7-8", source: "ai-7", target: "ai-8" },
  { id: "e-ai-1-9", source: "ai-1", target: "ai-9" },
  { id: "e-ai-9-10", source: "ai-9", target: "ai-10" },
  { id: "e-ai-10-11", source: "ai-10", target: "ai-11" },
];
