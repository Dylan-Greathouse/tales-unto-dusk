import loadProfile from '../common/load-profile';
import { getMercenary, saveMercenary } from '../data/storage-data';
import bounties from '../data/bounty-data';
import findById from '../common/find-by-id';
import createChoice from './create-choice';
import scoreBounty from './score-bounty';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);

const bountyId = searchParams.get('id');

const bounty = findById(bounties, bountyId);

if(!bounty) {
    window.location = '../map';
}


const title = document.getElementById('title');
const image = document.getElementById('image');
const audio = document.getElementById('audio');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const dusk = document.getElementById('dusk');
const duskDescription = document.getElementById('dusk-description');


// bounty that fill in the dom
title.textContent = bounty.title;


description.textContent = quest.description;




// each bounty choice
for (let i = 0; i < bounty.choices.length; i++) {
    const choice = bounty.choices[i];
    const choiceDOM = createChoice(choice);

    choices.appendChild(choiceDOM);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);

    const choiceId = formData.get('choice');

    const choice = findById(bounty.choices, choiceId);
    
    const mercenary = getMercenary();
    
    scoreBounty(choice, bounty.id, mercenary);
    saveMercenary(mercenary);

// audio
// audio goes here

    choiceForm.classList.add('hidden');
    dusk.classList.remove('hidden');
    duskDescription.textContent = choice.result;
    loadProfile();
});