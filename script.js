// ============================================================
// ANIMAL BUTTONS WORKSHOP
// Each team writes ONE function that returns an image URL.
// Find your team's section below and fill in your function.
//   Team 1: dog     Team 2: cat     Team 3: monkey
//   Team 4: fish    Team 5: bird
// ============================================================

const buttons = document.querySelectorAll('.dog-button');

// Which function loads the image for which team
const imageFetchers = {
    team1: getTeam1Image,
    team2: getTeam2Image,
    team3: getTeam3Image,
    team4: getTeam4Image,
    team5: getTeam5Image,
};

buttons.forEach((btn) => {
    btn.addEventListener('click', () => showAnimal(btn.dataset.team));
});

// Calls the team's function and puts the picture in the team's slot
async function showAnimal(teamId) {
    const slot = document.getElementById(`slot-${teamId}`);
    slot.textContent = 'Loading...';

    try {
        const imageUrl = await imageFetchers[teamId]();
        slot.innerHTML = `<img src="${imageUrl}" alt="Animal for ${teamId}">`;
    } catch (error) {
        console.log(error);
        slot.innerHTML = `<p>${error.message}</p>`;
    }
}

// ===== Team 1: dog =====
async function getTeam1Image() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.message;
}

// ===== Team 2: cat =====
async function getTeam2Image() {
    throw new Error('Team 2 has not built this yet.');
}

// ===== Team 3: monkey =====
async function getTeam3Image() {
    throw new Error('Team 3 has not built this yet.');
}

// ===== Team 4: fish =====
async function getTeam4Image() {
    throw new Error('Team 4 has not built this yet.');
}

// ===== Team 5: bird =====
async function getTeam5Image() {
    throw new Error('Team 5 has not built this yet.');
}
