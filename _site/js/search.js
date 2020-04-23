// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('description', {boost: 10})
  this.field('tags')
  this.field('issue')
  this.ref('id')
});




  
  index.add({
    title: "Tech to Invest In",
    content: "Blockchain\n\n  Crypto currencies\n  Identity\n  Smart contracts\n  Certification / diplomas\n\n\n/BTC, ETH, LTC, Ripple, GOOG (GV)/\n\nAutonomous vehicles\n\n  Trucks\n  Buses\n  Taxis\n  Cars\n  Mobile homes / RV\n\n\n/GOOG (Waymo)/\n\nContinuous health monitoring\n\n  Started with steps\n  Then Heart rate\n  GSR\n  Glucose\n  Blood\n  Sleep\n  Food\n\n\n/GOOG (Verily)/\n\nConstellation devices post-phone\n\n  Hearables\n  Wearables\n  Contextual computing\n\n\n/GOOG (HWPA)/\n\nSynthetic Biology\n\n  CRISPR\n\n\n/GOOG (GV)/\n\nInternet infrastructure\n\n  LTE as replacement of DSL and slow internet\n  Wireless &gt; Wired\n\n\n/GOOG (Fiber)/\n",
    description: "The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me? \" he thought. It wasn't a dream.",
    tags: ["found"],
    issue: 4,
    id: 0
  });
  

  
  index.add({
    title: "Wabi Sabi",
    content: "Accommodates to attrition and degradation\n\nCorrosion and contamination makes its expression richer\n\nTo everything there is a season\n\nTruth comes from the observation of nature\n\nGreatness exists in the inconspicuous and overlooked details\n\nThe beauty of things imperfect\n\nAll things are incomplete\n\nThe suggestion of natural processes. Things wabi-sabi are made of materials that are visibly vulnerable to the effects of weathering and human treatment. They record the sun, wind, rain, heat, and cold in a language of discoloration, rust, tarnish, stain, warping, shrinking, shriveling, and cracking. Their nicks, chips, bruises, scars, dents, peeling, and other forms of attrition are a testament to histories of use and misuse.\n",
    description: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
    tags: ["lab"],
    issue: 4,
    id: 1
  });
  

  
  index.add({
    title: "IxDA Submission",
    content: "Title: The Evolution to Here\nSubtitle\nThe biggest shifts in computing have come from shifts in context. We can design for the next big opportunities if we understand how we got Here first.\n\nDescription\nEach major new form of computing has coincided with a major new form of input. That input can evolve to be less and less discrete as the context the computer understands becomes greater and greater.\n\nWith a terminal you had to directly write the code for any function you wanted the computer to do. Every time. Then when the GUI came along, you could skip a few steps by pointing &amp; clicking at what you were looking at. By the time we got to smartphones, your computer could tell not just what your were tapping on but where in the world you were tapping.\n\nThis increase in context, for example, took getting directions from typing gps coordinates into a command line, to typing in two addresses, to now just searching for the generic name of your destination with your current location already assumed.\n\nThis huge increase in context has allowed us to massively stretch the capabilities of computing way beyond spreadsheets to dating, shopping, working out, &amp; so much more.\n\nSo, as computing becomes more ambient &amp; pervasive, what other increases in context do we already have that we aren’t yet taking full advantage of?\n\nKey takeaways\n\n  Passive context is a user’s most powerful input and should be used wisely.\n  Every change in context should initiate an inversely proportional response in interface.\n  With wearables, home devices, and other types of ambient computing, what new context opportunities are there if we listen for them?\n\n\nExperience\nI’ve been working in VR and wearables hardware at Google for the last 4 years. This has become a key framework we use internally to judge where to go next.\n\nTarget audience\nAs a framework, this is something anyone in the technology industry will be able to apply: from designers (junior, senior, etc), to engineers, to product managers. The talk will intentionally try hard to be both really concrete but also not exclusionary by focusing on specific programs or niche skillsets.\n\nRelevance\nAs computing becomes more and more integrated with peoples’ lives, it’s important that designers understand the ecosystems, sensors, &amp; surfaces that encompass these new systems so that they can design for them both on and off the screen.\n\nEngagement with the audience\nI love to use a mixture of humor and a non-stop wall of engaging imagery to keep folks engaged, tuned in, &amp; entertained. Unlike my previous talks, this one focuses more specifically on a framework rather than a singular design process, so repetition will enable folks to start filling in the blanks in the latter examples if they’re really getting the hang of the concept.\n",
    description: "It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.",
    tags: ["features"],
    issue: 4,
    id: 2
  });
  

  
  index.add({
    title: "Animal Crossing",
    content: "Money Trees\nApril 14th - Fertile\n\nKK Songs\n• K.K. Island\n• Forest Life\n• K.K. Disco\n• K.K. Stroll\n",
    description: "His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
    tags: ["features","lab"],
    issue: 4,
    id: 3
  });
  

  
  index.add({
    title: "Questions for Jake",
    content: "\n  Where do you see the most variance in quality of the coffee? Roasting, grinding, measuring, or brewing?\n  What do you think of the heat lost while doing pour over?\n  When you’re making coffee, is it more like baking or more like cooking? science or art?\n  How do you feel about the connectivity in the EKG+? Is it something you want to keep pursuing?\n  Where do you draw the line between automation and agency? How much would you streamline if you could?\n  Who do you feel like is your competitor? Hario? Bonavita? Proctor Silex? Breville?\n  What’s it been like to work with Branch? How do you balance what you rely on folks like them for vs what you bring in-house?\n  Did everything just kind of spiral from the Kickstarter project? Or was it a bit more conscious than that? It seems like it’d be hard to be a solo founder working in hardware.\n  How did you decide on the funding model? Did you consider VC? How did you find/meet your current investor?\n  How do you maintain steady income in-between major “hits” or new product drops? Have you been seeing uplift with SKU expansions, the partnerships, and the analog products launching in-between?\n\n",
    description: "I ought to just try that with my boss; I'd get kicked out on the spot. But who knows, maybe that would be the best thing for me. If I didn't have my parents to think about I'd have given in my notice a long time ago, I'd have gone up to the boss and told him just what I think, tell him everything I would, let him know just what I feel. He'd fall right off his desk!",
    tags: ["found"],
    issue: 3,
    id: 4
  });
  

  
  index.add({
    title: "These Days Highlights",
    content: "The first time he’d come to this Ikea had been on a weekend, when the place was packed with middle-class families and newlyweds and college students with their parents. Many of the shoppers, like Connor, had just moved to the city, and they looked anxious and overwhelmed, walking around with yellow recycled plastic shopping bags and strips of paper measuring tape and little golf pencils, trying to figure out how an oak dinette set or a $299 sofa would fit into their new lives.\n\n“We all just want to prove we’re special, different. It’s like how everyone on Facebook tries to come up with their own way of wishing you happy birthday.”\n\nToday, the cafeteria was nowhere near as crowded as it had been that first weekend. Connor and K pulled slightly wet trays from…\n\n“And that, in essence, brings us to the paradox of Gen Y. They want to stay connected but they want to get away. They want the freedom to choose but are drowning in choices. They love and embrace technology but yearn for simpler modes of life. They spend exorbitant amounts of time in cyberspace yet crave genuine face-to-face experiences. But it’s important to note that the majority of them don’t see these opposites as mutually exclusive.\n\nBefore he moved to New York, Connor never gave much thought to what lay on the insides of city blocks. He assumed they were solid building—brick, wood, and glass running from facade to facade. It didn’t take long for his mental image of them to change, for the city blocks to get hollowed out, their solid interiors replaced by restaurant ventilation units, ground-floor patios, and the occasional backyard and solitary tree.\n\n“I’m not available right now,” her recorded voice said. “But answer this question after the beep and I might be inclined to call you back. If you could instantly learn any new language, what language would that be?” There was a long beep. “Hi, it’s Connor, the devastatingly handsome guy you met at Ikea,” he said. “And if I could instantly learn a new language, it would have to be sign language. I would learn sign lang—” There was a click on the other end, and a voice said, “Hello?” Connor stopped for a moment. He had forgotten how answering machines worked. “Oh,” he said. “Hi.” “Why sign language?” she asked. “Because I was listening to this science podcast and they were talking about how language plays a huge role in shaping the way we think,” he said. “I figure maybe learning a more visual language might make me a more visual thinker. Braille would be pretty cool too.” “Good answer.” “Thank you. What do I win?” “Sign language. You win sign language. By the power vested in me by the Polish mystics of the neighborhood of Greenpoint, Brooklyn, I hereby grant you the ability to sign.” “Wow, it worked!” She giggled. “It did?” “Yeah. Here, I’m signing something to you right now.” He pulled the phone away from his face for a few seconds. “Did you get it?” “I missed it. What’d you say?” “I asked you if you wanted to have dinner in the East Village tomorrow night.” “Okay, I’m going to sign you my answer. Ready?” “Go ahead.” There was a silence, and then he cut in and said, “So that’s a yes, great!” She laughed again. “Let’s meet at the corner of Tenth and First. See you at seven?” “Perfect,” she said.\n\n“Sometimes it’s about what you choose not to read,” she said. “Every book we read or movie we see, every little experience becomes a part of who we are. If we’re all watching the same things and reading the same things and listening to the same things, then our conversations would end up going in circles, reaffirming things we already know and agree about. There would be no surprises, no serendipity. It’d be like this big tragic echo chamber. It’s just not for me. I don’t want to be that hipster girl that lives off the L train, listens to Arcade Fire, and reads Murakami books, you know?”\n\nIf there was any sure sign of inexperience, it was believing that everyone had the same motivations.\n",
    description: "Doing business like this takes much more effort than doing your own business at home, and on top of that there's the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them. It can all go to Hell!",
    tags: ["features"],
    issue: 3,
    id: 5
  });
  

  
  index.add({
    title: "Famous Breakfasts",
    content: "Bill Clinton\n\n  Almond Milk Smoothie with Fresh Berries and Nondairy Protein Powder\n\n\nBobby Flay\n\n  Greek Yogurt with Fresh Berries &amp; Honey\n\n\nJack Dorsey\n\n  2 Hard Boiled Eggs with Soy Sauce\n\n\nJustin Timberlake\n\n  Waffles with Flax and Almond Butter\n  Scrambled Eggs\n\n\nLebron James\n\n  Bagel with peanut butter\n  Strawberries\n  2 bananas\n  Orange juice\n\n\nMichelle Obama\n\n  Scrambled Eggs\n  Turkey Sausage\n  Grapefruit\n\n\nObama Family\n\n  Hard boiled eggs\n  Oatmeal\n  Fruit\n  Toast\n\n\nRichard Branson\n\n  Fruit Salad\n  Muesli\n\n\nVenus Williams\n\n  Omelette\n  Whole Wheat Toast\n  Orange juice\n\n\n#c100/notes\n",
    description: "The next train went at seven; if he were to catch that he would have to rush like mad and the collection of samples was still not packed, and he did not at all feel particularly fresh and lively. And even if he did catch the train he would not avoid his boss's anger as the office assistant would have been there to see the five o'clock train go, he would have put in his report about Gregor's not being there a long time ago.",
    tags: ["features"],
    issue: 3,
    id: 6
  });
  

  
  index.add({
    title: "Super Normal",
    content: "When people hear the word “design”, they think “special”; creating “special” things is what everyone, designers and users alike, assume design is all about. When in fact, both sides are playing out a mutual fantasy far removed from real life.\n\nI’d like us to explore whatever we might conceive as Super Normal. It’s much more of a quietly seen unseen, a refreshing surprise that awakens the person who had thought of looking for something obviously special in design by instead reconfirming what we already hold important and so perhaps letting us break free of our current design paradigm straight jacket.\n\n/~Naoto Fukasawa/\n\nSpecial is generally less useful than normal, and less rewarding in the long term. Special things demand attention for the wrong reasons, interrupting potentially good atmosphere with their awkward presence.\n\n/~Jasper Morrison/\n",
    description: "And it's a funny sort of business to be sitting up there at your desk, talking down at your subordinates from up there, especially when you have to go right up close because the boss is hard of hearing. Well, there's still some hope; once I've got the money together to pay off my parents' debt to him - another five or six years I suppose - that's definitely what I'll do.",
    tags: ["lab"],
    issue: 3,
    id: 7
  });
  

  
  index.add({
    title: "Photography Equipment",
    content: "Everyday Carry\n$4000 - Leica Q\n\nDSLR\n$1500 - Canon EOS 5D Mark II\n\n$1200 - Canon 50mm f/1.2\n\n$1600 - Canon 14mm f/2.8\n\n$2200 - Canon TS-E 24mm f/3.5L II Tilt-S\n\n$400 - Canon 100mm f/2.8 Macro\n\nLighting &amp; Accessories\nCanon 430EX II Speedlite Flash\n\n2 Pocketwizard Plus II Tranceivers\n\nPocketWizard 804-501 CM-N3 Canon N3 3-Feet Straight Motor Drive Cord\n\nWestcott 45” Umbrella Optical White Satin\n\nManfrotto 680B Monopod\n\nManfrotto 7’8” ALU AC Compact Stand\n\nManfrotto 026 Swivel Umbrella Adapter\n\nManfrotto 035RL Super Clamp with 2908 Standard Stud\n\nManfrotto MB LBAG110 Light Stand Bag\n\nManfrotto 024B 6.5 Feet Long 3 Piece Boom Assembly with 10 lb Counterweight\n\nIncase DSLR Sling Pack in Black\n\nIncase Nylon Carrying Case for DSLR in Black\n",
    description: "He slid back into his former position. \"Getting up early all the time\", he thought, \"it makes you stupid. You've got to get enough sleep. Other travelling salesmen live a life of luxury. For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts.",
    tags: ["found"],
    issue: 2,
    id: 8
  });
  

  
  index.add({
    title: "FITC Talk Outline",
    content: "Title\nBeyond Automation: Machine Learning as a Creative Tool\n\nOverview\nHalf a decade into the explosion of machine learning and pretty much everyone has heard of it; it’s the Next Big Thing. But the way most buzzword enthusiasts talk about it &amp; approach it, machine learning so far has only taken the human further out of the equation. But what if it could be so much more participatory?\n\nAs an abstraction layer, machine learning has the power to fundamentally change how we interact with our computers. This will enable more dynamic &amp; natural expression, new mediums, and entirely new ways of thinking.\n\nIn this talk, I’ll walk through that reasoning, show you other artists, designers, scientists, &amp; engineers’ work already pushing this thought further, and show you the tools I’ve found that will let you start experimenting on your own to incorporate these ideas into your own practice directly.\n\nObjective\nConvince creative people that machine learning can be a truly powerful creative tool, rather than just an eye-roll-inducing buzzword topic.\n\nFive Things Audience Members Will Learn\n\n  Understand how machine learning can enable your creativity rather than displace it\n  See other artists, designers, scientists, &amp; engineers’ work already pushing the medium further\n  Discover cutting edge new tools at this forefront\n  Learn how other expressive tools have historically enabled new mediums\n  How to incorporate this practically into your practice\n\n\nTarget Audience\nDesigners, engineers, and creative people\n\nAssumed Audience Knowledge\nN/A\n\nAre you ok with us taping and releasing your presentation?\nYes &amp; please :)\n\nLevel tag\nN/A\n\nContent tags\n\n  Design\n  Inspire\n  AI\n\n",
    description: "He could see from the bed that it had been set for four o'clock as it should have been; it certainly must have rung. Yes, but was it possible to quietly sleep through that furniture-rattling noise? True, he had not slept peacefully, but probably all the more deeply because of that. What should he do now?",
    tags: ["features"],
    issue: 2,
    id: 9
  });
  

  
  index.add({
    title: "Slow Carb",
    content: "Proteins\nEgg whites with 1–2 whole eggs for ﬂavor (or, if organic, 2–5 whole eggs, including yolks)\n\nChicken breast or thigh\n\nBlack beans\n\nBeef (preferably grass-fed)\n\nPork\n\nFish\n\nLegumes\nLentils\n\nPinto beans\n\nRed beans\n\nSoybeans\n\nVegetables\nSpinach\n\nMixed vegetables (including broccoli, cauliﬂower, or any other cruciferous vegetables)\n\nSauerkraut, kimchee (full explanation of these later in “Damage Control”)\n\nAsparagus\n\nPeas\n\nBroccoli\n\nGreen beans\n\nTips\nStick to Slow-Carb Diet approved foods 6 days a week: lean meat, beans, and veggies and no white foods like sugar, pasta, rice, bread, cheese.\n\nEat the same few meals over and over again, especially for breakfast and lunch. You probably do this already; you’re just picking new default meals.\n\nDon’t drink calories. 1-2 glasses of red wine is okay.\n\nStart your day with protein, shooting for 30g within 30 minutes of waking (boosts success rate by 11%).\n\nDon’t eat fruit. Tomatoes and avocados are allowed in moderation.\n\nTake one “cheat day” a week: Eat whatever you want on cheat days. Tim recommends Saturday for social purposes.\n\nBreakfast\nThe ideal breakfast is 30g of protein within 30 minutes of waking up. Eggs are an easy way to do this (and boost success rate by 10%). Some meal ideas:\n\nSmoothie with 30g of protein powder\n\n3 eggs (16g) with 3 slices of Canadian bacon (13g)\n\n2 eggs (12g) with 1/2 cup black beans (20g), salsa and guacamole\n\n3 servings of spinach or broccoli frittata (30g or\n5-6 eggs plus some protein from the veggies)\n\nCaffeine is okay! Drink unsweetened coffee or tea without milk or cream. If you drink caffeinated soda in the morning, limit it to one can of diet soda a day.\n",
    description: "And it's a funny sort of business to be sitting up there at your desk, talking down at your subordinates from up there, especially when you have to go right up close because the boss is hard of hearing. Well, there's still some hope; once I've got the money together to pay off my parents' debt to him - another five or six years I suppose - that's definitely what I'll do.",
    tags: ["lab"],
    issue: 2,
    id: 10
  });
  

  
  index.add({
    title: "Mac Baker Email",
    content: "TL;DR: The ideal interface is your Mom. She doesn’t need to show you a chart, she just needs to say ‘You’re tired, you need to go to bed.’ You do it because you trust her and you know she’s right. Charts are fun and pretty, but only a persuasion stopgap or a presentation aid to help you understand. Digging into data is a fleeting joy. Using a chart to illustrate a correlation can be helpful. Make it Pertinent, Pretty, Polite, and Protected.\n\n\n  … unless I’m wrong, you were creative director for Basis for 2 years!?\nThat product has been one of my biggest inspirations for this project by far.\n\n\nThat’s very nice to hear. Correct, I co-founded Basis in 2010 and served as Creative Director until last year.\n\n\n  (1) Did having all those unique data streams like heart rate, perspiration, and skin temperature reveal anything about users that you didn’t expect? or more interestingly, that you may not have designed for until you saw it?\nThe largest advantage of having multiple data streams was correlation and coverage overlap. The mixture of sensors were selected for their complementary benefits (i.e Synergy: improving the effectiveness of each sensor by correlating data with other sensors). However, we were most concerned with ensuring continuous coverage. Every sensor has its own operating conditions required to report accurately. They all fail, sometimes horribly, in certain cases. But the combination ensures continuous collection.\n\n\nThe most unexpected possibilities relate to detecting and acting upon Affective states. It’s great to know how many steps you took today, but that becomes infinitely more meaningful if you can connect this to how I feel. Lots of services allow you to do light reporting of mood (i.e. Nike Fuel, Dailymile support emoticons to report sentiment). But these are biased, reflective, self reported, and non-continuous.\n\nThe correlations between mental activity, emotional state, and physiological arousal are surprisingly regular and detectable. These were the surprises. Monitoring the right combination of metrics, with sufficient accuracy and regularity, allows you to infer emotional state. Monitoring activity allows you to infer causation.\n\nThis introduces the possibility to look at a graph, identify when I felt angry, what (or who) might have caused this, and most importantly how I can change it. This is biggest insight I might offer: How does our relationship with technology change when it’s possible for machines to understand the Human Experience; intent, not just action?\n\n\n  (2) Did giving users access to the “raw” chart data empower them to see insights you might not have caught and/or caused them to take any actions based on their own analysis? Or was it more for peace of mind and curiosity?\n\n\n\n  (3) Did users find the direct suggestions for changes to their habits really useful and/or take action on them?\n\n\n\n  (4) Where do you draw the line for what should and should’t be “designed” in the system? Is personal analysis of even things as simple as small trend-graphs or pie charts something that the average user actually does? Or is it just the passionate 1%?\nBlanket, lump response.\n\n\nThe product designs and functionality went through many, many iterations. Some included tools far richer than the more recent version of the site. However, we found that users quickly lost interest, unable to see the ‘so what.’ Other versions included simplified visuals with no ability to inspect the data behind it. Users lost interest in these as too simplistic, unable to see the ‘now what’. Ultimately, we found that in order to extend beyond the early adopters, you have to make meaning, show your work,/and/ recommend next steps.\n\nHere’s the what, how, so what, now what.\n\nHumans are naturally suspicious of new information, especially information that contradicts beliefs, tremendously so when these suggestions come from machines. Showing our work, how we came to those conclusions, increased user’s trust in the system. However, the most effective prototypes used social proof.\n\n‘You’ll feel better if you run at night’ causes skepticism.\n\n‘See, heres the data’ lowers skepticism slightly.\n\n‘It works, just ask your friend Tom’ virtually eliminates skepticism.\n\nSocial proof wins. In many cases, with zero supporting data.\n\nWhile I can’t delve deeply into the details, these suggestions for ‘life optimization’ are the primary focus of further development at Basis as well as throughout the wearable space. Everyone is excited by the ‘Quantified Self’ movement, but most are really interested in the ‘Qualified Self’ (whether they know it or not). In other words, lots of folks think it’s neat to track steps. But they have unspoken intentions about how this information might help them. Only geeks find interest in the pure data. Everyone wants to jump past the ‘got data’ to the ‘made it meaningful.’\n",
    description: "How about if I sleep a little bit longer and forget all this nonsense, he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn't get into that position. However hard he threw himself onto his right, he always rolled back to where he was.",
    tags: ["features"],
    issue: 2,
    id: 11
  });
  

  
  index.add({
    title: "What's Jekyll?",
    content: "Jekyll is a static site generator, an open-source tool for creating simple yet powerful websites of all shapes and sizes. From the project’s readme:\n\n\n  Jekyll is a simple, blog aware, static site generator. It takes a template directory […] and spits out a complete, static website suitable for serving with Apache or your favorite web server. This is also the engine behind GitHub Pages, which you can use to host your project’s page or blog right here from GitHub.\n\n\nIt’s an immensely useful tool. Find out more by visiting the project on GitHub.\n",
    description: "It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.",
    tags: ["found"],
    issue: 1,
    id: 12
  });
  

  
  index.add({
    title: "Introduction",
    content: "The Strange Case of Dr. Jekyll and Mr. Hyde tells the story of a lawyer investigating the connection of two persons, Dr. Henry Jekyll and Mr. Edward Hyde. Chief among the novel’s supporting cast is a man by the name of Mr. Poole, Dr. Jekyll’s loyal butler.\n\n\n\nPoole is the butler for Jekyll, the static site generator. It’s designed and developed by @mdo to provide a clear and concise foundational setup for any Jekyll site. It does so by furnishing a full vanilla Jekyll install with example layouts, pages, posts, and styles.\n\nThis demo site was last updated April 23, 2020.\n\nThere are currently two themes built on Poole:\n\n\n  Hyde\n  Lanyon\n\n\nLearn more and contribute on GitHub.\n\nWhat’s included\n\nPoole is a streamlined Jekyll site designed and built as a foundation for building more meaningful themes. Poole, and every theme built on it like this one, includes the following:\n\n\n  Complete Jekyll setup included (layouts, config, 404, RSS feed, posts, archive page, and example page)\n  Mobile friendly design and development\n  Easily scalable text and component sizing with rem units in the CSS\n  Support for a wide gamut of HTML elements\n  Related posts (time-based, because Jekyll) below each post\n  Syntax highlighting, courtesy Jekyll’s built-in support for Rouge\n\n\nAdditional features are available in individual themes.\n\nBrowser support\n\nPoole and its themes are by preference a forward-thinking project. In addition to the latest versions of Chrome, Safari (mobile and desktop), Firefox, and Edge.\n\nDownload\n\nThese themes are developed on and hosted with GitHub. Head to the GitHub repository for downloads, bug reports, and features requests.\n\nThanks!\n",
    description: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
    tags: ["features"],
    issue: 1,
    id: 13
  });
  

  
  index.add({
    title: "Example content",
    content: "Howdy! This is an example blog post that shows several types of HTML content supported in this theme.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n\n\n  Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.\n\n\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.\n\nInline HTML elements\n\nHTML defines a long list of available inline tags, a complete list of which can be found on the Mozilla Developer Network.\n\n\n  To bold text, use &lt;strong&gt;.\n  To italicize text, use &lt;em&gt;.\n  To highlight, use &lt;mark&gt;.\n  Abbreviations, like HTML should use &lt;abbr&gt;, with an optional title attribute for the full phrase.\n  Citations, like — Mark Otto, should use &lt;cite&gt;.\n  Deleted text should use &lt;del&gt; and inserted text should use &lt;ins&gt;.\n  Superscript text uses &lt;sup&gt; and subscript text uses &lt;sub&gt;.\n\n\nMost of these elements are styled by browsers with few modifications on our part.\n\nFootnotes\n\nFootnotes are supported as part of the Markdown syntax. Here’s one in action. Clicking this number1 will lead you to a footnote. The syntax looks like:\n\nClicking this number[^fn-sample_footnote]\n\nEach footnote needs the ^fn- prefix and a unique ID to be referenced for the footnoted content. The syntax for that list looks something like this:\n\n[^fn-sample_footnote]: Handy! Now click the return link to go back.\n\nYou can place the footnoted content wherever you like. Markdown parsers should properly place it at the bottom of the post.\n\nHeading\n\nVivamus sagittis lacus vel augue rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n\nCode\n\nInline code is available with the &lt;code&gt; element. Snippets of multiple lines of code are supported through Rouge. Longer lines will automatically scroll horizontally when needed. You may also use code fencing (triple backticks) for rendering code.\n\n// Example can be run directly in your JavaScript console\n\n// Create a function that takes two arguments and returns the sum of those arguments\nvar adder = new Function(\"a\", \"b\", \"return a + b\");\n\n// Call the function\nadder(2, 6);\n// &gt; 8\n\nYou may also optionally show code snippets with line numbers. Add linenos to the Rouge tags.\n\n1\n2\n3\n4\n5\n6\n7\n8\n// Example can be run directly in your JavaScript console\n\n// Create a function that takes two arguments and returns the sum of those arguments\nvar adder = new Function(\"a\", \"b\", \"return a + b\");\n\n// Call the function\nadder(2, 6);\n// &gt; 8\n\n\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.\n\nGists via GitHub Pages\n\nVestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.\n\n400: Invalid request\n\n\nAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper.\n\nLists\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\n\n\n  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n  Donec id elit non mi porta gravida at eget metus.\n  Nulla vitae elit libero, a pharetra augue.\n\n\nDonec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.\n\n\n  Vestibulum id ligula porta felis euismod semper.\n  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n  Maecenas sed diam eget risus varius blandit sit amet non magna.\n\n\nCras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.\n\n\n  HyperText Markup Language (HTML)\n  The language used to describe and define the content of a Web page\n\n  Cascading Style Sheets (CSS)\n  Used to describe the appearance of Web content\n\n  JavaScript (JS)\n  The programming language used to build advanced Web sites and applications\n\n\nInteger posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.\n\nImages\n\nQuisque consequat sapien eget quam rhoncus, sit amet laoreet diam tempus. Aliquam aliquam metus erat, a pulvinar turpis suscipit at.\n\n\n\n\n\nTables\n\nAenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n\n  \n    \n      Name\n      Upvotes\n      Downvotes\n    \n  \n  \n    \n      Totals\n      21\n      23\n    \n  \n  \n    \n      Alice\n      10\n      11\n    \n    \n      Bob\n      4\n      3\n    \n    \n      Charlie\n      7\n      9\n    \n  \n\n\nNullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.\n\n\n\nWant to see something else added? Open an issue.\n\n\n  \n    \n      Handy! Now click the return link to go back. &#8617;\n    \n  \n\n",
    description: "His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
    tags: ["lab"],
    issue: 1,
    id: 14
  });
  

  
  index.add({
    title: "Options",
    content: "With Poole as a baseline theme for Jekyll, there aren’t many options available out of the box. Basic light and dark mode support is included. Colors are also provided for your own customization, while other Poole themes build on this to create more unique looks.\n\n\n  Dark mode\n  Creating themes\n  Colors\n  Gray colors\n  Google Analytics\n\n\nDark mode\n\nDark mode is enabled automatically via CSS media query—you’ll find the source code for this in the _sass/_variables.scss stylesheet. If you’re familiar with CSS custom properties, you can also use this method to build your own color schemes.\n\nRead more about using CSS dark mode via media queries like this:\n\n// Example media query to detect dark mode\n@media (prefers-color-scheme: dark) {\n  // ...\n}\n\n\nCreating themes\n\nIf you want to make your own color schemes, modify the CSS variables in the _sass/_variables.scss stylesheet with a scoped data attribute or class name.\n\nFor example, below we’ve created the beginnings of a blue theme:\n\n// Example blue theme\n[data-theme=\"blue\"] {\n  --body-bg: var(--blue);\n  --body-color: #fff;\n}\n\n\nThen, apply the theme by adding data-theme=\"blue\" to the &lt;html&gt; element.\n\nColors\n\nChange your site styles by modifying the source code with these CSS custom properties. Poole’s colors come from the Open Color project.\n\n\n  \n  \n    var(--red)\n    #fa5252\n  \n  \n  \n    var(--pink)\n    #e64980\n  \n  \n  \n    var(--grape)\n    #be4bdb\n  \n  \n  \n    var(--purple)\n    #7950f2\n  \n  \n  \n    var(--indigo)\n    #4c6ef5\n  \n  \n  \n    var(--blue)\n    #228be6\n  \n  \n  \n    var(--cyan)\n    #15aabf\n  \n  \n  \n    var(--teal)\n    #12b886\n  \n  \n  \n    var(--green)\n    #40c057\n  \n  \n  \n    var(--yellow)\n    #fab005\n  \n  \n  \n    var(--orange)\n    #fd7e14\n  \n\n\nGray colors\n\nThere are also ten grayscale colors to choose from.\n\n\n  \n  \n    var(--gray-000)\n    #f8f9fa\n  \n  \n  \n    var(--gray-100)\n    #f1f3f5\n  \n  \n  \n    var(--gray-200)\n    #e9ecef\n  \n  \n  \n    var(--gray-300)\n    #dee2e6\n  \n  \n  \n    var(--gray-400)\n    #ced4da\n  \n  \n  \n    var(--gray-500)\n    #adb5bd\n  \n  \n  \n    var(--gray-600)\n    #868e96\n  \n  \n  \n    var(--gray-700)\n    #495057\n  \n  \n  \n    var(--gray-800)\n    #343a40\n  \n  \n  \n    var(--gray-900)\n    #212529\n  \n\n\nGoogle Analytics\n\nSpecify ga_analytics in your _config.yml and restart the server to add Google Analytics tracking code.\n\n# Google Analytics example\nga_analytics: UA-000000-0\n\n",
    description: "The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me? \" he thought. It wasn't a dream.",
    tags: ["features"],
    issue: 1,
    id: 15
  });
  


// builds reference data
var store = [{
  "title": "Tech to Invest In",
  "link": "/november-2020/tech-to-invest/",
  "issue": 4,
  "tags": ["found"],
  "thumbnail": "/thumbnails/jekyll.png",
  "excerpt": "The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the..."
},{
  "title": "Wabi Sabi",
  "link": "/november-2020/wabi-sabi/",
  "issue": 4,
  "tags": ["lab"],
  "thumbnail": "/thumbnails/example.png",
  "excerpt": "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and..."
},{
  "title": "IxDA Submission",
  "link": "/november-2020/ixda/",
  "issue": 4,
  "tags": ["features"],
  "thumbnail": "/thumbnails/options.png",
  "excerpt": "It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her..."
},{
  "title": "Animal Crossing",
  "link": "/november-2020/animal-crossing/",
  "issue": 4,
  "tags": ["features","lab"],
  "thumbnail": "/thumbnails/introduction.png",
  "excerpt": "His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on..."
},{
  "title": "Questions for Jake",
  "link": "/october-2020/jake/",
  "issue": 3,
  "tags": ["found"],
  "thumbnail": "/thumbnails/options.png",
  "excerpt": "I ought to just try that with my boss; I'd get kicked out on the spot. But who knows, maybe that would be the best thing for..."
},{
  "title": "These Days Highlights",
  "link": "/october-2020/these-days/",
  "issue": 3,
  "tags": ["features"],
  "thumbnail": "/thumbnails/introduction.png",
  "excerpt": "Doing business like this takes much more effort than doing your own business at home, and on top of that there's the curse of travelling, worries about..."
},{
  "title": "Famous Breakfasts",
  "link": "/october-2020/famous-breakfasts/",
  "issue": 3,
  "tags": ["features"],
  "thumbnail": "/thumbnails/example.png",
  "excerpt": "The next train went at seven; if he were to catch that he would have to rush like mad and the collection of samples was still not..."
},{
  "title": "Super Normal",
  "link": "/october-2020/super-normal/",
  "issue": 3,
  "tags": ["lab"],
  "thumbnail": "/thumbnails/jekyll.png",
  "excerpt": "And it's a funny sort of business to be sitting up there at your desk, talking down at your subordinates from up there, especially when you have..."
},{
  "title": "Photography Equipment",
  "link": "/september-2020/photography-equipment/",
  "issue": 2,
  "tags": ["found"],
  "thumbnail": "/thumbnails/introduction.png",
  "excerpt": "He slid back into his former position. \"Getting up early all the time\", he thought, \"it makes you stupid. You've got to get enough sleep. Other travelling..."
},{
  "title": "FITC Talk Outline",
  "link": "/september-2020/fitc-outline/",
  "issue": 2,
  "tags": ["features"],
  "thumbnail": "/thumbnails/options.png",
  "excerpt": "He could see from the bed that it had been set for four o'clock as it should have been; it certainly must have rung. Yes, but was..."
},{
  "title": "Slow Carb",
  "link": "/september-2020/slow-carb/",
  "issue": 2,
  "tags": ["lab"],
  "thumbnail": "/thumbnails/example.png",
  "excerpt": "And it's a funny sort of business to be sitting up there at your desk, talking down at your subordinates from up there, especially when you have..."
},{
  "title": "Mac Baker Email",
  "link": "/september-2020/mac-baker-email/",
  "issue": 2,
  "tags": ["features"],
  "thumbnail": "/thumbnails/jekyll.png",
  "excerpt": "How about if I sleep a little bit longer and forget all this nonsense, he thought, but that was something he was unable to do because he..."
},{
  "title": "What's Jekyll?",
  "link": "/august-2020/whats-jekyll/",
  "issue": 1,
  "tags": ["found"],
  "thumbnail": "/thumbnails/jekyll.png",
  "excerpt": "It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her..."
},{
  "title": "Introduction",
  "link": "/august-2020/introduction/",
  "issue": 1,
  "tags": ["features"],
  "thumbnail": "/thumbnails/introduction.png",
  "excerpt": "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and..."
},{
  "title": "Example content",
  "link": "/august-2020/example-content/",
  "issue": 1,
  "tags": ["lab"],
  "thumbnail": "/thumbnails/example.png",
  "excerpt": "His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on..."
},{
  "title": "Options",
  "link": "/august-2020/options/",
  "issue": 1,
  "tags": ["features"],
  "thumbnail": "/thumbnails/options.png",
  "excerpt": "The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the..."
}]

// builds search
$(document).ready(function() {
  var timeout;
  var delay = 250;
  var queryCache;

  $('.search-input').on('keyup', function (event) {
    if (timeout) {
      clearTimeout(timeout); }
    timeout = setTimeout(function() {
      searchKeyup(event); }, delay);
  }).focus(function () {
    if (timeout) {
      clearTimeout(timeout); }
    timeout = setTimeout(function() {
      searchFocus(event); }, delay);
  }).blur(function () {
    if (timeout) {
      clearTimeout(timeout); }
    timeout = setTimeout(function() {
      searchBlur(event); }, delay);
  });

  function searchKeyup(event) {
    // Get query
    var query = $('.search-input').val();
    if (query != "" && query != queryCache) {
      // Get results div
      var resultdiv = $('#results');
      // Search for it
      var result = index.search(query);
      // Figure out plural
      if (result.length == 1) {
        var plural = '';
      } else {
        var plural = 's';
      }
      // Show results
      resultdiv.empty();
      // Add status
      resultdiv.prepend('<p class="status">found '+result.length+' result'+plural+'</p>');
      // Loop through, match, and add results
      for (var item in result) {
        var ref = result[item].ref;
        var searchitem = '<a class="result-wrapper" href="'+store[ref].link+'"><li class="result"><span class="left"><div class="result-thumbnail" style="background-image: url(\''+store[ref].thumbnail+'\')"></div></span><span class="right"><div class="result-title">'+store[ref].title+'</div><div class="result-meta">'+store[ref].tags.join(' &middot; ')+' &middot; issue '+store[ref].issue+'</div><p>'+store[ref].excerpt+'</p></span></li></a>';
        resultdiv.append(searchitem);
      }
      $('#results').fadeIn(100);
      queryCache = query;
    }
  }

  function searchFocus(event) {
    $('body').addClass('searching');
    var scrollAmount = $('.search').offset().top - 40;
    $('html, body').animate({scrollTop: scrollAmount}, 250);
  }

  function searchBlur(event) {
    if($('.search-input').val() == "") {
      $('body').removeClass('searching');
      $('#results').fadeOut(100).empty();
    }
  }
});
