  
function finishedAllBounties(bounties, mercenary) {
    // iterate through quests
    for (let i = 0; i < bounties.length; i++) {
        const quest = bounties[i];
        // if any of the quests is incomplete
        if (!mercenary.completed[quest.id]) {
            return false;
        }
    }

    // if all of the quests are complete, we get this far and return true
    return true;
}

export default finishedAllBounties;