import { getMercenary } from '../data/storage-data.js';
import died from './died.js';

function loadProfile() {
    const name = document.getElementById('name');
    const job = document.getElementById('job');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    const mercenary = getMercenary();

    if (!mercenary) {
        window.location = './';
    }

    name.textContent = mercenary.name;
    job.src = '../assets/avatar/' + mercenary.job + '.png';
    gold.textContent = mercenary.gold;

    if (died(mercenary)) {
        hp.textContent = 'GAME OVER';
    } else {
        hp.textContent = mercenary.hp;
    }
}

export default loadProfile;