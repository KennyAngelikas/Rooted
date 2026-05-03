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

export const sabrinaDiscussionNodes: Node[] = [
  {
    id: "1sxc5ic",
    type: "custom",
    data: {
      label: `CMV: AI will lead to more tech jobs in the long run (Jevons paradox)`,
      fullText: `[Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox) is the paradox that when something becomes cheaper to use, the total consumption of it increases instead of decreases. 

For decades, many tech companies have touted some huge advancement in developer productivity. Each tool removed a layer of complexity, but that all led to more total demand for software instead of less.

* Microsoft: operating systems abstracted away hardware
* AWS: cloud removed the need to run infra
* Stripe: APIs replaced entire subsystems

Jevon’s paradox applies as long as software demand is elastic and that continues to be truer than ever as AI requires huge amounts of software to run. 

I believe that the current contraction in the market is more due to (1) anxiety around old business models before new business models are figured out and (2) general macroeconomic uncertainty.

As somebody working in tech, maybe this is just my prescription of copium, but I’m looking for someone to change my view. 

`,
      isOriginalPost: true,
      upvotes: 64,
      depth: 0,
      parentId: null,
    },
    position: { x: 0, y: 0 },
  },

  {
    id: "oilysqx",
    type: "custom",
    data: {
      label: `I've spent a lot of time thinking about this myself and I wanted to…`,
      fullText: `I've spent a lot of time thinking about this myself and I wanted to point out here places where you could be wrong:

First, let me say : in the simplest case, you are correct.  Jevon's paradox means that if some human labor is required at all, even if just to tell AI in detail what we want to happen, eventually in the equilibrium case there would be enough demand to employ everyone.

BUT for software (and most jobs) specifically:

(1) **Air bubbles** \\- existing companies are realizing they can get the software done with 20% of the staff.  Meta said recently that one talented and motivated person can now finish the work that took a small team.  Present day, 20% of the staff and each remaining person needs their entire cost to the company as a token budget.  So *existing* teams lay off 80% and the company right off the bat reduces their cost of software to 40% of previous costs.

Jevon's is correct: there are *new* software products to be created that ultimately will need all of the developers the industry has to be at work on these new products.  Things like general purpose robots, robots mining the moon, orbital traffic control systems, drones hunting drones and sentry guns, construction automation, medical robots...

So there can be a **time lag** between the time the **weakest 80% gets fired** and the **new** companies scale their products up to the point that **you get another job**.  You can try to found your own firm but that requires specific talents.

(2) **Agism/Resume Gap** \\- this one could go either way but since AI is new, companies may feel that younger people who know how to use AI tools better are more valuable and prefer them, and if you've been unemployed for 5 years due to (1) you may never get another job.

(3) **Seniorism** \\- the opposite of Agism and seems to be what's happening presently.  That 55 year old Principal engineer may now be able to do **entire teams** worth of work and just fire everyone else, using the fired engineer's TC for token budget.  I personally know some at my employer who I think are capable of this.

(4) **Minimum Talent Bars** \\- in a world where almost all jobs are "architect", "AI supervisor", "data scientist for internal AI cognition", "drone operator", "principal engineer", "executive" - where AIs do the lower 99% - actually Jevon's says even with 99% automation you just end up with a 100x larger economy and everyone employed.  *But* actually no, the job categories I mentioned need a minimum level of **talent** and the majority of humanity may simply not be endowed with the right combination of genetics + upbringing to serve the roles mentioned.  

(5) **Minimum trustworthiness barriers** \\- Look at the jobs I mentioned in (4).  Can someone with prior convictions, even prior arrests, even getting cancelled on social media - serve in these roles?  Essentially, no.  You need humans with peerless records to do these jobs.  `,
      isOriginalPost: false,
      upvotes: 42,
      depth: 1,
      parentId: "1sxc5ic",
      isDelta: true,
    },
    position: { x: 320, y: 0 },
  },

  {
    id: "oilz8j3",
    type: "custom",
    data: {
      label: `"Jevon’s paradox applies as long as software demand is elastic" This is…`,
      fullText: `"Jevon’s paradox applies as long as software demand is elastic"

This is the crux of your chain of thought. It might be true, but it is hard to know in advance. Maybe software demand can be saturated, especially if AI solutions increase output dramatically.

The historical counter-example is farming: A single agricultural worker has never been more productive than with today's advanced machinery, pesticides, fertilizer and genetically enhanced seeds. Today there are about 2 million people employed in agriculture within the US, compared to 11 million in year 1900, even though total population increased to almost 350 million compared to the 76 million at that time.

Another potential weakness in the theory is that one may require very different skills in the future of software production compared present. Just as one person may have enjoyed horse-powered agriculture but disliked the mechanized version, someone who thrives in designing and coding may dislike managing agentic tools.`,
      isOriginalPost: false,
      upvotes: 22,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 0, y: 320 },
  },

  {
    id: "oim7ba0",
    type: "custom",
    data: {
      label: `Ok just about how long is that “long run”? Because everything seems to…`,
      fullText: `Ok just about how long is that “long run”? Because everything seems to sort itself out “In the long run” when you look at it from the stand point of the history books. World war 2 sorted itself out after the Nazis were beaten. But while at it, millions died. AI will eliminate millions of roles. Millions of people will be without jobs while “in the long run” the world adapts.`,
      isOriginalPost: false,
      upvotes: 7,
      depth: 1,
      parentId: "1sxc5ic",
      isDelta: true,
    },
    position: { x: 0, y: -320 },
  },

  {
    id: "oilwgy9",
    type: "custom",
    data: {
      label: `is the paradox that when something becomes cheaper to use, the…`,
      fullText: ` is the paradox that when something becomes cheaper to use, the total consumption of it increases instead of decreases. 


I don't think this really changes your overall view, but I just want to note as stated here I think this is a bad summary of the paradox. If the only change is in *cost*, there's no paradox! Of course you would use cheaper things more. The paradox is more about *efficiency*, where the new tech *allows* you to do more with less, but then you use more anyway. Again, I don't think this is actually a point of contention or misunderstanding, but I do think this was a bad way of paraphrasing the idea.


 Jevon’s paradox applies as long as software demand is elastic and that continues to be truer than ever as AI requires huge amounts of software to run. 


I can't predict the future, but the thing that could break this is if AI can *also make the software*, which they can — the jury is maybe still out on how well it scales to larger projects, but I wouldn't bet against it. It's true we'll want more of the more efficient software, so software demand will still go up even if you could in theory do more with less, but if the AI can also *make that software*, I don't think this will necessarily result in *jobs* per se.`,
      isOriginalPost: false,
      upvotes: 6,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: -320, y: 0 },
  },

  {
    id: "oils12i",
    type: "custom",
    data: {
      label: `I don't think anyone believes jobs will decrease due to a lack of…`,
      fullText: `I don't think anyone believes jobs will decrease due to a lack of demand related to AI? They are assuming AI fills the increased demand `,
      isOriginalPost: false,
      upvotes: 5,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 320, y: -320 },
  },

  {
    id: "oilua8h",
    type: "custom",
    data: {
      label: `Whether it happens today or tomorrow, I always have to ask where is the…`,
      fullText: `Whether it happens today or tomorrow, I always have to ask where is the demand going to draw a limit as we optimized? Eventually this all breaks down as no actual product is being produced. 


As someone who works with manufacturers, we are both having fewer workers doing the job and the catch 22 of no pipeline to teach new workers how to do the job. Software hasn't seen this quite yet... But we are definitely seeing it here. We are losing expertise with automation and lack of training as those few experts take on more, then retire. Work has been reduced. 


On top of that who is the consumer? Eventually you or I need to have a need. A lot of modern business models are centered around creating a need for the sake of having an ongoing business model. 


Im cutting subscriptions and finding that there's enough products out there that I don't actually need a lot of the new stuff out there. My Microsoft office subscription for example... I probably don't use it enough to justify it. Many people don't have one anymore unless it's their commerical use. 


Can you prove to me that I'm actually consuming more, I'll have the resources to consume the products (I need more money!) and I'll have more things that I want to be consuming (limited time in the day)?


Jevons paradox always has struck me as short sighted... It's only recently we've existed in a resource rich environment and after a bit you can only occupy people's time and budget so much. 


As a result less people will need to be employed.`,
      isOriginalPost: false,
      upvotes: 4,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 320, y: 320 },
  },

  {
    id: "oiltj50",
    type: "custom",
    data: {
      label: `Im also in tech (FAANG) and generally agree with you.`,
      fullText: `Im also in tech (FAANG) and generally agree with you. 

But my concern is more lower paying jobs. Simple supply and demand. Demand goes up. Supply goes up because the barrier for entry as a coder is much lower. So we may see SWEs at FAANG going from 250k-1M to 100k-250k`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: -320, y: 320 },
  },

  {
    id: "oiml8t0",
    type: "custom",
    data: {
      label: `The downside isn't that there will be more demand for some selective…`,
      fullText: `The downside isn't that there will be more demand for some selective class of human labor, rather it's the political economy that the owners of the technology will impose on all of humanity that keeps them at the top of the pyramid. Adam Smith argued against the Feudal and ancient (Roman Empire is the default example of what not to do in Wealth Of Nations) regime of inherited economic power, and proposes an alternative of the individuals seeking out their own self-interest that everyone will prosper. What did we get in the 250 years since the father of Capitalism published his opus? Slowly an evolution from exclusively nobility and bred elite to some opportunity to enter the elite class, described by John Lennon in his song Working Class Hero:
  
There's room at the top they are telling you still      
But first you must learn how to smile as you kill     
If you want to be like the folks on the hill
 
The industrial capitalist new boss is just as problematic and atrocious as the old boss of feudalism, just as we can all expect the AI oligarchs to be equally horrid but with more harmful tools to extract value and impose tyranny on humanity. 
  
Is there any mechanism that the individual can be considered as what the AI will do, or will be the owners of the IP/code that will determine what economic behavior their asset will partake in? Is there any way that the rest of humanity can ensure their autonomy in the face of an omnipresent AI golem answerable only to its owner? If the choice is between what the individual persons want and less profit or whatever maximizes the ROI for the owner of the AI golem, is it plausible that the democratic will of the persons will restrict the profit maximizations of the AI golem? Did industrialists in the 1800s decide "we're making a tidy profit, we can share our success with our workers and the community that we operated from"? Why would the AI oligarchs act any different and be generous with the rest of humanity? `,
      isOriginalPost: false,
      upvotes: 3,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: -320, y: -320 },
  },

  {
    id: "oiluher",
    type: "custom",
    data: {
      label: `AI will eliminate all (tech) jobs, because everybody dies.`,
      fullText: `AI will eliminate *all* (tech) jobs, because [everybody dies](https://ifanyonebuildsit.com/?ref=google-ad&amp;gad_source=1&amp;gad_campaignid=22720293810&amp;gbraid=0AAAAA_oFpEYBJnzH-eSxsXg996m-fFklL).`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: -500, y: 160 },
  },

  {
    id: "oilxjli",
    type: "custom",
    data: {
      label: `As AI gets better, the amount of software work done increases and the…`,
      fullText: `As AI gets better, the amount of software work done increases and the percentage of that work being done by AI increases.  This creates a curve for human tech jobs, where they increase in the short run as [total software work * proportion done by humans] increases but decrease in the long run as the decreasing proportion done by humans begins to outweigh the larger total of work to be done.

Every Claude release is just better and better.  It was a toy that increase the total work a team had to do.  Then it became a semi-useful tool that made developers feel more productive while keeping productivity about constant, then it became a very useful tool that clearly increases productivity.  The jump to where it is strictly better than a human, and is a member of every team is not far away.  The jump from there to where it is strictly better than a team incorporating humans is not happening this decade, but certainly will occur next decade.  Unless there's some magic barrier to AI progress.  Because it keeps getting better and better real fast.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 500, y: 160 },
  },

  {
    id: "oilvtns",
    type: "custom",
    data: {
      label: `So to clarify the "resource" you're describing that is getting cheaper…`,
      fullText: `So to clarify the "resource" you're describing that is getting cheaper is "software". Your argument is that demand for software will increase and therefore jobs will increase? 


I'm economically hopeful that an increase in demand leads to jobs, but ai is basically designed to replace human labor, so I don't think it's a guarantee`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 500, y: -160 },
  },

  {
    id: "oiptb1r",
    type: "custom",
    data: {
      label: `The more interesting question is what kind of work grows.`,
      fullText: `The more interesting question is what kind of work grows.
Do we see more people managing and evaluating AI systems?Designing workflows that combine human and AI decisions? Auditing, interpreting, and correcting outputs?
Or does the expansion concentrate in a smaller set of roles while reducing opportunities elsewhere?Jevons’ Paradox doesn’t give a clean answer, but it does suggest efficiency tends to expand systems, not shrink them.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: -500, y: -160 },
  },

  {
    id: "oipeuyq",
    type: "custom",
    data: {
      label: `I partially agree with your assessment but to me, I see a few issues.`,
      fullText: `I partially agree with your assessment but to me, I see a few issues. I have a baseline familiarity with Jevon's paradox and economics but no formal college education in it so please correct me if you think I got something incorrect:

1. It doesn't account for offshoring or the job becoming easier.

Jevon's Paradox is about coal. It's about a commodity. Human labor is not a commodity, it's differentiated by skill.

If a job becomes easier such that even mediocre foreign workers can do it, then companies will prefer foreign workers. This may lead to the same or greater number of tech jobs total but a significant decrease in terms of US tech jobs

Also, if it becomes easier such that medium or low-skilled workers can perform a job, then the supply of workers increases significantly. This would lead to high-skilled workers being laid off in favor of low-skilled or medium-skilled workers who are more willing to accept low pay.

Both of these scenarios kind of agree with your general principle of "more tech jobs in the long run" but that is not relevant to a high-skilled worker in the U.S. and it doesn't say anything about the pay of those job

2) It doesn't account for compute costs. For example, let's consider the following scenario:

In this scenario, let's say developers cost $1m/yr and they become 10x more productive.

According to Jevon's Paradox, we would increase our demand for developers because we can now use them for more projects in a greater number of industries.

But this assumes the cost of each developer remains the same price (at $100k). If the company had to pay $100k/yr in token costs, then each developer would cost twice as much money despite being paid the same salary. This means that companies would naturally reduce the number of developers.

Think about it this way:

If hiring 5 AI-assisted developers for $500k each was more efficient than hiring 40 non ai-assisted developers at $100k each, the former option would be preferred. Importantly, the company cannot reduce the compensation of the AI-assisted developers to a more reasonable price of $100k because that would make them no longer efficient (since they can't use significant tokens anymore).

Over time, the cost of using AI in your workflow seems to be getting more expensive so this scenario feels plausible to me.

3) Jevon's Paradox does not account for substitution. Coal becoming more efficient may lead to more coal being used. However, what if there was a type of energy significantly more energy efficient than coal. In this case, the world would slowly shift toward that energy source and phase out coal (which is what appears to be happening right now).

If AGI is superior to human workers, then Jevon's paradox does not apply. Why hire a human that slows down your operation? It would be like hiring an extremely smart 10 year old. Sure, they *can* do this but there's ultimately no point. We have no precedent for this so we cannot make any definitive statements.

I've spent quite a bit of time thinking about this and have gone back and forth. I think your arguments could be true but I wouldn't be super confident since we genuinely don't know what to expect.

I admit that AI does not currently exhibit the level of expertise required for #3 and that token costs are not yet high enough (though, they appear to be rising as AI gets smarter since we rely on AI more) for #2 to significantly disrupt workers. However, this could change over time (no one really knows) and #1, to me, feels like it has a lot of truth to it.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 160, y: 500 },
  },

  {
    id: "oinbsue",
    type: "custom",
    data: {
      label: `Let me assure you that if you do a "Tech Job" you may have other…`,
      fullText: `Let me assure you that if you do a "Tech Job" you may have other priorities than "I hope I can keep **any** 'Tech Job', and as long as that happens, changes are OK."

I don't think that's true.  I think people who do "tech jobs" often do them because they're particularly suited to them and find them interesting; moving them to any other job one might label "tech" might seem like all you'd need to do to rationalize AI upheavals, but what if it isn't that simple?

I wouldn't wanna be a drivers guru around the time of that Microsoft thing you mention, I wouldn't have wanted to be a diploma-holding Linux autodidact around the time of that AWS thing you mention.  (I'm not familiar enough with Stripe to say.)  And, if I had my druthers right now, I'd prooooobably not want to be an OOP design-patterns (or other human-readability-centered) expert, either =P  It's a nervous position to be in.

tl;dr there are some guys you can tell "stop writing code and just facilitate feeding the beast more data, it will permute the code itself" and they will say "neat!" because both are Tech, and then there are some guys who will not say that because those are different jobs - we'd have to do more work to make statements about how many of which group exist`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 160, y: -500 },
  },

  {
    id: "oinxnvd",
    type: "custom",
    data: {
      label: `The first industrial revolution was composed of the following…`,
      fullText: `The first industrial revolution was composed of the following inventions:

* Spinning Jenny
* Water Frame
* Spinning Mule
* Flying Shuttle
* Power Loom
* Cotton Gin
* Steam Engine

  
These inventions reduced the amount of human labor required for textile production by about 95% overall and 99% more efficient in spinning (which was previously where the vast majority of textile production labor was at). It resulted in the complete collapse of the Indian textile industry and most other textile industries world wide. 

  
Yes the amount of fabric produced grew massively with a 20x increase in textiles produced per year) but the amount of labor that was automated was still FAR more and it concentrated the wealth from millions of Indians, Chinese, Ottoman, Persian, and others to mostly a few thousand large firms, mostly in Europe (as the machines had fairly large startup costs and European firms could afford the costs).



Prior to the revolution and not counting the Americas, Europe was responsible for about 10% of global textile production. After it was responsible for 80% of the global production.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: -160, y: -500 },
  },

  {
    id: "oilwkyq",
    type: "custom",
    data: {
      label: `I suspect Jevon's paradox until it can suddenly do your job better than…`,
      fullText: `I suspect Jevon's paradox until it can suddenly do your job better than you. Software developers have actually benefited massively from Open Source on account of Jevon's paradox and the fact that it typically requires a software engineer to \\*use\\* all this free software. But, once a software engineer is no longer required and the AI can act like an Principle/Staff Engineer and Product Manager, the only question remaining is what to make...

This is mainly because, at some point, you're not helping, you're getting in the war. Think of adding a horse to a car, with a harness that let's it pull the car like a cart. Sure it can pull the cart when the car runs out of gas, but... how often does that happen? The idea is naturally silly. You just use the car.

The amount of software created after this, suddenly explodes and there is a program for... everything... probably several and anything you can't find, if you can define the needs, you'll be able to easily produce it.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: -160, y: 500 },
  },

  {
    id: "oiq4cp4",
    type: "custom",
    data: {
      label: `AI will not lead to more jobs.`,
      fullText: `AI will not lead to more jobs. Jevons paradox works because you have something becoming a commodity, leading to the creation of more things, services, and the economy reorienting around it.

The only problem here is that each commodity requires human innovation and ingenuity to build new things, and the repetition creates jobs. If electricity is abundant, people build electric cars, and there's a repetition aspect which fills the time up.

AI is, however, aiming to emulate human cognitive labour—the intelligence required to make connections—and is trying to automate the repetitive nature of tasks.
It's like, Yeah, I have an idea, I tell an AI model to do it, and it does it for me. Job finished. What did I do here beyond having a simple idea? I don't need to learn or know anything; I only came up with the idea.

It's kind of like in the past, when you used to have people manually changing the switchboard to connect calls, and now the system is smart enough to do it for you.
Now imagine a super-intelligent AI just running autonomously 24/7. It creates different autonomous hive bots doing the jobs required in a company, and there's a CEO at the top orchestrating it, and you just give it the prompt. What jobs are being created through this? Adding too many people to this would actually slow things down.

Robots can replace human labour, and you'll have these things working 24/7, 365 days, no sleeping, no bathroom breaks. Their battery gets swapped out, and they can go on forever.
Right now, all the new startups and jobs being created through AI are fundamentally based around the limitations of the technology.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 6080, y: 0 },
  },

  {
    id: "oilvald",
    type: "custom",
    data: {
      label: `We have some of these models making fundamental science discoveries at…`,
      fullText: `We have some of these models making fundamental science discoveries at this point. I don’t think, given that, it is outlandish to imagine a time in the near future when these models can also take over the maintenance and upgrade of their own systems in a largely autonomous way. We’re witnessing the commodification of thinking and doing on a level humans have scarcely contemplated, not to sound like a fanboy. 

It will not be long before anyone who wants “the best of the best” in most fields wants AI, not human, output.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 6400, y: 0 },
  },

  {
    id: "oilx80e",
    type: "custom",
    data: {
      label: `The consumption of a thing increases, but the amount of people needed…`,
      fullText: `The consumption of a thing increases, but the amount of people needed to produce it doesnt necessarily scale equally. When it becomes cheaper to use AI instead of hiring people, companies will use AI more often to do tasks people would otherwise use. 

The salary of a tech worker is part of the cost of software, its cheaper because you need less jobs to get it the same work done. 

The demand for tech jobs that AI cant replace would have to increase at a rate greater then or equal to the amount of jobs made obsolete by it.


`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 6720, y: 0 },
  },

  {
    id: "oim7r1o",
    type: "custom",
    data: {
      label: `You are right for weak, about-current-level, AI, but with AGI, even if…`,
      fullText: `You are right for weak, about-current-level, AI, but with AGI, even if we are somehow alive, new jobs will be immediately filled with AGIs too.

Maybe there is possible scenario with AGI where you're right: if AGI is feasible, but making it cheap is very very hard and even this AGI can't do it fast. So jobs that are not profitable enough to pay for AGI to do it will be done by humans with weak AIs assistance.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 7040, y: 0 },
  },

  {
    id: "oit1qtz",
    type: "custom",
    data: {
      label: `Have you ever worked in "Big Corporate America"? As someone who has…`,
      fullText: `Have you ever worked in "Big Corporate America"? As someone who has been working in tech for a huge corporation for decades, I can tell you that the number one goal is for the CEO and board is to increase the stock price. I have watched too many jobs be outsourced, offshored, and eliminated. Employees are a huge liability with their pesky salaries, health insurance, 401k, and bonuses. So if employers can take the 'eliminated' option, they will.

Your view appears to be based on some kind of software theory but it is not based in reality. Trust me.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 7360, y: 0 },
  },

  {
    id: "oilw6qx",
    type: "custom",
    data: {
      label: `No, it won't. It really doesn't need any further discussion. The…`,
      fullText: `No, it won't. It really doesn't need any further discussion. The internet is ignorant in this topic because their hive mind thrives on cope. If you enter data into a computer for a living, you're at risk. Maybe it will be a while, but it will happen. I know somene will come recite why their skillet is super special that only they can do. Maybe it's right to a degree, but not 100% of everyone's skillsets are that specialized `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 7680, y: 0 },
  },

  {
    id: "oilsssr",
    type: "custom",
    data: {
      label: `Absolutely not. An AI that does the job of 10 000 people will never be…`,
      fullText: `Absolutely not. An AI that does the job of 10 000 people will never be replaced with 10 000 prompt engineers. It will be assisted by maybe 5 humans who will do the most boring job ever: making sure the AI does a decent enough. And that's only until they are not needed anymore.

This is just wishful thinking.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 8000, y: 0 },
  },

  {
    id: "oilsjwn",
    type: "custom",
    data: {
      label: `You didn't really explain how this would lead to more/ not less jobs.`,
      fullText: `You didn't really explain how this would lead to more/ not less jobs. You said there will be a demand for software - couldn't AI make the software? `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 8320, y: 0 },
  },

  {
    id: "oirjw1h",
    type: "custom",
    data: {
      label: `they will be less valuable jobs though.`,
      fullText: `they will be less valuable jobs though.  its jobs where more of the labor is performed by a machine, so the actual value added of workers is reduced`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 8640, y: 0 },
  },

  {
    id: "oiq8ra4",
    type: "custom",
    data: {
      label: `Well yeah, but it's more job for claude code, not humans.`,
      fullText: `Well yeah, but it's more job for claude code, not humans. Computers will do the most of the job, not us.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 8960, y: 0 },
  },

  {
    id: "oimzab1",
    type: "custom",
    data: {
      label: `Does it actually apply if the reason for the cheaper good is the lack…`,
      fullText: `Does it actually apply if the reason for the cheaper good is the lack of need of employees?`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 9280, y: 0 },
  },

  {
    id: "oilzvyv",
    type: "custom",
    data: {
      label: `Is there are particular reason you're focused on only tech jobs?`,
      fullText: `Is there are particular reason you're focused on only tech jobs?`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 9600, y: 0 },
  },

  {
    id: "oim1dbx",
    type: "custom",
    data: {
      label: `I feel like I see these types of posts every week`,
      fullText: `I feel like I see these types of posts every week`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 9920, y: 0 },
  },

  {
    id: "oim6vpq",
    type: "custom",
    data: {
      label: `\\the cotton gin knocks on the door\\`,
      fullText: `\\*the cotton gin knocks on the door\\*`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 10240, y: 0 },
  },

  {
    id: "oiov68m",
    type: "custom",
    data: {
      label: `remindme! 5 years`,
      fullText: `remindme! 5 years`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 10560, y: 0 },
  },

  {
    id: "oim0cv9",
    type: "custom",
    data: {
      label: `Isn't the end goal the AI firms are aiming for is LLMs that write their…`,
      fullText: `Isn't the end goal the AI firms are aiming for is LLMs that write their own software? Whether the code is elegant or will designed is secondary to it working well enough, which seems to be the standard for people who use AI.

`,
      isOriginalPost: false,
      upvotes: 0,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 10880, y: 0 },
  },

  {
    id: "oilsm4a",
    type: "custom",
    data: {
      label: `Couldn't AI wipe out a lot of existing tech systems? There was the…`,
      fullText: `Couldn't AI wipe out a lot of existing tech systems? 

There was the SaaS-pocalypse in SaaS stocks not that long ago. My Salesforce shares are still down 30% because there's a view that AI can end up wiping out existing CRM systems. `,
      isOriginalPost: false,
      upvotes: 0,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 11200, y: 0 },
  },

  {
    id: "oimj7jk",
    type: "custom",
    data: {
      label: `Paid post by tech lords`,
      fullText: `Paid post by tech lords`,
      isOriginalPost: false,
      upvotes: 0,
      depth: 1,
      parentId: "1sxc5ic",
    },
    position: { x: 11520, y: 0 },
  },

  {
    id: "oim21en",
    type: "custom",
    data: {
      label: `!delta I agree with all of these and I agree with all of these points.`,
      fullText: `!delta I agree with all of these and I agree with all of these points. I think it helped me understand a bit as well that even if my argument for more total tech jobs, what does that matter for 

\\- the person that cant find a job today and rent is due (affected by the air bubble)

\\- the fresh college grad (affected by seniorism)

among many other people currently working in tech.

`,
      isOriginalPost: false,
      upvotes: 17,
      depth: 2,
      parentId: "oilysqx",
    },
    position: { x: 0, y: 220 },
  },

  {
    id: "oin2fab",
    type: "custom",
    data: {
      label: `Something to consider with the farmers example is how many new jobs…`,
      fullText: `Something to consider with the farmers example is how many new jobs have been created that are tangential to agriculture that simply did not exist in the past. All the driving jobs, shipping, middle men, R&amp;D for more new technology, admin roles.. you get the idea. There might only be 2 million direct agriculture workers, but there is far far more working in related fields. 

Its like when the computer came on the scene. It displaced tens of millions of workers, but over time entire new industries came around that never existed before. When the IPhone came out and apps were a new thing, nobody would've thought that the app industry would go on to be a multi billion dollar industry that supports millions of paying jobs. The same idea is behind AI. Lots of people will lose their jobs, but lots of new industries and jobs will be created eventually over time that we just cant see yet. `,
      isOriginalPost: false,
      upvotes: 7,
      depth: 2,
      parentId: "oilz8j3",
    },
    position: { x: 320, y: 220 },
  },

  {
    id: "oimatgi",
    type: "custom",
    data: {
      label: `Food is the ultimate example of inelastic demand because the number of…`,
      fullText: `Food is the ultimate example of inelastic demand because the number of calories a human needs in a day has barely changed throughout all of human history. 

Demand for computing has exploded in the past 40 years as humans have found ways to use it for almost anything and everything. Why will that change now?`,
      isOriginalPost: false,
      upvotes: 6,
      depth: 2,
      parentId: "oilz8j3",
    },
    position: { x: 640, y: 220 },
  },

  {
    id: "oimcdgw",
    type: "custom",
    data: {
      label: `!delta fair point regarding what "long run" means here.`,
      fullText: `!delta fair point regarding what "long run" means here. No one has an answer, but that doesnt mean we shouldnt be addressing the short term.`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 2,
      parentId: "oim7ba0",
    },
    position: { x: 960, y: 220 },
  },

  {
    id: "oilwpce",
    type: "custom",
    data: {
      label: `I think we can boil this down to, “does the future offer better things…`,
      fullText: `I *think* we can boil this down to, “does the future offer better things which will continue to motivate people?”

We know that the past is certainly less desirable than the present from an economic motivation standpoint. It’s hard to sell people solutions from 100 years ago and easy to get them to want newer and better solutions. 

I wouldn’t bet on our solutions getting any *less* motivating. With AI contributing to code, research, drug discovery, etc. I’d expect better video games, medicine, longer life expectancy, etc. `,
      isOriginalPost: false,
      upvotes: 3,
      depth: 2,
      parentId: "oilua8h",
    },
    position: { x: 1280, y: 220 },
  },

  {
    id: "oilwvww",
    type: "custom",
    data: {
      label: `I think that companies like OpenAI and Anthropic are going to be the…`,
      fullText: `I think that companies like OpenAI and Anthropic are going to be the next generation of FAANG and they are already offering engineers packages that are in the 1M-2M range for SWEs.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "oiltj50",
    },
    position: { x: 1600, y: 220 },
  },

  {
    id: "oimb99i",
    type: "custom",
    data: {
      label: `AI firms are doing that now and LLMs are writing most of the software…`,
      fullText: `AI firms are doing that now and LLMs are writing most of the software there, but AI firms are also hiring like crazy and offering $1M+ pay packages to employees. `,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "oim0cv9",
    },
    position: { x: 1920, y: 220 },
  },

  {
    id: "oim3668",
    type: "custom",
    data: {
      label: `Yeah, people always just blatantly ignore this with no explanation.`,
      fullText: `Yeah, people always just blatantly ignore this with no explanation. Why won't the agi (whatever that ends up meaning) just do the new jobs as well....

It seems like you have to assume a flesh body / brain has some sort of unattainable abilities that tech will never duplicate to believe that humans will retain our place in the job market. Maybe that is true, but almost no one addresses the issue at all.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "oils12i",
    },
    position: { x: 2240, y: 220 },
  },

  {
    id: "oiltqfw",
    type: "custom",
    data: {
      label: `The real question is whether AI can actually fill that demand at the…`,
      fullText: `The real question is whether AI can actually fill that demand at the quality level businesses need. Most AI tools right now are great for boilerplate stuff but still need a human to architect, debug, and handle edge cases

  
Plus every time we get a productivity boost, companies just pile on more features and complexity - so even if AI handles 70% of basic coding, that remaining 30% of complex problem-solving still scales with demand`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "oils12i",
    },
    position: { x: 2560, y: 220 },
  },

  {
    id: "oilw20p",
    type: "custom",
    data: {
      label: `I think this is assuming something along the lines of: (1) Productivity…`,
      fullText: `I think this is assuming something along the lines of:

(1) Productivity improves, let's say, tenfold - one person with AI help creating things in a tenth of the time.

(2) Software then costs only 10% as much to produce as today.

(3) Because software is now so cheap to make, lots of things that weren't created before because they weren't worth the cost will suddenly become viable. Niche products become available. And then instead of firing 90% of software developers, we'll have the same number of people producing ten times as much stuff.

If AI replaces *everything* \\- user wants something, they describe it vaguely, AI does the rest - that's a different issue. But we're not close to that. For example, current-gen AI isn't exactly good at testing products and understanding if they're pleasant to use or not.`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "oilsjwn",
    },
    position: { x: 2880, y: 220 },
  },

  {
    id: "oilurjf",
    type: "custom",
    data: {
      label: `Implicit in the OPs case is the assumption that no, there are specific…`,
      fullText: `Implicit in the OPs case is the assumption that no, there are specific tasks a human must do that can't be replaced.


Take the limit case - an entire department of 100 people is reduced to a single director who just tells AI how to the software.  The director is also the software architect and knows what the software must do, how to test it etc.  


So in this situation this essentially makes the one person 100x as productive. 


If the OP is correct, demand for software is unbounded.  So then the world economy will make 100x as much total software - spread across a bunch of futuristic products you would need to watch sci Fi to predict - and all existing SWEs become directors.  


There's some flaws in this theory...`,
      isOriginalPost: false,
      upvotes: 2,
      depth: 2,
      parentId: "oilsjwn",
    },
    position: { x: 3200, y: 220 },
  },

  {
    id: "oilw5rd",
    type: "custom",
    data: {
      label: `You mean mid-sized software companies might have a chance at hiring top…`,
      fullText: `You mean mid-sized software companies might have a chance at hiring top talent again? 


Not every SWE likes working at a company like Facebook where business model now relies on outrage and addiction. There are plenty of companies out there trying to do things that are positive for the world, but they're stuck with B-level devs because they just can't compete for the talent. 


If this equalizes things, that will probably be a net positive for technology.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "oiltj50",
    },
    position: { x: 3520, y: 220 },
  },

  {
    id: "oips016",
    type: "custom",
    data: {
      label: `Right. All of the new theoretical jobs being created will ALSO be…`,
      fullText: `Right.  All of the new theoretical jobs being created will ALSO be primarily Ai driven.   There simply isn't going to be enough pressure release to absorb all the humans and companies will be trying harder and harder to bring that MO to every field remotely possible. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "oilwgy9",
    },
    position: { x: 3840, y: 220 },
  },

  {
    id: "oim9oi4",
    type: "custom",
    data: {
      label: `My argument is that there have always been inventions designed to…`,
      fullText: `My argument is that there have always been inventions designed to replace human labor. My example of operating systems, cloud computing, API products, all did that to some extent yet every iteration only created more tech jobs. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "oilvtns",
    },
    position: { x: 4160, y: 220 },
  },

  {
    id: "oilvqb8",
    type: "custom",
    data: {
      label: `So QA engineers?`,
      fullText: `So QA engineers? `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 2,
      parentId: "oilsssr",
    },
    position: { x: 4800, y: 220 },
  },

  {
    id: "oilyg26",
    type: "custom",
    data: {
      label: `My argument is that companies like Salesforce will go the direction of…`,
      fullText: `My argument is that companies like Salesforce will go the direction of mainframe computing companies. It will continue to exist and serve legacy businesses that cant migrate, but its no longer going to be a giant in the tech industry. 

Much of their tech (configurable data stores and configurable UI for sales and support people) is less relevant with coding agents, but there will always be a need for companies to have a CRM. The next generation might be something that's built with coding agents in mind from the beginning. `,
      isOriginalPost: false,
      upvotes: -1,
      depth: 2,
      parentId: "oilsm4a",
    },
    position: { x: 5120, y: 220 },
  },

  {
    id: "oim3aty",
    type: "custom",
    data: {
      label: `Yep. One other related topic now that you're thinking about it : one of…`,
      fullText: `Yep.  One other related topic now that you're thinking about it : one of my super peeves is people switching *specifically* to electrical or mechanical engineering.

These are **not safe**, the only reason current models struggle with these tasks has to do with the way their perception currently works (it handles 2d/3d poorly, and they haven't had a lot of training in these specific tasks)

These are **very automatible** and the rate of progress is such that by the time a freshman starting Fall 2026 graduates in 2030, the same automation that reduces employment for CS will have hit these fields years before.

Also these fields are **already oversaturated**, this is evidenced by their very poor pay, worse than some blue collar jobs.

If you wanted a 'safe' job the route for that is something that law vigorously protects, like medical.  (not that the protection is perfect, doctors offices can theoretically bring in a ton of AI and start to run like well oiled machines, where AI models make each human doctor twice as productive in terms of patients per hour and more accurate)`,
      isOriginalPost: false,
      upvotes: 15,
      depth: 3,
      parentId: "oim21en",
    },
    position: { x: 0, y: 440 },
  },

  {
    id: "oin02pu",
    type: "custom",
    data: {
      label: `I am myself not entirely sure it will change in the near future, but it…`,
      fullText: `I am myself not entirely sure it will change in the near future, but it might. For a long time industrial employment kept increasing too. If we were in the 1920s you could have made the same argument about automation in that time, as people want more and more tools and goods. But in the end, there is a strong diminishing return on how many ovens, TVs, bathtubs, fridges you want to have in your house, so relative size of the sector shrank even though output did not. We might hit the same with software. In theory, we will hit it at a certain point, we just don't know when. After all, human consumption of software is also limited in theory: About 16 hours (awake) for each human, plus the infrastructure, that scales approximately linearly with human population.

If software output increases dramatically we might hit the wall. This does not mean software will not be required or enhanced, but software work would have lower marginal return and you would earn less than in some other sector.`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 3,
      parentId: "oimatgi",
    },
    position: { x: 320, y: 440 },
  },

  {
    id: "oilwp7z",
    type: "custom",
    data: {
      label: `No i think all compensation goes down relatively speaking so a mid…`,
      fullText: `No i think all compensation goes down relatively speaking so a mid company may pay 50k. Of course I am making these numbers up its total speculation.`,
      isOriginalPost: false,
      upvotes: 4,
      depth: 3,
      parentId: "oilw5rd",
    },
    position: { x: 640, y: 440 },
  },

  {
    id: "oilv5ha",
    type: "custom",
    data: {
      label: `I mean creating an AI that can do that is the explicit goal of all…`,
      fullText: `I mean creating an AI that can do that is the explicit goal of all these companies...

A few years ago people were joking about how AI can't draw hands, now it creates realistic video

`,
      isOriginalPost: false,
      upvotes: 4,
      depth: 3,
      parentId: "oiltqfw",
    },
    position: { x: 960, y: 440 },
  },

  {
    id: "oimjliz",
    type: "custom",
    data: {
      label: `Those things weren't explicitly made to replace human labor the way ai…`,
      fullText: `Those things weren't explicitly made to replace human labor the way ai is though. Operating systems were designed to make computer hardware run. Cloud computing was made to provide access to remote computer power. AI is designed to do code, write, perform data analysis and do whatever else humans can do, eventually better than humans can do it. 


I think you're right that technological advancements usually lead to job growth, but it's hard to envision an optimistic future in which the working class no longer controls human labor capital and both the means of production and the ability to do labor are both owned by tech-oligarchs`,
      isOriginalPost: false,
      upvotes: 3,
      depth: 3,
      parentId: "oim9oi4",
    },
    position: { x: 1280, y: 440 },
  },

  {
    id: "oim7bgl",
    type: "custom",
    data: {
      label: `Yes, drug discovery and human longevity is one example that will always…`,
      fullText: `Yes, drug discovery and human longevity is one example that will always vacuum up demand for compute. `,
      isOriginalPost: false,
      upvotes: 2,
      depth: 3,
      parentId: "oilwpce",
    },
    position: { x: 1600, y: 440 },
  },

  {
    id: "oipswur",
    type: "custom",
    data: {
      label: `Those calories now go to transport, processing and waste.`,
      fullText: `Those calories now go to transport, processing and waste. There is no demand that marketing can't make elastic. 


At one time, you ate local, what was in season. At that time it was feared the world could sustain 2 billion people at most. Now you eat peaches grown in Chile, shipped to Thailand for processing, then back to your store shelf in a plastic ultrapasteurized container, a sterile force bubble against spoilage. What was once the calories of sunlight hitting the tree to make the peach now entail the calories of all the organisms that died millions of years ago for that round world, transformational, technological journey, like each peach was singular star of an 80s kids scifi fantasy. Oh, and half those calories are thrown away by arbitrary best by dates.


And there be 8 billion of us since we figured out if you strip the land bare and reapply with nitrogen (leaves) and phosphorous (roots) you can boost calories (likely at cost of micronutrients that require supplementation). Jevon's paradox but for energy. 


The only categories where energy production has declined in the past century is when there has been supply side shocks. Whale oil is one good example. Wood fires another. Almost everything else, up, up, up.


Of course the demand is there. The big thing is supply. Energy. Natural resources. So on. Some people joke of the whole world being data centers being the end of it. But I will tell you what instead will be the natural end to Jevon's paradox.


Remember, only time graph go down is supply side. Can't add another lane to highway cuz no more room. Think of a working ecology as a supply. Climate stability a supply. Freedom from pollution a supply. Because these are preconditions to life. At some low biodiversity level we get breadbasket collapse. At some climate we get hot house earth. At some concentration of pollutants, pfas, organotins, nano plastic, life ceases to be metabolically feasible. Demand will go up until we've so excessively exceeded our carrying capacity that there is just no supply for us, since we've so thoroughly degraded the conditions for it.


So, sure, you will have a job and work toward a future when ultimately no one will have a job.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "oimatgi",
    },
    position: { x: 2240, y: 440 },
  },

  {
    id: "oilxi4y",
    type: "custom",
    data: {
      label: `Today but they are also realizing AI is writing most of their code.`,
      fullText: `Today but they are also realizing AI is writing most of their code. And only a small percentage are doing LLM model design. Like the .0001% `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "oilwvww",
    },
    position: { x: 2880, y: 440 },
  },

  {
    id: "oimjymv",
    type: "custom",
    data: {
      label: `But the paradox in question is about increasing usage, so I would say…`,
      fullText: `But the paradox in question is about increasing usage, so I would say it exists on a scale of time. 

At present AI firms are hiring, but once they achieve their goal, self-generating code, the number of coders would shrink, would it not?`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "oimb99i",
    },
    position: { x: 3200, y: 440 },
  },

  {
    id: "oiq8gwz",
    type: "custom",
    data: {
      label: `Then it means it's not about tools but about money/economy.`,
      fullText: `Then it means it's not about tools but about money/economy. If there is money, AI is used as a growth accelerator. If money is tight, AI is used to reduce headcount.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "oimb99i",
    },
    position: { x: 3520, y: 440 },
  },

  {
    id: "oim8s9l",
    type: "custom",
    data: {
      label: `In its current incarnation, AI does not have the ability to actually…`,
      fullText: `In its current incarnation, AI does not have the ability to actually understand the human qualities of great media or tech products. This one can be hard to debate because it depends on what AGI is and if it will ever come, but I believe that humans will still be necessary to build great products for other humans. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "oim3668",
    },
    position: { x: 3840, y: 440 },
  },

  {
    id: "oim0i7j",
    type: "custom",
    data: {
      label: `Is the argument not that autonomous agents will basically cover the…`,
      fullText: `Is the argument not that autonomous agents will basically cover the work of CRMs? 

I am not an expert by any means though. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "oilyg26",
    },
    position: { x: 4160, y: 440 },
  },

  {
    id: "oilwfz9",
    type: "custom",
    data: {
      label: `I understand what you're saying, but I don't see how AI couldn't be…`,
      fullText: `I understand what you're saying, but I don't see how AI couldn't be 1000x more productive given 100x demand for more software. `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 3,
      parentId: "oilurjf",
    },
    position: { x: 4480, y: 440 },
  },

  {
    id: "oilz8u5",
    type: "custom",
    data: {
      label: `Just because you dont need to write code anymore doesn't mean you still…`,
      fullText: `Just because you dont need to write code anymore doesn't mean you still don't need really good engineers to:

\\- come up with creative solutions to new problems.

\\- evaluate tradeoffs between different solutions to find the right one for the business.

\\- apply good taste to figure out what people actually want. 

AI is still bad at doing all of these today and there hasnt been signs that it will get good at it anytime soon. `,
      isOriginalPost: false,
      upvotes: 2,
      depth: 4,
      parentId: "oilxi4y",
    },
    position: { x: 0, y: 660 },
  },

  {
    id: "oimd2qr",
    type: "custom",
    data: {
      label: `Correct. The vast scales you would need for longevity research and…`,
      fullText: `Correct.  The vast scales you would need for longevity research and treatment - where ultimately you may have to resort to growing entire new human bodies and replacing them - are many thousands of times the volumes of medical research and medical care done on earth now.

Without going into specifics, if licensed doctors and phD scientists have to do 0.1 percent of the new labor, that essentially provides a job to everyone on earth right there.  (But you also can see a problem, there's artificial bottlenecks on medical school slots and it takes years to learn everything needed and current workers over 30 can't retrain for this)

Space is a similar argument - you would cover the Moon in self replicating factories, fill high earth orbit with mass produced ONeil habitats, etc.  it's the same argument .  "well if 0.1 percent of the labor involved has to be human even if it's just as an inspector..." 

People who imagine automating all the jobs and greedy corporations firing everyone miss these bigger scales.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 4,
      parentId: "oim7bgl",
    },
    position: { x: 320, y: 660 },
  },

  {
    id: "oilzc76",
    type: "custom",
    data: {
      label: `The assumption is there are limits to how much software a single person…`,
      fullText: `The assumption is there are limits to how much software a single person can 'supervise' and so that person is the limiting factor.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 4,
      parentId: "oilwfz9",
    },
    position: { x: 640, y: 660 },
  },

  {
    id: "oilxb30",
    type: "custom",
    data: {
      label: `Maybe eventually, but many mid-tier companies can pay their devs around…`,
      fullText: `Maybe eventually, but many mid-tier companies can pay their devs around $250k, they just cant compete for the talent that makes way above that, and if they get lucky with someone awesome there's always the threat of that person leaving for FAANG companies or NVIDIA (have seen this happen 3-4 times now). `,
      isOriginalPost: false,
      upvotes: 0,
      depth: 4,
      parentId: "oilwp7z",
    },
    position: { x: 960, y: 660 },
  },

  {
    id: "oim1dv4",
    type: "custom",
    data: {
      label: `Sure, we'll never 100% eliminate the need for all human labor, but I…`,
      fullText: `Sure, we'll never 100% eliminate the need for all human labor, but I don't see how that leads to more jobs in the long run. If we eliminate an entire layer of production, that doesn't mean we're going to meaningfully increase the need at the layers above it. Cutting 100 manual laborers down to 5 machine operators doesn't create a demand for 95 more middle managers.`,
      isOriginalPost: false,
      upvotes: 5,
      depth: 5,
      parentId: "oilz8u5",
    },
    position: { x: 0, y: 880 },
  },

  {
    id: "oimdtrt",
    type: "custom",
    data: {
      label: `Yes. I agree that velocity and transitions are still something that…`,
      fullText: `Yes. I agree that velocity and transitions are still something that needs management. But I’m not convinced there will be some endpoint where people can’t provide value given the current trajectory of the technology. 

That said, if the technology keeps accelerating, there could be a terminal velocity where society is constantly at its breaking point wrt its ability to handle the changes.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 5,
      parentId: "oimd2qr",
    },
    position: { x: 320, y: 880 },
  },

  {
    id: "oim4stq",
    type: "custom",
    data: {
      label: `Why couldn't AI be the supervisor with near unlimited supervising…`,
      fullText: `Why couldn't AI be the supervisor with near unlimited supervising capacity?`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 5,
      parentId: "oilzc76",
    },
    position: { x: 640, y: 880 },
  },

  {
    id: "oim52p6",
    type: "custom",
    data: {
      label: `The assumption is that the AI isn't creating software or anything from…`,
      fullText: `The assumption is that the AI isn't creating software or anything from some vague description, but needs to be told exactly what it is that has to be created, and then it's creation has to be inspected and checked.

It helps to imagine large, complex projects and then imagine why you can't just tell the AI a vague description and go smoke weed after.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 6,
      parentId: "oim4stq",
    },
    position: { x: 0, y: 1100 },
  },

  {
    id: "oim6o1j",
    type: "custom",
    data: {
      label: `Why would I assume that and not assume that AI will eventually be as…`,
      fullText: `Why would I assume that and not assume that AI will eventually be as capable as a human and be able to inspect and check other software (humans aren't perfect at this, so AI wouldn't need to be either)?`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 7,
      parentId: "oim52p6",
    },
    position: { x: 0, y: 1320 },
  },

  {
    id: "oim9wea",
    type: "custom",
    data: {
      label: `Because the AI doesn't have the bits of information to distinguish…`,
      fullText: `Because the AI doesn't have the bits of information to distinguish between thousands of valid solutions that fit all the original constraints but "aren't what I meant".  It needs to get the additional bits of information from the user.  Supplying those bits is the job.`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 8,
      parentId: "oim6o1j",
    },
    position: { x: 0, y: 1540 },
  },

  {
    id: "oimbdxb",
    type: "custom",
    data: {
      label: `Perhaps perhaps`,
      fullText: `Perhaps perhaps`,
      isOriginalPost: false,
      upvotes: 1,
      depth: 9,
      parentId: "oim9wea",
    },
    position: { x: 0, y: 1760 },
  },

  {
    id: "oimptl8",
    type: "custom",
    data: {
      label: `You can also imagine it more concretely such as "I am using AI to…`,
      fullText: `You can also imagine it more concretely such as "I am using AI to develop a movie".  So before you get to filming shots you need to pick the cast.  Even if the cast is all AI it matters a lot what they look like.  And the set.  And the backgrounds, and the themes.


And when actually doing it shot by shot, you can type a whole book or verbalize it as to what  you want a scene to look like, but you will always get multiple versions of the scene that fit within all constraints given.


Which one of them do you want, Mr Director?


People who think AI will take all jobs will say "it just emulates your brain inside itself and predicts what you want or predicts the audience better than you can". 


Maybe.  `,
      isOriginalPost: false,
      upvotes: 1,
      depth: 10,
      parentId: "oimbdxb",
    },
    position: { x: 0, y: 1980 },
  },

];

export const sabrinaDiscussionEdges: Edge[] = [
  { id: "e1", source: "1sxc5ic", target: "oim24h8" },
  { id: "e2", source: "1sxc5ic", target: "oilysqx" },
  { id: "e3", source: "1sxc5ic", target: "oilz8j3" },
  { id: "e4", source: "1sxc5ic", target: "oim7ba0" },
  { id: "e5", source: "1sxc5ic", target: "oiltj50" },
  { id: "e6", source: "1sxc5ic", target: "oilwgy9" },
  { id: "e7", source: "1sxc5ic", target: "oiml8t0" },
  { id: "e8", source: "1sxc5ic", target: "oim0cv9" },
  { id: "e9", source: "1sxc5ic", target: "oilvtns" },
  { id: "e10", source: "1sxc5ic", target: "oilua8h" },
  { id: "e11", source: "1sxc5ic", target: "oilxjli" },
  { id: "e12", source: "1sxc5ic", target: "oiptb1r" },
  { id: "e13", source: "1sxc5ic", target: "oils12i" },
  { id: "e14", source: "1sxc5ic", target: "oipeuyq" },
  { id: "e15", source: "1sxc5ic", target: "oimh3gk" },
  { id: "e16", source: "1sxc5ic", target: "oinbsue" },
  { id: "e17", source: "1sxc5ic", target: "oinxnvd" },
  { id: "e18", source: "1sxc5ic", target: "oilwkyq" },
  { id: "e19", source: "1sxc5ic", target: "oiluher" },
  { id: "e20", source: "1sxc5ic", target: "oiq4cp4" },
  { id: "e21", source: "1sxc5ic", target: "oilvald" },
  { id: "e22", source: "1sxc5ic", target: "oilx80e" },
  { id: "e23", source: "1sxc5ic", target: "oilsm4a" },
  { id: "e24", source: "1sxc5ic", target: "oim7r1o" },
  { id: "e25", source: "1sxc5ic", target: "oit1qtz" },
  { id: "e26", source: "1sxc5ic", target: "oilw6qx" },
  { id: "e27", source: "1sxc5ic", target: "oilsssr" },
  { id: "e28", source: "1sxc5ic", target: "oilsjwn" },
  { id: "e29", source: "1sxc5ic", target: "oirjw1h" },
  { id: "e30", source: "1sxc5ic", target: "oiq8ra4" },
  { id: "e31", source: "1sxc5ic", target: "oimzab1" },
  { id: "e32", source: "1sxc5ic", target: "oilzvyv" },
  { id: "e33", source: "1sxc5ic", target: "oim1dbx" },
  { id: "e34", source: "1sxc5ic", target: "oim6vpq" },
  { id: "e35", source: "1sxc5ic", target: "oiov68m" },
  { id: "e36", source: "1sxc5ic", target: "oimj7jk" },
  { id: "e37", source: "oilysqx", target: "oim21en" },
  { id: "e38", source: "oilz8j3", target: "oin2fab" },
  { id: "e39", source: "oilz8j3", target: "oimatgi" },
  { id: "e40", source: "oim7ba0", target: "oimcdgw" },
  { id: "e41", source: "oilwgy9", target: "oips016" },
  { id: "e42", source: "oils12i", target: "oim3668" },
  { id: "e43", source: "oils12i", target: "oiltqfw" },
  { id: "e44", source: "oilua8h", target: "oilwpce" },
  { id: "e45", source: "oiltj50", target: "oilwvww" },
  { id: "e46", source: "oiltj50", target: "oilw5rd" },
  { id: "e47", source: "oimh3gk", target: "oinqhvu" },
  { id: "e48", source: "oilvtns", target: "oim9oi4" },
  { id: "e49", source: "oilsssr", target: "oilvqb8" },
  { id: "e50", source: "oilsjwn", target: "oilw20p" },
  { id: "e51", source: "oilsjwn", target: "oilurjf" },
  { id: "e52", source: "oim0cv9", target: "oimb99i" },
  { id: "e53", source: "oilsm4a", target: "oilyg26" },
  { id: "e54", source: "oim21en", target: "oim3aty" },
  { id: "e55", source: "oim21en", target: "oim27ai" },
  { id: "e56", source: "oimatgi", target: "oin02pu" },
  { id: "e57", source: "oimatgi", target: "oipswur" },
  { id: "e58", source: "oimcdgw", target: "oimcjxo" },
  { id: "e59", source: "oilwpce", target: "oim7bgl" },
  { id: "e60", source: "oilwvww", target: "oilxi4y" },
  { id: "e61", source: "oimb99i", target: "oimjymv" },
  { id: "e62", source: "oimb99i", target: "oiq8gwz" },
  { id: "e63", source: "oim3668", target: "oim8s9l" },
  { id: "e64", source: "oiltqfw", target: "oilv5ha" },
  { id: "e65", source: "oilurjf", target: "oilwfz9" },
  { id: "e66", source: "oilw5rd", target: "oilwp7z" },
  { id: "e67", source: "oim9oi4", target: "oimjliz" },
  { id: "e68", source: "oilyg26", target: "oim0i7j" },
  { id: "e69", source: "oilwp7z", target: "oilxb30" },
  { id: "e70", source: "oim7bgl", target: "oimd2qr" },
  { id: "e71", source: "oilxi4y", target: "oilz8u5" },
  { id: "e72", source: "oilwfz9", target: "oilzc76" },
  { id: "e73", source: "oilz8u5", target: "oim1dv4" },
  { id: "e74", source: "oimd2qr", target: "oimdtrt" },
  { id: "e75", source: "oilzc76", target: "oim4stq" },
  { id: "e76", source: "oim4stq", target: "oim52p6" },
  { id: "e77", source: "oim52p6", target: "oim6o1j" },
  { id: "e78", source: "oim6o1j", target: "oim9wea" },
  { id: "e79", source: "oim9wea", target: "oimbdxb" },
  { id: "e80", source: "oimbdxb", target: "oimptl8" },
];