import loadProfile from '../common/load-profile.js';
import { getMercenary } from '../data/storage-data.js';
import scoreGold from './score-gold.js';
import scoreHp from './score-hp.js';
import { hpMessages, aliveGoldMessages, deadGoldMessages } from './messages.js';

loadProfile();

const mercenary = getMercenary();

const storyDisplay = document.getElementById('story-display');

const hpDusk = scoreHp(mercenary.hp);
const goldDusk = scoreGold(mercenary.gold);
const hpMessage = hpMessages[hpDusk];

let goldMessages = null;
if (hpDusk === 'dead') {
    goldMessages = deadGoldMessages;
} else {
    goldMessages = aliveGoldMessages;
}


const goldMessage = goldMessages[goldDusk];

let story = 'Throughout the night, ';
story += mercenary.name + ' the ' + mercenary.job + ', ';
story += hpMessage + ' and ' + goldMessage + '.';

storyDisplay.textContent = story;