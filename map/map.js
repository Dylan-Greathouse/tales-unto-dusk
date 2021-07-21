// import the quest data
import bounties from '../data/bounty-data.js';
import { getMercenary } from '../data/storage-data.js';
import died from '../common/died.js';
import loadProfile from '../common/load-profile.js';
import bountyLink from './bounty-link.js';
import completedBounty from './completed-bounty.js';
import finishedAllBounties from './finished-all-bounties.js';

loadProfile();

const mercenary = getMercenary();

if (died(mercenary) || finishedAllBounties(bounties, mercenary)) {
    window.location = '../dusk/';
}

const nav = document.getElementById('bounties');

for (let bounty of bounties){
    let bountyDisplay = null;

    // console.log(bounty.id);
    const theMercenaryHasCompletedThisBounty = mercenary.completed[bounty.id];

    if (theMercenaryHasCompletedThisBounty) {
        bountyDisplay = completedBounty(bounty);
    } else {
        bountyDisplay = bountyLink(bounty);
    }
    nav.appendChild(bountyDisplay);
}


// generate an anchor tag for each test
// use the quest's ID as the query parameter
//