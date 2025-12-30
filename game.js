// Alphabet Race Game for Juniper!

// Game State
const game = {
    running: false,
    finished: false,
    currentLetterIndex: 0,
    racerPositions: [0, 0, 0, 0, 0],
    finishLinePosition: 2600, // 26 letters * 100 pixels per letter
    winner: null
};

// Alphabet data with themed backgrounds
const alphabet = [
    { letter: 'A', word: 'Apples', emoji: '🍎', count: 8 },
    { letter: 'B', word: 'Bumblebees', emoji: '🐝', count: 10 },
    { letter: 'C', word: 'Cookies', emoji: '🍪', count: 7 },
    { letter: 'D', word: 'Dogs', emoji: '🐕', count: 6 },
    { letter: 'E', word: 'Elephants', emoji: '🐘', count: 5 },
    { letter: 'F', word: 'Flowers', emoji: '🌸', count: 9 },
    { letter: 'G', word: 'Grapes', emoji: '🍇', count: 8 },
    { letter: 'H', word: 'Hearts', emoji: '❤️', count: 10 },
    { letter: 'I', word: 'Ice Cream', emoji: '🍦', count: 6 },
    { letter: 'J', word: 'Jellybeans', emoji: '🫘', count: 12 },
    { letter: 'K', word: 'Kites', emoji: '🪁', count: 5 },
    { letter: 'L', word: 'Lions', emoji: '🦁', count: 4 },
    { letter: 'M', word: 'Moons', emoji: '🌙', count: 7 },
    { letter: 'N', word: 'Nuts', emoji: '🥜', count: 10 },
    { letter: 'O', word: 'Oranges', emoji: '🍊', count: 8 },
    { letter: 'P', word: 'Pandas', emoji: '🐼', count: 6 },
    { letter: 'Q', word: 'Queens', emoji: '👑', count: 5 },
    { letter: 'R', word: 'Rainbows', emoji: '🌈', count: 4 },
    { letter: 'S', word: 'Stars', emoji: '⭐', count: 15 },
    { letter: 'T', word: 'Trees', emoji: '🌳', count: 7 },
    { letter: 'U', word: 'Umbrellas', emoji: '☂️', count: 6 },
    { letter: 'V', word: 'Violets', emoji: '💜', count: 9 },
    { letter: 'W', word: 'Watermelons', emoji: '🍉', count: 6 },
    { letter: 'X', word: 'Xylophones', emoji: '🎵', count: 5 },
    { letter: 'Y', word: 'Yo-yos', emoji: '🪀', count: 8 },
    { letter: 'Z', word: 'Zebras', emoji: '🦓', count: 5 }
];

// DOM Elements
const letterDisplay = document.getElementById('current-letter');
const letterWord = document.getElementById('letter-word');
const backgroundScene = document.getElementById('background-scene');
const racers = document.querySelectorAll('.racer');
const finishLine = document.getElementById('finish-line');
const instructions = document.getElementById('instructions');
const winnerDisplay = document.getElementById('winner-display');
const winnerText = document.getElementById('winner-text');
const replayButton = document.getElementById('replay-button');

// Initialize the game
function init() {
    updateLetterDisplay();
    updateBackgroundScene();
    setupControls();
    positionFinishLine();
}

// Update letter display
function updateLetterDisplay() {
    const current = alphabet[game.currentLetterIndex];
    letterDisplay.textContent = current.letter;
    letterWord.textContent = current.word;

    // Trigger animation
    letterDisplay.style.animation = 'none';
    setTimeout(() => {
        letterDisplay.style.animation = 'letterBounce 0.5s ease';
    }, 10);
}

// Update background scene with themed emojis
function updateBackgroundScene() {
    const current = alphabet[game.currentLetterIndex];
    let sceneHTML = '';

    for (let i = 0; i < current.count; i++) {
        sceneHTML += `<span style="opacity: ${0.6 + Math.random() * 0.4}">${current.emoji}</span>`;
    }

    backgroundScene.innerHTML = sceneHTML;
}

// Announce letter using text-to-speech
function announceLetter() {
    if ('speechSynthesis' in window) {
        const current = alphabet[game.currentLetterIndex];
        const utterance = new SpeechSynthesisUtterance(`${current.letter}. ${current.word}`);
        utterance.rate = 0.9;
        utterance.pitch = 1.2;
        utterance.volume = 1.0;

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        // Speak after a tiny delay
        setTimeout(() => {
            window.speechSynthesis.speak(utterance);
        }, 100);
    }
}

// Position finish line
function positionFinishLine() {
    finishLine.style.right = '-200px';
    finishLine.classList.remove('visible');
}

// Move racers forward
function moveRacers() {
    if (game.finished) return;

    let maxPosition = 0;

    racers.forEach((racer, index) => {
        // Random movement: each racer moves a random amount (1-8 pixels)
        const movement = Math.random() * 7 + 1;
        game.racerPositions[index] += movement;

        // Keep track of the leader
        if (game.racerPositions[index] > maxPosition) {
            maxPosition = game.racerPositions[index];
        }

        // Update racer position
        racer.style.left = (50 + game.racerPositions[index]) + 'px';

        // Check if this racer won
        if (game.racerPositions[index] >= game.finishLinePosition && !game.finished) {
            game.finished = true;
            game.winner = index;
            endRace(racer);
        }
    });

    // Update letter based on progress
    const letterProgress = Math.floor(maxPosition / 100);
    if (letterProgress !== game.currentLetterIndex && letterProgress < alphabet.length) {
        game.currentLetterIndex = letterProgress;
        updateLetterDisplay();
        updateBackgroundScene();
        announceLetter();
    }

    // Show finish line when getting close
    if (maxPosition >= game.finishLinePosition - 300) {
        finishLine.classList.add('visible');
    }
}

// End the race
function endRace(winningRacer) {
    game.running = false;

    // Play applause sound (using speech synthesis as backup)
    setTimeout(() => {
        if ('speechSynthesis' in window) {
            const applause = new SpeechSynthesisUtterance('Yay! Applause! Woohoo!');
            applause.rate = 1.2;
            applause.pitch = 1.3;
            window.speechSynthesis.speak(applause);
        }
    }, 500);

    // Show winner
    setTimeout(() => {
        const winnerName = winningRacer.dataset.name;
        winnerText.textContent = `🏆 ${winnerName} WINS! 🎉`;
        winnerDisplay.classList.remove('hidden');
        instructions.style.display = 'none';
    }, 1000);
}

// Reset the game
function resetGame() {
    game.running = false;
    game.finished = false;
    game.currentLetterIndex = 0;
    game.racerPositions = [0, 0, 0, 0, 0];
    game.winner = null;

    // Reset racer positions
    racers.forEach(racer => {
        racer.style.left = '50px';
    });

    // Reset displays
    updateLetterDisplay();
    updateBackgroundScene();
    positionFinishLine();
    winnerDisplay.classList.add('hidden');
    instructions.style.display = 'block';

    // Cancel any speech
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}

// Game loop
let gameLoopInterval = null;

function startGameLoop() {
    if (!game.running && !game.finished) {
        game.running = true;

        // Announce first letter
        if (game.currentLetterIndex === 0) {
            announceLetter();
        }
    }
}

function stopGameLoop() {
    game.running = false;
}

// Main game loop (runs continuously)
setInterval(() => {
    if (game.running) {
        moveRacers();
    }
}, 50); // 20 FPS

// Setup controls
function setupControls() {
    // Keyboard controls
    let spacePressed = false;

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !spacePressed) {
            e.preventDefault();
            spacePressed = true;
            startGameLoop();
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            spacePressed = false;
            stopGameLoop();
        }
    });

    // Touch/Mouse controls (for mobile)
    let touching = false;

    const startTouch = (e) => {
        e.preventDefault();
        if (!touching) {
            touching = true;
            startGameLoop();
        }
    };

    const endTouch = (e) => {
        e.preventDefault();
        touching = false;
        stopGameLoop();
    };

    document.addEventListener('touchstart', startTouch, { passive: false });
    document.addEventListener('touchend', endTouch, { passive: false });
    document.addEventListener('mousedown', startTouch);
    document.addEventListener('mouseup', endTouch);

    // Replay button
    replayButton.addEventListener('click', (e) => {
        e.stopPropagation();
        resetGame();
    });

    replayButton.addEventListener('touchstart', (e) => {
        e.stopPropagation();
    });
}

// Start the game!
init();

// Welcome message
setTimeout(() => {
    if ('speechSynthesis' in window) {
        const welcome = new SpeechSynthesisUtterance('Welcome to Alphabet Race! Press space or tap to start!');
        welcome.rate = 1.0;
        welcome.pitch = 1.2;
        window.speechSynthesis.speak(welcome);
    }
}, 500);
