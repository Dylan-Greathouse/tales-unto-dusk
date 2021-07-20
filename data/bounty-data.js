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

const dragon = {
    id: 'dragon',
    title: 'A HAIRY!!! Dragon',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You run to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        gold: 15
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'A Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const bounties = {
    monsters, 
    treasure,
    dragon
};

export default bounties;