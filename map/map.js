// import the quest data
import quests from '../data/quest-data';

const questList = document.getElementById('quest-list');

for(let quest of quests) {
    const href = `../quest/?questId=${quest.id}`;

    const questLink = document.createElement('a');

    questLink.href = questHref;
    questLink.textContent = quest.title;

    questList.appendChild(questLink);
}
// generate an anchor tag for each test
// use the quest's ID as the query parameter
//