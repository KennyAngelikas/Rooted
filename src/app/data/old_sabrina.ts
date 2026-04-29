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

export const sabrinaDiscussionNodes: Node[] = [
  // Original Post
  {
    id: "1",
    type: "custom",
    data: {
      label: "CMV: Sabrina Carpenter was right, apology was a mistake",
      fullText: `Recently, Sabrina Carpenter found herself in hot water where an audience interrupted her piano piece with Zaghrouta, an Arabic chant that some people find as a valid way to celebrate or others who find as loud, obnoxious and jarring, depending on the cultural context.

View 1: Why it's a valid response.
In the heat of a performance at Coachella, when she was doing her relatively quiet piece, an audience member's Zaghrouta (who went lalalalalalalalala while she was about to play her piece) pierced through the stage. It's rather unreasonable to expect a performer to immediately recognize and respect every specific cultural sound coming from the crowd, especially an interrupting noise that was braded as "it's my culture" Her expressing "I don't like it" was her preference, and not a her view or commentary on an entire culture. And she was valid to say "I don't like it" or please stop it.

View 2: By giving her "apology" she gave validation to disruptive behavior
The push for an apology suggested that if an action is cultural, no matter how disruptive, obnoxious that other people may feel, they are forced to tolerate (or "enjoy" it for the sake of being culturally tolerant) it, even if it's being screamed at them while they are trying to enjoy the concert or work. One should be able to respect a culture in general while still believing that specific instance of its expression annoying or inappropriate.

View 3: Why the apology was a mistake for Sabrina Carpenter
Her biggest mistake was putting out an apology. By apologizing, she caused the narrative to shift from a bad fan behavior to "Sabrina is culturally insensitive" The apology validated the idea that she was attacking a group of people rather than reacting to a disruptive, rude and obnoxious behavior. As such, she seems to be getting even more attacks on social media who's using this as a moment to direct even harsher rhetoric to her.

So what's my view (tldr version)?
One, as a performer, her comfort and the flow of the show should take priority, especially to respect everyone who spent time and money to be there. As such, "I don't like it" was a valid response by her. Two, "it's my culture" is not a blank check to disrupt others and be obnoxious. Three, by apologizing, Sabrina Carpenter actually made it worse by validating those that disrupted her.`,
      isOriginalPost: true,
      upvotes: 1400,
      depth: 0,
      parentId: null,
    },
    position: { x: 400, y: 200 },
  },

  // Comment 1
  {
    id: "2",
    type: "custom",
    data: {
      label: "Apology was about career, not ethics",
      fullText: `The apology probably had more to do with her career and brand than what was ethically or morally sound. One could easily argue it would have been a mistake to not apologize and take a hit to her income stream regardless of whether it was reasonable otherwise.

The nature of being a professional entertainer (as opposed to strictly an artist) is that you're performing for your audience, even when not on stage or screen. If the audience prefers the apology you do the apology. If the audience prefers no apology you don't do the apology.`,
      isOriginalPost: false,
      upvotes: 820,
      depth: 1,
      parentId: "1",
    },
    position: { x: 100, y: 50 },
  },

  // Reply 1 to Comment 1
  {
    id: "3",
    type: "custom",
    data: {
      label: "Outrage machine is never satisfied",
      fullText: `I would challenge your notion that this is a smart career move assumes that the outrage machine is ever satisfied.

As linked here by other commenters here to subs like r/Fauxmoi , I'd argue that when you apologize for a non-offense to protect your income stream, you aren't ending the problem but submitting yourself to the bad-faith actors out there (and the comments that she's been getting have gotten worse I'd say!)

Of course, if we do argue that the artist is a slave to the mob and that an artist must force a smile in the face of an anti-social behavior, I would say you are correct.`,
      isOriginalPost: false,
      upvotes: 450,
      depth: 2,
      parentId: "2",
    },
    position: { x: 100, y: 300 },
  },

  // Reply 1 to Reply 1 of Comment 1
  {
    id: "4",
    type: "custom",
    data: {
      label: "World wants cultural omniscience, not learning",
      fullText: `Honestly everyone who was mad about it was dissatisfied with the apology and said she should just learn about culture... but she literally did. Her apology included that she had learned what a "zagrouta" is and she also told a global audience what she learned.

I think it IS important to learn and try to be better but the world doesn't want that, it wants you to never make mistakes and be culturally omniscient.`,
      isOriginalPost: false,
      upvotes: 380,
      depth: 3,
      parentId: "3",
    },
    position: { x: 100, y: 480 },
  },

  // Reply 2 to Reply 1 of Comment 1 
  {
    id: "5",
    type: "custom",
    data: {
      label: "She handled it honestly and reasonably",
      fullText: `It seems more organic than that. I take her at face value that she regrets being critical of a particular cultural expression and now that she knows better, she acknowledged it. People are going to criticize her for not apologizing, and for apologizing, and for not apologizing enough, and for apologizing too much. I think she handled it in an honest and reasonable way.`,
      isOriginalPost: false,
      upvotes: 290,
      depth: 3,
      parentId: "3",
      isDelta: false,
    },
    position: { x: 300, y: 480 },
  },

  // Reply 2 to Comment 1
  {
    id: "6",
    type: "custom",
    data: {
      label: "People aren't as sensitive as Reddit thinks",
      fullText: `Yeah... she wouldn't have taken a hit to her income stream. People aren't as culturally sensitive as Reddit wants you to believe. Most people get it, and the ones trying to make a big deal out of it are the actual bad actors.`,
      isOriginalPost: false,
      upvotes: 620,
      depth: 2,
      parentId: "2",
    },
    position: { x: 300, y: 300 },
  },

  // Comment 2
  {
    id: "7",
    type: "custom",
    data: {
      label: "Performers like cheering, Coachella isn't a library",
      fullText: `She said she "could have handled it better" not that she should have allowed disruptions to her performance. She also said "I welcome all cheers and yodels from here on out"

Performers generally like to be cheered on, once she learned that the person was cheering her on and thought more about it after the fact she decided she would rather encourage rather then discourage the kind of behavior you are talking about.

Its common to claps, whistle, yell "whoo" and make all these kinds of noises at a performance. the lalalala noise is uncommon, and threw her off her game. She has since learned something. Its the perfect application for an apology. I behaved imperfectly, learned and will behave better in the future.

The push for an apology suggested that if an action is cultural, no matter how disruptive, obnoxious that other people may feel...

She's a professional performer and i'm not so i'm inclined to trust her judgement about when cheering is and is not disruptive. You can also hear laughter, and other noise from the crowed. A rowdy crowed it often appreciated by performs and its Coachella, an outdoor music festive. its not golf or a library.`,
      isOriginalPost: false,
      upvotes: 1150,
      depth: 1,
      parentId: "1",
    },
    position: { x: 700, y: 50 },
  },

  // Reply 1 to Comment 2 (OP awards DELTA!)
  {
    id: "8",
    type: "custom",
    data: {
      label: "Δ Coachella context changes everything",
      fullText: `Thanks for the response!

I will !delta for the following reason:

Yes, you are correct that this should be looked at it from Coachella perspective vs golf and library

Yes, as you said she is a professional, so we should trust her judgment

And yes, by grouping Zaghrouta with claps and whistles, you are indeed deescalating the whole cultural tension and making it just another cheer at a concert.

However, I do think there's some points to ponder about:

She took it as a heckling (by the face she made) as opposed to cheer. It was clear that it was not just enthusiasm but also a distraction.

When she said "I welcome all yodels from here on out" she's just being performatively nice to avoid backlash - a part of forced smile ritual

Did she really learn? Or are we all gaslighting into "she learned something" The only thing I'd say that she learned is that being honest is a PR nightmare. It's just another way to describe self-censorship I reckon.`,
      isOriginalPost: false,
      upvotes: 710,
      depth: 2,
      parentId: "7",
      isDelta: true,
    },
    position: { x: 700, y: 300 },
  },

  // Reply 1 to Reply 1 to Comment 2
  {
    id: "9",
    type: "custom",
    data: {
      label: "Laughing at the joke, not forced smile",
      fullText: `People sometimes attempt to reclaim momentum after a trip up event is to try to laugh with the crowd so to not be stuck on it. Its like getting up from tripping and doing an Olympic gymnastics bow or upon realizing your fly was open while giving a speech quipping "I'm glad I decided against going commando today." Less of a smile ritual but moving past being the joke to laughing at the joke too.`,
      isOriginalPost: false,
      upvotes: 340,
      depth: 3,
      parentId: "8",
    },
    position: { x: 700, y: 480 },
  },

  // Comment 3
  {
    id: "10",
    type: "custom",
    data: {
      label: "Nothing to do with Islam",
      fullText: `Absolutely nothing to do with Islam:

https://www.reddit.com/r/MapPorn/comments/1n0n8ol/the_global_spread_of_the_practice_of_ululation_oc/`,
      isOriginalPost: false,
      upvotes: 520,
      depth: 1,
      parentId: "1",
    },
    position: { x: 400, y: 400 },
  },

  // Reply 1 to Comment 3
  {
    id: "11",
    type: "custom",
    data: {
      label: "Jews, Muslims, Christians all do it",
      fullText: `oh absolutely. Jews do it. Muslims do it. Christians do it.`,
      isOriginalPost: false,
      upvotes: 280,
      depth: 2,
      parentId: "10",
    },
    position: { x: 200, y: 550 },
  },

  // Reply 2 to Comment 3
  {
    id: "12",
    type: "custom",
    data: {
      label: "Most associate sound with terrorism",
      fullText: `Sure, but most people in developed countries associate that sound with terrorism.`,
      isOriginalPost: false,
      upvotes: 95,
      depth: 2,
      parentId: "10",
    },
    position: { x: 600, y: 550 },
  },
];

export const sabrinaDiscussionEdges: Edge[] = [
  // OP to first-level comments
  { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
  { id: "e1-7", source: "1", target: "7", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
  { id: "e1-10", source: "1", target: "10", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },

  // Comment 1 tree
  { id: "e2-3", source: "2", target: "3", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
  { id: "e2-6", source: "2", target: "6", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
  { id: "e3-4", source: "3", target: "4", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
  { id: "e3-5", source: "3", target: "5", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },

  // Comment 2 tree (DELTA PATH)
  { id: "e7-8", source: "7", target: "8", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
  { id: "e8-9", source: "8", target: "9", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },

  // Comment 3 tree
  { id: "e10-11", source: "10", target: "11", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
  { id: "e10-12", source: "10", target: "12", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
];
