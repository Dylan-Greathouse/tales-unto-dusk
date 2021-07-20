
function scoreBounty(choice, mercenaryId, mercenary) {
    // add hp to user according to the choice's consequences
    mercenary.hp += choice.hp;
    // add gold to the user according to the choices consqencuewbnf
    mercenary.gold += choice.gold;
    // set this quest id to completed in the mercenary
    mercenary.completed[mercenaryId] = true;
}

export default scoreBounty;