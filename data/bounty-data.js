const monsters = {
    id: 'monsters',
    title: 'Monsters in Angels Grove',
    map: {
        top: '',
        left: '',
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
        description: 'Get ready for battle',
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
        description: 'Blow them the @&*$ up',
        result:
            `As the monsters are feeding on the nearest people, you notice some barrels filled with gun powder that was stored near the gate. You find a tourch near you and chuck it to 
            the barrels. Causing a huge explosion and killing most of the monsters. The remaining fiends are terrified of the explosion and start running away from Angels grove. It was messy but at least you killed the monsters.
            You return to Lucy to report in the quest. A little annoyed that you caused some structual damage to the west gate, but she can't argue against the means if you technically completed the bounty. You earn 50 gold!`,
        hp: 0,
        gold: 50
    }]
};

const bounties = {
    monsters
};

export default bounties;