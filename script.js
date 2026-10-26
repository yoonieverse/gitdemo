
// ============================================================
// GITHUB ANIMAL WORKSHOP
// Each team writes ONE function that returns an image URL.
// You will only need to uncomment the fetch code due to time constraints.

// Find your team's section below and fill in your function.
//   Team 1: dog     Team 2: cat     Team 3: monkey
//   Team 4: fish    Team 5: bird
// ============================================================

const buttons = document.querySelectorAll('.button');

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
    throw new Error('Team1 has not implemented yet!');

    // const response = await fetch('https://dog.ceo/api/breeds/image/random');
    // if (!response.ok) {
    //     throw new Error(`HTTP Error! Status: ${response.status}`);
    // }
    // const data = await response.json();
    // return data.message;
}

// ===== Team 2: cat =====
async function getTeam2Image() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
    if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data[0].url;
}

// ===== Team 3: monkey =====
async function getTeam3Image() {
     const pages = ['Capuchin_monkey', 'Mandrill', 'Japanese_macaque', 'Howler_monkey', 'Squirrel_monkey'];
    const page = pages[Math.floor(Math.random() * pages.length)];
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${page}`);
    if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.thumbnail.source;
}

// ===== Team 4: fish =====
async function getTeam4Image() {
    const pages = ['Clownfish', 'Goldfish', 'Seahorse', 'Pufferfish'];
    const page = pages[Math.floor(Math.random() * pages.length)];
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${page}`);
    if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.thumbnail.source;
}

// ===== Team 5: bird =====
async function getTeam5Image() {
    const pages = ['Atlantic_puffin', 'Flamingo', 'Blue_jay', 'Bald_eagle', 'Scarlet_macaw', 'Kingfisher'];
    const page = pages[Math.floor(Math.random() * pages.length)];
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${page}`);
    if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.thumbnail.source;
}
