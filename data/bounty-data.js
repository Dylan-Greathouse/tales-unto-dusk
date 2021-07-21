const monsters = {
    id: 'monsters',
    title: 'Monsters in Angels Grove',
    map: {
        top: '80%',
        left: '40%',
    },
    image: '',
    description:
        ` You must take care of the fiends that are coming into Angels Grove with any means neccesary! Monsters are coming through the west gate, and they are attacking the villagers indiscriminately.
        Blood is covering the streets from their victims, you need to act fast! What will you do?`,
        
    choices: [{
        id: 'alarm',
        description: 'Sound the Alarm!',
        result: 
            `You notice that not that many guards are around. They are most likely enjoying the sinful town that is Angels Grove.
            You find a tower near the gate with a big bell. Running up the tower, you reach the bell and sound an alarm to warn 
            the townspeople and hopefully call the guards. Safe in the tower, the bell rings loudly through the town. The townsfolk are runnning to find shelter and to get away.
            A few guards came to the gate, some stumbling from drinking on the job. The monsters were chased out and the guards congradulate themselves on their success.
            They quickly go back to their activities and you were left alone. No one came to thank you for your warning and they definetly didn't pay you.
            But hey, your a hero, right?`,
        hp: 0,
        gold: 0
    }, {
        id: 'fight',
        description: 'Get ready for battle!',
        result: 
            `You notice that only a few monsters have made it through the gate. You feel a bit confident in your abilities to ward off the monsters yourself.
            Taking out your weapon, you prepare yourself to battle the monsters. You kill a couple of the fiends but notice that the group is
             getting bigger and bigger as more monsters are coming through the gate. After killing a few more, you feel exhausted from the fight. Spent, you miss 
             your next attack and one of the monsters jumps on your back and takes a bite into your neck. Losing all the blood from the big bite makes you feel dizzy 
             while all the monsters takes you down. You notice that no one is around you anymore while you take your final moments realizing that the townspeople could have fled without fighting the monsters.
             Your journey ends here as the monsters finish their feast.`,
        hp: -50,
        gold: 0
    }, {
        id: 'bomb',
        description: 'Blow them the @&*$ up!!',
        result:
            `As the monsters are feeding on the nearest people, you notice some barrels filled with gun powder that was stored near the gate. You find a tourch near you and chuck it to 
            the barrels. Causing a huge explosion and killing most of the monsters. The remaining fiends are terrified of the explosion and start running away from Angels grove. It was messy but at least you killed the monsters.
            You return to Lucy to report in the quest. A little annoyed that you caused some structual damage to the west gate, but she can't argue against the means if you technically completed the bounty. You earn 50 gold!`,
        hp: 0,
        gold: 50
    }]
};

const ripper = {
    id: 'ripper',
    title: 'Find and take care of this "Ripper"',
    map: {
        top: '17%',
        left: '37%'
    },
    image: '',
    description: `
        Apparently they have been people missing in the middle of the night, but knowing Angels Grove, this is quite common. The town's people are calling this entity the "Ripper." The thing is that it has been affecting the Naked Devil buisness at night.
        Lucy isn't too happy about it and she is too busy to put an offical request up for it. You believe that helping her out will not only put gold in your pocket, but will also keep more bounties coming.
        After talking to Lucy about it, you find out that rumors say that these disaperences seem to happen after midnight on a night of a new moon when it is the darkest. Lucky for you, that happens to be tonight.
        Got to make sure you have gold to eat right? I mean, help people of Angels Grove! You decide to hangout a little ways from the hub in an ally until it is after midnight. After a while of waiting, you hear a scream
        echo in the distance. After following the source of the sound, you find a shadowy figure standing over a body just staring down at it. What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'RUN AWAY!',
        result: `
            You decide that the shadowy figure is way too scary to deal with. The money is good, but it is worthless if you are dead. You take a step back and accidently kick a piece of broken glass. The sound echos 
            through the alley. The shadowy figure turns and just stares in your direction and you can't seem to see their face or any features at all. You only notice that they are carring a sickle that is usually to harvest grain,
            but is instead slicing humans and covered in blood. They take a step in your direction and slowly start walking towards you. Frozen in fear, they make their way to you. Even up close, you can't make out any features.
            It's as if you are staring into a dark abyss. You hear a snicker as the figure continues to walk past you. When you regain your senses, you decide to look back and don't see anything. The quest was unsuccessful and 
            and have nothing to report back to Lucy. You take 5 damage from the continues eerie feeling that you may have for the rest of your life. Too bad for the victim, but at least you are still alive.
        `,
        hp: -5,
        gold: 0
    }, {
        id: 'fight',
        description: 'Get ready for Battle!',
        result: `
            You decide to fight the Ripper in their element. You take out a weapon and prepare for battle. Without giving the figure a chance, you decide to charge at the shadow.
            You grab your weapon and swing towards the Ripper hoping to stop their murderous rampage once and for all. The thing is, your weapon doesn't seem to make contact with 
            them and your weapon goes through them as if you were swinging through air. Shocked that it didn't seem to damage them in the slightest, the Ripper took that oppurtunity 
            to take their attack. The next thing you know, you feel an excruciating and buring pain through your chest. With a sickle that was used for their last victim, the Mysterious 
            figure had charged it through your chest. As the fatal wound had been shapped around the sickle, it has cut through your heart and lungs in the process. In your final moments, 
            the Ripper pulls out the weapon as fast as it was thrusted through. As you collapse on the floor in a pool of your own blood, you hear laughter as the figure vanishes in the abyss.
            The same abyss that clouds your vision as your life fades with your final breath.
        `,
        hp: -50,
        gold: 0
    }, {
        id: 'light',
        description: 'Shine a light on them!',
        result: `
            You decide that the only way to fight this darkness is to first see what you are fighting. Trying not to alarm the figure, you slowly take out a lamp that you had.
            While lighting the lamp, the Ripper quickly turns toward you. Noticing that you are lighting the lamp, the figure starts to charge at you with a bloody sickle raised 
            up high and getting ready to strike. The figure doesn't make it in time when you spark the lamp up and shine the light on the mysterious entity. The briliant light of the lamp 
            shines directly on the shadow. You start to hear cries of anguish from the fiend as they stop in their tracks. Within the allyway, you see a small barrel of oil for soaking the torches in.
            You throw the lamp at the barrel of oil and an even greater flame is produced. The Ripper drops the bloody sickle and disinigrates from bathing in the light of the flames.
            With the Ripper gone, you grab the sickle to bring back as proof for the victory to Lucy. She is happy that you have taken the time to help her and rewards you with 90 gold.
            Hopefully The Naked Devil buisness can go back to normal.
        `,
        hp: 0,
        gold: 90
    }]
};

const theif = {
    id: 'theif',
    title: 'The Theif, the Merc, and the Merchant',
    map: {
        top: '31%',
        left: '5%'
    },
    image: '',
    // audio: 'treasure-chests.wav',
    // action: 'chest-opening.wav',
    description: `
        You see a post on the Bounty Board about a theif that is stealing from the merchants here in Angels Grove. You decide to take the quest, because it would be hard to get supplies if they are being stolen.
        You decide to take the quest and go check out the merchant who posted it. On your way to the the store, you find a commotion happening in front of your destination. Their are three people in front of the 
        store and you find there has been a recent murder. The one who was murdered was the merchant who made the post. The three people who are standing in front are the neighbor of the merchant, a guard, and the suspected theif.
        Apparently the guard has detained the suspected theif for the murder of the merchant. The neighbor was the one who found the merchant dead and called a guard and the suspect was someone who was near the scene of the crime
        and doesn't have a strong enough alibi. You decide that something seems off about the three, and to make a full report on the quest to Lucy, you decide to ask the three about the situation. Things aren't always as they seem 
        here in Angels Grove. You start to ask the three of them questions of their alibi, maybe there is a liar in this questionable situation.
    `,
    choices: [{
        id: 'neighbor',
        description: 'It was the neighbor!',
        result: `You decide the the neighbor alibi is a little off and accused the neighbor of the murder. It turns out you were right. Apparently, the neighbor had a reason to kill the merchant.
        The neighbor was also a rival to the merchant and was stealing from other merchants to fill their wares for buyers and to make popularity for having stock of various materials. the neighbor is booked
        and taken to the local prison. The quest was succsessful and you report back to Lucy. You are rewarded 40 gold! 
        `,
        hp: 0,
        gold: 40
    }, {
        id: 'guard',
        description: 'It was the Guard!',
        result: `Out of all the corrupted guards in Angels Grove, this guard seems to be the only righteous one. For reasons of preventing an arrest and falsly accusing the guard, they decide to detain you too. 
        You then were taken to the prison of Angels Grove. A lot of the inmates hates mercenaries because they are the reason they were taken in to the jail in the first place. Within that same night, the prisoners 
        visit you in your sleep. They grab at your arms and legs and bound you down as they take turns stabbing you with various objects. You didn't survive one day in prison and died that same day. `,
        hp: -50,
        gold: 0
    }, {
        id: 'suspect',
        description: 'It was the theif!',
        result: `You decide that it was the suspect. I mean they have already taken the time to detain them. Maybe your input isn't needed and you go on your way to report. When you make your report, Lucy is happy of the completed bounty. As soon as you were about to get the
        gold, you here that there is still a theif running around stealing from locals. It turns out that they took an innocent person to prison and that they were executed. Lucy then puts the gold away and you live with the guilt of helping to send an innocent human to their death.`,
        hp: 0,
        gold: 0
    }]
};

const bounties = [
    monsters,
    ripper,
    theif
    
];

export default bounties;