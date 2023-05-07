// Variables
VAR Honor = 0
VAR Wrath = 0
VAR Benevolence = 0
VAR Apathy = 0

VAR RushCallback = false

//Honor = {Honor}
//Wrath = {Wrath}
//Kindness = {Kindness}
//Betrayal = {Betrayal}

// Intro
You are a knight in service of the mighty Kingdom of Valior.
Recently, the kingdom has come under attack from a loathsome beast. 
As the most skilled warrior in all the land, you will soon embark on a journey to deal with it once and for all.

* [Begin Story]
-> scene1


=== scene1 ===
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


* [Take your time going to the castle]You are in no rush to head to the castle after your vacation was disturbed, and thus slowly but surely prepare for the trip to the castle.
~ Apathy++

- Upon arriving at the castle, you are ushered in quickly by the guards. You can feel the panic in the air.

Something is amiss, and clearly you have been called in to address it.

Eventually, after navigating through a labyrinth of hallways and passing many a chamber, you finally find yourself in the throne room.

Sitting upon the throne is none other than King Achrides IV himself, dressed in elaborate robes, decorated with flashy jewelery, and of course adorned with a massive, extravagant crown that signalled his power to those who were to lay eyes on him.

Yet the man himself looked uncharacteristically exhuasted. His hair and beard were scraggly and unkempt, a face plastered with creases and wrinkles, and sunken eyes that conveyed countless sleepless nights; his usual aura of confidence was nowhere to be seen.

* [Inquire about his health]"My liege, it is most disconcerting to see how unwell you appear to be. What could possibly be troubling you so? Is there anything I can do to assist in relieving your worries?"
~ Benevolence++
"Your concern is well-meaning but unnecessary my loyal knight. I am not the one who needs your help.

* [Ask what you are needed for]"My liege, {RushCallback: I got here as soon as I heard you call for me,} what do you require of me?"
~ Honor++
"Eager to serve your kingdom as always, aren't you my knight? Your steadfast demeanor is much appreciated, and will be much needed in the days forthcoming.

* [Demand to know why you're here]"With all due respect my liege, why am I here? I was quite content relaxing at home before I was so rudely interrupted. Can I not enjoy even the most brief of respites? What could possibly demand my presence so urgently?"
~ Wrath++
"Hrmph. Grumpy and entitled today, I see. I will overlook this, but I suggest you not overstep again. Greater things are at stake than your mere comfort.

- <> You are likely unaware, but awful events have transpired during your time away."

"A plague is spreading across our great kingdom. Awful, twisted creatures have spawned in the eastern fields of Toritha. No one knows where these foul creatures came from, but they may as well have come straight from hell for all I'm concerned. Ever since they emerged they have brought nothing but death and ruin to our land and our people. We cannot even get proper word of what these foul things are capable of or even look like beyond a murky black swarm cloud."

* "What are we doing to help the people?"
~ Benevolence += 2
"A noble sentiment, but as of now there is nothing we can do.

* "Have we tried observing these creatures?"
~ Benevolence++
"Indeed we have, but to no avail.

* "I will do whatever it takes for the kingdom. What do you need of me?"
~ Honor++
~ Wrath++
"A king can only wish for a knight as devoted and skilled as you. What we need of you is to make sense of this.

* "They will be shown no mercy. Point me towards what I am to vanquish."
~ Wrath += 2
"Hold back your fury for the time being.

*"And this concerns me how exactly?"
~ Apathy++
"You have picked an inopportune moment for sarcasm. As a knight of The Order of Valius, you are sworn to protecting this kingdom. Protect it from what, we are not quite certain yet.

- <> We have not the slightest idea what we are contending with."
"Your quest as it stands will be to determine something, anything about the swarm. Despite its constant growth, the darkness seems to continue to be concentrated in eastern Toritha, at the point of emergence. You will go and make contact. All of our previous attempts have failed; yet still you may stand a chance given your incredible past feats. Should you be able to make contact with one of these creatures, or better still a leading figure, I authorize you to use your best judgment on how to solve this plague on our kingdom. Should the need arise, that sword of yours should be accustomed to dispatching enemies, is it not?"

* "Only if it is absolutely necessary."
~ Honor++
"Good. I trust your discretion as much as I ever have in your years of service to the kingdom and myself.


* "My blade is plenty accustomed to spilling the blood of my enemies."
~ Wrath++
"Let us hope it does not come to that. Valior is at its weakest point in centuries; we are not prepared to handle a damned war against a seemingly unidentifiable force.

- <> Be off then. We know not how much time the rest of the kingdom has. Fare thee well my trusted knight. May the spirit of Valius himself bless your travels."

-> END




