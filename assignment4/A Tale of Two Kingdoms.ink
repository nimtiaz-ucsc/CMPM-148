// Variables
// Player Character Traits
VAR Honor = 0
VAR Wrath = 0
VAR Benevolence = 0
VAR Apathy = 0

// Callbacks
VAR RushCallback = false
VAR EvacuateCallback = false
VAR WaitCallback = false
VAR AttackCallback = false
VAR ShieldCallback = false
VAR SwordCallback = false
VAR KillCallback = false

// Honor = {Honor}
// Wrath = {Wrath}
// Benevolence = {Benevolence}
// Apathy = {Apathy}

// Intro
You are a knight in service of the mighty kingdom of Valior.
Recently, the kingdom has come under attack from a loathsome beast. 
As the most skilled warrior in all the land, you will soon embark on a journey to deal with it once and for all.

* [Begin Story]
-> scene1


=== scene1 ===
= home
It's a warm summer's day, and you are lying in bed enjoying a much needed reprieve from your knightly duties.

As you begin to slowly drift off into a delightful midday nap, you hear a faint voice calling from outside your modest farmhouse.

"Hark, hark! Heed my words, great knight! You are urgently needed!"

* [Get up and respond]You get up from bed and greet the speaker.
~ Honor++
"Yes, my good sir, how could I be of service?"
"My dear knight, 

* [Yell at them for the disturbance]You storm towards your front door and slam it open.
~ Wrath++
"Who DARES to come to MY home and disturb me?!"
"A-apologies, my knight,

* [Ignore them]"..."
~ Apathy++
"Um... well if you can hear me, my knight,

- <> I come on behalf of His Majesty King Achrides IV, ruler of this great land of Valior, to notify you that you are hereby formally requested to attend an audience with His Majesty, effective immediately."

* [Head to the castle immediately]You waste no time in getting prepared and quickly make your way to the castle.
~ Honor++
~ RushCallback = true
->castle


* [Take your time going to the castle]You are in no rush to head to the castle after your vacation was disturbed, and thus slowly but surely prepare for the trip to the castle.
~ Apathy++
->castle

= castle
Upon arriving at the castle, you are ushered in quickly by the guards. You can feel the panic in the air.

Something is amiss, and clearly you have been called in to address it.

Eventually, after navigating through a labyrinth of hallways and passing many a chamber, you finally find yourself in the throne room.

Sitting upon the throne is none other than King Achrides IV himself, dressed in elaborate robes, decorated with flashy jewelery, and of course adorned with a massive, extravagant crown that signalled his power to those who were to lay eyes on him.

Yet the man himself looked uncharacteristically exhuasted. His hair and beard were scraggly and unkempt, a face plastered with creases and wrinkles, and sunken eyes that conveyed countless sleepless nights; his usual aura of confidence was nowhere to be seen.

* [Inquire about his health]"My liege, it is most disconcerting to see how unwell you appear to be. What could possibly be troubling you so? Is there anything I can do to assist in relieving your worries?"
~ Benevolence++
"Your concern is well-meaning but unnecessary my loyal knight. I am not the one who needs your help.

* [Ask what you are needed for]"My liege, {RushCallback: I got here as soon as I heard you call for me,} what do you require of me?"
~ Honor++
"Eager to serve your kingdom as always, aren't you my knight? Your steadfast demeanor is quite appreciated, and will be much needed in the days forthcoming.

* [Demand to know why you're here]"With all due respect my liege, why am I here? I was quite content relaxing at home before I was so rudely interrupted. Can I not enjoy even the most brief of respites? What could possibly demand my presence so urgently?"
~ Wrath++
"Hrmph. Grumpy and entitled today, I see. I will overlook this, but I suggest you not overstep again. Greater things are at stake than your mere comfort.

*[Wait for the king to address you]"..."
~ Apathy++
"Ah, you have finally arrived my knight. You should have made your presence known. Nevertheless, I am sure you are curious as to why you have been summoned.

- <> You are likely unaware, but awful events have transpired during your time away."

"A plague is spreading across our great kingdom. Awful, twisted creatures have spawned in the eastern fields of Toritha. No one knows where these foul creatures came from, but they may as well have come straight from hell for all I'm concerned. Ever since they emerged they have brought nothing but death and ruin to our land and our people. We cannot even get proper word of what these foul things are capable of or even look like beyond a murky black swarm cloud; it obscures sight of all within its bounds."

* "What are we doing to help the people?"
~ Benevolence+= 2
"A noble sentiment, but as of now there is nothing we can do.

* "Have we tried observing these creatures?"
~ Benevolence++
"Indeed we have, but to no avail.

* "I will do whatever it takes for the kingdom. What do you need of me?"
~ Honor++
~ Wrath++
"A king can only wish for a knight as devoted and skilled as you. What we need of you is to make sense of this.

* "They will be shown no mercy. Point me towards what I am to vanquish."
~ Wrath+= 2
"Hold back your fury for the time being.

*"And this concerns me how exactly?"
~ Apathy++
"You have picked an inopportune moment for sarcasm. As a knight of The Order of Valius, you are sworn to protecting this kingdom. Protect it from what, we are not quite certain yet.

- <> We have not the slightest idea what we are contending with."
"Your quest as it stands will be to determine something, anything about the swarm. Despite its constant growth, the darkness seems to continue to be concentrated in eastern Toritha, at the point of emergence. You will go and make contact. All of our previous attempts have failed; yet still you may stand a chance given your incredible past feats. Should you be able to make contact with one of these creatures, or better still a leading figure, I authorize you to use your best judgment on how to solve this plague on our kingdom. Should the need arise, that sword of yours should be accustomed to dispatching enemies, is it not?"

* "I'd rather not rush into this blade-first."
~ Benevolence+= 2
"A pacifist approach? Not what I expected, I must say, but if this can be solved with no further bloodshed then I can only be grateful.

* "Only if it is absolutely necessary."
~ Honor++
~ Benevolence++
"Good. I trust your discretion as much as I ever have in your years of service to the kingdom and myself.


* "My blade is plenty accustomed to spilling the blood of my enemies."
~ Wrath++
"Let us hope it does not come to that. Valior is the weakest it has been in centuries; we are not prepared to handle a war against a seemingly unidentifiable force.

- <> Be off then. We know not how much time the rest of the kingdom has. Fare thee well my trusted knight. May the spirit of Valius himself bless your travels."
->scene2

=== scene2 ===
You begin your trek across the sprawling kingdom. With the capital on the northwestern edge of the territory, you anticipate a long and arduous journey towards the eastern fields.

Or so you thought. Your journey is cut short. After passing through a mere handful of towns, you can already begin to see the ominous black cloud on the horizon. It has spread at an exponential rate and is dangerously nearing the capital.

* [Press onward] You carry onwards, continuing to approach the swarm.

* { Benevolence >= 3 } [Help the nearby town to evacuate] You turn back to the town you just visited, and urge everyone to quickly gather their loved ones and head towards the capital, where they will be kept safe until the swarm can be dealt with.
~ EvacuateCallback = true
~ Benevolence++
After assisting the townspeople, you turn back to see that the swarm has rapidly approached your position.

* { Apathy >= 2 } [Sit and wait for the swarm to approach] You decide to bide your time in the nearest town and wait for the swarm to come to you.
~ WaitCallback = true
~ Apathy++
In only a matter of hours, the swarm has drawn uncomfortably close to the town.

- You make your way to the edge of the swarm. As you get close, you notice that the swarm is not a black cloud as was previously described to you, but a writhing mass of flesh. It's alive.
You start to make out some very subtle features: bony, spindly limbs that stretch and crawl across the surface of the swarm; the quick flash of sharp teeth that snap at the ground, trying to pick up anything that could be used as food; the occasional glow of an exposed orange eye that stares back at you for a moment before being obscured once more.

* [Stand your ground] You maintain your position, as does the swarm to your surprise. They seem to have recognized your presence. A single scrawny creature emerges from the horde.

* { Benevolence >= 2 } [Try to communicate] You take a step back with your hands up, and attempt to speak with the living mass.
~ Benevolence++
"Greetings, I arrive on behalf of the great kingdom of Valior. I am hoping that we would be able to parley in the hopes that we can understand each other, and perhaps come to an agreement that would benefit both my home and your... population."

You notice that the swarm's movements have slowed. Are they discussing your proposition? Before long, a single scrawny creature emerges from the horde.

* { Wrath >= 3 } [Attack the swarm] Without hesitation, you draw your sword and plunge it deep into the dark mass of flesh. You hear a squeal, and suddenly the entire swarm retreats backward, leaving behind a single scrawny creature, squirming in pain.
~ Wrath++ 
~ AttackCallback = true

- The creature is a strange hybrid of insectoid and mammalian features:  thin spiky bow-legs akin to a grasshopper, but from the waist up had the appearance of an haggard, impish demon, complete with two horns atop its head, but also featured snapping mandibles. Its skin was as black as the void, and did not reflect the sunlight at all. The only other color came from its four beady front-facing orange eyes, which had a pale, ethereal glow to them. {AttackCallback: Yet as the life slowly began to fade from the creature's eyes, so too did this glow.}
{AttackCallback: -> attack}

The creature takes a moment to look at you, before speaking.

"We are Lunok. Are you king? You do not look king."

* "No, but I have been sent on his behalf. May I speak with your leader?"

* {Wrath >= 2} "What do you know of kings, you lowly animal? You will speak with me."
~ Wrath++
The creature snarls at you, then looks back and chitters towards the swarm. 

* {Benevolence >= 3} [Kneel to the creature and respond in kind.]"I no king. I serve king. King send me. Do you have king?
The creature grins at you before gesturing towards the swarm.

* {Wrath >= 4} [Kill the creature.] You swing your sword at the creature, swiftly decapitating it.
~ Wrath+= 2
~ AttackCallback = true
-> attack

- Suddenly the swarm splits in half, creating a path for you to walk through. You proceed.

As you walk down the path, you notice the ground beneath you is not only devoid of life, but devoid of color. Must be the work of these so-called Lunok.

After what feels like an eternity of walking, you reach the end of the path, entering a small circular clearing. You see nothing but more of the writhing Lunok swarm surrounding you, and more colorless ground beneath your feet.

* [Stay and wait] You decide to remain standing where you are.

* [Yell in frustration] "Are you serious?! You led me into a dead end?! This is nonsense."
~ Wrath++

* {Apathy >= 2} [Turn around and leave] Without a word, you turn back around, with the intention to leave.

-  You notice the path you came down has been closed off; the swarm merged back together, trapping you in the clearing.

Before long, you hear a raspy voice emanate from the swarm.

"Greetings, knight." -> queen

= attack
Your sword is smeared with the same blood that spills from the creature's corpse, the same dark color as its hide.

A tense silence fills the air, before a sudden rush of bodies emerge from the swarm to take revenge for their fallen compatriot.

* [Defend yourself] You only have time to don your shield and assume defensive position before the attackers engage.
~ ShieldCallback = true

* {Wrath >= 6} [Fight back] Brandishing your sword, you counter the oncoming attackers, deftly slicing through each one, enough to maim or kill them.
~ Wrath++
~ SwordCallback = true

- You do your best to fend off the first few creatures, but before long you are overwhelmed. Your {ShieldCallback: shield} {SwordCallback: sword} is knocked from your hands, you lose your balance and fall to the ground, and you curl up into a ball as your armor takes the brunt of each strike, scratch, and bite.

As the creatures pile on, your vision becomes increasingly obscured.

The darkness begins to take over...

Until suddenly, you hear a raspy voice call out.

"ENOUGH!"

The command sends the attacking creatures sliterhing back into the large mass of the swarm, allowing you to recover and get back up.
-> queen

= queen
The swarm parts to reveal another black creature emerge, yet this one is much different. Instead of a puny little creature, this one is several times your height, and looms over you. It possess an extra 3 sets of legs, mimicking the movements of a spider, yet still retaining the humanoid upper body. Its head is adorned with a sweeping crest, one that almost looks like a crown.

"So, the servants of Valius have finally decided to take notice of us."

* "What are you?"

* {Honor >= 3} "What do you want from my people?"
~ Honor++
"It is not your people who I harbor a grudge against."

* {Wrath >= 3} "What sort of disgusting beast might you be?"
~ Wrath++
"The irony that a servant of Valius calls ME disgusting is not lost."

* {Apathy >= 3} "I could care less about you."
~ Apathy++
"Quite sharp words from one who is soon to be without a home."

- "{not AttackCallback: As you know, my people are called the Lunok, and }I am Queen Miadora of the Lunok. My people share a history with this land, but I'm sure our conflict was never written into the history books."

"You see, you Valiorans are not the first people to inhabit this land. Long, long ago, my people were once known as the Lunauch. We were a peaceful, nocturnal race who thrived in the darkness and slumbered in the daytime. Our lives were bountiful thanks to our patron goddess Lyris, who watched over us and provided us with security of comfort."

"Then one fateful day, a wicked interloper arrived from beyond the stars. His name was Valius. Valius was a being of light, and so found the Lunauch people beneath him. He saw our lifestyle as a waste of the wonderful land and natural resources gifted to us by Lyris. One morning, while we were all asleep like any other day, Valium performed a spell on us, transforming us into these unsightly creatures, and cast us into a realm of eternal light, detached from this reality."

"With the Lunauch expelled from this land, he saw to it to build his own realm, and populate it with his own worshippers, creating this loathsome kingdom you call Valior."

"But our people never stopped looking for a way back home. We renamed ourselves the Lunok as a constant reminder of our unsightly appearance, and as inspiration to return to our former greatness, whereupon we can reclaim the name Lunauch, and begin to reestablish our society."

"Your people know nothing of this, and are an unfortunate collateral in our quest to rebuild. But it must be done. The life force of the people and the land are being drained and sent back to our prison, where we can turn it into something inhabitable for us, and end the millenia of torture we have undergone."

"So knight, will you step out of the way, or be forced out?"


* {Honor >= 2} [Accuse her of lying] "You speak lies. The almighty Valium would never perform such cruel acts on an innocent population. Perhaps you are more wicked than you appear to be, beast."
"The only wicked ones are those who continue to worship that tyrant Valius. The Lunok will stop at nothing to reclaim what is ours. Now be out of our way.
    ** {Benevolence >= 3} [Offer to help] "Clearly there must have been some misunderstanding. Perhaps we can come to an agreement. There is no need for any more loss of life. Surely we can come to an agreement and coexist."
    
    "Hmmm... you do seem to be unaware of our plight. Perhaps the people of this land are capable of good. Very well. We will allow you to help us, but be warned. We will remain wary, and at the first sight of betrayal will resume our consumption of this land with no remorse whatsoever. Is that understood?"
    
    "Understood."
    
    "Good. Now return to your capital so that you may deliver this information."
    
    ** {Apathy >= 2} [Leave] You are done arguing over this. Without a word, you turn to walk away from the queen.
    
    ** {Wrath >= 4} [Kill the queen] You draw your sword and drive it straight into the queen's heart.
    
    She shudders, and her myriad of orange eyes widen, before fading and drifting off.
    
    "Valioran scum..."
    
    Her body goes limp, and slides off your sword, tumbling to the ground.
    
    You anticipate to fight your way out, but the swarm around you remains eerily silent. Suddenly the black mass arounds you begins to quake, before shattering into thousands of tiny Lunok corpses. Their life force must have been connected to the queen's.
    
    Wading through the dead creatures, you make your way back to the capital to report to the king.
    
    ->scene3

* {Wrath >= 2} [Insult the queen] "And why should I trust the likes of something as disgusting as you?"

* {Benevolence >= 4} [Offer to help] "It seems you have been wronged. What kind of knight would I be if I were to ignore those in need, no matter my allegiances. Surely I may be of some assistance."
{AttackCallback: "Why should I trust you after you killed so many of my own?"}
{AttackCallback: "It was merely a matter of self-defense, after seeing the harm you have already done to us, I feared for my safety. But if you are willing to overlook these transgressions, I am willing to work together to right the wrongs against your people."}

"Hmmm... you do seem to be unaware of our plight. Perhaps the people of this land are capable of good. Very well. We will allow you to help us, but be warned. We will remain wary, and at the first sight of betrayal will resume our consumption of this land with no remorse whatsoever. Is that understood?"
    
"Understood."
    
"Good. Now return to your capital so that you may deliver this information."

* {Apathy >= 2} [Leave] This conflict is greater than you could ever know, or you could care to know. Without a word, you turn to walk away from the queen.

- The swarm shifts once again, creating a path you can take back to the capital.

-> scene3

=== scene3 ===
scene 3 placeholder

-> END



