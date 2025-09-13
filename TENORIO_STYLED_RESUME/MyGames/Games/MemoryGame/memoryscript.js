document.addEventListener('DOMContentLoaded', function () {
    const instructions = document.getElementById('instructions');
    if (instructions) {
        instructions.style.display = "none";
    }

    document.getElementById('easyDifficulty')?.addEventListener('click', () => {
        GameConfig.setDifficulty('easy');
        console.log(GameConfig);
        
        const makeDiff = document.getElementById('showdiff');
        makeDiff.innerHTML = GameConfig.difficulty;
        makeDiff.style.cssText = `
            color: green !important;
            -webkit-text-fill-color: green !important;
            background: none !important;
            background-clip: initial !important;
            text-transform: uppercase;
        `;
    });

    document.getElementById('mediumDifficulty')?.addEventListener('click', () => {
        GameConfig.setDifficulty('medium');
        console.log(GameConfig);
        
        const makeDiff = document.getElementById('showdiff');
        makeDiff.innerHTML = GameConfig.difficulty;
        makeDiff.style.cssText = `
            color: orange !important;
            -webkit-text-fill-color: orange !important;
            background: none !important;
            background-clip: initial !important;
            text-transform: uppercase;
        `;
    });

    document.getElementById('hardDifficulty')?.addEventListener('click', () => {
        GameConfig.setDifficulty('hard');
        console.log(GameConfig);
        
        const makeDiff = document.getElementById('showdiff');
        makeDiff.innerHTML = GameConfig.difficulty;
        makeDiff.style.cssText = `
            color: red !important;
            -webkit-text-fill-color: red !important;
            background: none !important;
            background-clip: initial !important;
            text-transform: uppercase;
        `;
    });

    document.addEventListener('mousedown', function (e) {
        if (e.button === 0) {
            e.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('dblclick', function (e) {
        e.preventDefault();
    });
});

function showInstructions() {
    if (instructions.style.display == "none") {
        instructions.style.display = "block";
    }
    else {
        instructions.style.display = "none";
    }
}

window.GameConfig = {
    difficulty: 'none',
    setDifficulty: function (level) {
        this.difficulty = level;
        localStorage.setItem('gameDifficulty', level);
    },
    getDifficulty: function () {
        return localStorage.getItem('gameDifficulty') || this.difficulty;
    }
};

window.houseChosen = {
    house: 'none',
    setHouse: function (house) {
        this.houseChosen = house;
        localStorage.setItem('houseChosen', house);
    },
    getHouse: function () {
        return localStorage.getItem('houseChosen') || this.house;
    }
};

const gryAudio = new Audio('gryffindor.mp3');
const hufAudio = new Audio('hufflepuff.mp3');
const ravAudio = new Audio('ravenclaw.mp3');
const sliAudio = new Audio('slytherin.mp3');

function playerGryffindor() {
    houseChosen.setHouse('gryffindor');
    const showHouse = document.getElementById('showhouse'); 
    showHouse.innerHTML = 'Gryffindor';
    showHouse.style.cssText = `
            color: #EEBA30 !important;
            -webkit-text-fill-color: #EEBA30 !important;
            background: none !important;
            background-clip: initial !important;
            text-transform: uppercase;
            text-shadow: 6px 6px 2px #AE0001;
        `;
    gryAudio.play();
    toggleStart()
}
function playerHufflepuff() {
    houseChosen.setHouse('hufflepuff');
    const showHouse = document.getElementById('showhouse'); 
    showHouse.innerHTML = 'Hufflepuff';
    showHouse.style.cssText = `
            color: #E6B800 !important;
            -webkit-text-fill-color: #E6B800 !important;
            background: none !important;
            background-clip: initial !important;
            text-transform: uppercase;
            text-shadow: 6px 6px 2px #01030a;
        `;
    hufAudio.play();
    toggleStart()
}
function playerRavenclaw() {
    houseChosen.setHouse('ravenclaw');
    const showHouse = document.getElementById('showhouse'); 
    showHouse.innerHTML = 'Ravenclaw';
    showHouse.style.cssText = `
            color: #5D5D5D !important;
            -webkit-text-fill-color: #5D5D5D !important;
            background: none !important;
            background-clip: initial !important;
            text-transform: uppercase;
            text-shadow: 5px 5px 2px #0E1A40;
        `;
    ravAudio.play();
    toggleStart()
}
function playerSlytherin() {
    houseChosen.setHouse('slytherin');
    const showHouse = document.getElementById('showhouse'); 
    showHouse.innerHTML = 'Slytherin';
    showHouse.style.cssText = `
            color: #31aa5c !important;
            -webkit-text-fill-color: #31aa5c !important;
            background: none !important;
            background-clip: initial !important;
            text-transform: uppercase;
            text-shadow: 4px 4px 2px #0000009f;
        `;
    sliAudio.play();
    toggleStart()
}

const error = document.getElementById('errorpopup');
const confirm = document.getElementById('confirmbox');
const overlay = document.getElementById('modalOverlay');
confirm.style.display = 'none';

function toggleStart() {
    const haveDifficulty = window.GameConfig.getDifficulty();
    if (haveDifficulty !== 'undefined') {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        confirm.style.display = 'block';
    }
    if (haveDifficulty === 'undefined') {
        error.style.transition = '0.3s ease';
        error.style.opacity = '1';
        setTimeout(function () {
            error.style.opacity = '0';
        }, 1000);
    }
}

function back() {
    confirm.style.display = 'none';
    overlay.style.display = 'none';
}

function startGame() {
    const difficulty = window.GameConfig.getDifficulty();
    const house = window.houseChosen.getHouse();
    console.log(difficulty);
    if (difficulty !== 'undefined') {
        window.location.href = "game.html";
    }
}
