import { Node, Edge } from "reactflow";

export interface CustomNodeData {
  label: string;
  fullText: string;
  isOriginalPost: boolean;
  upvotes: number;
  depth: number;
  parentId: string | null;
  isDelta?: boolean;
  isDepth1Compact?: boolean;
}

export const aiJobsDiscussionNodes: Node[] = [
  {
    id: "1rq02gl",
    type: "custom",
    data: {
      label: `CMV: AI will not create more jobs than it destroys, and the historical argument that "tech...`,
      fullText: `The go-to rebuttal whenever someone raises concerns about AI and job loss is: "Technology has always created more jobs than it destroyed. The automobile replaced the horse, but created millions of new roles." I believe this argument no longer holds, and here's why.

Past technologies replaced human muscle or routine manual work. The new jobs they created required human judgment, creativity, and coordination, things machines couldn't do. AI is fundamentally different because it targets exactly those domains. It writes code, generates designs, moderates content, handles customer service, and analyzes data. These aren't assembly-line tasks. They're the very roles that were supposed to be safe.

The layoffs are no longer theoretical. Across tech, media, retail, and other sectors, companies are cutting positions and citing AI and automation as the reason. And the economic incentive is clear: AI systems operate around the clock at a fraction of the cost, with no benefits, no breaks, and no burnout. When AI matches or exceeds human performance at a task, the rational business decision is to automate it.

The common counterargument is that we "can't imagine" the new jobs that will emerge, just like people in 1900 couldn't imagine software engineers. But that's not an argument, it's a hope. There is no economic law guaranteeing that enough new, exclusively human roles will appear fast enough to replace what is lost. And unlike previous transitions that played out over decades, AI capability is advancing in months.

I do think companies can choose to keep humans in the loop, designing systems that include people rather than replace them, but that's an ethical choice, not an economic inevitability. Left to market forces alone, I don't see how AI creates net positive employment.

I'd love to hear arguments for why this time isn't different, or evidence that AI is already creating more roles than it's eliminating.

\\--------

Thanks to everyone who took the time to comment. I really appreciate the different perspectives and the discussion.

A few quick clarifications that came up:   
I’m not an Ai doomer. I’m actually very optimistic about Ai!  
I also have nothing to sell.. no course... no product...  no newsletter just sharing thoughts and curious what others think.   
  
I'm in the tech/AI bubble, so most of what I see is centered there. A lot of it is hype, but some of it lines up with what I've seen as a software engineer. I really appreciate getting fresh perspectives from outside that bubble they help me question my assumptions and see the bigger picture.

  
`,
      isOriginalPost: true,
      upvotes: 578,
      depth: 0,
      parentId: null,
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9onlag",
    type: "custom",
    data: {
      label: `I think framing the discourse around job creation/destruction somewhat misses the point. A...`,
      fullText: `I think framing the discourse around job creation/destruction somewhat misses the point. A job is something done for necessity of survival, but if society progresses past needing them then it won't be about mass unemployment, it will be about replacing the need to work with something else.

One side of the debate is cynical towards capitalism and sees removal of jobs as a way to crush the lower classes, whereas the side that says jobs will go away aren't saying there will be mass unemployment, they are saying society will change beyond recognition to the point that employment itself is a thing of the past.

Mischaracterising the debate isn't a great way to approach your view. Can you refine the scope of what change you'd like us to help you with?`,
      isOriginalPost: false,
      upvotes: 80,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9orxfb",
    type: "custom",
    data: {
      label: `I'm not arguing that society can't evolve past traditional employment. I'm arguing that th...`,
      fullText: `I'm not arguing that society can't evolve past traditional employment. I'm arguing that there's no mechanism currently in place to make that transition smooth, and that the "don't worry, society will adapt" framing hand-waves over the real damage that happens in the gap between job destruction and whatever comes next.

From a pure cost perspective, AI and automation are hard to beat. They do not take breaks, do not need benefits, and can scale instantly. For many tasks, they are cheaper and more efficient than hiring humans. So if the only goal is to minimize cost and maximize output, the rational choice is to automate.

That logic is why so many companies are leaning into AI-driven job cuts. It is not that they dislike people. It is that the system rewards efficiency and cost reduction. In that world, creating or keeping jobs for humans can look like a luxury or a inefficiency.  
  
how exactly am I mischaracterizing the debate? My post directly addresses the most common counterargument ("technology always creates new jobs") and explains why I think it breaks down this time. If you see a straw man in there, I'd appreciate you pointing out specifically where, rather than just saying the framing is off. `,
      isOriginalPost: false,
      upvotes: 79,
      depth: 2,
      parentId: "o9onlag",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9r7x2f",
    type: "custom",
    data: {
      label: `Let me ask you this OP, where are you getting your information that AI is going to replace...`,
      fullText: `Let me ask you this OP, where are you getting your information that AI is going to replace whole industries? Did you get that from someone who has a vested interest in selling their AI product, or are you looking at peer reviewed academic research on what AI is capable of? If you look at the latter you’ll find there’s a very significant difference between what researchers believe AI is capable of at a fundamental level and what CEOs and salespeople claim. `,
      isOriginalPost: false,
      upvotes: 12,
      depth: 3,
      parentId: "o9orxfb",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9rgve6",
    type: "custom",
    data: {
      label: `I'm trying to connect the dots based on my experience as a software engineer and extrapola...`,
      fullText: `I'm trying to connect the dots based on my experience as a software engineer and extrapolate from there. 

AI in coding has moved past the productivity gains phase of just helping out to now being able to accomplish most tasks. Sure, sometimes you have to babysit it, but it's been surprisingly good and is getting better at an accelerating pace. Even just a year ago, it was hard to imagine AI coding could be doing what it does today.

Coding turned out to be one of the easiest industries to start with there are hard and fast tests to determine correctness, making it a much cleaner end-to-end system. But that's also what makes it so significant coding being the first category AI cracks accelerates progress in every other category, since software is the tool used to build everything else.

I don't believe all the hype but from my experiences with software engineering there is some truth to it.`,
      isOriginalPost: false,
      upvotes: 21,
      depth: 4,
      parentId: "o9r7x2f",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9u9h1p",
    type: "custom",
    data: {
      label: `&gt;I'm trying to connect the dots based on my experience as a software engineer and extra...`,
      fullText: `&gt;I'm trying to connect the dots based on my experience as a software engineer and extrapolate from there.

Which is the problem - you are looking at a specific job market that is well suited for use of AI (especially LLM based). Of course that this will mean that there will be lost jobs that will not get replaced - **in this narrow market**. 

But extrapolating this onto wider market is not 1:1. Even if we are looking at IT industry alone, with lesser number of devs that are being more productive and generating more code, there are codependent jobs that would need to be increased. Larger amount of code will need more Ops positions (that are very hard to replace with AI), more jobs in introduction of automations in monitoring, more jobs in datacenters that are needed due to increases in demand due to AI, not to mention specific engineers needed for AI/ML purposes.

And that is only if we look at existing companies. AI being able to become "several juniors" for a dev, means that smaller dev group is needed to create and ship a product - which means that they can set a startup with more ease and lesser investment. This is also "creating jobs".

And there are also other jobs that will be created in similar manner in other affected markets. Couple that with decreasing workforce and the mass unemployment scenarios pictured by some are clearly unrealistic.`,
      isOriginalPost: false,
      upvotes: 10,
      depth: 5,
      parentId: "o9rgve6",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9zm1po",
    type: "custom",
    data: {
      label: `Why would you think Ops positions would be hard to replace?      Labor market impacts of A...`,
      fullText: `Why would you think Ops positions would be hard to replace?   


Labor market impacts of AI: A new measure and early evidence - [https://www.anthropic.com/research/labor-market-impacts](https://www.anthropic.com/research/labor-market-impacts)   
All hype or do you think there is some truth to it?  
  
specific engineers needed for AI/ML?   
already showing signs of recursively improving itself e.g. [https://github.com/karpathy/autoresearch](https://github.com/karpathy/autoresearch) and coming up with novel, creative solutions to problems humans haven’t solved yet. Do you think this seems promising or is it too early to tell?

`,
      isOriginalPost: false,
      upvotes: 7,
      depth: 6,
      parentId: "o9u9h1p",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa03m1z",
    type: "custom",
    data: {
      label: `&gt;Why would you think Ops positions would be hard to replace?  Because they are maintain...`,
      fullText: `&gt;Why would you think Ops positions would be hard to replace?

Because they are maintaining operations of IT landscapes that aren't standardized and often have over-complicated solutions that are created due to years of changing landscape. AIs have tendency to use more standardized solutions that very often will not work without heavy tailoring, which can cause problems. And you do not want to cause problems to live PROD systems.

&gt;Labor market impacts of AI: A new measure and early evidence - [https://www.anthropic.com/research/labor-market-impacts](https://www.anthropic.com/research/labor-market-impacts)  
All hype or do you think there is some truth to it?

Look at sources they use. "Own usage data" is proprietary and non-public and Eloundou et al. (2023) is a working paper from arXiv (open source space in which anyone can publish paper, not a peer-reviewed publication). This alone shows that without publishing paper like that in peer-reviewed journal, we should be cautious to consider its findings.

Honestly it's more of a hype piece than a coherent article to be honest. Author seems to use the opportunity of Anthropic wanting a hype piece to lay some interesting groundwork for future AI impact measurement, and pulls some educated guesswork alongside to satisfy the investor.

As it's an article that tries to generate a framework for AI impact measurement, it's understandable that they aren't that much concerned with data, as they use it more to set up a standard rather than uncover some strong findings. But that makes any predictions made kinda worthless.

&gt;already showing signs of recursively improving itself

As per [peer-reviewed findings](https://www.nature.com/articles/s41586-024-07566-y) training on recursive data leads to model collapse. The signs of improvement does not change that as in study we can also see initial improvements before the problems with degradation start.

&gt;Do you think this seems promising or is it too early to tell?

Too early. Current leaps in AI Models are mostly caused by bottleneck removal - there were too small amount of connections between datapoints in models, so when new generations came, the large increases there are the main source of improvements between generations.

But we're close to maximizing connections and removing it as a bottleneck. At this point the datapoints would be the bottleneck and those aren't increasing much, because initial scrapping have already used most of suitable data. This strongly suggests that in very near future we will see capabilities of AI plateauing. 

Currently the idea of overcoming that was to use recursive data, but that leads to model collapse. So there is no clear plan as to how AI would be enhanced beyond the plateau.`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 7,
      parentId: "o9zm1po",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "ohlt57s",
    type: "custom",
    data: {
      label: `&gt; Which is the problem  And your problem is being unable to follow logical conclusions ...`,
      fullText: `&gt; Which is the problem

And your problem is being unable to follow logical conclusions

If software engineering gets automate virtually all "white collar" work will be obsoleted very fast if not near instantly. Software engineers automate things, if the automators are automated wtf do you people think happens to everything else?

Ditto for manual labor, robotics would explode in progress`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 6,
      parentId: "o9u9h1p",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "ohmiu7s",
    type: "custom",
    data: {
      label: `&gt;If software engineering gets automate virtually all "white collar" work If software en...`,
      fullText: `&gt;If software engineering gets automate virtually all "white collar" work If software engineering gets automate virtually all "white collar" work

It doesn't. At least nothing that we currently label AI - even if we would unblock the capacity via larger funding, more datacentrers and more energy. It's simply the problem that we are nearing plateau - all rapid advances of LLMs were advances using scale. We have been simply expanding the model dimensions to cover the vocabulary. More parameters, more compute power - more astonishing results.

But there is a little problem.  Model dimension nearly reaches the vocabulary size. So next models would not have the same rise in capabilities compared to last-gen as current ones. They will join the AlexNet that is stuck on high 90%s of image recognition and inches toward 99% accuracy since 2017.

Now, there are ideas on how to mitigate that via expanding the training data. But there are two problems - we have already used most of publicly available data and the new data contains AI output.

Former means that we don't really have access to data source that could expand the model vocabulary. There are assumptions that enterprise data will be used, but I don't really see how AI companies would get access to data like that. Not only it's proprietary, which means that enterprises would need to agree for the use of that data, but also often contains data that can't be easily legally shared. But even if we magically give AI researches access to it all - we the latter problem. People are using AI, whose outputs are now in general datastream. So further trainings would use partial AI outputs - and number of those will be rising. Issue is that training AI on AI outputs leads to model collapse.

So no, current AI will not cause "all "white collar" work will be obsoleted very fast if not near instantly". It does not have the capabilities yet due to hallucinations and limitations. And it would not get more capable until we will get another breakthrough. Last one (transformers) is 9 years old.

&gt;Ditto for manual labor, robotics would explode in progress

Why would it explode and how? We already perfected large factory automation and general robotics is still clunky as hell. How do you imagine manual labor would be replaced in a reasonable timeframe?`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 7,
      parentId: "ohlt57s",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9zfh81",
    type: "custom",
    data: {
      label: `I find the argument that no one saw it coming a little bit hard since I had my professor a...`,
      fullText: `I find the argument that no one saw it coming a little bit hard since I had my professor around 12 years ago telling us that you would verbally request an app and the thing would return a complete product. 

As a computer engineer in México, at least with this professor, we were completely warned and encouraged to not focus on coding, but in specialized fields like AI itself. Also coding was being taught to electrical engineers and other careers.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 5,
      parentId: "o9rgve6",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9zqn8d",
    type: "custom",
    data: {
      label: `That was well before the adoption of the transformer architecture which became the foundat...`,
      fullText: `That was well before the adoption of the transformer architecture which became the foundation for modern LLMs.

I'm curious.. what were his intuitions about how that would actually be possible back then?`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 6,
      parentId: "o9zfh81",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "ob691v3",
    type: "custom",
    data: {
      label: `I get that this professor was way ahead and mocked by alumni and other professors at that ...`,
      fullText: `I get that this professor was way ahead and mocked by alumni and other professors at that time, one of his first classes would start by placing his laptop in front of him and saying something close to "make me a desktop app that ...", then explain that this is the way everyone would make apps in the future. As for how and why did he had this kind of foresight I don´t know.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 7,
      parentId: "o9zqn8d",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pkom1",
    type: "custom",
    data: {
      label: `Your argument is flawed. The purpose of technology is to make jobs easier not to create mo...`,
      fullText: `Your argument is flawed. The purpose of technology is to make jobs easier not to create more work.

`,
      isOriginalPost: false,
      upvotes: -5,
      depth: 3,
      parentId: "o9orxfb",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pxnxi",
    type: "custom",
    data: {
      label: `I don't think that's the point they are making. Jobs are how our system works and without ...`,
      fullText: `I don't think that's the point they are making. Jobs are how our system works and without a fundamental transition in society (which there is currently no incentive to implement), technologies that reduce the number of available jobs will have massively disruptive impact on our society. Without even a vague idea of a plan to deal with this or any indication of the political will to accomplish it, OP's prediction stands unchallenged. The chorus of people saying less work means shorter workdays for everyone have yet to provide any sort of mechanism to get there making it about as plausible as those who say their MLM scheme will make you rich.

The purpose of technology has nothing to do with it.`,
      isOriginalPost: false,
      upvotes: 14,
      depth: 4,
      parentId: "o9pkom1",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pyu9u",
    type: "custom",
    data: {
      label: `&gt;The purpose of technology is to make jobs easier not to create more work.  I agree! an...`,
      fullText: `&gt;The purpose of technology is to make jobs easier not to create more work.

I agree! and I’d add that technology acts as a lever, enabling fewer people to accomplish much more.

So in a world where the global economy leans heavily capitalism and where corporations have a fiduciary commitment to maximize profits ... Does Ai create more jobs than it replaces?



`,
      isOriginalPost: false,
      upvotes: 9,
      depth: 4,
      parentId: "o9pkom1",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9q2t2o",
    type: "custom",
    data: {
      label: `It's no different than machines taking jobs from blacksmiths, shoemakers, carpenters, tele...`,
      fullText: `It's no different than machines taking jobs from blacksmiths, shoemakers, carpenters, telephone operators.
Jobs constantly become obsolete as technology improves.  

It's not the businesses responsibility to create work for you when your niche is no longer valuable.



`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 5,
      parentId: "o9pyu9u",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9rlibt",
    type: "custom",
    data: {
      label: `It’s different this time around... that’s the point I’m trying to make. If (still a big if...`,
      fullText: `It’s different this time around... that’s the point I’m trying to make. If (still a big if) Ai can do everything humans can do, but better and at a fraction of the cost, why would any entity hire humans?`,
      isOriginalPost: false,
      upvotes: 7,
      depth: 6,
      parentId: "o9q2t2o",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9riig7",
    type: "custom",
    data: {
      label: `The difference being the scale of the change and the speed of it. The system will always n...`,
      fullText: `The difference being the scale of the change and the speed of it. The system will always need people with resources to spend in order to scale up, but speed of the changes which are coming will likely cause incredible instability and unrest. `,
      isOriginalPost: false,
      upvotes: 4,
      depth: 6,
      parentId: "o9q2t2o",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9plmy6",
    type: "custom",
    data: {
      label: `Again, you are framing this about jobs and the economy when that is not the core of the di...`,
      fullText: `Again, you are framing this about jobs and the economy when that is not the core of the discussion.


Can you clarify the view you WANT to hold here? Understanding the change you are seeking will help us help you. `,
      isOriginalPost: false,
      upvotes: -9,
      depth: 3,
      parentId: "o9orxfb",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pvc59",
    type: "custom",
    data: {
      label: `As simple as I can put it.. **AI will not create more jobs than it destroys**  (maybe I sh...`,
      fullText: `As simple as I can put it.. **AI will not create more jobs than it destroys**  (maybe I should of said "replaces" instead of destroys)

I would like to change my view on that statement.. the statement itself is about jobs and the economy so I'm not sure what you mean "Mischaracterising the debate".  

I appreciate everyone’s point of view and genuinely try not to dismiss them as wrong. Instead, I make an effort to think more deeply and truly understand where they’re coming from. `,
      isOriginalPost: false,
      upvotes: 9,
      depth: 4,
      parentId: "o9plmy6",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pvzcq",
    type: "custom",
    data: {
      label: `The inverse of that exact statement would be AI WILL create more jobs than it destroys/rep...`,
      fullText: `The inverse of that exact statement would be AI WILL create more jobs than it destroys/replaces


However creation and destruction of jobs is not the topic at hand, and I don't understand why you need to think about this solely in terms of capitalism and the job market. 


AI may make employment unnecessary, which by your definition would mean removing jobs, but it's actually removing the need for jobs. 


That's the discussion at heart. Sheer optimism vs capitalism and fatalism. 


How do you think your view will be changed here? `,
      isOriginalPost: false,
      upvotes: -9,
      depth: 5,
      parentId: "o9pvc59",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9r9xim",
    type: "custom",
    data: {
      label: `&gt;However creation and destruction of jobs is not the topic at hand, and I don't underst...`,
      fullText: `&gt;However creation and destruction of jobs is not the topic at hand, and I don't understand why you need to think about this solely in terms of capitalism and the job market. 

It absolutely is the topic, because America's current political climate simply doesn't allow for something so drastically socialistic as UBI and a jobless economy. Everyone here talking about the government providing universal anything hasn't been paying attention to the last 40 years of political discourse. `,
      isOriginalPost: false,
      upvotes: 9,
      depth: 6,
      parentId: "o9pvzcq",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9q75km",
    type: "custom",
    data: {
      label: `I’m reading your comments and I like your framing of what’s actually important to discuss ...`,
      fullText: `I’m reading your comments and I like your framing of what’s actually important to discuss on this topic, but it seems you’re also being a bit stubborn about what OP wants, they just want to talk about job creation, they don’t seem interested in (or grasping?) that job creation isn’t the crux. `,
      isOriginalPost: false,
      upvotes: 12,
      depth: 6,
      parentId: "o9pvzcq",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9q6xn1",
    type: "custom",
    data: {
      label: `Can you elaborate why you think that the discussion at heart is something different than w...`,
      fullText: `Can you elaborate why you think that the discussion at heart is something different than what OP is mentioning? OP created this post in an effort to change their own view, so they decided what the discussion at heart is.  
If your point is supposed to illustrate how AI will indeed create net positive jobs, you should try to make that connection clearer as this is clearly not currently changing OP's views.`,
      isOriginalPost: false,
      upvotes: 13,
      depth: 6,
      parentId: "o9pvzcq",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9qqd01",
    type: "custom",
    data: {
      label: `I think it's important to remember that there _are_ people who make the exact argument tha...`,
      fullText: `I think it's important to remember that there _are_ people who make the exact argument that technology creates more jobs than it replaces, AI is technology, ergo we will naturally have the same result. 

You're kind of saying that this isn't the discussion, maybe not in your circles, but I've come across this argument plenty`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 6,
      parentId: "o9pvzcq",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9r8aqj",
    type: "custom",
    data: {
      label: `I understand what you're saying. You're alluding to a deeper, more philosophical discussio...`,
      fullText: `I understand what you're saying. You're alluding to a deeper, more philosophical discussion, which I’d enjoy as well (if you’d like to make a post about that, I’d be more than happy to participate in the discussion). `,
      isOriginalPost: false,
      upvotes: 3,
      depth: 6,
      parentId: "o9pvzcq",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9r8x5b",
    type: "custom",
    data: {
      label: `Please answer the direct question I asked you.   What kind of comment are you trying to gi...`,
      fullText: `Please answer the direct question I asked you.


What kind of comment are you trying to give a delta to here? `,
      isOriginalPost: false,
      upvotes: -1,
      depth: 7,
      parentId: "o9r8aqj",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9rei7j",
    type: "custom",
    data: {
      label: `One that examines how the notion that “technology always creates new jobs” evolves in an a...`,
      fullText: `One that examines how the notion that “technology always creates new jobs” evolves in an age when AI replaces human creativity beyond the limits of previous technological revolutions.

`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 8,
      parentId: "o9r8x5b",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "od4tju9",
    type: "custom",
    data: {
      label: `I really appreciate you bringing this up from an engineering POV.  You make some great poi...`,
      fullText: `I really appreciate you bringing this up from an engineering POV.

You make some great points—Job loss is not a 1:1 cause and effect with AI advancements, it’s multi-factorial and at present the incentives/behavioral economics do not sufficiently support the timely creation of mechanisms to mitigate the knock on effects by those driving the change. 

Also to your point, it’s not the change that’s concerning, it’s the speed of change and society’s ability to adapt to it in a way that doesn’t exacerbate existing challenges. 

I see 2 things happening at once:

1. There is a lot of hype; the AI we see today is not sufficient to totally replace most jobs, but the promise and perception for many business leaders is that it is (or at least good enough).

2. The capabilities are rapidly improving so the above may change. Given the current trajectory…it may plateau, there may always be a human involved, but the number of humans needed will decrease substantially.

Quality may degrade but not sufficiently to offset the cost benefit in areas with high concentrations of labor (transportation, customer service, etc.).

I wish I had evidence for you to counter your argument…`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "o9orxfb",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9osc91",
    type: "custom",
    data: {
      label: `[deleted]`,
      fullText: `[deleted]`,
      isOriginalPost: false,
      upvotes: 60,
      depth: 2,
      parentId: "o9onlag",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9owaj8",
    type: "custom",
    data: {
      label: `One way to look at it is that, as it becomes cheaper and easier to produce things (by redu...`,
      fullText: `One way to look at it is that, as it becomes cheaper and easier to produce things (by reducing expensive human involvement), we won't need as much income to take advantage of these improvements. 

If everyone can write code with a few dollars on a machine then code loses value and approaches free.  You don't need to buy software if you can ask a machine to write it for you or ask for the answer you want without more software.

Automation makes things cheaper.  That $200 TV today would have cost $10,000 a decade ago.  Even cheap TVs 20 years ago cost more in real dollars.  You don't need the same level of income to buy things made by automation as you did before they were automated.

And you can't sell anything without customers.  If people can't afford the $200 TV then they will become $100 and we can't produce them that cheaply then they will stop producing them.  If your job pays less then you can buy less and producers need to figure out a way to solve that, which usually means reducing costs even further.`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 3,
      parentId: "o9osc91",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9oygj0",
    type: "custom",
    data: {
      label: `I dunno how we can make that argument when basic necessities are insanely expensive especi...`,
      fullText: `I dunno how we can make that argument when basic necessities are insanely expensive especially in comparison to income right now. Sure maybe a $200 TV would've cost 10,000 dollars (or more accurately, just not existed) in previous eras, but a basic sustainable diet now costs a large chunk of the everyman's paycheck, let alone their rent or medical bills. So automation has maybe made some consumer products or hardware cheaper but it has not had the same effect on the shit we need to survive. 

So the statement that we "won't need as much income" seems to be purely speculative and doesn't really have any evidence in history. `,
      isOriginalPost: false,
      upvotes: 29,
      depth: 4,
      parentId: "o9owaj8",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p4sm9",
    type: "custom",
    data: {
      label: `Food costs a lot because of all the humans involved in getting it to you, particularly nea...`,
      fullText: `Food costs a lot because of all the humans involved in getting it to you, particularly near the end of the line.  We can either automate the delivery and sales even more or start growing our own food again or become farmers.  Maybe not that.

More likely it is rent and housing that will suffer in price before food does.  If you can't afford rent and food you get food.`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 5,
      parentId: "o9oygj0",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p75ct",
    type: "custom",
    data: {
      label: `I'm not sure you're aware of how much automation is involved in food production. `,
      fullText: `I'm not sure you're aware of how much automation is involved in food production. `,
      isOriginalPost: false,
      upvotes: 11,
      depth: 6,
      parentId: "o9p4sm9",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p8rgs",
    type: "custom",
    data: {
      label: `Like I said, it is mostly closer to the end of the pipeline.  The staff at the store and d...`,
      fullText: `Like I said, it is mostly closer to the end of the pipeline.  The staff at the store and distribution are a significant part of the cost, along with rent and other facilities at the store.

I can buy a pineapple for less than $5 from Costa Rica, a lot of the process is very inexpensive, but clearly a lot of it is expensive enough to be charging more every month for fresh food.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 7,
      parentId: "o9p75ct",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9q08c3",
    type: "custom",
    data: {
      label: `&gt;Automation makes things cheaper  It does! But in a capitalistic society, companies cha...`,
      fullText: `&gt;Automation makes things cheaper

It does! But in a capitalistic society, companies charge what people are willing to pay to generate the maximum profits, not necessarily what it costs to produce. Take Nike, for example... Many of their shoes cost only a few dollars to make in materials and labor, yet they sell for well over $100. Automation might lower production costs, but prices usually reflect brand perception and demand more than efficiency.`,
      isOriginalPost: false,
      upvotes: 18,
      depth: 4,
      parentId: "o9owaj8",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9qn3hv",
    type: "custom",
    data: {
      label: `Sure, but this isn't about brand perception, this is a question of what the entire economy...`,
      fullText: `Sure, but this isn't about brand perception, this is a question of what the entire economy will do.  If automation causes lower wages then Nike will have to lower prices to remain profitable.  If not, they could go out of business when people realize spending that much in shoes isn't worth it (if I'm spending $100 on shoes they must last for at least 5 years of daily use).

People with less money will be willing to spend less money and things will get cheaper as a result, down to a minimum of production cost, and that will also get cheaper with more automation.  As wages approach 0 so will prices.`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 5,
      parentId: "o9q08c3",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9r3vbn",
    type: "custom",
    data: {
      label: `This is overly idealistic about how this is likely to proceed. If AI replaces 90% of non-p...`,
      fullText: `This is overly idealistic about how this is likely to proceed. If AI replaces 90% of non-physical jobs (as seems plausible, though obviously not guaranteed), there's no amount of price adjustment that can happen to cover the cost of living when various resources remain scarce. Prices can't go to zero, but wages can.`,
      isOriginalPost: false,
      upvotes: 13,
      depth: 6,
      parentId: "o9qn3hv",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9rbf9i",
    type: "custom",
    data: {
      label: `You're making huge assumptions about the margins these companies operate in. If they can't...`,
      fullText: `You're making huge assumptions about the margins these companies operate in. If they can't lower their prices because of production costs and nobody buys, they'll fail.

Also, there's one *huge* assumption everyone here is making: the cost of automation via generative AI will remain static. It won't. If there's anything we've learned from companies like Amazon it's that once they gain enough market share, they can and will charge whatever they want. Give it to them for cheap at the beginning, get them to depend on it, then jack up the prices. Why do you think all these VC companies are throwing so much money at AI companies? Because they know this is the strategy.`,
      isOriginalPost: false,
      upvotes: 7,
      depth: 6,
      parentId: "o9qn3hv",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9yb1zo",
    type: "custom",
    data: {
      label: `Yeah, as wages fall and jobs are lost, the only thing that will matter is if you own land ...`,
      fullText: `Yeah, as wages fall and jobs are lost, the only thing that will matter is if you own land or a home. Real assets and raw and refined resources will matter. 

Money is already mattering less and less to the upper class, it isn’t real. Elon can borrow against his portfolio, he can open a $10billion dollar life insurance policy and borrow from it every year so he doesn’t have to pay taxes. He can merge companies and hype the stocks to the moon and borrow against his shares in the company. The elite don’t understand what affordability is or care about the price of groceries because they don’t have to even purchase anything themselves, they tell someone to go get it for them. Pretty much everything can be a business expense owned by an LLC owned by a subsidiary of a subsidiary or their parent LLC. If they buy a car, it’s a car their driver drives them around in, so it isn’t a personal vehicle. If they give speeches or cameo in a training video or commercial or tv show, their clothes and styling like haircuts and surgeries can be expensed. 

Money is a measure of power, and once they have all of it we don’t offer them anything anymore. `,
      isOriginalPost: false,
      upvotes: 3,
      depth: 7,
      parentId: "o9rbf9i",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p3rkn",
    type: "custom",
    data: {
      label: `&gt; And you can't sell anything without customers. If people can't afford the $200 TV the...`,
      fullText: `&gt; And you can't sell anything without customers. If people can't afford the $200 TV then they will become $100 and we can't produce them that cheaply then they will stop producing them. If your job pays less then you can buy less and producers need to figure out a way to solve that, which usually means reducing costs even further.

Great, so the glorious AI future is just accelerated enshitification?  Fan-fucking-tastic.`,
      isOriginalPost: false,
      upvotes: 9,
      depth: 4,
      parentId: "o9owaj8",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa089nw",
    type: "custom",
    data: {
      label: `&gt; One way to look at it is that, as it becomes cheaper and easier to produce things (by...`,
      fullText: `&gt; One way to look at it is that, as it becomes cheaper and easier to produce things (by reducing expensive human involvement), we won't need as much income to take advantage of these improvements.


How do you think that mechanism reconciles with publically traded companies, share prices and the stock market?


The people controlling a large chunk of the political landscape and business world very much **do** want a reduction in labor costs, but **don't** want a reduction in revenue. Normally competition would be the factor that drives prices down (or the price drop is compensated for by a larger market who can afford the product), but that won't be the case when:


1. This same revolution is putting huge swathes of people out of a job (hence no expendable income and a **smaller** market)
2. The capabilities to produce in this way are concentrated to a handful of megacorps.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 4,
      parentId: "o9owaj8",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa3jbdu",
    type: "custom",
    data: {
      label: `They don't want a reduction in revenue so they will have to find a way to produce things t...`,
      fullText: `They don't want a reduction in revenue so they will have to find a way to produce things that people with less employment can afford.  The more they automate the cheapest production becomes and the lower they can make prices while still raining a profit.  If they can't do that they go out of business.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 5,
      parentId: "oa089nw",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9shfw9",
    type: "custom",
    data: {
      label: `I have a somewhat unique perspective here.  I work as an automation engineer and I’m also ...`,
      fullText: `I have a somewhat unique perspective here.

I work as an automation engineer and I’m also a local elected official in a red area and so I run in conservative political circles.

What I can tell you is that many right wing people are now speaking quietly about the need for something like a UBI. The questions are around when and how, and there is absolutely a quiet acceptance that the current systems must be altered.

Now, I’m young-ish for politics — mid 40s. But my age group is slowly but surely replacing the Boomers in various positions from local through state levels. Some of the older cohorts are entirely checked out; having successfully “won” at life, they primarily care about (a) maintaining their social security and (b) keeping their property values high in addition to (c) rejecting leftist ideology that feels wholly alien to their way of life.

However, more than a few of that generation are also quietly shifting when it comes to their views on the 21st Century economy. After all, they have children and grandchildren who checked all the right boxes but are still getting crushed by the whipsaw job market while falling further behind on key life progression indicators like homeownership.

Many are also genuinely terrified of AI.

But more than you might think recognize that massive and unstoppable change is underway even if they can’t quite put their finger on what that change is.

Additionally, the “common guy” right is now just as skeptical of the oligarch class as a Bernie bro. They just don’t agree on how to deal with it and generally distrust and despise one another.

Nevertheless, what would say here is that nature is self correcting. If these types of discussions are bubbling up in a deep red area - I would imagine they are more widespread than you might think.

We will adapt society to the newfound technological reality. How long it will take and how painful it will be - those are the open questions.`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 3,
      parentId: "o9osc91",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa3yipp",
    type: "custom",
    data: {
      label: `What do you mean by adapting society? You mean having UBI, or making the work week 20 hour...`,
      fullText: `What do you mean by adapting society? You mean having UBI, or making the work week 20 hours instead of 40?


Because the way I believe it will happen is that everyone just gets squeezed by corporations to work even more. You launch an LLM on a task, and then you go and do something else and constantly have your attention being grabbed by all these 'human in the loop' workflows.


 Especially because genAI is so unreliable that all its output has to be carefully reviewed. So now instead of just doing your own job, you're also reviewing the generated text of 5 agents, so effectively reviewing the output of multiple people in one job for the same or less amount of money.


This is also backed up by a recent study looking at over 100k workers:


https://archive.ph/lxxhU`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 4,
      parentId: "o9shfw9",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa45k28",
    type: "custom",
    data: {
      label: `I’m not exactly sure how society will adapt - but I know it will.  You provided two possib...`,
      fullText: `I’m not exactly sure how society will adapt - but I know it will.

You provided two possible paths; there are certainly many more and they are not mutually exclusive.

As for the reliability of the agents, I am confident of a few things:

1. The underlying models themselves are powerful enough to handle most common white collar tasks already

2. The problem is mostly that most workers in these workflows aren’t skilled with the concept of abstracting their tasks

3. Software engineers are very good at abstracting  their tasks and are moving into roles that will do just that

4. Both the models themselves and the integration of those models will only improve from here; that is, the performance benchmarks you see now are lower than they will ever be in the future.

The above notes lead me to conclude that work as we now know it will be radically overhauled.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 5,
      parentId: "oa3yipp",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oahz8tb",
    type: "custom",
    data: {
      label: `1. What do you consider a common white collar task that an LLM can handle? Can handle with...`,
      fullText: `1. What do you consider a common white collar task that an LLM can handle? Can handle with how much oversight, or do you mean autonomously?


2. LLMs generate text which has no relationship to facts, it doesn't matter how precise you engineer your prompt or how well you abstract a task. "Hallucination" is a feature, not a bug.


3. Agree with that :D



4. That's also not true, in some metrics the latest models performed worse than a previous generation. I'll have to dig up what it was exactly, I can't remember right now but it was in OpenAIs model schematic or whatever that paper is called that are released with new LLM versions.



`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 6,
      parentId: "oa45k28",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oai3smu",
    type: "custom",
    data: {
      label: `I’m currently building something that works on billing reconciliation.  I’ve used it to pr...`,
      fullText: `I’m currently building something that works on billing reconciliation.

I’ve used it to prototype a a signals detection algorithm in about 96 hours that performed on par with human expert analysis.

Someone I know used it to find about $2m in improper healthcare claims.

Another person I know has stood up a financial analyst agent and deployed it - reducing an analytics team from about a dozen down to three.

I know of one team that has entirely done away with most product management by just having an LLM document directly from code. 

Is it perfect - no. But we all damn well know that product documentation, analytics, and similar work also contains errors, so even if the LLM is not 100% accurate, that’s not the point. The question is: “is it at least as accurate as its human equivalent.” 

And in many cases, that answer is already yes. And it’s only going to get better.

I personally know of dozens of examples.

Hallucination is a thing, but it can be accounted for pretty well by anyone who actually bothers to review the output.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 7,
      parentId: "oahz8tb",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oamvx2f",
    type: "custom",
    data: {
      label: `Alright I'm not gonna try to dispute your anecdotal experience, but all of these examples ...`,
      fullText: `Alright I'm not gonna try to dispute your anecdotal experience, but all of these examples just reinforce my earlier point about how the future of work is going to continue the trend of squeezing human labour, and how people's jobs will be to review LLM output equivalent to an entire teams' while being paid the same or less and working longer hours.


E.g.
&gt;Hallucination is a thing, but it can be accounted for pretty well by anyone who actually bothers to review the output.


This is the problem though, no one can keep up with the output of infinite AI agents producing infinite text




&gt;Is it perfect - no. But we all damn well know that product documentation, analytics, and similar work also contains errors, so even if the LLM is not 100% accurate, that’s not the point. The question is: “is it at least as accurate as its human equivalent.”


Yes I've heard this before - "well people make mistakes too". But what is the point of automation that doesn't work 100% (or close to it) of the time? That is the point of automation - that's the definition of it, to remove manual errors and increase precision/quality/accuracy.


 Now we are replacing auditable human errors with un-auditable(is that a word? Lol) machine errors at a massive scale that people can't keep up with.


A few years ago if I tried to sell stakeholders on automating some process, but that automation only works 70% of the time, and does unpredictable potentially catastrophic stuff the rest of the time, I would've been laughed out of the room.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 8,
      parentId: "oai3smu",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9ozal4",
    type: "custom",
    data: {
      label: `I think it's more likely we invent new jobs that essentially amount to "bullshit jobs" to ...`,
      fullText: `I think it's more likely we invent new jobs that essentially amount to "bullshit jobs" to steal David Graeber's term. The idea being that corporations (currently) are filled with jobs that do not directly impact the actual production of the company's product in any way. These jobs were created out of the decades long shift to office work over the 20th century and they essentially serve no purpose other than to "be jobs" for people. I can see a reality where a new kind of bullshit job is created to help run automation even if it is ultimately somewhat unnecessary. 

We are purpose driven animals, and I think we will eventually find a way to reorganize society if AI is as disruptive as silicon valley is pitching it as currently. That doesn't mean there won't be torrential conflict and a lot of shitty years ahead (as there were in previous technological shifts). `,
      isOriginalPost: false,
      upvotes: 4,
      depth: 3,
      parentId: "o9osc91",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p3617",
    type: "custom",
    data: {
      label: `[deleted]`,
      fullText: `[deleted]`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 4,
      parentId: "o9ozal4",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9sar5r",
    type: "custom",
    data: {
      label: `In an optimal world there will be a federal job guarantee in place to offset these job los...`,
      fullText: `In an optimal world there will be a federal job guarantee in place to offset these job losses. People need incomes in order to be the consumers that we are required to be by capitalism. 

I think many would use a universal basic income as "sit down money" and make many people feel kind of useless. But a federal job guarantee, combined with a generous caring allowance for those with dependents, could reinvigorate communities that have already been decimated by automation. 

We are experiencing a big leisure deficit , and loneliness epidemic right now and it is taking a toll on everyones mental health. So I guess my argument is - yes - less formal employment  - but potentially more meaningful and useful jobs will arise and neighbourhoods might return to being places with people in them during the day. Rendering them safer, and kinder, and more cohesive.

AI is already kind of an employer of people. But these are not the kind of jobs you want and lean towards exploitation really...

[https://ia.acs.org.au/article/2026/ai-bosses-causing-headaches-for-gig-workers.html#:\\~:text=%E2%80%9COur%20research%20shows%20that%20if,route%20to%20avoid%20being%20late](https://ia.acs.org.au/article/2026/ai-bosses-causing-headaches-for-gig-workers.html#:~:text=%E2%80%9COur%20research%20shows%20that%20if,route%20to%20avoid%20being%20late)

`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 5,
      parentId: "o9p3617",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9rogvw",
    type: "custom",
    data: {
      label: `Never been inched towards?  Communist revolutions for a period of time had almost half the...`,
      fullText: `Never been inched towards?  Communist revolutions for a period of time had almost half the population living under communism.  It's not a good solution obviously but you can't claim it wasn't tried.`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 3,
      parentId: "o9osc91",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9ou450",
    type: "custom",
    data: {
      label: `It’s a road full of challenges (people that benefits from the current system, and people w...`,
      fullText: `It’s a road full of challenges (people that benefits from the current system, and people who are scared of changes), but it’s not a joke. 

I can’t see it happening in my lifetime only because many people are resisting it. Too many people want to argue “whether” it’s a good idea when we really should be discussing how to make it happen (not necessarily this solution, but resource distribution without a genuine need for workforce). `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "o9osc91",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9ouysz",
    type: "custom",
    data: {
      label: `[deleted]`,
      fullText: `[deleted]`,
      isOriginalPost: false,
      upvotes: 15,
      depth: 4,
      parentId: "o9ou450",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9ospf6",
    type: "custom",
    data: {
      label: `Mischaracterizing the debate and framing scepticism of capitalism as "cynicism" isn't a gr...`,
      fullText: `Mischaracterizing the debate and framing scepticism of capitalism as "cynicism" isn't a great way to approach OP's view. You're acting as if a fundamental transformation of society that breaks the mold of capitalism is inevitable. That's akin to a socialist revolution and very much not guaranteed. You've sidestepped OP's point entirely in favor of a straw man position that turns out to be even more supportive of OP's argument.`,
      isOriginalPost: false,
      upvotes: 21,
      depth: 2,
      parentId: "o9onlag",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pm4er",
    type: "custom",
    data: {
      label: `That’s cute, but so entirely unrealistic given every historic and even vaguely analogous m...`,
      fullText: `That’s cute, but so entirely unrealistic given every historic and even vaguely analogous modern example it may as well be a joke. `,
      isOriginalPost: false,
      upvotes: 14,
      depth: 2,
      parentId: "o9onlag",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa1m4j0",
    type: "custom",
    data: {
      label: `The necessities for survival still require money because the marginal cost of essential go...`,
      fullText: `The necessities for survival still require money because the marginal cost of essential goods never falls to zero. While technology reduces the marginal cost of many things, physical necessities, food, housing, energy, healthcare, retain real costs tied to resources, infrastructure, and maintenance.

Labor has never been a requirement for production, it has only historically been correlated with it. Some individuals produce labor whose value exceeds their wages, while others produce less value than they are paid. As automation and technology improve, this divergence widens.

What we are now observing is the general devaluation of human labor. Production continues to increase, but the number of domains where humans can produce economically valuable labor is shrinking. Productivity is increasingly driven by capital, technology, and energy rather than human work.

When production rises while labor demand falls, the traditional mechanism that distributes resources, wages for labor, begins to break down. If survival still requires money but fewer people can obtain money through labor, the system faces a structural contradiction.

Resolving this contradiction requires shifting away from a system where survival depends on labor income. In effect, it pushes toward an economy where human welfare is valued independently of economic productivity, something closer to a command or administratively directed distribution system rather than pure labor markets.

TLDR: like a cat or a dog, animals have an economic cost greater than their labor output. For humans to exist requires valuing the human inherently greater than the economic cost to maintain a human.
`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "o9onlag",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9sdoha",
    type: "custom",
    data: {
      label: `Find me a pro ai person who is also pro dismantling capitalism - something which is necess...`,
      fullText: `Find me a pro ai person who is also pro dismantling capitalism - something which is necessary in a post ai world. `,
      isOriginalPost: false,
      upvotes: 3,
      depth: 2,
      parentId: "o9onlag",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9t89j0",
    type: "custom",
    data: {
      label: `Capitalism with AI taking 99% of jobs would probably mean a world with a super-rich busine...`,
      fullText: `Capitalism with AI taking 99% of jobs would probably mean a world with a super-rich business guys who own the AIs, and a vast underclass living off UBI and not having to work. The business guys will reluctantly consent to pay taxes to support this, so they can continue to sell their products.`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 3,
      parentId: "o9sdoha",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9ufs8z",
    type: "custom",
    data: {
      label: `Can you imagine just how high those taxes will need to be to pay for literally everyone's ...`,
      fullText: `Can you imagine just how high those taxes will need to be to pay for literally everyone's cost of living. Good luck convincing the billionaires who currently hold the levers of power and who scream if you try to raise them 1% - to accept an 80% + tax rate at the lowest level 


Honestly at the stage ai replaces human labour of all types at a 60% rate we need to start designing a post capitalist world in which we don't exchange money for goods `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 4,
      parentId: "o9t89j0",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9wb2t3",
    type: "custom",
    data: {
      label: `If individuals can no longer create value through work, they no longer have any leverage o...`,
      fullText: `If individuals can no longer create value through work, they no longer have any leverage or power. No reason to keep them alive.

If we no longer have work, current wealth forever determines ones hierarchical position in society. No possibility to deliver value in exchange for something.

If work is no longer necessary, we are fully at the mercy of those in power to throw us a bone. Fully at the mercy of their benevolence. Does that seem like a happy future to you?`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "o9onlag",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9wdeen",
    type: "custom",
    data: {
      label: `&gt;If work is no longer necessary, we are fully at the mercy of those in power to throw u...`,
      fullText: `&gt;If work is no longer necessary, we are fully at the mercy of those in power to throw us a bone. Fully at the mercy of their benevolence. Does that seem like a happy future to you?

What makes you think this would be a change in the status quo?`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 3,
      parentId: "o9wb2t3",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9wnqbb",
    type: "custom",
    data: {
      label: `Throughout history, the elite has always needed the lower classes to work for them. No mat...`,
      fullText: `Throughout history, the elite has always needed the lower classes to work for them. No matter how tyrannical the society, the demand for human labor was always there. If labor is no longer needed, lower classes will now be 100% dependent on the benevolence of the elite to get anything.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 4,
      parentId: "o9wdeen",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9w3elu",
    type: "custom",
    data: {
      label: `Tbh, I think people are acting crazy if they think AI at it's level is going to replace th...`,
      fullText: `Tbh, I think people are acting crazy if they think AI at it's level is going to replace the need for humanity to work. It will just mean that higher level work needs to be done now that the grunt work is automated.

We might be heading into a world where some kind of "PhD" is a requirement for any technical job as you can't provide any value elsewise. There's still plenty of problems to solve that LLMs simply can't`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "o9onlag",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p0l7x",
    type: "custom",
    data: {
      label: `You may be right, but your argument is dependent upon knowing an unknowable future.  As yo...`,
      fullText: `You may be right, but your argument is dependent upon knowing an unknowable future.  As you’ve mentioned every previous technological development that people claimed would drastically remove jobs did not: Computers, robotics, automation etc…. I know that in a lot of jobs it will reduce the time commitment, I for example am a lawyer, while I would never use AI to write for me it can increase how fast I complete procedural tasks (so long as I review it) and how fast I can get accurate cases for research purposes, as a result I can handle more work (and focus on the work that actually necessitates my skills) while charging clients less, this will theoretically lower costs to the consumer and therefore make a greater base of customers and therefore more work in my profession.  

This is one possible example, but ultimately it’s just a giant maybe and we can’t predict the future to such an extent all we can judge accurately is that in the past technological advancements created jobs.  It could reduce costs which could increase the consumer base which in turn could create higher demand and therefore create more jobs in the long run.  We just don’t know, it’s an impossible certainty to predict.`,
      isOriginalPost: false,
      upvotes: 38,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9r44mq",
    type: "custom",
    data: {
      label: `Yes, I agree it's impossible to predict an unknowable future, but I'm trying to connect th...`,
      fullText: `Yes, I agree it's impossible to predict an unknowable future, but I'm trying to connect the dots based on my experience as a software engineer and extrapolate from there.   
  
AI in coding has moved past the productivity gains phase of just helping out to now being able to accomplish most tasks. Sure, sometimes you have to babysit it, but it's been surprisingly good and is getting better at an accelerating pace. Even just a year ago, it was hard to imagine AI coding could be doing what it does today.   
  
Coding is also a whole different beast from legal work. There are hard and fast tests to determine correctness, making it a much cleaner end-to-end system.  But that's also what makes it so significant coding being the first category AI cracks accelerates progress in every other category, since software is the tool used to build everything else. 

Legal work, I'd imagine, is a completely different story .. though not entirely immune to AI replacing it in more fundamental ways than just as an efficiency tool.`,
      isOriginalPost: false,
      upvotes: 12,
      depth: 2,
      parentId: "o9p0l7x",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9ru65c",
    type: "custom",
    data: {
      label: `Sure, but the question is will AI create more jobs generally, not jobs in a specific indus...`,
      fullText: `Sure, but the question is will AI create more jobs generally, not jobs in a specific industry.  Even in software production though, if it is easier to make programs, there will be more software made, the software will then cost less and create a bigger demand and there will be more companies developing more specific software to compete in the bigger market and have to hire people.  

You’re right, that there will likely be less coders, sure.  There are far less secretaries now than before computers.  There are far less blacksmiths too.  There’s no switchboard operators or video store clerks, or Ice cutters, or newspaper copy boys.  The needs for particular trades become obsolete regularly, but that doesn’t mean the gross number of jobs will decline.

I do feel sorry for coders because likely when they finished their education they thought themselves on the cutting edge of the future, but that’s unfortunately no longer the case.  `,
      isOriginalPost: false,
      upvotes: 14,
      depth: 3,
      parentId: "o9r44mq",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9tv1d3",
    type: "custom",
    data: {
      label: `For the coding part:   Maybe cold software engineering gets reduced to people with analyti...`,
      fullText: `For the coding part:


Maybe cold software engineering gets reduced to people with analytical skills and not just coding and there are new jobs being created in biomedical engineering where they use AI tools for good , and it's growing `,
      isOriginalPost: false,
      upvotes: 2,
      depth: 3,
      parentId: "o9r44mq",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9ureao",
    type: "custom",
    data: {
      label: `With the exception of charitable and subsidized businesses, there are zero corporations th...`,
      fullText: `With the exception of charitable and subsidized businesses, there are zero corporations that lower prices because costs go down. That simply doesn't exist. It's a fairy tale. 
The only reason costs will be lowered is if the consumer stops paying at that price point. 
Add consolidation of the producers of necessity gooda in the hands of fewer and fewer corporations into the mix and prices become more resistant to shifts in income: if you own the competition, you can control the prices much better. 


Because of fractional-reserve banking, credit cards, etc. the buying power of the consumer remains artificially high. 


What we're going to see is expansions of things like subscription services, monthly installments, 50-year mortgages, etc to keep the consumer forever in debt. `,
      isOriginalPost: false,
      upvotes: 4,
      depth: 2,
      parentId: "o9p0l7x",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9uy2o4",
    type: "custom",
    data: {
      label: `You think that computers were cheaper before the PC?  That portable phones were cheaper be...`,
      fullText: `You think that computers were cheaper before the PC?  That portable phones were cheaper before the cell phone?  Cars were cheaper before the Model T?  Is mailing letters cheaper than email? Buying CDs cheaper than streaming?  Data storage cheaper in the 80s?  Lighting before LED?  A calculator in 1970 vs.  the free app on your cell phone?  Film production before digital?

I could go on and on because this “fairy tale” is literally how the economy has always worked.`,
      isOriginalPost: false,
      upvotes: 4,
      depth: 3,
      parentId: "o9ureao",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9vowqt",
    type: "custom",
    data: {
      label: `Most of the examples you gave are examples of market disruption and not reduction of cost ...`,
      fullText: `Most of the examples you gave are examples of market disruption and not reduction of cost of the original product. 
Disruption doesn't lower prices; it replaces the category. 

The creation of a new product category does not reduce the cost of the original product; it destroys the demand for the original product. 


Streaming isn't cheaper because Sony discovered that it would be cheaper to provide music to the consumer by streaming it. It is cheaper because of a market disruption by Spotify. Also, streaming has resulted in musicians earning even less. Which is exactly what AI will help corporations do more of. 


The Model T pricing was possible because of innovation but not motivated by/the result of a reduction in cost. Ford wanted to dominate the market. But in a sense, he created a market that wasn't really there. The workers couldn't afford cars so he paid them more and reduced the cost of cars by implementing mass production. A product no one can afford effectively has no market. 

Also the automobile industry has been heavily subsidized from the beginning. Without tax-financed roads and highways and and tax credits, there would be very little market for automobiles. 


Up until the point of market saturation, competitors reduce prices in order to capture market share. 
Once markets reach a saturation points, corporations compete by differentiation to regain margins lost by lowering prices. 
Those who can't succeed go out of business or are acquired by others.
And this is where consolidation happens because buying up the competition is one of the biggest factors of success for huge corporations. 
Conglomerates can control prices on a local level so they don't always need national control, e.g. several supermarkets (Kroger-Albertsons brands) in one city which appear to be independent chains but are actually one conglomerate with the same distribution channels. 
This also makes it possible to control the purchasing price because suppliers are forced sell to the same corporation. 
And when this corporation lowers the costs because there's no competition for the suppliers to sell to, do the conglomerates lower the the prices? No. Do they raise wages? No


Electronic goods such as laptops and cell phones can go down in price because of Moore's law, reduction of manufacturing costs, etc. but they don't go down in price because of these reasons, but rather because of changes in consumer buying power and competition. 
The first laptop or cell phone to hit the market was priced for the only consumer who could afford it: business people. The general consumer market didn't exist until prices could be lowered to a level consumers could afford. 


Sometimes a new product can only be released at a price consumers can afford because of subsidies and selling at a loss to gain market share. Example: Tesla owes much of its success to climate credits and EV tax credits for consumers. In order to grow through unprofitable years they had to price their luxury product at a price that consumers could afford. And that was largely possible because of subsidies. 


In summary, cost reduction is an enabler of price reduction not the motivation. 
Without competition, cost reduction would be captured as profit. `,
      isOriginalPost: false,
      upvotes: 3,
      depth: 4,
      parentId: "o9uy2o4",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9vpwkv",
    type: "custom",
    data: {
      label: `You can call it whatever you want.  Prices go down through innovation and competition that...`,
      fullText: `You can call it whatever you want.  Prices go down through innovation and competition that’s an economic fact.  You can argue about pedantics, terminology and motivations all you want, but the end result remains the same.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 5,
      parentId: "o9vowqt",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9yane4",
    type: "custom",
    data: {
      label: `So if LLMs completely replace court systems, judges, and attorneys, and legal services are...`,
      fullText: `So if LLMs completely replace court systems, judges, and attorneys, and legal services are provided via MCP calls, would you consider that a lower consumer price for legal services?
If the profession of attorney is eliminated and there are no more in-person services, does it still count as a lower price even though the system has changed?
If legal disputes are handled via model context protocol, that's innovation lowering the prices? `,
      isOriginalPost: false,
      upvotes: 2,
      depth: 6,
      parentId: "o9vpwkv",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9yi30p",
    type: "custom",
    data: {
      label: `I’m about as worried about that as I am that an inter-dimensional unicorn will attack me t...`,
      fullText: `I’m about as worried about that as I am that an inter-dimensional unicorn will attack me tomorrow.  `,
      isOriginalPost: false,
      upvotes: 2,
      depth: 7,
      parentId: "o9yane4",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa8ntgz",
    type: "custom",
    data: {
      label: `It may never happened. But what will happen for sure is many law firms will go out of busi...`,
      fullText: `It may never happened. But what will happen for sure is many law firms will go out of business because of llms carrying out services that law firms did.
And that will drive prices down at the law firms trying to compete. 
Which brings us back to the original point: prices are never lowered because of lower costs. 
That's a fairy tale. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 8,
      parentId: "o9yi30p",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa98qze",
    type: "custom",
    data: {
      label: `I’ve indicated numerous historical instances where they were.  I can additionally include:...`,
      fullText: `I’ve indicated numerous historical instances where they were.  I can additionally include: Televisions, computer storage, mid range smart phones, solar panels, LED lights, Steele, karosene, books, textile production etc…

I disagree with your premise that many law firms will go out of business because of LLMs.  LLMs may provide simple services to those who can’t afford a law firm and that’s great.  As a historical legal precedent we can look at  electronic legal research (westlaw and lexis) while the number of research clerks went down, the aggregate number of attorneys rose dramatically.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 9,
      parentId: "oa8ntgz",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9q4z2u",
    type: "custom",
    data: {
      label: `The problem is that you are in competition with other lawyers who may leverage AI more tha...`,
      fullText: `The problem is that you are in competition with other lawyers who may leverage AI more than you do, forcing you to compete on their terms `,
      isOriginalPost: false,
      upvotes: 10,
      depth: 2,
      parentId: "o9p0l7x",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9q6kzl",
    type: "custom",
    data: {
      label: `Okay, 40 years ago was the same thing with computers.  Part of a lawyer’s professional res...`,
      fullText: `Okay, 40 years ago was the same thing with computers.  Part of a lawyer’s professional responsibility is competence and that includes competence with applicable technology.  

If you’re suggesting that I’ll fail because others will use AI to write their briefs and other papers, that not a worry I have, because in present day this is failing spectacularly and leading those attorneys to sanctions.  AI can’t think and therefore cannot create novel ideas and arguments it merely regurgitates other arguments related to preexisting fact patterns different from any case at hand, so it can’t do what it is we’re paid to do.  If it could that would be AGI which to this day is still science fiction.  If AGI is developed and becomes relevant and viable that will be in the significant future and a problem for future generations to address.`,
      isOriginalPost: false,
      upvotes: 7,
      depth: 3,
      parentId: "o9q4z2u",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9rv9fo",
    type: "custom",
    data: {
      label: `The problem isn't really the lawyers who are too lazy to read the briefs that an AI genera...`,
      fullText: `The problem isn't really the lawyers who are too lazy to read the briefs that an AI generates, but the offices with genuinely committed associates that do use AI and *will* read everything that comes out before handing it off.

Like, in my field. We have the same problem. We get a lot of AI generated research that no one read before publishing. They aren't a threat since they weren't even relevant as competition before. The problem is that intern classes are getting A LOT smaller since one competent and hardworking intern using AI is worth a dozen competent and hardworking interns from a decade ago. 

The AI will do 80% of the work, but the intern will spend enough effort to make sure it meets standards. A white paper that would have taken a week might be achieved in a day or two. You can pay that one intern what you would have paid three and you're still saving money.`,
      isOriginalPost: false,
      upvotes: 6,
      depth: 4,
      parentId: "o9q6kzl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9r1a8e",
    type: "custom",
    data: {
      label: `It's more-or-less the same thing as computers, only it automates the legal thinking. A lot...`,
      fullText: `It's more-or-less the same thing as computers, only it automates the legal thinking. A lot of legal work is not novel, it's pattern-matching based on precedents and statute. That's what the latest wave of automation enables - AGI is not required. 

It doesn't have to be as good as a good lawyer, it just has to be good enough and almost free.`,
      isOriginalPost: false,
      upvotes: 4,
      depth: 4,
      parentId: "o9q6kzl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9xusk4",
    type: "custom",
    data: {
      label: `“Past technologies replaced human muscle or routine manual work.” I’m not sure this is a r...`,
      fullText: `“Past technologies replaced human muscle or routine manual work.” I’m not sure this is a reasonable summary. Even without AI computers had already decimated many creative and scientific fields. I imagine that computers killed a higher percentage of jobs than they created. They also freed up more labor to create more surplus - because people will be working, the rich will ensure that.

I don’t think “job creation” is the right thing to focus on, but instead the damage of drastic societal change. Many companies begin as entrepreneurial  endeavors discovering a new niche, not merely filling a known job that has been “created”. Jobs are discovered due to new opportunities or ideas, but some of those opportunities are very costly to fill, both for companies and the workers themselves. AI will drastically, drastically, drastically alter the price and profitability of most industries on the planet. This will create insane (and inefficient) profits, “creating” service/luxury jobs, but it will also rebalance the price structure of almost everything in the world, making new things profitable that previously weren’t and eliminating many other jobs and products.

At the end of the day, if people produce something it can be sold. The only question is whether the price pays the rent. When prices fluctuate a lot, new opportunities arise - and past opportunities implode spectacularly. 

What is coming is not simply job creation, it is a mass repricing of labor which will both create new opportunities for employment and end many careers. What is most impactful to society is not “job creation”, it is “minimizing the damage to the working / middle class”.

The damage was enormous in the Industrial Revolution, which led to enormous societal upheaval, violence, and labor rights. What happened in the offshoring revolution was a failure of government to minimize damage, of workers failing to fight for their own protections, an of misplaced anger leading to the most incompetent government in the US humanly possible. How we deal with the damage that is coming is the open question.

Recent history says: extremely poorly.`,
      isOriginalPost: false,
      upvotes: 6,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9y3ykt",
    type: "custom",
    data: {
      label: `I really appreciate your comment, it’s one of the more thoughtful ones in the thread. It g...`,
      fullText: `I really appreciate your comment, it’s one of the more thoughtful ones in the thread. It goes a bit deeper and touches on the psychological side of all this.

I’m curious though about a couple of things you mentioned. You said people will be working because “the rich will ensure that.” What makes you think the rich or owners of capital would want widespread employment if cheaper or automated labor is available?

And when you said AI will “make new things profitable that previously weren’t,” what kind of examples come to mind? `,
      isOriginalPost: false,
      upvotes: 4,
      depth: 2,
      parentId: "o9xusk4",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9znsos",
    type: "custom",
    data: {
      label: `Rich people own capital, which includes companies, which determine wages, which determine ...`,
      fullText: `Rich people own capital, which includes companies, which determine wages, which determine the standard of living of the working class. They also control the laws that get passed to an uncomfortable degree. The one thing that unites rich people is that every single day they decide that it is better to hoard money than to help people who are suffering, and for no good reason. Having the ability to make a large amount of money doesn’t make you rich - it’s the decision to hoard it that makes you rich. They don’t need all of the money they have, and other people absolutely do. There are many far less rich people that instead pay their workers more, or donate their money. You can’t say that paying workers more would hurt their company, because the profits that the owners make are also baked into the price of their company’s goods or services - they simply choose not to give it to someone else.

With that, we can be certain that the utopia that other people speak of where we no longer have to work because AI does so much for us will never come to be. 100 years ago, 40% of the US worked in agriculture, now it is 2%. We didn’t take that 38% less work required to grow food and use it to cut working hours - we actually work more and for less money than in recent decades. Progres is making the rich richer and the working class suffer more.

And why are working people working? It’s not because the owners of capital “want widespread employment” - it’s because they refuse to support a system where people can survive without working. See: the 38% reduction in agricultural labor. The 38% surplus went to the pockets of the rich, leaving everyone else to work to survive, as always. There is no point at which rich people decide that they have enough money and that they will allow their capital to be used for others’ wellbeing, or they would have already stopped hoarding wealth. Instead, they hoard more. Now, if AI and robotics outpaces humans by a huge margin, what does that mean? That means that humans will have to work harder for even less, because their work is worth consistently less and the rich do not hoard less wealth. No matter how rich you are, you can always build a bigger yacht. Or bigger spaceships. And while people may not be as good as robots, robots are still finite, so you can still find a way for humans to employ the working class to make your yacht slightly bigger. Again, there is no point at which the rich stop hoarding wealth for the benefit of others, so the only option is that humans’ work is progressively rewarded less.

As far as what AI will make profitable that wasn’t before, the possibilities are endless. Already AI is going a huge amount of coding that wasn’t possible before. It used to be prohibitively expensive to design custom software for an entity, now it will be orders of magnitude cheaper. That market will explode. It used to be prohibitively expensive to make Hollywood-grade media, be it for commercials or for family get-togethers or corporate trainings. Now it is fully automated. Basically anything that needs a computer will become much less expensive to produce. People are worried about Adobe, because they know that not only can AI edit your photos as good as Photoshop in an instant, a competitor will be able to cheaply write a brand new program to sell to end users that Adobe previously had to pay a lot of money to create (if their niche doesn’t get completely wiped out by generative AI instead). You don’t necessarily have to imagine something never-before-done to find disruption, the disruption may merely be that it used to be only accessible to large companies and now it is as easy to prepare as a Subway sandwich.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "o9y3ykt",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oayqh83",
    type: "custom",
    data: {
      label: `I don't think it's really about hoarding wealth. I think at an individual level, CEOs take...`,
      fullText: `I don't think it's really about hoarding wealth. I think at an individual level, CEOs take as much money as they can from their companies as they can, because that's the internal game they play with their company and their government. Most of this wealth is directly tied to the success of their company in the form of stocks. This smaller game definitely impacts our world, but I think the game that companies play within society plays a much bigger role.

Companies run under an incentive system where money/capital is the reward, and it determines whether they can continue playing the game or whether the company dies off. This is why companies are obsessed with gaining as much capital as they can. It's not about "hoarding wealth for no reason", it's about securing the means for the company to continue existing. Companies that try to genuinely prioritize anything else, like welfare for their employees, are working against their own self-preservation. It's the companies that ruthlessly pursue capital at any cost necessary that end up on top, and the ones that end up surviving the longest.

As for what this will mean with regards to AI, companies will (as they are already doing) cut jobs to try and maximize profits. What happens next truly comes down to whether AI can genuinely replace most jobs or not. If OP is wrong and AI creates as many jobs as it destroys, then it won't be much different from previous technological revolutions. In the long-term, reduced costs of production will mean goods affected by AI will go down, and we'll continue this messy status quo. 

If OP is right, then short-run profits will rise, but long-run they will collapse as mass unemployment means fewer people can actually buy the products the companies make. In this case, I think it will mean either significant societal changes (maybe like the implementation of UBI for example) or a complete transition to an entirely different system altogether (socialism? neo-feudalism? hell?).

  
I don't think this societal/capital analysis actually impacts OP's claim that AI will not create more jobs than it takes away. Companies will try to replace a job with AI so long as it increases their profit, because that is the programming of the company. I think already the marginal costs of AI are pretty low, but as production of AI increases, those costs will go down and it will become profitable in almost every situation. If almost every job is taken by this, there are few consumers left to buy products, so every company suffers as a result. They won't simply create new jobs to create new consumers, because that helps their competitors as much as themselves. It's a collective action issue, and it will most likely invoke some sort of massive societal changes to fix them.

Instead, I think whether AI replaces more jobs than it creates comes down to whether they physically can replace all the jobs. With previous inventions, the invention itself required creators and handlers; computers may have taken the jobs of tellers, data-entry clerks, switchboard operators, etc., but they also created far more jobs for people creating each intricate component of the computer in factories, jobs in design, research and marketing for computers, jobs in IT and computer science, coders, etc.. 

Ploughs, printing presses and computers cannot manage their own production, and so when they replaced one job, they created hundreds more for their own sake. But AI is a completely different story. We can replace all the factory workers creating AI components with AI. We can replace every person creating a marketing campaign for the latest AI with AI. We can create AI managers to manage other AI and AI manager managers to manage the AI managers. We may even be able to replace AI researchers with AI as well. This means that every job it creates, it can also replace at the same time. 

I originally intended to just respond to your point on "hoarding wealth" but ended up writing up an entire essay on my thoughts on the matter. Chances are, we're all completely wrong and we will all be shocked at what's to come. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 4,
      parentId: "o9znsos",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa4gti3",
    type: "custom",
    data: {
      label: `Rich people will want widespread employment because idle hands make the devils work. They ...`,
      fullText: `Rich people will want widespread employment because idle hands make the devils work. They absolutely do not want huge masses of starving people with nothing to do but make trouble. They'd love to pay people the minimum amount for maximum labor--serfdom would be great. But they will find those of us that outnumber them *something* to do to keep us busy and tired. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "o9y3ykt",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9oy2jb",
    type: "custom",
    data: {
      label: `This line of thinking comes from a purely capitalist perspective. It’s not written on the ...`,
      fullText: `This line of thinking comes from a purely capitalist perspective. It’s not written on the universe anywhere that we must spend our lives working for survival. Jobs exist in the first place because there’s no other option. It used to be that our “jobs” were to go out and hunt down animals, because we had no other choice. As quality of life improves, our jobs have become more niche and less directly urgent. AI might replace our current jobs but we will always find something to do, and it will probably be more enjoyable.`,
      isOriginalPost: false,
      upvotes: 9,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p45oi",
    type: "custom",
    data: {
      label: `&gt;This line of thinking comes from a purely capitalist perspective.  Very true but it's ...`,
      fullText: `&gt;This line of thinking comes from a purely capitalist perspective.

Very true but it's the reality we live in. 

&gt;AI might replace our current jobs but we will always find something to do, and it will probably be more enjoyable.

I think it will eventually but it won't be a smooth painless transition. 

  
`,
      isOriginalPost: false,
      upvotes: 26,
      depth: 2,
      parentId: "o9oy2jb",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p8fe5",
    type: "custom",
    data: {
      label: `What's the quote again? It's easier to imagine the end of the world than the end of capita...`,
      fullText: `What's the quote again? It's easier to imagine the end of the world than the end of capitalism?

That seems applicable to the discourse about AI.

That being said, I wouldn't bet against capitalism yet. And capitalism demands labor, and an active human consumer base, in my opinion.`,
      isOriginalPost: false,
      upvotes: 15,
      depth: 3,
      parentId: "o9p45oi",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9q6ajq",
    type: "custom",
    data: {
      label: `&gt;capitalism demands labor, and an active human consumer base, in my opinion.  I agree. ...`,
      fullText: `&gt;capitalism demands labor, and an active human consumer base, in my opinion.

I agree. I think this will be the domino that falls and pushes the government to finally make changes. As AI replaces jobs and consumers weaken, the economy will start to feel it. Will those changes still follow capitalist logic, or will we end up creating something completely different?  `,
      isOriginalPost: false,
      upvotes: 2,
      depth: 4,
      parentId: "o9p8fe5",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9qjyp7",
    type: "custom",
    data: {
      label: `&gt; Will those changes still follow capitalist logic, or will we end up creating somethin...`,
      fullText: `&gt; Will those changes still follow capitalist logic, or will we end up creating something completely different?

The latter, I prefer optimism to cynicism`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 5,
      parentId: "o9q6ajq",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9qozy0",
    type: "custom",
    data: {
      label: `It would be the first time in human history we create an equitable system, but hey, there’...`,
      fullText: `It would be the first time in human history we create an equitable system, but hey, there’s a chance for everything I suppose `,
      isOriginalPost: false,
      upvotes: 5,
      depth: 6,
      parentId: "o9qjyp7",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p8w4p",
    type: "custom",
    data: {
      label: `Are there any examples of large societal and cultural changes in history that were smooth ...`,
      fullText: `Are there any examples of large societal and cultural changes in history that were smooth and painless?`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "o9p45oi",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9q7e95",
    type: "custom",
    data: {
      label: `Not really ... large societal change is almost always messy and painful for someone. But t...`,
      fullText: `Not really ... large societal change is almost always messy and painful for someone. But technology is probably the biggest exception to that rule. It's one of the few forces that can drive massive change while expanding the overall pie rather than just redistributing it, which tends to make transitions less zero-sum and more broadly tolerable.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 4,
      parentId: "o9p8w4p",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9ur6dh",
    type: "custom",
    data: {
      label: `It’s kind of revisionist history that past tech breakthroughs just replaced manual labor j...`,
      fullText: `It’s kind of revisionist history that past tech breakthroughs just replaced manual labor jobs. Besides that those were most jobs and if you told them most these jobs won’t exist they’d have as tough a time believing we still have more jobs and tons of people sit at a desk in an office as you do with our future.

I wish I had the source but the computer did actually disrupt the job industry, not just manual labor, the way you imagine AI will. The list of most common office jobs pre internet were largely wiped out. If you watch an old movie taking place in an office you might notice the mail room was kind of the bottom floor entry level job for people to get their foot in the door and that got wiped out. Our current equivalent might be like a low level analyst or data entry. 

Also a personal anecdote, my Grandpa worked on Wall St as a chart maker in the pre internet days. No excel, PowerPoint or anything so she and others had the job of making these charts which also no longer exists thanks to tech breakthroughs and still there are more office jobs than ever. 

Lastly you’re likely being oversold on AI. All the doomers of AI really originate from people selling AI, it’s an odd dynamic. Part of it is freaking you out into buying the latest model, using some agent tool, etc to keep up or make lots money now or you’ll end up in the permanent underclass! Almost none of this stuff you hear is in good faith. Iv used AI a fair amount and find it pretty lacking in capabilities and don’t see it getting past a lot of obstacles. It helps imo to understand AI isn’t really any sort of intelligence, it’s a web crawler paired with a language model basically generating words in a sequence that seem to make sense like an advanced autofill. That’s a long ways off from it actually “knowing” things and being able to take information then create and idea or make a discovery that doesn’t exist yet. 

Lastly I’ll give you an example of how looking at computers you’d think jobs would cease to exist with all their capabilities and yet they just persist. 

Most clear to see imo with white collar manufacturing/distribution jobs. Lots of jobs in this around planning what to make, how much, in what order, using what machines, how long that will take, where to ship it to, and what to bring in to replenish materials. 

In theory a computer could just look at a forecast, know all the inputs required, place POs for materials, schedule and prioritize the creation of goods in the most profitable way, and just run simulations giving you the best outcome. Yet all these jobs still exist and despite all the tech capabilities even pre AI the idea that the planning and management of manufacturing and distribution can be done almost solely by computer and ERP systems is not feasible. 

Basically on paper it looks like an old tech breakthrough could feasibly eliminate a huge swathe of jobs yet the breakthrough happened and the jobs are still necessary because all of these tiny little things you can’t even think of unless you’ve worked in depth in that environment. `,
      isOriginalPost: false,
      upvotes: 8,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9v5wxm",
    type: "custom",
    data: {
      label: `My whole argument is I find it hard to compare AI to past technological advances.     Most...`,
      fullText: `My whole argument is I find it hard to compare AI to past technological advances.    
Most might think of it as a tool for now, but it’s already showing signs of recursively improving itself e.g. [https://github.com/karpathy/autoresearch](https://github.com/karpathy/autoresearch) and coming up with novel, creative solutions to problems humans haven’t solved yet. To be fair, it’s doing this in a brute-force way running experiments at a scale and rate no human team can match. It’s doing it in an end-to-end environment that can be tested and verified.

To be clear I'm not a doomer and I have nothing to sell I'm actually very optimistic about Ai   
  
  

  
`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "o9ur6dh",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9s34qv",
    type: "custom",
    data: {
      label: `Id argue against the premise that AI _can_ replace creative fields in many cases  I mean r...`,
      fullText: `Id argue against the premise that AI _can_ replace creative fields in many cases

I mean really think about it: do you, or anyone else you know, want to go see an AI generated movie? Do you want to listen to AI generated music? I think people would be genuinely offended by being asked to listen to AI music over human music 

There’s a whole human element to these things, like a lot of people go to a movie because they like that specific director. Or with music, what would a band like nirvana be without Kurt cobain?`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9seklw",
    type: "custom",
    data: {
      label: `I’ll be the first to tell you I love the classics, but there’s some really good/creative A...`,
      fullText: `I’ll be the first to tell you I love the classics, but there’s some really good/creative AI music out there, especially when it comes to mixing genres. Movies aren’t there yet but they will be.

I do appreciate the human element. 



`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 2,
      parentId: "o9s34qv",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9snbio",
    type: "custom",
    data: {
      label: `Sure but would you pay normal ticket price to see an AI generated movie? Like one with no ...`,
      fullText: `Sure but would you pay normal ticket price to see an AI generated movie? Like one with no writers, no artists, no actors… just computer output

Most people would either find it to be a rip off cause they’re getting an inferior product, or they’d find it to be depressing`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "o9seklw",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9tmfmm",
    type: "custom",
    data: {
      label: `On the flip side though, a well designed AI movie made by a small creative team can be goo...`,
      fullText: `On the flip side though, a well designed AI movie made by a small creative team can be good - replacing a real moving which might need to employ 10-20x more people over much longer span of time to create.`,
      isOriginalPost: false,
      upvotes: 4,
      depth: 4,
      parentId: "o9snbio",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9spnpv",
    type: "custom",
    data: {
      label: `I would.   I guess it really depends on the quality.   Great book! - Save The Cat! The Las...`,
      fullText: `I would. 

I guess it really depends on the quality. 

Great book! - Save The Cat! The Last Book on Screenwriting You'll Ever Need - Blake Snyder

It goes over the formulaic approach to storytelling techniques for films. 

I don't see why Ai couldn't replicate this approach. 

`,
      isOriginalPost: false,
      upvotes: 4,
      depth: 4,
      parentId: "o9snbio",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9typby",
    type: "custom",
    data: {
      label: `Yeah but that book is based on _theory_ and theory is based on observing what worked and f...`,
      fullText: `Yeah but that book is based on _theory_ and theory is based on observing what worked and finding out why it worked. You’re very much allowed to break the rules. Movies like arrival have done that

Also an emotional movie would lose its impact when there’s literally no emotion in the movie, just a simulation of emotion`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 5,
      parentId: "o9spnpv",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9vh6ek",
    type: "custom",
    data: {
      label: `great point!       “Learn the rules like a pro, so you can break them like an artist.” — P...`,
      fullText: `great point!  
   
“Learn the rules like a pro, so you can break them like an artist.” — Pablo Picasso

`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 6,
      parentId: "o9typby",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9zzm61",
    type: "custom",
    data: {
      label: `I've thought about this and I think that because an AI can create a movie in far lesser ti...`,
      fullText: `I've thought about this and I think that because an AI can create a movie in far lesser time with lesser money they'll be more in number and far cheaper to watch, so more accessible. 

Human made movies will become sort of a premium thing, less in number, with probably increased ticket prices since they have to break even and generate profit in a society that may prefer to spend lesser money and watch an AI animated movie. Yk?

Right now it's slop, but who knows what it'll be like in 10 years?`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "o9s34qv",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9rgrwz",
    type: "custom",
    data: {
      label: `You saying the counter argument is "hope" and not backed by evidence is a bit dismissive. ...`,
      fullText: `You saying the counter argument is "hope" and not backed by evidence is a bit dismissive. Everytime a new technology comes about, the economy scales up, which in turn creates more production and jobs.

But AI is unique in that its purpose is to replace production from humans and make its reliance to human interaction minimal. There's 2 things to consider though. 

1. There's  needs to be enough people in society who can afford the services or the products from companies employing the services. 

2. There's a theme that people think theres no limitations to AI. I'm not convinced that that's true, and we may meet a technological and environmental limitation. 

So basically, an entire populace of unemployed poor people would render AI useless since people wouldnt be able to purchase the goods it's responsible for. And there very well may be limitations to AI, that limits the amount of job loss that happens due to it`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9rizao",
    type: "custom",
    data: {
      label: `&gt;1. There's needs to be enough people in society who can afford the services or the pro...`,
      fullText: `&gt;1. There's needs to be enough people in society who can afford the services or the products from companies employing the services.

I agree. I think this will be the domino that falls and pushes the government to finally make changes. As AI replaces jobs and consumers weaken, the economy will start to feel it. Will those changes still follow capitalist logic, or will we end up creating something completely different?

&gt;2.There's a theme that people think theres no limitations to AI. I'm not convinced that that's true, and we may meet a technological and environmental limitation.

Energy and silicon but maybe not if Ai comes up with novel solutions on how to improve the models   
  
[https://github.com/karpathy/autoresearch](https://github.com/karpathy/autoresearch) `,
      isOriginalPost: false,
      upvotes: 3,
      depth: 2,
      parentId: "o9rgrwz",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9tbeui",
    type: "custom",
    data: {
      label: `I imagine jobs like "content curator" or "AI overseer" could pop up. AI has opened the flo...`,
      fullText: `I imagine jobs like "content curator" or "AI overseer" could pop up. AI has opened the floodgates of slop. So i imagine some people's jobs being to wade through the slop and finding gems.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "o9rgrwz",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oaapdvw",
    type: "custom",
    data: {
      label: `I'm not sure about 1. Imagine we can summarize humans have only 3 needs : food, housing an...`,
      fullText: `I'm not sure about 1. Imagine we can summarize humans have only 3 needs : food, housing and consumer goods. We are in a city of 1000 people, you own the housing, I own the food production and Bob owns the consumer good production. The 3 of us don't need money per se, but we need the best food, housing and consumer goods, and money is a convenient vector to trade. We need people to produce the food, repair the housing and produce the goods. Now, imagine machines fully replace the population, we still produce the same amount of ressources and we can just share them between the 3 of us, why do we need the rest of the population ?`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "o9rgrwz",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oaatwua",
    type: "custom",
    data: {
      label: `Would probably be impossible in a capitalist market. If theres a massive void (a bunch of ...`,
      fullText: `Would probably be impossible in a capitalist market. If theres a massive void (a bunch of unemployed people that can't afford products due to AI), then manually produced products would come about that provides jobs and services to the non-rich.

You could make the argument that AI could be cheaper, but if no one has money or a job, that will increase the price of AI production to meet fiduciary needs and since the rich would be the only buyers, it would be the best way to survive. It becomes a luxury product. 

There's just a lot of things in this hypothetical that goes against how the economy works. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "oaapdvw",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oabdmr4",
    type: "custom",
    data: {
      label: `Thanks, you changed my mind (I don't know if I can give !delta if I'm not OP). I didn't th...`,
      fullText: `Thanks, you changed my mind (I don't know if I can give !delta if I'm not OP). I didn't think about the fact than non-rich people could recreate their own society on the side`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 4,
      parentId: "oaatwua",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oabdoyn",
    type: "custom",
    data: {
      label: `Confirmed: 1 delta awarded to /u/BigSexyE ([3∆](/r/changemyview/wiki/user/BigSexyE)).  ^[D...`,
      fullText: `Confirmed: 1 delta awarded to /u/BigSexyE ([3∆](/r/changemyview/wiki/user/BigSexyE)).

^[Delta System Explained](https://www.reddit.com/r/changemyview/wiki/deltasystem) ^| ^[Deltaboards](https://www.reddit.com/r/changemyview/wiki/deltaboards)`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 5,
      parentId: "oabdmr4",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oatc0xi",
    type: "custom",
    data: {
      label: `On your first point I think you are missing a big point, and it is that 50% of the spendin...`,
      fullText: `On your first point I think you are missing a big point, and it is that 50% of the spending is already made by the top 10%. The whole economy is shifting to serve a small minority of ultra wealthy people. Basically this means that middle class and poor people wont be relevant to the economy and cam be replaced by AIz`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "o9rgrwz",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oatsshx",
    type: "custom",
    data: {
      label: `&gt;Basically this means that middle class and poor people wont be relevant to the economy...`,
      fullText: `&gt;Basically this means that middle class and poor people wont be relevant to the economy and cam be replaced by AIz

This conclusion isn't inevitable and is not capitalism. I laid this out in the other comments why thats the case if you want to take a look. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "oatc0xi",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9upc6g",
    type: "custom",
    data: {
      label: `AI wont create more jobs than it destroys because it was never supposed to, it was suppose...`,
      fullText: `AI wont create more jobs than it destroys because it was never supposed to, it was supposed to eliminate our need for menial labor and usher in an era of universal basic income.

Once a robot is paid for, aside from maintenance, that step becomes free essentially. If its free to plant the seeds, free to grow them, water them, harvest them, package them, ship them, stock them, and sell them, because no human labor is direcrly required in that process, well now food can be essentially free, no need for a job to feed myself.

Obviously thats hyperbolic and idealistic but still.`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "ocesffv",
    type: "custom",
    data: {
      label: `I think of what the Uber CEO said about getting autonomous vehicles. He was asked: “What a...`,
      fullText: `I think of what the Uber CEO said about getting autonomous vehicles. He was asked: “What about the people who rely on the income for driving“, and he simply said: “I don’t know”. It is disgusting all the people who are trying to drive us to an artificial fake world where people don’t have jobs. I’m sick of hearing about this fantasy world where we don’t need jobs anymore and how things are going to get better after a painful transition. It won’t happen. This technology is being driven by clueless nerds who just want to live out their geek dream of being in a real life Star Trek, by greedy companies who are just thinking about short term profit margins, and people who are too stupid to realize they are destroying humanity. or people who don’t care about watching fake artificial slop because they’re nerds and don’t think like normal people. Talk about the “Golden Age of Humanity” to the 5 year old who is starving because her parents lost their job and can’t afford food, much less clothing or all the other things she needs. Talk about the Golden Age of Humanity to the person with chronic illness and can no longer get their medications because they lost their job and their medical benefits. Do people not get that many will literally suffer and die? Do they not care? Are people that disgustingly selfish?

And I don’t want to hear about “they said the same thing about the automobile”. Past technology transitions added different work, but work none the less. AI is about taking work AWAY from humans.

Yes, I also know that there are people today who still fall into the suffering that I described above. It‘s not perfect, but the numbers are far less than what will happen with AI.

And think about what a fake artificial world it would be when you can’t even rely on what you’re watching to be real. Think about some loser who types into an LLM to make him a song, and then thinks he’s an artist. He’s not an artist, he’s still a loser. Because he has no talent, he has no ability; he doesn’t deserve to have a song because he didn’t earn it. And he definitely doesn’t deserve to be regarded as an artist. Anyone who argues: “what difference does it make if the people listening experience the same effect”…there’s no point explaining it to them, because they will never understand. People like that have a nerd mentality and don’t think like normal people.

I have always loved technology and have spent my entire life working in it, in one field or another. But AI makes me ashamed to refer to myself as an IT worker. The way “techbros” are pushing AI out into the world with no regard for how it is changing human society in a bad way…it makes me ashamed to have some of them as my colleagues. In reality, I have never felt more disappointed in the human race in general.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "ocfaulg",
    type: "custom",
    data: {
      label: `This. All of this.  And honestly the art thing is going to get worse before anyone admits ...`,
      fullText: `This. All of this.

And honestly the art thing is going to get worse before anyone admits it. AI will eventually produce music that hits every psychological trigger better than any human can. It will be more emotionally manipulative, more perfectly tuned to what makes you feel something. And people will consume it without a second thought.

AI is inevitable. It's going to keep spreading into every corner of society whether we like it or not. The ego death of humanity is not some far-off sci-fi scenario. It's already starting. The Uber CEO saying "I don't know" when asked about the drivers is exactly the attitude driving all of it. Nobody at the top has an answer because nobody at the top is losing anything.

I'm naively optimistic about AI because there's no point in being pessimistic when it's inevitable. And if it ever does misalign, I just hope it skips the paperclip maximizer scenario and instead misaligns specifically against every CEO who ever answered a question about workers with "I don't know".`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "ocesffv",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oc677be",
    type: "custom",
    data: {
      label: `I think the disconnect here is timeline vs outcome. In the short term, disruption is real....`,
      fullText: `I think the disconnect here is timeline vs outcome. In the short term, disruption is real. Roles are being replaced faster than new ones are forming, and not everyone can pivot overnight.

But big tech shifts have always changed what work looks like. The internet wiped out jobs but also created entire industries.

What’s different with AI is the speed and scope. It’s hitting not just manual work, but cognitive tasks too, so the transition may be rougher.

It’s probably less about more or fewer jobs, and more about different jobs, fewer people per task, and higher leverage per person.

So the real shift isn’t just job count, but how work and value evolve over time.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oc84fnf",
    type: "custom",
    data: {
      label: `What do you think the future jobs will be? If the AI makes fewer mistakes and does the job...`,
      fullText: `What do you think the future jobs will be? If the AI makes fewer mistakes and does the job for a fraction of the cost, why hire a human?`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "oc677be",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oga1fc4",
    type: "custom",
    data: {
      label: `I don’t think it’s “no humans needed,” more like humans do different things.  If AI is che...`,
      fullText: `I don’t think it’s “no humans needed,” more like humans do different things.

If AI is cheaper and better at execution, people shift towards guiding it, checking it, and making decisions.

The real issue is transition as not everyone can adapt that quickly.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "oc84fnf",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9uvm84",
    type: "custom",
    data: {
      label: `Technology does always create new jobs. That’s true pretty absolutely. That doesn’t necess...`,
      fullText: `Technology does always create new jobs. That’s true pretty absolutely. That doesn’t necessarily mean it will create more jobs than it destroyed. 

The problem with this your argument is that AI is in its infancy. The little chatbots that every company puts out is nothing more than an interface for the underlying technology that allows for more rapid data collection and development. We have no idea what problems AI will solve and what aspects of society it will make obsolete. I just don’t think we know enough to determine how this affects the job market.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa5dkna",
    type: "custom",
    data: {
      label: `The problem isn't AI, is staright up robots.     I'm not too invested in the topic but loo...`,
      fullText: `The problem isn't AI, is staright up robots.

  
I'm not too invested in the topic but look, robots are the actual waorker that doesn't need to sleep or eat, just works, AI doesn't have an actual body, an actual force, AI is only works on servers and inside devices. robots are actual machines that can move, we are already using robots for physical labor in factories making ACTUAL HUMAN WORKERS lose their jobs, and since many of those workers can't go further, they will look for another job like they had before, but with automation rising they don't get hired since the jeb they are trying to apply is already taken by a machine.

  
While all of you are discussing the possible existance of something that so far is impossible to creat (AI), actual workers are being fired and losing job opportunities beacuse of machines. Yes, AI is scary AF but we still havent got an actual AI, everything is LLM and is being used for crapy art, replacing human interactions, recopilate data and many other activities we already had, only that we call ''algorithm'', this didn't hurt anybody, since this types of jobs aren't of interest for the working class.

  
Worry when we start seeing robots attending clients, in factories assembling machines, cleaning the streets, etc.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa90pl1",
    type: "custom",
    data: {
      label: `Robots in factories are nothing new. However, the widespread adoption of humanoid robots i...`,
      fullText: `Robots in factories are nothing new. However, the widespread adoption of humanoid robots in manufacturing will mark a turning point. Once humanoid robots are capable of producing other humanoids from start to finish, we’ll be living in a very different world.

[https://www.reddit.com/r/robotics/comments/1nzl4d0/brett\\_adcock\\_this\\_week\\_figure\\_has\\_passed\\_5\\_months/](https://www.reddit.com/r/robotics/comments/1nzl4d0/brett_adcock_this_week_figure_has_passed_5_months/)`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "oa5dkna",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9zcyz5",
    type: "custom",
    data: {
      label: `I agree, however.  I foresee certain jobs being deemed "too dangerous to automate" for obv...`,
      fullText: `I agree, however.

I foresee certain jobs being deemed "too dangerous to automate" for obvious hacking and malfunction risks. Such as...

Private security.

Policing.

National guard.

Corrections (prison guards).

Emergency services.

In the case of police, security, and prison guard. You'd need as replacements, legions of armed bots and drones fully capable of seriously injuring or even killing a human. Which I can't see legally allowed, As those things will become a prime target for hacking. Especially  from hostile foreign nations with supercomputers, Advanced cyber-warfare divisions. And an axe to grind. Such as Russia, China, North Korea, Iran, etc. I'm sure we can imagine the massive damage and loss of life if a major city's worth of armed drones are hijacked and turned on the general public. It would put 9/11 to shame. 

If technological unemployment gets half as bad as I believe it will. It will be an unavoidable cost of doing business dealing with, and containing a large pissed off, Permanently unemployable, obsolete workforce in addition to hordes of feral kids and teens roaming the streets. Armed bots and drones will be legally out of the question. There will be a growing demand for boots on the ground to deal with the situation. Those aforementioned jobs and professions will be booming in addition to wages and benefits. Those employed in said professions will enjoy a decent living in a prolonged dark age of technological unemployment.

I'd strongly advise getting in those jobs now. Before it gets crowded out.`,
      isOriginalPost: false,
      upvotes: 0,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9znbmn",
    type: "custom",
    data: {
      label: `woa that escalated quickly!  What are your thoughts on full autonomous driving Waymo/Tesla...`,
      fullText: `woa that escalated quickly!

What are your thoughts on full autonomous driving Waymo/Tesla?

 `,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "o9zcyz5",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa47ia5",
    type: "custom",
    data: {
      label: `I am AI-sceptic (more like AI-realist, but in current balance of power I would be called s...`,
      fullText: `I am AI-sceptic (more like AI-realist, but in current balance of power I would be called sceptical XD). I am actually a scientist in labor economics and political economy, so I hope my reasoning would be insightful.

The main problem with AI is that it gets too much attention, while the returns of this technology are not that fruitful. Yes, AI is a very promising tool, but its role is highly... exaggerated.

We will not enter the "jobless world" just simply by demographical shift. Don't know where you're from, but the most developed countries are now mostly facing harsh labor deficit. I live in Russia and our unemployment level is (!) 2,1% - only those who are complete nutjobs can't find a job. There are just no folks to fill the positions, so removing some of workplaces with AI might be a good thing. Yes, countries like India, Ethiopia or Bangladesh, where median age is like lower than 30, they have a lot of hungry cheap labor, but it won't fill the positions that AI will do. It is just not economically viable to implement it yet.

The discussion of "technology will steal our jobs" lingers since forever, and yes, it has mostly been a hoax. I tend to think that current advancement is a hoax still, try to follow my reasoning.

\\- AI gets A TON of papers and media outlets coverage. It is clearly overhyped and now it is a "good manners" type of thing to at least mention or even admire it. You won't believe how many papers I've read and conference speeches heard, that can be summed up in a single sentence: "AI is great, it is our future, it is a part of Industry 4.0 (another concept with little to none euristic potential), so let's adapt to it." No substantial suggestions or findings, just simple religious-like exaltation. This is not the first time it happens, in fact, it is constantly happening. In Russia everyone should have written about oil and advantages of globalization during 2004 to 2014. Before AI, in 2010-s everyone spoke about abstract infromation technologies that should be implemented. So, you know, in 10 years hype will fall down lifting the shroud of praising.

\\- Moving to the next point, we'll talk about AI itself and its returns. First and foremost, it is pretty clear, that AI industry is a HUGE speculative bubble about to burst in a fortnight. It might even eclipse 2008 crisis. Secondly, layoffs. Practice shows that they were... hasty. AI isn't a universal tool, organizations adapt to these challenges badly, and many evaluations of layoffs for AI productivity returns were set too high. Many researchers agree, that AI implementation is not a panacea (which is pretty new, we don't have much results yet, as the process has only just begun) Read more here: [https://consensus.app/search/ai-automation-return-expectations/dy8ZDj2XTWWhPeVyMvLBwA/?utm\\_source=share&amp;utm\\_medium=clipboard](https://consensus.app/search/ai-automation-return-expectations/dy8ZDj2XTWWhPeVyMvLBwA/?utm_source=share&amp;utm_medium=clipboard)  
What does it bring to economy in whole? Well, news are grim - these decisions cost economy a lot of human capital and reduce the total factor productivity. Many companies tend to reemploy the stuff after AI doesn't show expected results.

\\- Speaking about production and social philosophy part of AI. AI usage is limited: you can't just use it everywhere, a lot of tasks and workplaces just have no use of it \\[yet\\]. It is a perspective technology, but don't equate it to human. AI is a program with good ability to predict something based on a huge statistical corpus - nothing more. It does not have an ability to interact with any aspect of nature (in the broadest meaning) without a pre-made scheme. In other words, it cannot create anything new (it cannot create in the broadest meaning of this word), it can just put together stuff, that existed priorly. It means. we won't get a qualitatively new way of production, organization or any scientific discoveries like periodic table. Just plain ol' routine stuff. So it can augment human creativity, human mind - not substitute it. One speaking about AI must understand, that AI is a tool like Microsoft Word or a shovel - just a more advanced one, not your buddy or the copycat of yourself. Also, it does not change the process of production qualitativly. Let me show it with an example.

Imagine you are smelting glass in a factory. You have a conveyor belt with rollers (am I calling stuff right? Sorry, I am not an expert in industrial terms), where the glass is cooling and congealing after coming out of the furnace. You have a problem: rollers tend to break. Also, the size (and amount, the rollers are placed tightly next to each other) of the roller affects the quality of glass. You are an economist and your goal is to receive the best glass there is without stalling the production. What shall you do? Good economist would sit, calculate the probabilty of production line stopping based on the number of the rollers (more rollers = higher chance that one would break and you'll have to stop the conveyor), attire some metric to glass quality and balance it with the mathematical methods there are. They don't change the process qualitatively - they just optimize the current method. AI would do the same, even when you apply it to production (for example, automating the conveyor belt and furnance, there is certainly some sophisticated way to do it).

The great economist won't do that. He would think: to have a better glass I must have an infinite number of rollers. To have no production issues I must have zero rollers. So, I must have infinite and zero rollers at the same time (AI will never come up with this idea). The size of the roller can't be smaller than a molecule. At the same time, the roller the size of the molecule is hard to imagine, don't you think? So what if we replace the roller with a molecule - it can't break. Thus we need some substance, that could replace the conveyor belt. It must be still, not bend under the weight of glass (and not allow it to sink, so it will be much denser), and stay in liquid state (solid state won't allow the glass to roll, it will just stick to it) at the temperature of smelted glass. Also, it should not mix with it. There is such a substance - melted tin. That's how a qualitatively new way of melting glass called "float method" was invented.

Why did I mention this case at all? First - real solutions need the ideas AI can't provide. It can help, but not provide. Secondly, using AI in production can refine, but not change production methods - so returns on productivity are quite diminishing. I am not talking about "creative industries", I have an impression, that a LOAD of people working in these sectors are occupied with "bullshit jobs".

\\- Finally, read papers of Acemoglu, Restrepo, Autor - these guys are considered most prominent economists of the first two decades of 21th century, and they also are a part of AI-sceptics. They might convey some thoughts better than me. You can find their papers on their websites or in Google Scholar. I can provide you with some if you need it. TL;DR - returns of AI in modern

All in all, AI is a bit of a hoax, and overhype, that follows this technology, might retaliate quite badly in the future. I also think that because of the AI our focus is shifted from more important technologies of this technological mode (15 years ago everyone thought about nano-technology, genes engineering, biotechnology - but from what I can recall, this sectors are not far from their cradle). AI won't still our jobs. But it won't have the expected returns and might jumstart another crisis. Of course, this obsession will fall off eventually, and we'll see this advancement for what it truly is, but for now it is wiser to be cautious about it.`,
      isOriginalPost: false,
      upvotes: 0,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa4ow97",
    type: "custom",
    data: {
      label: `I appreciate your comment, and you raise some thoughtful points about AI hype, media bias,...`,
      fullText: `I appreciate your comment, and you raise some thoughtful points about AI hype, media bias, and how economic realities often lag behind technological promises. But to call AI “a bit of a hoax” is pretty far from the truth.

One clear counterexample is AlphaFold, developed by DeepMind, a London-based AI lab owned by Google. AlphaFold solved one of biology’s biggest unsolved problems: predicting a protein’s 3D structure from its amino acid sequence. That problem had stumped scientists for over 50 years and was core to understanding how diseases work and how to design new medicines. The AI didn’t just optimize an existing process; it provided entirely new insights that are now accelerating drug discovery and genomics research worldwide. That’s a genuine, transformative advance in human knowledge, not hype.

Another emerging example is AutoResearch (by Andrej Karpathy) [https://github.com/karpathy/autoresearch](https://github.com/karpathy/autoresearch), which automates the process of scientific exploration. The project connects AI models to tools that can read, reason about, and iterate on scientific literature, essentially building a continuous research agent that can generate new hypotheses, test ideas, and summarize results. This kind of system doesn’t merely repackage existing data; it can synthesize information across domains faster than any individual researcher. The power lies in reducing the friction between discovery, experimentation, and application, turning “AI as a tool” into “AI as an accelerator of science.”

So while it’s true that much of the current discourse around AI is overhyped or poorly informed, the underlying technology has already made real contributions to science and productivity. AlphaFold shows that AI can leap beyond human intuition in structured, complex problem spaces, and projects like AutoResearch hint that the synergy between human reasoning and machine pattern recognition is just beginning.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "oa47ia5",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9onxe6",
    type: "custom",
    data: {
      label: `[deleted]`,
      fullText: `[deleted]`,
      isOriginalPost: false,
      upvotes: -1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9ouln5",
    type: "custom",
    data: {
      label: `I've been writing code professionally for 10+ years, and honestly.. This couldn't be furth...`,
      fullText: `I've been writing code professionally for 10+ years, and honestly.. This couldn't be further from the truth.    
  
The study itself is extremely narrow. 16 developers, working on repositories they were already deeply familiar with, using codebases with 1M+ lines of code. The authors themselves say the findings shouldn't be broadly generalized.   
  


`,
      isOriginalPost: false,
      upvotes: 4,
      depth: 2,
      parentId: "o9onxe6",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9qtedw",
    type: "custom",
    data: {
      label: `Another study https://hbr.org/2026/03/when-using-ai-leads-to-brain-fry  The important thin...`,
      fullText: `Another study
https://hbr.org/2026/03/when-using-ai-leads-to-brain-fry

The important thing is that the studies show you feel like you're faster even though you're objectively not. 

If it's not true, why hasn't it been disproven by any objective research?`,
      isOriginalPost: false,
      upvotes: 4,
      depth: 3,
      parentId: "o9ouln5",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9s3ldo",
    type: "custom",
    data: {
      label: `Sorry, u/ChipOnlyRedux – your comment has been removed for breaking Rule 5:   &gt; **Comme...`,
      fullText: `Sorry, u/ChipOnlyRedux – your comment has been removed for breaking Rule 5: 

&gt; **Comments must contribute meaningfully to the conversation**.  

Comments should be on-topic, serious, and contain enough content to move the discussion forward. Jokes, contradictions without explanation, links without context, off-topic comments, undisclosed or purely AI-generated content, and "written upvotes" will be removed. Read [the wiki](https://www.reddit.com/r/changemyview/wiki/rules#wiki_rule_5) for more information.  

If you would like to appeal, review our appeals process [here](https://www.reddit.com/r/changemyview/wiki/modstandards#wiki_appeal_process), then [message the moderators by clicking this link](http://www.reddit.com/message/compose?to=%2Fr%2Fchangemyview&amp;subject=Rule%205%20Appeal%20ChipOnlyRedux&amp;message=ChipOnlyRedux%20would%20like%20to%20appeal%20the%20removal%20of%20\\[their%20comment\\]\\(https://www.reddit.com/r/changemyview/comments/1rq02gl/-/o9onxe6/\\)%20because\\.\\.\\.) within one week of this notice being posted.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "o9onxe6",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oaubw2s",
    type: "custom",
    data: {
      label: `I haven’t heard one person say it will create more jobs than it will destroy. I however wo...`,
      fullText: `I haven’t heard one person say it will create more jobs than it will destroy. I however would like the jobs it creates instead of countries like China getting them all as well as all the advancement the technology will bring. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p3il5",
    type: "custom",
    data: {
      label: `The Jevons Paradox  [https://en.wikipedia.org/wiki/Jevons\\_paradox](https://en.wikipedia.o...`,
      fullText: `The Jevons Paradox

[https://en.wikipedia.org/wiki/Jevons\\_paradox](https://en.wikipedia.org/wiki/Jevons_paradox)

Essentially all of the vanishing jobs are going to come back because people are going to want to use AI more, and that means needing more infrastructure to run it, more model training, and smaller companies innovating new uses.

AI allows us to use computers a lot more easily and efficiently with being able to accept more natural language input and ability to be trained on more complex tasks than previous automations.  People at home are going to say "Maybe this can help me make that app idea I had" and those app ideas will become companies employing people and doing real work.

Its basically like phones - every year phone hardware gets more efficient, but we still ship with bigger batteries - because every gain in efficiency creates a vacuum for a new widget to be installed, a new app to run in the background, etc.

also

&gt;AI is fundamentally different because it targets exactly those domains. It writes code, generates designs, moderates content, handles customer service, and analyzes data. These aren't assembly-line tasks.

These tasks are more assembly line than you might think.

Low-code and no-code programming solutions have been in use for decades.  Most coding isn't new programming, its stringing together existing libraries.  A company might make 1 new innovation and the rest is just plugged in.

Customer service have scripts, often word-for-word that lead the service agent through the interaction.  The hardest part for them is usually coming up with small talk to fill dead air while completing tasks or accepting abuse from angry clients.  AI can complete the tasks quicker leading to less dead air, it can easily multi-task to track customer engagement while completing the interaction, and real humans aren't harmed with the shrieks of karen's.`,
      isOriginalPost: false,
      upvotes: 11,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9rgbcl",
    type: "custom",
    data: {
      label: `&gt;Low-code and no-code programming solutions have been in use for decades.  Most coding ...`,
      fullText: `&gt;Low-code and no-code programming solutions have been in use for decades.  Most coding isn't new programming, its stringing together existing libraries.  A company might make 1 new innovation and the rest is just plugged in.

Low-code platforms have been awhile for a long time yes. And every one of them has the same problem; beyond the sunny-day scenarios they're built for, they get very hard to work with, and the learning curve for these platforms is still significant compared to regular coding anyway. The value proposition has always been questionable. 

It's an apples to oranges comparison, because AI generates code by extrapolating from a user's intent, as communicated via natural language. Absolutely no other coding platform has ever been able to do that.`,
      isOriginalPost: false,
      upvotes: 8,
      depth: 2,
      parentId: "o9p3il5",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oayuhrq",
    type: "custom",
    data: {
      label: `I think the problem that AI poses that past inventions did not is that it not only threate...`,
      fullText: `I think the problem that AI poses that past inventions did not is that it not only threatens to replace pre-existing jobs, but the jobs that it is creating. The printing press could not create printing presses, nor could it run itself. AI and robots could theoretically replace not just artists and writers, but the factory line workers creating the robots, the marketing team selling the robots, the design team designing the robots, the researchers making the robots better, and the mechanic maintaining the robot. When AI creates new jobs, they can be handled by itself. So, it just becomes a question of whether the AI or human labor is cheaper for that job. I suspect it will very soon be the former.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "o9p3il5",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "ob1awf8",
    type: "custom",
    data: {
      label: `Is that the case?  The invention of internet and email removed the bottleneck of needing t...`,
      fullText: `Is that the case?

The invention of internet and email removed the bottleneck of needing to print and mail things.  You can endlessly copy text now compared to before where you needed to print it.  Even then, the printing press meant you didn't need people scribing.  A whole art of calligraphy was essentially wiped out as a utilitarian skill due to type setting.

I imagine if we went back we'd see similar arguments then about what that meant.

You're not wrong this step is potentially bigger than any before it, but that is exactly what you would expect with exponential growth.

But we still have jobs for people, never more jobs than are around today - And why would any innovation stop us from working?  The majority of our jobs are barely tangentially related to our actual survival - in short, most jobs are already made up and we'll be able to make up more.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "oayuhrq",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "ob2tt2o",
    type: "custom",
    data: {
      label: `Who creates the "made-up" jobs, and for what reasons? For the most part, it's companies, w...`,
      fullText: `Who creates the "made-up" jobs, and for what reasons? For the most part, it's companies, who add these jobs because it helps maximize their profit margins as much as possible. With money excess from the technological advancement lowering costs, you can create marketing jobs to further increase the profits, you can create tech jobs to lower costs and improve quality of the product thus increasing its demand, you hire HR to manage all the workers in the most efficient (often cruel) way possible. Every corporate job that is created through this process still serves (or attempts to serve) the purpose of increasing profits so that the company can survive as long as possible. But even if replacing these jobs created even more niche jobs that we never could have thought of before, it's hard to imagine any niche jobs that couldn't also be replaced by AI. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 4,
      parentId: "ob1awf8",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9r98tl",
    type: "custom",
    data: {
      label: `I'll not go into arguments about if the AI revolution will happen. I'll agree to that pres...`,
      fullText: `I'll not go into arguments about if the AI revolution will happen. I'll agree to that presupposition.


&gt;&gt; Past technologies replaced human muscle or routine manual work. The new jobs they created required human judgment, creativity, and coordination, things machines couldn't do. AI is fundamentally different because it targets exactly those domains. It writes code, generates designs, moderates content, handles customer service, and analyzes data. These aren't assembly-line tasks. They're the very roles that were supposed to be safe.   

This seems to be the crux of your argument. That when other technologies got introduced that they made the jobs available more 'white collar'.

I think you have a misunderstanding of why new technologies create new jobs. I'm going to present you with a thought experiment. Let's say we live in a village of 10 people. Each person can be a farmer and can make 1 year of food each year. Right now all 10 people need to be farmers in order for everyone to have food. Let's say they discover plowing and it doubles their food growth. The village quickly realizes that they will have too much food if everyone keeps being a farmer. So 5 people decide to become blacksmiths. Those blacksmiths each can make 1 sword a year. They trade the swords for a year supply of food to each of the farmers. 

Big picture, what happened in the village? 

The new technology *did* make it so that half of the farmers lost their jobs. However even though the village had less farmers they still produced enough food for the whole village. Because not every person has to be a farmer in the village anymore new jobs develop that produce new things that are completely unrelated to the technology. The end result is that there is still full employment, but the total amount of goods that the village makes has risen. In modern economies we call that our gdp.

Here is my argument. AI will increase how much stuff humans have access to, it will raise our GDP. In the long run increasing or GDP will raise the number of jobs because it leads to a virtuous economic cycle. Growth leads to decreased cost of goods and increased employment as companies look for new buyers and increase production. "What if that increase in employment just looks like 'hiring' more ai workers" then the AI company is growing which is still a good thing(from an economic perspective)

I want to caution that while I think AI will be good for humanity in the long run that there will absolutely be growing pains and a large coalesce of wealth to the wealthiest people. The world will have to find ways of redistributing wealth from the soon-to-be ai empowered rich.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9oogkk",
    type: "custom",
    data: {
      label: `**Point 1: You're dramatically overestimating how much of society could be replaced by AI....`,
      fullText: `**Point 1: You're dramatically overestimating how much of society could be replaced by AI.**

Suppose an AI came around that could generate a realistic football game. Would you watch it? Would you care? No. We could generate artifical football games already with CGI without involving a person. No one cares. We want the human connection, the imperfection, the drama of a living breathing person on the field fighting for something.

AI will be used as an excuse to fire people, but it will always result in a diminished experience for the consumer when that happens. That puts a hard upper limit on what AI can replace and keeps humans valuable.

**Point 2: AIs can never have responsible charge.**

As an engineer, I have to sign and seal every design I produce. IF something goes wrong with it I can lose my license, get fined, or even go to jail. AI can never take responsible charge for something legally, and the AI companies have been crystal clear that they understand and reject any legal liability for the work of their products. That is more limiting in the real, people die if this goes wrong, world than the software bros have yet realized.

This is true from high risk positions like doctors and engineers, but it will also be true about ordering food. Taco bell tried an AI drivethrough and their customers hated it because there was no recourse when the thing went haywire except to insist you talk to a person. That's why people started ordering "10,000 waters" immediately when they realized they were talking to an LLM instead of a person to get a human on the line.

**Point 3: AI has not yet demonstrated any actual ROI. (EDIT: Before techbros downvote this, consider trying to identify one tangible, objective counter-example)**

Every objective study conducted so far has shown that AI makes you slower, not faster. It makes you feel faster because it's allowing you to think less, but it doesn't make you more efficient at your job, at least as far as anyone that doesn't profit off of it in some way has been able to tell.

The people running these companies are professional liars constantly overstating the capabilities of their models, living off the money they can raise from investors by promising the moon in a culture that believes in "fake it until you make it" as a gospel truth. The people bragging about their success with AI always have something to sell. The CEOs and CTOs know they haven't figured out a productive way to use this yet but their terrified of being accused of being "behind" and insist that they're on the cutting edge of using AI as their employees continue to ignore their memos to use AI for everything.

Line-production coders are clear-eyed that these things aren't yet ready to "replace" anyone except a trainee, and if we keep using them in place of trainees, we won't have anyone to do the actual work in 20 years.

Instead of taking Sam Altman's word as gospel, I'd love to see some objective study that shows AI really can  beat coders or make coders more effective, because so far the results have shown the opposite.

Bear in there's a ton of overlap between the "AI will be better than workers next year" people and the "Self driving cars will be better than humans by 2015" people and  that benchmark is still nowhere to be found. Self driving cars are still much more dangerous than a human driver, and that's based on the bias, self-reported data of the companies deveolping self driving cars.`,
      isOriginalPost: false,
      upvotes: 12,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9paslv",
    type: "custom",
    data: {
      label: `&gt; Self driving cars are still much more dangerous than a human driver, and that's based...`,
      fullText: `&gt; Self driving cars are still much more dangerous than a human driver, and that's based on the bias, self-reported data of the companies deveolping self driving cars.

I've seen multiple reports that autonomous driving has less collisions per mile driven than human drivers. Considering a large part of accidents are caused by distracted driving or driving under the influence, it seems like common sense that eliminating that variable would be significant in making autonomous driving safer`,
      isOriginalPost: false,
      upvotes: 16,
      depth: 2,
      parentId: "o9oogkk",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p5ovb",
    type: "custom",
    data: {
      label: `&gt;Line-production coders are clear-eyed that these things aren't yet ready to "replace" ...`,
      fullText: `&gt;Line-production coders are clear-eyed that these things aren't yet ready to "replace" anyone except a trainee, and if we keep using them in place of trainees, we won't have anyone to do the actual work in 20 years.

Disagree.  AI tools have made the research much quicker to find solutions, build unit tests, and maintain documentation - a lot of the pitfalls of coding isn't even the logic, its the paper work.

Most code isn't new code anyway, we reuse libraries to do just about everything.  Its like the biggest noob trap for a programmer is writing code for something that is already a library.  AI can easily string up common libraries.`,
      isOriginalPost: false,
      upvotes: 17,
      depth: 2,
      parentId: "o9oogkk",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pzjew",
    type: "custom",
    data: {
      label: `&gt;Every objective study conducted so far has shown that AI makes you slower, not faster....`,
      fullText: `&gt;Every objective study conducted so far has shown that AI makes you slower, not faster.

To my knowledge, one of the most discussed publications on AI slowing down developers is [this one](https://arxiv.org/pdf/2507.09089) from METR. Chances are, you've heard of it and maybe even are referencing it here. 

This research is based on early 2025 data; in early 2026 the same researchers published [preliminary results](https://metr.org/blog/2026-02-24-uplift-update/) of the repeat experiment conducted in late 2025; this time it included a follow-up study on the same participants, as well as a larger group of new participants. These late 2025 results, retrieved using the same setup and methodology, indicated a *speedup* for both groups of participants. What's more, the researchers suspect that a self-selection bias (basically the most avid AI users refusing to take part in the study because they don't want to slow down their workflow for the sake of participation) might *lower* their speedup estimations; currently they opted to conduct a third experiment with revised methodology. 

So, if you trust the initial results on the slowdown, I don't see why you shouldn't trust the later results on speedup received by the same group using the same methodology. AI tools have evolved throughout 2025, so it's not something unfeasible`,
      isOriginalPost: false,
      upvotes: 10,
      depth: 2,
      parentId: "o9oogkk",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9otclr",
    type: "custom",
    data: {
      label: ` &gt;AI has not yet demonstrated any actual ROI.   I agree that if LLMs prove incapable of...`,
      fullText: `
&gt;AI has not yet demonstrated any actual ROI.

 I agree that if LLMs prove incapable of replacing human workers technically they will not replace human workers. 

However, if they do prove capable, companies will absolutely use them to replace humans. They will find ways to handle issues like liability attribution. I mean, we already have methods to assign liability to corporations and the like, and these legal structures will be used to solve your point #2 ("AIs can never have responsible charge").


As for point 1, it may be true that professional athletes will not be replaced with AI, but I think there are a lot of jobs where society will not demand the same level of human touch. Historically, many professions have been killed by tech already. How many people will care if truckers are replaced by self-driving trucks? Do they really need the "human element" of truck drivers?`,
      isOriginalPost: false,
      upvotes: 10,
      depth: 2,
      parentId: "o9oogkk",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9otqiz",
    type: "custom",
    data: {
      label: `The methods to assign liability to corporations require identifying, in many cases, an ind...`,
      fullText: `The methods to assign liability to corporations require identifying, in many cases, an individual human being as the one in responsible charge. I think you're brushing that aside too easily. 

Again, for point 1, the point is that we will always want humans to do some tasks, and if more humans are freed from the tasks they're doing, we'll likely reallocate them to the things we want humans doing.`,
      isOriginalPost: false,
      upvotes: 6,
      depth: 3,
      parentId: "o9otclr",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9ovw1b",
    type: "custom",
    data: {
      label: `&gt;The methods to assign liability to corporations require identifying, in many cases, an...`,
      fullText: `&gt;The methods to assign liability to corporations require identifying, in many cases, an individual human being as the one in responsible charge. I think you're brushing that aside too easily. 

This is a legal hurdle, and laws change. This argument hinges on the idea that powerful corporate interests will not be able to influence law making, which is not a historically safe bet. 

When an industry with powerful backers needs something to happen to be legally viable, it tends to happen.`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 4,
      parentId: "o9otqiz",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9paspb",
    type: "custom",
    data: {
      label: `And when buildings collapse laws tend to change as well`,
      fullText: `And when buildings collapse laws tend to change as well`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 5,
      parentId: "o9ovw1b",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9r23gv",
    type: "custom",
    data: {
      label: ` I agree that if AI proves incapable of replacing human workers then it will not replace h...`,
      fullText: ` I agree that if AI proves incapable of replacing human workers then it will not replace human workers.


However, if AI proves to be capable of producing safe buildings, then I don't trust a legal hurdle based on liability to stop it's adoption.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 6,
      parentId: "o9paspb",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9os1qt",
    type: "custom",
    data: {
      label: `Regarding point 1, you downplay the effects AI will have and then use an example of a prof...`,
      fullText: `Regarding point 1, you downplay the effects AI will have and then use an example of a professional sports game, completely ignoring the fields and industries where AI is actually replacing jobs. Your example is completely unrelated. 


With point 3, that's completely ignoring the jobs and careers that are being laid off now. Sure there is no ROI, but that doesn't change the layoffs already happening.`,
      isOriginalPost: false,
      upvotes: 10,
      depth: 2,
      parentId: "o9oogkk",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p4gei",
    type: "custom",
    data: {
      label: `Layoffs are happening predominantly because tech companies overhired. AI is just a smokesc...`,
      fullText: `Layoffs are happening predominantly because tech companies overhired. AI is just a smokescreen they’re using. Look at companies that are doing well, Nvidia, OpenAI, Anthropic - they’re all hiring for jobs that other companies are claiming AI will replace.`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 3,
      parentId: "o9os1qt",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9osr5c",
    type: "custom",
    data: {
      label: `Point number 1 focuses on the fact that humans have an inherent value as a social creature...`,
      fullText: `Point number 1 focuses on the fact that humans have an inherent value as a social creature. We care about other people and want things from other people and some of those things have economic implications, like sports. I'm not arguing in point 1 that no one will be replaced, but that humans have a value that can drive economic opportunities even in the midst of an optimistic AI revolution.

Point 3, I agree that jobs are being destroyed, but again, the lack of demonstrable ROI from these models means those jobs must have been, to some degree, bullshit all along. AI could be an excuse rather than a reason for the layoffs.`,
      isOriginalPost: false,
      upvotes: 8,
      depth: 3,
      parentId: "o9os1qt",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p3mqz",
    type: "custom",
    data: {
      label: `I find a lot of people who are completely convinced of a fully AI future do not seem to un...`,
      fullText: `I find a lot of people who are completely convinced of a fully AI future do not seem to understand that our brains are quite literally built for social interaction and collective adaptation, rather than productivity. I think this is why we keep rebuilding familiar social structures despite the fact that we have the technology to build a completely new one. The industrial revolution changed the world only for it to lead to us building very very similar hierarchies and communities as our ancient ancestors. It's very interesting, imo. Even in our development of AI, we ultimately seem much more focused on catering it to mimic our own brains (even though it probably isn't as good at that due to the lack of organic biology driving a vast majority of its decisions like we have) rather than to be the most efficient version of a new intelligence. That's mostly because industry is driving advancement and AI's efficacy as a business tool is to replace human workers, but it is still so funny to me that we as a species think to build an automated version of ourselves over a tool that *could* actually launch us into the stratosphere.

I also feel this applies to "jobs" generally. A lot of white collar work currently, if you zoom out a little, is completely meaningless labor. That's not to put anyone's career down (I'm a fellow meaningless laborer), but we do not need 15 human resource executives or a marketing team of 35 people or brand strategy departments to do the actual production work of these companies. These are all fake ass jobs lol. Think even of the Therapist. A whole career to ease our anxieties about the strangeness of modernity! The AI brand strategy department is such a hilarious idea to me because the job itself is born out of evolutionary malaise and boredom. There is no true reason for it to exist. Why automate it at all? Why automate middle management? It doesn't do anything! Sorry to pick on brand strategy.

Anyway, I kind of feel like these careers either exist because we need something new based on the changes of our physical world or just simply that we want jobs. As a species, I mean.

I don't think that automatically means that AI won't replace a lot of labor. It seems like it will, but I also think that eventually we will find new ways to create meaningless hierarchies, false promises of upward mobility, oppression and revolution, and other repeating characteristics of human society. We will figure out how to be in conflict with each other, because we are conflict driven animals. We need to bounce off each other. Maybe those will be all eventually virtual conflicts, but I really doubt it. We thrive on narrative, on stakes, and on the idea that we can push ourselves to conquer the odds/conquer our competition and the virtual world struggles to simulate that. We need the possibility of real world change, I believe.

It's baked into our species and I don't see it changing necessarily because of a new tool that shifts our definition of work.`,
      isOriginalPost: false,
      upvotes: 0,
      depth: 4,
      parentId: "o9osr5c",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9ornvp",
    type: "custom",
    data: {
      label: `As a software guy this resonates. I just completed a refactor using Claude.  I spent a lot...`,
      fullText: `As a software guy this resonates. I just completed a refactor using Claude.  I spent a lot of time waiting for it to finish “whirring…” thinking I could make the changes myself in less time.  

It also goes in circles reasoning with itself.  I constantly have to make it summarize the massive scrawl it just shat out trying to make a decision. 

On the other hand , it can definitely write specific code faster than me.   I think there are tricks to using it efficiently.  It wastes so much context just to clean up imports.

It is scary to think of how good it will get though.  We are still at the very beginning.

`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 2,
      parentId: "o9oogkk",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9os979",
    type: "custom",
    data: {
      label: `The big assumption that the "last 20% will be as easy as the first 80%" is what has kept s...`,
      fullText: `The big assumption that the "last 20% will be as easy as the first 80%" is what has kept self-driving cars from coming anywhere near as good as a human driver. "this is just the beginning" is giving too much credit to these professional liars. They've already fed it all the data we have, and the improvements are leveling off. They can throw more compute at it, but it isn't getting any cheaper anytime soon. 

Before we hand the world to Sam Altman on a silver platter, make him prove his optimistic claims.`,
      isOriginalPost: false,
      upvotes: 12,
      depth: 3,
      parentId: "o9ornvp",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p9lpc",
    type: "custom",
    data: {
      label: `The driving car is a bad example. We already know the foundation for neural networks impro...`,
      fullText: `The driving car is a bad example. We already know the foundation for neural networks improves when you give it precisely two things. More data, and more connections. Thats it. Every single high level engineer will agree that adding more neuron connections, and more training data, makes the network better/smarter. As you said its the data part thats the bottleneck, until the AIs can start creating their own data to train themselves on. Yes, thats a real thing and a real consideration. AlphaZero, the chess AI, could only be as good as a human expert player while it trained on expert chess player data. When they let it create its own data and train off that, it immediately became better than any human chess player could ever hope to become and not just by brute force. It learned to play exactly like a human would, with reasoning, and just did it way better. 

Its also an insanely tricky slope because nobody knows what would happen if you do this and how the networks would react. This is where the doomsday talk comes in about it thinking wiping us out is the most effective action, and we dont know how to guardrails against that either. `,
      isOriginalPost: false,
      upvotes: 3,
      depth: 4,
      parentId: "o9os979",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pb1ea",
    type: "custom",
    data: {
      label: `The idea that AI can create it's own data to train on is very controversial and should not...`,
      fullText: `The idea that AI can create it's own data to train on is very controversial and should not be assumed. It's a wild guess that hasn't been proven`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 5,
      parentId: "o9p9lpc",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9qgxza",
    type: "custom",
    data: {
      label: `&gt;Across tech, media, retail, and other sectors, companies are cutting positions and cit...`,
      fullText: `&gt;Across tech, media, retail, and other sectors, companies are cutting positions and citing AI and automation as the reason. And the economic incentive is clear: AI systems operate around the clock at a fraction of the cost, with no benefits, no breaks, and no burnout

AI is only cheap because it's being insanely subsidized by idiotic rich people with money to burn. That will end eventually. AI will eventually be huge. Right now, it's an awful bubble that's going to burst.

&gt;Left to market forces alone, I don't see how AI creates net positive employment.

Neither did any other technological breakthrough. Technological breakthroughs ***always*** result in massive unemployment. The solution is to aggressively tax the rich in order to pay and retrain people to do the things AI can't do yet. Then we get a 20 hour week.

That's not what's going to happen, of course, because neoliberal hell.

&gt;It writes code, generates designs, moderates content, handles customer service, and analyzes data. These aren't assembly-line tasks. 

Customer service is extremely assembly-line ish. AI can do it, but not without unpredictable hallucinations. You need a human to filter out the random bullshit. AI is a very useful tool for getting average people with serviceable but not great skills in a language to do a job you'd otherwise need a native speaker for, so you can outsource to poorer countries with lower wages.

 I work customer service in a foreign language in exactly that situation.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9qm3km",
    type: "custom",
    data: {
      label: `&gt; AI is only cheap because it's being insanely subsidized by idiotic rich people with m...`,
      fullText: `&gt; AI is only cheap because it's being insanely subsidized by idiotic rich people with money to burn

The price of tech naturally goes down as it advances. I can buy a phone now for the same price as my phone five years ago, and now it can play PC games.

The same logic that made computers smaller and cheaper will start applying to ai`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "o9qgxza",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9qmtfj",
    type: "custom",
    data: {
      label: `Eventually, yes. But the only reason AI is being used as much as it is now is because of t...`,
      fullText: `Eventually, yes. But the only reason AI is being used as much as it is now is because of the idiotic venture capitalists.

The infrastructure is extremely perishable. All those chips are being used up rapidly, and there is absolutely no plan for any of this to be profitable in any way, ever, in the foreseeable future.

This is not how a sustainable business works.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 3,
      parentId: "o9qm3km",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p108q",
    type: "custom",
    data: {
      label: `One thing I never seen mentioned is how AI will accelerate how much gets done.  Previously...`,
      fullText: `One thing I never seen mentioned is how AI will accelerate how much gets done.

Previously, it may take 10 engineers a year to build something useful.

Now they can do it in less than a month, and can work on 12 other things in rapid succession.

I’d like to think jobs won’t be erased, we’ll just get more done.`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9r7icv",
    type: "custom",
    data: {
      label: `The question is demand.  Imagine I can make 10x as many televisions with the same number o...`,
      fullText: `The question is demand.

Imagine I can make 10x as many televisions with the same number of workers.  Can we sell 10x as many televisions, even at a reduced price?  Or does everyone get a television and then stop buying them?

If you can sell 10x as many televisions, then you keep the same number of workers and just produce more and sell them for less.

But if you can sell no more televisions you fire 90% of your workers and sell the same number of televisions.

So far with software there has been an endless demand for it - the cheaper we can make software the more people want of it.  But that might reach a limit.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "o9p108q",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9uc4w4",
    type: "custom",
    data: {
      label: `&gt;Imagine I can make 10x as many televisions with the same number of workers. Can we sel...`,
      fullText: `&gt;Imagine I can make 10x as many televisions with the same number of workers. Can we sell 10x as many televisions, even at a reduced price? Or does everyone get a television and then stop buying them?

Depends how to look at that. If you are rigidly limiting yourself to one product and make it cheaper with faster assembly, then yes - you will hit the plateau and won't move past that no matter the productivity increase. Everyone will have TV in every room and no one would want more.

But IRL id does not work like that, you are not only focusing on producing one product - you are also trying to iterate on product and find derivatives that can move onto new markets. In Your TV case it would be that ability to make 10x TVs means you can try to make smaller TVs and aim at handheld market. Or put them in cars. Or make them interactive. At the same time try to make next gen TVs better so those who already have last gen TVs will be tempted to switch. All because ability to make 10x more TVs means that for you they are 10x cheaper in terms of labor costs. And often those are the limiter, not resource costs.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "o9r7icv",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p837w",
    type: "custom",
    data: {
      label: `I'm very curious - from an evolutionary perspective - of what we'll get done and why we ne...`,
      fullText: `I'm very curious - from an evolutionary perspective - of what we'll get done and why we need it done faster. We mass produce almost everything and do it at a scale and pace that far outweighs our ability to consume. Our biggest issues as a species are equal distribution of that mass production because the richest nations and people hoard resources they don't need and fill landfills at a faster rate than ever before.

So AI is an interesting tool for us to build because it continues a trend that further expands something that is already "too much." We make too much food, too much plastic, too many toys, too much furniture, too many cars, etc etc etc etc. We do not need more. We need to distribute the excess elsewhere.

But then of course we wouldn't live in an unfair world, which also seems to be in our nature, somewhat.

All interesting!`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 2,
      parentId: "o9p108q",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9rrr4k",
    type: "custom",
    data: {
      label: `Fondant humans want several major things that will take enormously more - orders of magnit...`,
      fullText: `Fondant humans want several major things that will take enormously more - orders of magnitude more - resources to develop.  The top 3 are:


1. Biological regeneration/functional immortality as a person of the age and body type they choose.  To develop this : you will need to do absolutely enormous numbers of organized scientific experiments on cells, tissue, building artificial organs and bodies, and testing them.  To develop this quickly will take more total labor than if all 8 billion current humans were working full time on just this task.


2. Virtual reality games that are completely real to human senses and companion robots that feel and seem like real people.  The former is elective safe brain surgery to install the implants required, the latter is an offshoot of step 1 - making robots with biological exoskeletons.


3. Starships.  Fast ones using sails to accelerate to half the speed of light and antimatter, thousands of tons of it, to decelerate.  You will need a partial Dyson swarm to build and fuel these.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "o9p837w",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p9rmi",
    type: "custom",
    data: {
      label: `Well said! I guess from a utopian viewpoint, building faster gets us to what you’re talkin...`,
      fullText: `Well said! I guess from a utopian viewpoint, building faster gets us to what you’re talking about - optimization of what we’re already doing.

Random anecdote: I had an idea in college that was sort of Uber for packages. If I was taking a road trip from MN to Iowa, UPS could pay me to transport packages instead of shipping themselves. On my return trip, I could bring stuff back. Obviously ignoring all the nefarious acts that could happen along the way.

Now I don’t know if that was even a problem that needs solving, but the idea is that we waste so much with redundancy.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "o9p837w",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pb3of",
    type: "custom",
    data: {
      label: `All love to ya, but I'm not personally a believer in utopia as a possible reality and gene...`,
      fullText: `All love to ya, but I'm not personally a believer in utopia as a possible reality and generally think that a constant optimization will eventually lead to a subconscious societal desire for de-optimization (which I think you could argue we're seeing currently). 

I think the courier thing you're suggesting does exist or has existed in some capacity, but not sure how much its ever been used. `,
      isOriginalPost: false,
      upvotes: 3,
      depth: 4,
      parentId: "o9p9rmi",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pqpr0",
    type: "custom",
    data: {
      label: `&gt;The new jobs required creativity   No, they didn't.   The mechanism by which new jobs ...`,
      fullText: `&gt;The new jobs required creativity 

No, they didn't. 

The mechanism by which new jobs were created is not solely or even primarily new *categories* of jobs. 

The primary mechanism by which technology creates new jobs is by *increasing available wealth*, which increases demand, which allows more jobs to be productive. 

The primary job creation of the automobile isn't in automobile workers or drivers. Those exist, but are secondary.

The primary job creation is that the society with automobiles moves goods around faster, which makes more money for everyone, which increases the average and median income, which means people can afford more food and clothes and houses and services, and thus there are more jobs in the production of food, clothes, houses, services, etc.

The horse drivers didn't just get replaced by car drivers. They got replaced by farmers, and bankers, and construction workers, and all the other jobs that a richer society needed more of.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pnbcr",
    type: "custom",
    data: {
      label: `There is a tremendous misunderstanding of what current AI actually is. You mentioned that ...`,
      fullText: `There is a tremendous misunderstanding of what current AI actually is. You mentioned that it would make decisions and create things, but LLMs are fundamentally not doing those things. They take the training data and make impressive generalizations about it. There's no intelligence, creativity, or reasoning involved, just statistics. It can't create something it hasn't already seen.

It might seem to understand it is "wrong" if you tell it so, but once you reset it (start over with fresh context), that "learning" is lost and it falls back to the training data. It's basically a guess-the-next-word machine. A very impressive one, but still just a statistical guess machine. If it is wrong, it doesn't *know* it's wrong. The intelligence is an illusion. 

LLMs being good at coding is the same thing: programming languages are a way to make a thing we can't easily understand into something more manageable: turning machine language into human language. It's the same word-guesser at work. 

Another thing about tools that we as humans prefer (programmers especially) is predictability and determinism. If you can't count on a tool to give you identical results from identical input, it's not a very good tool.

I'm not saying it's useless, but I think OP has fallen victim of the AI bro hype. None of the AI companies have succeeded yet, despite these world changing, mind blowing, disruptive claims. If they were really that revolutionary, surely they would've turned *some* profit in the half decade they've been around?`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9saghd",
    type: "custom",
    data: {
      label: `I agree with your conclusion but I would quibble about "it can't create something it hasn'...`,
      fullText: `I agree with your conclusion but I would quibble about "it can't create something it hasn't already seen". There are already papers out showing that LLMs can "discover" new proofs and solve problems. However, my position collapses back into yours because I think LLMs are impressive at discovering relationships between words and numbers. So they can basically see patterns where humans don't.
I still think you're correct and this is the most convincing argument to me about why I'm not worried about AI being a doomsday scenario, though it is disruptive and people will lose jobs like any other new technology. I await evidence it can do something more. `,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "o9pnbcr",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9x7v03",
    type: "custom",
    data: {
      label: `6 months ago I would have agreed with a good portion of that. In the last 4 months, there'...`,
      fullText: `6 months ago I would have agreed with a good portion of that. In the last 4 months, there've been huge improvements in their ability to reason, create plans, execut eplans, check their own work, and make corrections where needed.  For quite some time, the foundational and now fronteir models have been doing a lot more than the simple LLMs were capable of.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "o9pnbcr",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9rm79d",
    type: "custom",
    data: {
      label: `I've heard the automobile replacing the horse argument as an example of the actual bad sce...`,
      fullText: `I've heard the automobile replacing the horse argument as an example of the actual bad scenario where horses' "jobs" were, indeed, permanently lost.  The "horse job market" has never recovered.  Horses never found new jobs and have become largely obsolete, outside of ranches, farms and rodeos.  

I've heard fears that something like AI *will be to humans* as the automobile was to horses.  This seems to be the fear you have, which is definitely a valid fear to have in this current moment, regardless of what happens next. 

One cause for optimism is to look to comparable historical examples of actual automotive technology that sparked similar fear of job loss, particularly among white collar workers.  One good example is the release of Microsoft Excel.  Before that, in 70s and 80s, "spreadsheets" were the province of a highly technical domain in accounting, who had access to highly specialized computers, which required significant time investment through school and training.  Then BAM, Excel comes out and instantly puts this highly specialized power into the hands of the ordinary person.  

Were professional accountants doomed to fall to the wayside now that ledgers could be kept with relative ease by regular employees and individuals?  Well, as we know, definitely not.  They had to adapt and make use of the new tools, but the need for specific people to use that new tool remained.  Not only that, but the work *potential* increased, leading to new departments within the field, featuring financial planning and analytics, huge finance departments that every company makes use of now. 

But it goes much deeper than that.  Almost everyone who uses a computer uses Excel in some capacity today.  It's become a tool that further enables so many other roles to better perform their job.  Marketing, sales, project management, IT, inventory, HR.  Everyone uses spreadsheets.  And having skills in them make you an asset on those teams, where previously that just wasn't a possibility.  New roles have emerged over the years across all these departments for people who have a focus on the data and analytics driving their work.  All of that stem from this tool that emerged that has since become ubiquitous.  

I don't know what the future holds for AI, but I think one very plausible outcome is that much of these LLMs may go on to become very useful tools like Excel.  Tools that individuals can get really good at using, and then use that skill to facilitate new emerging job roles.  Just like Excel absolutely displaced many individual accountants at the time, jobs will undoubtedly be lost now.  But new jobs may emerge born out of the new tech.  `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa44k77",
    type: "custom",
    data: {
      label: `I’m not sure this argument holds once you break down the claim and the assumptions underne...`,
      fullText: `I’m not sure this argument holds once you break down the claim and the assumptions underneath it.

**Core claim**

AI will destroy more jobs than it creates, meaning the historical pattern of technological progress leading to net job growth no longer applies.

**What seems well supported**

\\- AI is already performing tasks involving writing, coding, design, and analysis.

\\- Firms clearly have economic incentives to automate when AI becomes cheaper than labour.

\\- Some layoffs are already being attributed to automation and AI adoption.

Those points are hard to dispute.

But the conclusion relies on several assumptions that might not hold.

**Key assumption**

**That AI substitutes directly for labour rather than changing the structure of work**

Historically, technologies that looked like pure substitution often ended up expanding the scope of what humans could do. Spreadsheets removed huge amounts of bookkeeping work but massively increased the amount of financial analysis businesses performed.

**That productivity gains reduce labour demand rather than expanding it**

Software development is a good example. Tools constantly increase programmer productivity, yet the number of developers keeps growing because the number of possible projects expands faster than productivity reduces labour demand.

**That future labour demand will resemble current categories of work**

Many large employment sectors didn’t exist before the technologies that enabled them. Entire labour markets emerged around the internet, mobile apps, cybersecurity, digital marketing, and data science.

AI could potentially create new categories of work around system design, oversight, integration, and coordination that are difficult to predict now.

**Alternative interpretation**

Rather than replacing cognitive labour outright, AI may dramatically increase the *amount* of cognitive work organizations attempt. Lower costs could lead to far more analysis, design, writing, and software development being done overall.

That would produce disruption in existing roles but not necessarily long-term net job loss.

**Question that matters**

What evidence would convince you that productivity expansion could still generate net labour demand even if AI replaces many existing tasks?

For example, if we began seeing entirely new AI-enabled industries employing large numbers of people, would that change your view?`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9p2q1j",
    type: "custom",
    data: {
      label: `The way I heard someone phrase it that I thought was interesting was that the phrase "tech...`,
      fullText: `The way I heard someone phrase it that I thought was interesting was that the phrase "technology creates new jobs" is actually kind of mistaken, in that its not that *technology* creates new jobs, but rather that *wealth* creates new jobs. Its not like when the automobile came around, people just invented driving jobs just for the heck of it. The key insight is that the automobile created a lot of new capabilities and power and efficiency, and thus created a lot of wealth, and then people start asking what they should *do* with that wealth. And *that's* where the automobile jobs really come from.

So with AI... I think we have to really think about what you're actually worried about. The concern is that AI can do all these amazing things, but its not just the AI companies that are generating wealth. AI *customers* are also generating wealth. Any company that automates their previous tasks with AI are both paying the AI companies, but also getting wealthier themselves, or else why do it? There isn't really a plausible version of this where *only* AI companies are making money, or else it wouldn't really make sense for anyone paying them. A successful AI push will result in a lot of wealth being created across a lot of different industries and people.

Edit: At this point I started writing paragraph after paragraph of permutations of sci-fi utoptia / dystopia before I realized I had just gone way off the rails. So I deleted that and will just leave it as, if there's a lot of wealth, people  will want to find *something* to do with that wealth. And in the long term, the cost of all the pure AI / robotics stuff is likely going to trend downwards - I don't think it makes any sense for the billionaires to even be able to spend money doing AI stuff - eventually they're going to have money that they *want* to spend on labor of some kind. Where this goes from here is a whole can of worms for good or ill, but I don't think labor will go away as long as there's wealth. And to summarize all my now-deleted musings, I think utopia and extinction are both the more *stable* ultimate outcomes. Maybe we dip (further?) into dystopia at some point, but I think that's likely to last!`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9r7v7o",
    type: "custom",
    data: {
      label: `It isn't that automation creates new wealthy (although it can) it is that it reduces price...`,
      fullText: `It isn't that automation creates new wealthy (although it can) it is that it reduces prices and the same old wealth still gets spent somewhere else.

Imagine you make $100 and spend $50 of it on food (which used to be the case).  If automation cuts the cost of food in half, you now spend $25 on food and have $25 to spend on other things.  Spending that $25 on other things is new demand for those other things and jobs are created to produce those things.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "o9p2q1j",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9rh5xz",
    type: "custom",
    data: {
      label: `Sort of. I think its better not to think about it in terms of dollars though. The reason w...`,
      fullText: `Sort of. I think its better not to think about it in terms of dollars though. The reason why AI is important (at least in theory) is that it increases overall productivity and output. Humanity in aggregate can create more "stuff" with the same amount of raw inputs (energy, labor, resources). In many cases, this will result in prices going down, but you need to be careful about a massive industry spanning thing. Its not clear you'd actually get a situation where *everything* gets cheaper at the same time, because you'd get inflation that would mechanically bump the prices back up again. But if you're actually producing more stuff... that genuinely changes the dynamics. In other words, I think you would see the sorts of effects you're describing in certain areas, but its driven by actual productivity increases / abundant goods, which is the actual driver of wealth that I'm describing.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "o9r7v7o",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9t4ghv",
    type: "custom",
    data: {
      label: `So, imagine the year is 1790, and [90% of the population are farmers](http://1.bp.blogspot...`,
      fullText: `So, imagine the year is 1790, and [90% of the population are farmers](http://1.bp.blogspot.com/_otfwl2zc6Qc/S7wCSklc9II/AAAAAAAANMA/Vl7nJA1hZPA/s1600/mfgjobs.jpg). 
  
You’re a farmer. I’m a farmer. The steam engine has been around for a while. Machines are getting better all the time.  
  
And someone postulates that the machines are going to revolutionize farming, and take all the farming jobs. And they’re 100% correct.  
  
So, they try to imagine what jobs will exist in the future.  
  
Well, they’re in luck. They find a magic mailbox, and can send one letter to 2026, and they ask about it.  
  
And the letter comes back and says “there will be people called “influencers”, who take pictures of themselves on something called a “cellphone”, which is like a “telegraph” and a “computer” with some sort of glowing light screen like a “television”, to send those pictures over “the Internet”.  
  
None of that would make sense. They’d never be able to guess.  
  
We’ll never be able to guess.  
  
And the other part is human nature. The headwinds fallacy.  
  
Humans are, for better or worse, never satisfied. It’s not part of our character. Humans always take their privileges for granted and fixate on their problems. I don’t think that being ever satiated it something we can ever expect from humans, ever.  
  
No matter what we have, we will always find problems with it, and feel the need to stress ourselves out trying to make adjustments.  
  
I don’t think there’s a cap to that. If we had so much technology that everyone got their own entire planet, with millions of robots a piece, fulfilling their every whim… people would start wanting 2 planets.  
  
`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pcv9q",
    type: "custom",
    data: {
      label: `Had AI taken jobs is there any evidence of that? I've heard that by "2030 AI will eliminat...`,
      fullText: `Had AI taken jobs is there any evidence of that? I've heard that by "2030 AI will eliminate x amount of jobs." it might, but it hasn't yet. 

We have seen a cooling labor market with last month having job losses, but it's not catastrophic yet and it doesn't seem to be related to AI. 

For instance for the latest job report what happened was healthcare lost jobs due to a large nurse's strike. Healthcare for a long time has been the major sector that has seen expanded hiring. Post Covid healthcare/government were the main bright spots with government jobs being shed more recently. This means that the one bright spot is healthcare and if healthcare loses jobs then you see a job loss. 

This is because of the aging population. The need for more health interventions and more caregiving. 

Meanwhile other sectors saw another reason why hiring decreased and it has nothing to do with AI. 

The fed raised interest rates. Before, when interest rates were low companies jumped on this "easy money" to expand and gain customer bases and investors. Once the "easy money" went away companies started to focus entirely on profit rather than expansion. Then...this is where AI comes in. 

AI became the best big thing. Tech companies started investing heavily in it and promoting it. This was an expansion, however AI expansion is about infrastructure not tech workers. A few people working on the actual AI apps are employed and compensated very well, but it's less labor intensive than other tech trends. The money is spent on components, increasing energy capacity and building data centers which costs a lot of money but doesn't really employ the same amount of people as before. 

So AI itself might not be replacing people en masse, but AI infrastructure investment is potentially reducing investments in other areas that would involve more hiring. 

One of the main reasons why I don't think AI is actually replacing people's jobs is that the "Prime Age Workforce Participation Rate" is actually still pretty high. Roughly 83.5%.

https://fred.stlouisfed.org/series/LNS11300060

If AI were actually taking jobs en masse you would see that number get reduced. The brief Covid recession absolutely reduced this number. People definitely lost work due to Covid you can see it clearly in the numbers. People have not lost jobs due to AI. 

I guess I could have led with that chart. It's really all we need to see to disprove that AI is taking jobs. If AI were taking jobs you would see a strong dip in workforce participation. 

Will AI take jobs? I am not convinced. I see AI as a tool that will increase productivity. For the most part tools they increase productivity ultimately change the nature of work but not the number of people working.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa00q69",
    type: "custom",
    data: {
      label: `Posso estar errado, mas já faz um bom tempo que deixamos as big tech fazerem o que quer, p...`,
      fullText: `Posso estar errado, mas já faz um bom tempo que deixamos as big tech fazerem o que quer, porque nossas leis não avançam na velocidade da tecnologia. a IA só piorou isso pq agora estamos vendo modelos de automação e criação capazes de destruir indústrias, colapsar o capitalismo de consumo atual e as relações de trabalho como pensamos hoje. O problema é que essa mudança de modelo social vai acontecer em uma escala frenética e mundo não vai ter tempo de se adaptar. Passaremos por tempos caóticos até a coisa chegar em um novo desenho social funcional, talvez longe do capitalismo atual. Quem não quer health Care universal gratuito, por exemplo?

A IA pode sim nos tornar mais eficientes, baixar custos e viabilizar um modelo que ainda não está claro. A questão é mais mudar a forma como enxergamos a vida, nossa visão de sucesso do que outra coisa. Não estamos prontos pra isso...nem sabemos se haverá lugar pra todos.

Mas é uma tecnologia revolucionária aplicada na ciência e que pode nos trazer benefícios imensuráveis. 

Sei lá... Sou um otimista e acho a IAG vai ser uma ferramenta q muda tudo... não sabemos aonde vai dar mas não tem mais volta. Talvez ela mesma nos ajude a desenhar um novo modelo social. A pergunta é... Quem ganha com isso? Os benefícios serão acessíveis a todos? Representa ética e valores diversos de toda sociedade ou apenas da parcela ínfima de tecnocratas da bolsa?

Nada será como antes... É nossa única certeza!`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9s1io9",
    type: "custom",
    data: {
      label: `I think broadly and in the short term what you are saying makes sense. I think you are del...`,
      fullText: `I think broadly and in the short term what you are saying makes sense. I think you are deluded in your historical grounding and biased based on your limited understanding of what a “job” is and how the economy functions. 

We exist is a world run by humans. Humans ultimately will decide what is required to generate $ and what a job is. I imagine at some point people are not going to sit around letting AI run their lives. 

Two things that drive price are supply and demand. 

When something fundamentally becomes effortless to provide so that supply becomes bountiful -  eventually the $$ amount connected to it will decrease. 

What is valuable will shift.  

I imagine that the current world system will eventually shift to where different things are valued and what is a “job” becomes a completely different concept. 

Economies have ran on massively different paradigms for years. Is AI replacing everything anything more than an evolution of computers -&gt; an evolution of the telegram -&gt; the printing press. Eventually this point was going to be hit. How do small nations without corporate structure and college degrees operate? Are people just going to stagnate or combust? 

TLDR: Jobs won’t disappear they will transmute. (But the process probably will be painful and might hurt)`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9qrp5m",
    type: "custom",
    data: {
      label: `I will say that's true maybe long term, but I think that we will see a very hectic and con...`,
      fullText: `I will say that's true maybe long term, but I think that we will see a very hectic and confusing in-between state where we might literally have more jobs. 

Multiple reasons: 

1. Those incentivized by the capitalistic system we have will establish bullshit low wage opportunities to keep the status quo, rather than have a dramatic upset. Think... Influencers, but getting paid a living wage based on content output total, not viewership.

2. We will actually have an influx of capital, established systems where humans having capital is essential, and established infrastructure. So we might create jobs mostly around maintaining this... Less bullshit, but mostly because we don't know what to do with certain infrastructure that requires a human being to rubber stamp something. 

3. The total wealth from displacing humans in high pay jobs + the creation of near human level cognition with some spiky gaps (eg. Human dexterity at very fast speeds and very dynamic scenarios) will allow for jobs that would not have been economical to suddenly become so. 

That being said I don't think this lasts very long, it will be chaotic, and there will be a loooooot of nonsense just because people don't know how to transition to a post labour economy smoothly.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa84jpt",
    type: "custom",
    data: {
      label: `In fact Alex Karp recently said AI will destroy the economic power of women and transfer t...`,
      fullText: `In fact Alex Karp recently said AI will destroy the economic power of women and transfer that power to working class males. He seems super happy about this. `,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pfatn",
    type: "custom",
    data: {
      label: `One thing I'd argue is that current AI is not at all "creative", and is only replacing *ro...`,
      fullText: `One thing I'd argue is that current AI is not at all "creative", and is only replacing *rote routine jobs* involving mental work. 

Take writing code, for example. The *actual writing of the code* is largely rote work once you have a solid spec for what the function is supposed to do, which humans still have to come up with to prompt the AI. There's some creativity involved in the coding (though I've seen that cause problems more often than not), but most of the *actual* creativity is stuff that goes into the prompts. 

AI can increase productivity in coding *a lot* by doing this rote work fast, and even better, augmenting it by doing the grunt-work of writing unit tests, which no developer actually wants to do, but it can't replace actual analysis and debugging of the code. 

But the point is: how do you know that the economic response to "developers are 10x as efficient" will be "10x fewer developers" rather than "yay, we can now write 10x as much software to sell, or to support our business indirectly"?

The latter seems *way* more likely. There's always been a huge demand for developers, in excess of supply. Sure, it might reduce the ridiculous compensation packages somewhat, but that doesn't mean "less jobs".

And also: birthrates in developed countries continue to decrease... we really need to cut down on the number of jobs "needed" because we're entering a phase of "less people available to do jobs".`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9q9u02",
    type: "custom",
    data: {
      label: `I think you're right about the difference in speed and scope, but I'd push back slightly o...`,
      fullText: `I think you're right about the difference in speed and scope, but I'd push back slightly on the framing: the real issue isn't whether new jobs will emerge—they probably will—it's the *mismatch in transition*. When the car killed horse work, there was a lag: livery workers had to retrain, and some didn't make it. But the economy had ~30 years to absorb and redistribute. AI is doing this in 2-3 years per field.

The "we can't imagine the jobs" argument does have some truth, though. We can't predict micro-innovations—how many new roles will exist once people can cheaply ask AI to do tedious parts of creative work? But those jobs might require different skills, different locations, different education. The question isn't really "will jobs exist" but "will *displaced workers* be able to transition?" That's an economic and political question, not a technological one.

I'd soften your view to: AI will create new work faster than in past tech shifts, but probably *not* fast enough to prevent significant disruption in the next 5-10 years. The compensation mechanism might kick in later.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oa1hql0",
    type: "custom",
    data: {
      label: `I get the argument, but I’m not fully convinced this time is that different. People said s...`,
      fullText: `I get the argument, but I’m not fully convinced this time is that different. People said similar stuff during the industrial revolution too. There were tons of fears that machines would permanently wipe out work because they were replacing both skill and labor.

What actually happened was that the whole economy reshaped around the new tech. Jobs didn’t just shift inside the same industries. Entire new industries showed up that people couldn’t really picture beforehand.

AI might kill a lot of current roles, especially repetitive knowledge work. But it might also massively lower the barrier to start companies or build products. If one person can now do what a team of ten used to do, that could mean way more small companies existing overall.

I’m not saying that guarantees a net positive outcome. The transition could be rough for sure. I just think historically the biggest mistake people made was assuming the future job market would look like the current one with pieces removed. It usually ends up looking completely different instead.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pdqjb",
    type: "custom",
    data: {
      label: `Personally, I think that AI isn't going to necessarily replace human jobs as much as it wi...`,
      fullText: `Personally, I think that AI isn't going to necessarily replace human jobs as much as it will speed along a preexisting shift in societal values in other human beings. 

Last year I started watching Criminal Minds.  If you haven't seen it, it's basically Law And Order but with serial killers, and it started its run in the early 2000s.  The show follows a small team purposed with hunting down and and apprehending killers before they claim their next victim. One of the main characters is a "brainiac" kid in his early 20s who basically acts as a walking encyclopedia.  Whenever one of the characters needs a relevant statistic, or a specific date or name, he always has it on the tip of his tongue. This brand of "memory intelligence" is highly valued by the team in their work, and it's reflective of the social zeitgeist at the time, in real life. 

With the advent of cell phones and persistent access to the internet, this type of knowledge has become less and less useful. AI is simply hurrying along the process.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9q5lth",
    type: "custom",
    data: {
      label: `A couple lines of attack, here:  1. You're overestimating how many jobs AI can replace. Yo...`,
      fullText: `A couple lines of attack, here:

1. You're overestimating how many jobs AI can replace. You cited like three industries, but there are hundreds where AI can't even begin to replace the people.  Anything that requires deep human interaction isn't going anywhere: direct medical care, mental health services, social work, emergency services, and so on. Besides the human desire to get these services from another person, they tend to be high-accountability fields where AI is nowhere close to being trustworthy enough to allow it to make decisions.  

Furthermore, even for the jobs AI *can* replace, there's already a backlash toward companies that overuse AI.  So companies that retain people in more roles may outcompete those that jump on the AI bandwagon too soon.

2. Populations are projected to decline in almost every developed nation. If those trends hold, we'll *need* AI to do more jobs, or else we'll have a labor shortage. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oae8wn8",
    type: "custom",
    data: {
      label: `You've oversimplified last disruptions to past labor markets by technological revolutions ...`,
      fullText: `You've oversimplified last disruptions to past labor markets by technological revolutions of the past it wasn't *just* mqnual labor and the advent of computers and the internet disrupted white-collar labor than manual labor. A large number of non-manual labor jobs and lrofessioms have been automated or complete decimated.

You're right in that there is no law guarantees more jobs will be created, but there other metrics we can use to evaluate whether or not AI will be more or less desruptive, like growth in labor productivity. Computers and the internet caused greater growth in labor productivty than the AI has and was more disruptive and destructive to labor markets than AI. And it still have created more jobs than destroyed. AI simply has not been as disruptive as it would *need* to be for it break a rule that has proven to hold true throughout human history.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9qcakc",
    type: "custom",
    data: {
      label: `This will be true when there is no added value humans can have over a system's capability,...`,
      fullText: `This will be true when there is no added value humans can have over a system's capability, so AGI. That may not be far off, so it's very important to start ditching capitalism and restructuring the economy to work for the people regardless of their labor contribution. BUT that's not where we are or where LLMs get us. Until then yes there is an economic law that guarantees humans will have jobs. I don't know if it's named or not but as long as the competitor can hire humans to add value that you can't add without humans, there will remain an economic incentive to have humans in the workforce. As many of them as you have. Unemployment will continue to be a result of inefficiency in allocating that labor capital, not fundamental lack of competitive advantage to employing that labor.

By the way the layoffs in tech are not actually because of AI replacing software engineers. If there comes a point where they are, this will also be temporary until everyone finds the point where people can add value on top of the work done by models.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9sn50g",
    type: "custom",
    data: {
      label: `My problem is that even if AI *does* result in new jobs being created (which itself is a d...`,
      fullText: `My problem is that even if AI *does* result in new jobs being created (which itself is a dubious claim), the jobs won’t be the same. An entire class of people will have their jobs replaced and the “solution” is for them to completely change their careers into something they may not even be qualified or trained for, or they may not enjoy doing. 

The *proper* solution would be to recognize that this is an incredibly disruptive technology, and create things like federal safety nets and services to help people retrain and get new jobs, and to enforce worker protections and regulations to prevent companies from recklessly eliminating huge swathes of workers for barely-understood technology that ultimately might not work. But of course that’s never going to happen under this administration.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9pred5",
    type: "custom",
    data: {
      label: `At its simplest: AI will probably increase worker productivity to some extent. Increases i...`,
      fullText: `At its simplest: AI will probably increase worker productivity to some extent. Increases in productivity tend to negatively correlate with unemployment. Further, increased productivity is the easiest way for wages to rise.

Hence, aggregate demand will rise (increased wages) and aggregate supply will rise (higher productivity makes production cheaper) hence gdp will steady at a new, higher equilibrium.

Unemployment, through some layers of abstraction is a function of the economy being out of equilibrium, thus, in standard economic terms we shouldn’t expect AI to meaningfully harm employment in the medium term`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9oqjpy",
    type: "custom",
    data: {
      label: `If this future is still capitalist, they need consumers. If food companies want to exist t...`,
      fullText: `If this future is still capitalist, they need consumers. If food companies want to exist they need people buying food. 

Creation of new jobs isn't a particularly helpful metric, especially when discussing automation. 

&gt;I do think companies can choose to keep humans in the loop, designing systems that include people rather than replace them, but that's an ethical choice, not an economic inevitability. 

Humans NEED to be in the loop for companies to exist. It IS an economic inevitability that something MUST be done for even these capitalists to continue being capitalists. New jobs aren't as attractive to me as less work. 

It is fair that we shouldn't trust capitalists to make things easier or better. That isn't their goal. Their goal is to make money. If they automate their way out of having customers or clients then they too fail. There is an economic incentive to have people either working, or keep them paid a wage that can buy products.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9z995a",
    type: "custom",
    data: {
      label: `Your (and many others') idea of how jobs originate is incomplete. Both supply and demand f...`,
      fullText: `Your (and many others') idea of how jobs originate is incomplete.
Both supply and demand forces control how we determine the value of our work. 

* Fundamentally, AI is automation. It's the newest and fanciest automation, but still fundamentally Automation.
* There will always be things that can't or won't be automated. There is an unlimited amount of work to be done and limited capacity for work. 
* Automation devalues everything it touches. 
* This will move value away from AI and into non AI tasks. 
* Humans have unlimited "wants". There is no limit to things that we want/desire. If all of the stuff we normally buy becomes cheap, we will just buy more expensive stuff instead of just saving it all, driving demand for non AI tasks.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9qa767",
    type: "custom",
    data: {
      label: `Even if you have an AI that can do anything, you’ll never have an AI that can do everythin...`,
      fullText: `Even if you have an AI that can do anything, you’ll never have an AI that can do everything, everywhere, all at once. The laws of physics don’t allow it. 

While your AI is busy with one task, you will have to depend on someone else’s AI to complete a different task for you. And then you’ll have to trade them something to get what they produced for you. 

Produce enough things to trade with other people and you have what is known as a job. 

So even in an era where AIs can do literally anything, jobs will still exist. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9yevcw",
    type: "custom",
    data: {
      label: `I think the more likely outcome in the short to medium term is that AI creates more "jobs,...`,
      fullText: `I think the more likely outcome in the short to medium term is that AI creates more "jobs," but those jobs are lower-paying and more precarious. Obviously whether this is the long-term outcome depends on a lot of political factors, but it is already happening: the bulk of the jobs AI has created tend to be gig work to generate sample data, which is short-lived and unpredictable since it is based on LLM companies' project needs, and also designed to make itself obsolete.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9qydnf",
    type: "custom",
    data: {
      label: `Ned Ludd wasn't wrong. He was just 250 years too early.`,
      fullText: `Ned Ludd wasn't wrong. He was just 250 years too early.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9r6ojs",
    type: "custom",
    data: {
      label: `It's not hope to expect that new jobs will pop up. It's hope to believe that AI will be so...`,
      fullText: `It's not hope to expect that new jobs will pop up. It's hope to believe that AI will be so perfect that everything will be able to be run *unattended*.  If AI unlocks unlimited productivity only bound by energy and compute, then it will also unlock unlimited secondary jobs necessary to do the things that require attendance.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9q66w7",
    type: "custom",
    data: {
      label: `You're in luck: the AI we have right now is not reasoning. You're seeing ever more impress...`,
      fullText: `You're in luck: the AI we have right now is not reasoning. You're seeing ever more impressive statistical tricks. But reasoning? Nope.

AI is an absolute hype machine right now. The actual capabilities are far less than what executives would have you believe.

In real life, people who excel at graduate-level mathematics don't fail to do basic arithmetic. AI models still do.

If you tell models that something is probably right, they're likely to take your word for it.

Seriously, don't worry about this round of AI. It will not deliver on any of the current promises without a complete revolution. Worry *then*`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9x0w1e",
    type: "custom",
    data: {
      label: `The point of tools has never ever been to create jobs. They just make them eaiser.   TNT a...`,
      fullText: `The point of tools has never ever been to create jobs. They just make them eaiser. 

TNT and Drills cost us alot of mining jobs. But few want to go back to swinging pick axes. 

Even a calculator used to be a well paying job only for well educated people. Now we all have one in our pocket. 


`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9rnl10",
    type: "custom",
    data: {
      label: `I've been unemployed.  I ain't shook.`,
      fullText: `I've been unemployed.  I ain't shook.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "o9q09wr",
    type: "custom",
    data: {
      label: `I don’t disagree - and this will continue as long as people are arguing the wrong thing.  ...`,
      fullText: `I don’t disagree - and this will continue as long as people are arguing the wrong thing.  AI needs to change jobs, not eliminate them, in order to succeed. I wrote about this at https://open.substack.com/pub/rlsutter/p/ai-isnt-a-replacement-problem`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1rq02gl",
    },
    position: { x: 0, y: 0 },
  },

];

export const aiJobsDiscussionEdges: Edge[] = [
  { id: "e_o9onlag", source: "1rq02gl", target: "o9onlag" },
  { id: "e_o9orxfb", source: "o9onlag", target: "o9orxfb" },
  { id: "e_o9r7x2f", source: "o9orxfb", target: "o9r7x2f" },
  { id: "e_o9rgve6", source: "o9r7x2f", target: "o9rgve6" },
  { id: "e_o9u9h1p", source: "o9rgve6", target: "o9u9h1p" },
  { id: "e_o9zm1po", source: "o9u9h1p", target: "o9zm1po" },
  { id: "e_oa03m1z", source: "o9zm1po", target: "oa03m1z" },
  { id: "e_ohlt57s", source: "o9u9h1p", target: "ohlt57s" },
  { id: "e_ohmiu7s", source: "ohlt57s", target: "ohmiu7s" },
  { id: "e_o9zfh81", source: "o9rgve6", target: "o9zfh81" },
  { id: "e_o9zqn8d", source: "o9zfh81", target: "o9zqn8d" },
  { id: "e_ob691v3", source: "o9zqn8d", target: "ob691v3" },
  { id: "e_o9pkom1", source: "o9orxfb", target: "o9pkom1" },
  { id: "e_o9pxnxi", source: "o9pkom1", target: "o9pxnxi" },
  { id: "e_o9pyu9u", source: "o9pkom1", target: "o9pyu9u" },
  { id: "e_o9q2t2o", source: "o9pyu9u", target: "o9q2t2o" },
  { id: "e_o9rlibt", source: "o9q2t2o", target: "o9rlibt" },
  { id: "e_o9riig7", source: "o9q2t2o", target: "o9riig7" },
  { id: "e_o9plmy6", source: "o9orxfb", target: "o9plmy6" },
  { id: "e_o9pvc59", source: "o9plmy6", target: "o9pvc59" },
  { id: "e_o9pvzcq", source: "o9pvc59", target: "o9pvzcq" },
  { id: "e_o9r9xim", source: "o9pvzcq", target: "o9r9xim" },
  { id: "e_o9q75km", source: "o9pvzcq", target: "o9q75km" },
  { id: "e_o9q6xn1", source: "o9pvzcq", target: "o9q6xn1" },
  { id: "e_o9qqd01", source: "o9pvzcq", target: "o9qqd01" },
  { id: "e_o9r8aqj", source: "o9pvzcq", target: "o9r8aqj" },
  { id: "e_o9r8x5b", source: "o9r8aqj", target: "o9r8x5b" },
  { id: "e_o9rei7j", source: "o9r8x5b", target: "o9rei7j" },
  { id: "e_od4tju9", source: "o9orxfb", target: "od4tju9" },
  { id: "e_o9osc91", source: "o9onlag", target: "o9osc91" },
  { id: "e_o9owaj8", source: "o9osc91", target: "o9owaj8" },
  { id: "e_o9oygj0", source: "o9owaj8", target: "o9oygj0" },
  { id: "e_o9p4sm9", source: "o9oygj0", target: "o9p4sm9" },
  { id: "e_o9p75ct", source: "o9p4sm9", target: "o9p75ct" },
  { id: "e_o9p8rgs", source: "o9p75ct", target: "o9p8rgs" },
  { id: "e_o9q08c3", source: "o9owaj8", target: "o9q08c3" },
  { id: "e_o9qn3hv", source: "o9q08c3", target: "o9qn3hv" },
  { id: "e_o9r3vbn", source: "o9qn3hv", target: "o9r3vbn" },
  { id: "e_o9rbf9i", source: "o9qn3hv", target: "o9rbf9i" },
  { id: "e_o9yb1zo", source: "o9rbf9i", target: "o9yb1zo" },
  { id: "e_o9p3rkn", source: "o9owaj8", target: "o9p3rkn" },
  { id: "e_oa089nw", source: "o9owaj8", target: "oa089nw" },
  { id: "e_oa3jbdu", source: "oa089nw", target: "oa3jbdu" },
  { id: "e_o9shfw9", source: "o9osc91", target: "o9shfw9" },
  { id: "e_oa3yipp", source: "o9shfw9", target: "oa3yipp" },
  { id: "e_oa45k28", source: "oa3yipp", target: "oa45k28" },
  { id: "e_oahz8tb", source: "oa45k28", target: "oahz8tb" },
  { id: "e_oai3smu", source: "oahz8tb", target: "oai3smu" },
  { id: "e_oamvx2f", source: "oai3smu", target: "oamvx2f" },
  { id: "e_o9ozal4", source: "o9osc91", target: "o9ozal4" },
  { id: "e_o9p3617", source: "o9ozal4", target: "o9p3617" },
  { id: "e_o9sar5r", source: "o9p3617", target: "o9sar5r" },
  { id: "e_o9rogvw", source: "o9osc91", target: "o9rogvw" },
  { id: "e_o9ou450", source: "o9osc91", target: "o9ou450" },
  { id: "e_o9ouysz", source: "o9ou450", target: "o9ouysz" },
  { id: "e_o9ospf6", source: "o9onlag", target: "o9ospf6" },
  { id: "e_o9pm4er", source: "o9onlag", target: "o9pm4er" },
  { id: "e_oa1m4j0", source: "o9onlag", target: "oa1m4j0" },
  { id: "e_o9sdoha", source: "o9onlag", target: "o9sdoha" },
  { id: "e_o9t89j0", source: "o9sdoha", target: "o9t89j0" },
  { id: "e_o9ufs8z", source: "o9t89j0", target: "o9ufs8z" },
  { id: "e_o9wb2t3", source: "o9onlag", target: "o9wb2t3" },
  { id: "e_o9wdeen", source: "o9wb2t3", target: "o9wdeen" },
  { id: "e_o9wnqbb", source: "o9wdeen", target: "o9wnqbb" },
  { id: "e_o9w3elu", source: "o9onlag", target: "o9w3elu" },
  { id: "e_o9p0l7x", source: "1rq02gl", target: "o9p0l7x" },
  { id: "e_o9r44mq", source: "o9p0l7x", target: "o9r44mq" },
  { id: "e_o9ru65c", source: "o9r44mq", target: "o9ru65c" },
  { id: "e_o9tv1d3", source: "o9r44mq", target: "o9tv1d3" },
  { id: "e_o9ureao", source: "o9p0l7x", target: "o9ureao" },
  { id: "e_o9uy2o4", source: "o9ureao", target: "o9uy2o4" },
  { id: "e_o9vowqt", source: "o9uy2o4", target: "o9vowqt" },
  { id: "e_o9vpwkv", source: "o9vowqt", target: "o9vpwkv" },
  { id: "e_o9yane4", source: "o9vpwkv", target: "o9yane4" },
  { id: "e_o9yi30p", source: "o9yane4", target: "o9yi30p" },
  { id: "e_oa8ntgz", source: "o9yi30p", target: "oa8ntgz" },
  { id: "e_oa98qze", source: "oa8ntgz", target: "oa98qze" },
  { id: "e_o9q4z2u", source: "o9p0l7x", target: "o9q4z2u" },
  { id: "e_o9q6kzl", source: "o9q4z2u", target: "o9q6kzl" },
  { id: "e_o9rv9fo", source: "o9q6kzl", target: "o9rv9fo" },
  { id: "e_o9r1a8e", source: "o9q6kzl", target: "o9r1a8e" },
  { id: "e_o9xusk4", source: "1rq02gl", target: "o9xusk4" },
  { id: "e_o9y3ykt", source: "o9xusk4", target: "o9y3ykt" },
  { id: "e_o9znsos", source: "o9y3ykt", target: "o9znsos" },
  { id: "e_oayqh83", source: "o9znsos", target: "oayqh83" },
  { id: "e_oa4gti3", source: "o9y3ykt", target: "oa4gti3" },
  { id: "e_o9oy2jb", source: "1rq02gl", target: "o9oy2jb" },
  { id: "e_o9p45oi", source: "o9oy2jb", target: "o9p45oi" },
  { id: "e_o9p8fe5", source: "o9p45oi", target: "o9p8fe5" },
  { id: "e_o9q6ajq", source: "o9p8fe5", target: "o9q6ajq" },
  { id: "e_o9qjyp7", source: "o9q6ajq", target: "o9qjyp7" },
  { id: "e_o9qozy0", source: "o9qjyp7", target: "o9qozy0" },
  { id: "e_o9p8w4p", source: "o9p45oi", target: "o9p8w4p" },
  { id: "e_o9q7e95", source: "o9p8w4p", target: "o9q7e95" },
  { id: "e_o9ur6dh", source: "1rq02gl", target: "o9ur6dh" },
  { id: "e_o9v5wxm", source: "o9ur6dh", target: "o9v5wxm" },
  { id: "e_o9s34qv", source: "1rq02gl", target: "o9s34qv" },
  { id: "e_o9seklw", source: "o9s34qv", target: "o9seklw" },
  { id: "e_o9snbio", source: "o9seklw", target: "o9snbio" },
  { id: "e_o9tmfmm", source: "o9snbio", target: "o9tmfmm" },
  { id: "e_o9spnpv", source: "o9snbio", target: "o9spnpv" },
  { id: "e_o9typby", source: "o9spnpv", target: "o9typby" },
  { id: "e_o9vh6ek", source: "o9typby", target: "o9vh6ek" },
  { id: "e_o9zzm61", source: "o9s34qv", target: "o9zzm61" },
  { id: "e_o9rgrwz", source: "1rq02gl", target: "o9rgrwz" },
  { id: "e_o9rizao", source: "o9rgrwz", target: "o9rizao" },
  { id: "e_o9tbeui", source: "o9rgrwz", target: "o9tbeui" },
  { id: "e_oaapdvw", source: "o9rgrwz", target: "oaapdvw" },
  { id: "e_oaatwua", source: "oaapdvw", target: "oaatwua" },
  { id: "e_oabdmr4", source: "oaatwua", target: "oabdmr4" },
  { id: "e_oabdoyn", source: "oabdmr4", target: "oabdoyn" },
  { id: "e_oatc0xi", source: "o9rgrwz", target: "oatc0xi" },
  { id: "e_oatsshx", source: "oatc0xi", target: "oatsshx" },
  { id: "e_o9upc6g", source: "1rq02gl", target: "o9upc6g" },
  { id: "e_ocesffv", source: "1rq02gl", target: "ocesffv" },
  { id: "e_ocfaulg", source: "ocesffv", target: "ocfaulg" },
  { id: "e_oc677be", source: "1rq02gl", target: "oc677be" },
  { id: "e_oc84fnf", source: "oc677be", target: "oc84fnf" },
  { id: "e_oga1fc4", source: "oc84fnf", target: "oga1fc4" },
  { id: "e_o9uvm84", source: "1rq02gl", target: "o9uvm84" },
  { id: "e_oa5dkna", source: "1rq02gl", target: "oa5dkna" },
  { id: "e_oa90pl1", source: "oa5dkna", target: "oa90pl1" },
  { id: "e_o9zcyz5", source: "1rq02gl", target: "o9zcyz5" },
  { id: "e_o9znbmn", source: "o9zcyz5", target: "o9znbmn" },
  { id: "e_oa47ia5", source: "1rq02gl", target: "oa47ia5" },
  { id: "e_oa4ow97", source: "oa47ia5", target: "oa4ow97" },
  { id: "e_o9onxe6", source: "1rq02gl", target: "o9onxe6" },
  { id: "e_o9ouln5", source: "o9onxe6", target: "o9ouln5" },
  { id: "e_o9qtedw", source: "o9ouln5", target: "o9qtedw" },
  { id: "e_o9s3ldo", source: "o9onxe6", target: "o9s3ldo" },
  { id: "e_oaubw2s", source: "1rq02gl", target: "oaubw2s" },
  { id: "e_o9p3il5", source: "1rq02gl", target: "o9p3il5" },
  { id: "e_o9rgbcl", source: "o9p3il5", target: "o9rgbcl" },
  { id: "e_oayuhrq", source: "o9p3il5", target: "oayuhrq" },
  { id: "e_ob1awf8", source: "oayuhrq", target: "ob1awf8" },
  { id: "e_ob2tt2o", source: "ob1awf8", target: "ob2tt2o" },
  { id: "e_o9r98tl", source: "1rq02gl", target: "o9r98tl" },
  { id: "e_o9oogkk", source: "1rq02gl", target: "o9oogkk" },
  { id: "e_o9paslv", source: "o9oogkk", target: "o9paslv" },
  { id: "e_o9p5ovb", source: "o9oogkk", target: "o9p5ovb" },
  { id: "e_o9pzjew", source: "o9oogkk", target: "o9pzjew" },
  { id: "e_o9otclr", source: "o9oogkk", target: "o9otclr" },
  { id: "e_o9otqiz", source: "o9otclr", target: "o9otqiz" },
  { id: "e_o9ovw1b", source: "o9otqiz", target: "o9ovw1b" },
  { id: "e_o9paspb", source: "o9ovw1b", target: "o9paspb" },
  { id: "e_o9r23gv", source: "o9paspb", target: "o9r23gv" },
  { id: "e_o9os1qt", source: "o9oogkk", target: "o9os1qt" },
  { id: "e_o9p4gei", source: "o9os1qt", target: "o9p4gei" },
  { id: "e_o9osr5c", source: "o9os1qt", target: "o9osr5c" },
  { id: "e_o9p3mqz", source: "o9osr5c", target: "o9p3mqz" },
  { id: "e_o9ornvp", source: "o9oogkk", target: "o9ornvp" },
  { id: "e_o9os979", source: "o9ornvp", target: "o9os979" },
  { id: "e_o9p9lpc", source: "o9os979", target: "o9p9lpc" },
  { id: "e_o9pb1ea", source: "o9p9lpc", target: "o9pb1ea" },
  { id: "e_o9qgxza", source: "1rq02gl", target: "o9qgxza" },
  { id: "e_o9qm3km", source: "o9qgxza", target: "o9qm3km" },
  { id: "e_o9qmtfj", source: "o9qm3km", target: "o9qmtfj" },
  { id: "e_o9p108q", source: "1rq02gl", target: "o9p108q" },
  { id: "e_o9r7icv", source: "o9p108q", target: "o9r7icv" },
  { id: "e_o9uc4w4", source: "o9r7icv", target: "o9uc4w4" },
  { id: "e_o9p837w", source: "o9p108q", target: "o9p837w" },
  { id: "e_o9rrr4k", source: "o9p837w", target: "o9rrr4k" },
  { id: "e_o9p9rmi", source: "o9p837w", target: "o9p9rmi" },
  { id: "e_o9pb3of", source: "o9p9rmi", target: "o9pb3of" },
  { id: "e_o9pqpr0", source: "1rq02gl", target: "o9pqpr0" },
  { id: "e_o9pnbcr", source: "1rq02gl", target: "o9pnbcr" },
  { id: "e_o9saghd", source: "o9pnbcr", target: "o9saghd" },
  { id: "e_o9x7v03", source: "o9pnbcr", target: "o9x7v03" },
  { id: "e_o9rm79d", source: "1rq02gl", target: "o9rm79d" },
  { id: "e_oa44k77", source: "1rq02gl", target: "oa44k77" },
  { id: "e_o9p2q1j", source: "1rq02gl", target: "o9p2q1j" },
  { id: "e_o9r7v7o", source: "o9p2q1j", target: "o9r7v7o" },
  { id: "e_o9rh5xz", source: "o9r7v7o", target: "o9rh5xz" },
  { id: "e_o9t4ghv", source: "1rq02gl", target: "o9t4ghv" },
  { id: "e_o9pcv9q", source: "1rq02gl", target: "o9pcv9q" },
  { id: "e_oa00q69", source: "1rq02gl", target: "oa00q69" },
  { id: "e_o9s1io9", source: "1rq02gl", target: "o9s1io9" },
  { id: "e_o9qrp5m", source: "1rq02gl", target: "o9qrp5m" },
  { id: "e_oa84jpt", source: "1rq02gl", target: "oa84jpt" },
  { id: "e_o9pfatn", source: "1rq02gl", target: "o9pfatn" },
  { id: "e_o9q9u02", source: "1rq02gl", target: "o9q9u02" },
  { id: "e_oa1hql0", source: "1rq02gl", target: "oa1hql0" },
  { id: "e_o9pdqjb", source: "1rq02gl", target: "o9pdqjb" },
  { id: "e_o9q5lth", source: "1rq02gl", target: "o9q5lth" },
  { id: "e_oae8wn8", source: "1rq02gl", target: "oae8wn8" },
  { id: "e_o9qcakc", source: "1rq02gl", target: "o9qcakc" },
  { id: "e_o9sn50g", source: "1rq02gl", target: "o9sn50g" },
  { id: "e_o9pred5", source: "1rq02gl", target: "o9pred5" },
  { id: "e_o9oqjpy", source: "1rq02gl", target: "o9oqjpy" },
  { id: "e_o9z995a", source: "1rq02gl", target: "o9z995a" },
  { id: "e_o9qa767", source: "1rq02gl", target: "o9qa767" },
  { id: "e_o9yevcw", source: "1rq02gl", target: "o9yevcw" },
  { id: "e_o9qydnf", source: "1rq02gl", target: "o9qydnf" },
  { id: "e_o9r6ojs", source: "1rq02gl", target: "o9r6ojs" },
  { id: "e_o9q66w7", source: "1rq02gl", target: "o9q66w7" },
  { id: "e_o9x0w1e", source: "1rq02gl", target: "o9x0w1e" },
  { id: "e_o9rnl10", source: "1rq02gl", target: "o9rnl10" },
  { id: "e_o9q09wr", source: "1rq02gl", target: "o9q09wr" },
];
