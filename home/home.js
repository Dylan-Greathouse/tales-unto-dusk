import makeMercenary from './mercenary.js';
import { saveMercenary } from '../data/storage-data.js';

const mercenaryForm = document.getElementById('mercenary-form');


mercenaryForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // console.log('hello');
    const formData = new FormData(mercenaryForm);

    const mercenary = makeMercenary(formData);

    saveMercenary(mercenary);

    window.location = './map/map.html';
});