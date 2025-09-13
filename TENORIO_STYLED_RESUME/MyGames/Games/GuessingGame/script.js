const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const locked = document.getElementById('locked');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');

const done = new Image();
const two = new Image();
const three = new Image();
const four = new Image();
const five = new Image();
const six = new Image();
const seven = new Image();
const eight = new Image();
const nine = new Image();
const ten = new Image();
done.src = 'done.png';
two.src = 'two.png';
three.src = 'three.png';
four.src = 'four.png';
five.src = 'five.png';
six.src = 'six.png';
seven.src = 'seven.png';
eight.src = 'eight.png';
nine.src = 'nine.png';
ten.src = 'ten.png';

let levelOneFinished = false;
let levelTwoFinished = false;
let levelThreeFinished = false;
let levelFourFinished = false;
let levelFiveFinished = false;
let levelSixFinished = false;
let levelSevenFinished = false;
let levelEightFinished = false;
let levelNineFinished = false;
let levelTenFinished = false;

let guess;
let wrongAttempt = document.getElementById('attempt');
let attempt = localStorage.getItem('attemptsLevel') || 0;
wrongAttempt.innerHTML = attempt;

function levelOne() {
    window.location.href='levelone.html';
}
function levelTwo() {
    if (localStorage.getItem('levelOneFinished') === 'true') {
        window.location.href = 'leveltwo.html';
    }
    else {
        locked.style.opacity = '100';
        setTimeout(() => {
            locked.style.opacity = '0';
        }, 1500);
    }
}
function levelThree() {
    if (localStorage.getItem('levelTwoFinished') === 'true') {
        window.location.href = 'levelthree.html';
    }
    else {
        locked.style.opacity = '100';
        setTimeout(() => {
            locked.style.opacity = '0';
        }, 1500);
    }
}
function levelFour() {
    if (localStorage.getItem('levelThreeFinished') === 'true') {
        window.location.href = 'levelfour.html';
    }
    else {
        locked.style.opacity = '100';
        setTimeout(() => {
            locked.style.opacity = '0';
        }, 1500);
    }
}
function levelFive() {
    if (localStorage.getItem('levelFourFinished') === 'true') {
        window.location.href = 'levelfive.html';
    }
    else {
        locked.style.opacity = '100';
        setTimeout(() => {
            locked.style.opacity = '0';
        }, 1500);
    }
}
function levelSix() {
    if (localStorage.getItem('levelFiveFinished') === 'true') {
        window.location.href = 'levelsix.html';
    }
    else {
        locked.style.opacity = '100';
        setTimeout(() => {
            locked.style.opacity = '0';
        }, 1500);
    }
}
function levelSeven() {
    if (localStorage.getItem('levelSixFinished') === 'true') {
        window.location.href = 'levelseven.html';
    }
    else {
        locked.style.opacity = '100';
        setTimeout(() => {
            locked.style.opacity = '0';
        }, 1500);
    }
}
function levelEight() {
    if (localStorage.getItem('levelSevenFinished') === 'true') {
        window.location.href = 'leveleight.html';
    }
    else {
        locked.style.opacity = '100';
        setTimeout(() => {
            locked.style.opacity = '0';
        }, 1500);
    }
}
function levelNine() {
    if (localStorage.getItem('levelEightFinished') === 'true') {
        window.location.href = 'levelnine.html';
    }
    else {
        locked.style.opacity = '100';
        setTimeout(() => {
            locked.style.opacity = '0';
        }, 1500);
    }
}
function levelTen() {
    if (localStorage.getItem('levelNineFinished') === 'true') {
        window.location.href = 'levelten.html';
    }
    else {
        locked.style.opacity = '100';
        setTimeout(() => {
            locked.style.opacity = '0';
        }, 1500);
    }
}

function guessOne() {
    guess = document.getElementById('guess').value;
    if (guess === 'IRONMAN') {
        localStorage.setItem('levelOneFinished', 'true');
        localStorage.setItem('attemptsLevel', attempt);
        correct.style.opacity = '100';
        setTimeout(() => {
            correct.style.opacity = '0';
            window.location.href = 'guess.html';
        }, 1000);
    } else {
        attempt++;
        localStorage.setItem('attemptsLevel', attempt);
        wrongAttempt.innerHTML = attempt;
        wrong.style.opacity = '100';
        setTimeout(() => {
            wrong.style.opacity = '0';
        }, 800);
    }
}
function guessTwo() {
    guess = document.getElementById('guess').value;
    if (guess === 'SPIDERMAN') {
        localStorage.setItem('levelTwoFinished', 'true');
        localStorage.setItem('attemptsLevel', attempt);
        correct.style.opacity = '100';
        setTimeout(() => {
            correct.style.opacity = '0';
            window.location.href = 'guess.html';
        }, 1000);
    } else {
        attempt++;
        localStorage.setItem('attemptsLevel', attempt);
        wrongAttempt.innerHTML = attempt;
        wrong.style.opacity = '100';
        setTimeout(() => {
            wrong.style.opacity = '0';
        }, 800);
    }
}
function guessThree() {
    guess = document.getElementById('guess').value;
    if (guess === 'BLACKPANTHER') {
        localStorage.setItem('levelThreeFinished', 'true');
        localStorage.setItem('attemptsLevel', attempt);
        correct.style.opacity = '100';
        setTimeout(() => {
            correct.style.opacity = '0';
            window.location.href = 'guess.html';
        }, 1000);
    } else {
        attempt++;
        localStorage.setItem('attemptsLevel', attempt);
        wrongAttempt.innerHTML = attempt;
        wrong.style.opacity = '100';
        setTimeout(() => {
            wrong.style.opacity = '0';
        }, 800);
    }
}
function guessFour() {
    guess = document.getElementById('guess').value;
    if (guess === 'DOCTORSTRANGE') {
        localStorage.setItem('levelFourFinished', 'true');
        localStorage.setItem('attemptsLevel', attempt);
        correct.style.opacity = '100';
        setTimeout(() => {
            correct.style.opacity = '0';
            window.location.href = 'guess.html';
        }, 1000);
    } else {
        attempt++;
        localStorage.setItem('attemptsLevel', attempt);
        wrongAttempt.innerHTML = attempt;
        wrong.style.opacity = '100';
        setTimeout(() => {
            wrong.style.opacity = '0';
        }, 800);
    }
}
function guessFive() {
    guess = document.getElementById('guess').value;
    if (guess === 'VISION') {
        localStorage.setItem('levelFiveFinished', 'true');
        localStorage.setItem('attemptsLevel', attempt);
        correct.style.opacity = '100';
        setTimeout(() => {
            correct.style.opacity = '0';
            window.location.href = 'guess.html';
        }, 1000);
    } else {
        attempt++;
        localStorage.setItem('attemptsLevel', attempt);
        wrongAttempt.innerHTML = attempt;
        wrong.style.opacity = '100';
        setTimeout(() => {
            wrong.style.opacity = '0';
        }, 800);
    }
}
function guessSix() {
    guess = document.getElementById('guess').value;
    if (guess === 'WOLVERINE') {
        localStorage.setItem('levelSixFinished', 'true');
        localStorage.setItem('attemptsLevel', attempt);
        correct.style.opacity = '100';
        setTimeout(() => {
            correct.style.opacity = '0';
            window.location.href = 'guess.html';
        }, 1000);
    } else {
        attempt++;
        localStorage.setItem('attemptsLevel', attempt);
        wrongAttempt.innerHTML = attempt;
        wrong.style.opacity = '100';
        setTimeout(() => {
            wrong.style.opacity = '0';
        }, 800);
    }
}
function guessSeven() {
    guess = document.getElementById('guess').value;
    if (guess === 'BLACKWIDOW') {
        localStorage.setItem('levelSevenFinished', 'true');
        localStorage.setItem('attemptsLevel', attempt);
        correct.style.opacity = '100';
        setTimeout(() => {
            correct.style.opacity = '0';
            window.location.href = 'guess.html';
        }, 1000);
    } else {
        attempt++;
        localStorage.setItem('attemptsLevel', attempt);
        wrongAttempt.innerHTML = attempt;
        wrong.style.opacity = '100';
        setTimeout(() => {
            wrong.style.opacity = '0';
        }, 800);
    }
}
function guessEight() {
    guess = document.getElementById('guess').value;
    if (guess === 'STARLORD') {
        localStorage.setItem('levelEightFinished', 'true');
        localStorage.setItem('attemptsLevel', attempt);
        correct.style.opacity = '100';
        setTimeout(() => {
            correct.style.opacity = '0';
            window.location.href = 'guess.html';
        }, 1000);
    } else {
        attempt++;
        localStorage.setItem('attemptsLevel', attempt);
        wrongAttempt.innerHTML = attempt;
        wrong.style.opacity = '100';
        setTimeout(() => {
            wrong.style.opacity = '0';
        }, 800);
    }
}
function guessNine() {
    guess = document.getElementById('guess').value;
    if (guess === 'WINTERSOLDIER') {
        localStorage.setItem('levelNineFinished', 'true');
        localStorage.setItem('attemptsLevel', attempt);
        correct.style.opacity = '100';
        setTimeout(() => {
            correct.style.opacity = '0';
            window.location.href = 'guess.html';
        }, 1000);
    } else {
        attempt++;
        localStorage.setItem('attemptsLevel', attempt);
        wrongAttempt.innerHTML = attempt;
        wrong.style.opacity = '100';
        setTimeout(() => {
            wrong.style.opacity = '0';
        }, 800);
    }
}
function guessTen() {
    guess = document.getElementById('guess').value;
    if (guess === 'FRIDAY') {
        localStorage.setItem('levelTenFinished', 'true');
        localStorage.setItem('attemptsLevel', attempt);
        correct.style.opacity = '100';
        setTimeout(() => {
            correct.style.opacity = '0';
            window.location.href = 'guess.html';
        }, 1000);
    } else {
        attempt++;
        localStorage.setItem('attemptsLevel', attempt);
        wrongAttempt.innerHTML = attempt;
        wrong.style.opacity = '100';
        setTimeout(() => {
            wrong.style.opacity = '0';
        }, 800);
    }
}

levelOneFinished = localStorage.getItem('levelOneFinished') === 'true';
levelTwoFinished = localStorage.getItem('levelTwoFinished') === 'true';
levelThreeFinished = localStorage.getItem('levelThreeFinished') === 'true';
levelFourFinished = localStorage.getItem('levelFourFinished') === 'true';
levelFiveFinished = localStorage.getItem('levelFiveFinished') === 'true';
levelSixFinished = localStorage.getItem('levelSixFinished') === 'true';
levelSevenFinished = localStorage.getItem('levelSevenFinished') === 'true';
levelEightFinished = localStorage.getItem('levelEightFinished') === 'true';
levelNineFinished = localStorage.getItem('levelNineFinished') === 'true';
levelTenFinished = localStorage.getItem('levelTenFinished') === 'true';
function updateLevelProgress() {
    if (levelOneFinished) img1.src = done.src;
    if (levelTwoFinished) img2.src = done.src;
    if (levelThreeFinished) img3.src = done.src;
    if (levelFourFinished) img4.src = done.src;
    if (levelFiveFinished) img5.src = done.src;
    if (levelSixFinished) img6.src = done.src;
    if (levelSevenFinished) img7.src = done.src;
    if (levelEightFinished) img8.src = done.src;
    if (levelNineFinished) img9.src = done.src;
    if (levelTenFinished) img10.src = done.src;
    
    if (levelOneFinished && !levelTwoFinished) img2.src = two.src;
    if (levelTwoFinished && !levelThreeFinished) img3.src = three.src;
    if (levelThreeFinished && !levelFourFinished) img4.src = four.src;
    if (levelFourFinished && !levelFiveFinished) img5.src = five.src;
    if (levelFiveFinished && !levelSixFinished) img6.src = six.src;
    if (levelSixFinished && !levelSevenFinished) img7.src = seven.src;
    if (levelSevenFinished && !levelEightFinished) img8.src = eight.src;
    if (levelEightFinished && !levelNineFinished) img9.src = nine.src;
    if (levelNineFinished && !levelTenFinished) img10.src = ten.src;
}
updateLevelProgress();



function resetGame() {
    levelOneFinished = false;
    levelTwoFinished = false;
    levelThreeFinished = false;
    levelFourFinished = false;
    levelFiveFinished = false;
    levelSixFinished = false;
    levelSevenFinished = false;
    levelEightFinished = false;
    levelNineFinished = false;
    levelTenFinished = false;
    
    localStorage.clear();
    attempt = 0;
    wrongAttempt.innerHTML = attempt;
    window.location.reload();
}

if (levelTenFinished) {
    const totalAttempts = localStorage.getItem('attemptsLevel') || 0;
    const totalAttempt = document.getElementById('totalAttempt');
    totalAttempt.innerHTML = totalAttempts;
    document.getElementById('complete').classList.add('animate');
    document.getElementById('complete').style.zIndex = '9';
}