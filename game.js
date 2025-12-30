// Game State
const gameState = {
    board: Array(9).fill(null),
    currentPlayer: 'X',
    players: {
        X: 'Player X',
        O: 'Player O'
    },
    gameMode: 'normal', // 'normal' or 'ninja'
    gameStatus: 'IN_PROGRESS', // 'IN_PROGRESS', 'WIN', 'LOSS', 'DRAW'
    winner: null,
    loser: null,
    playType: 'friend', // 'friend' or 'bot'
    botDifficulty: 'medium',
    playerSymbol: 'X',
    scores: {
        X: 0,
        O: 0
    },
    soundEnabled: true,
    highContrast: false,
    themeColor: 'indigo', // Default theme
    showAuthor: false // Hide author by default
};

// Winning combinations
const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// Quirky win messages (50+)
const QUIRKY_WIN_MESSAGES = [
    "Victory achieved! 🎉",
    "You're a champion! 🏆",
    "Dominance displayed! 💪",
    "Outstanding performance! ⭐",
    "You crushed it! 🔥",
    "Pure excellence! ✨",
    "Masterful play! 🎯",
    "You're unstoppable! 🚀",
    "Brilliant strategy! 🧠",
    "Flawless victory! 💎",
    "You're on fire! 🔥",
    "Perfect execution! ✅",
    "You're a legend! 👑",
    "Incredible skills! 🎨",
    "You're amazing! 🌟",
    "Outstanding move! 🎪",
    "You're a pro! 🎮",
    "Spectacular win! 🎊",
    "You're the best! 🥇",
    "Mind-blowing play! 🧨",
    "You're incredible! 💫",
    "Perfect timing! ⏰",
    "You're a genius! 🎓",
    "Epic victory! 🏅",
    "You're unstoppable! ⚡",
    "Brilliant mind! 🧠",
    "You're a star! ⭐",
    "Outstanding! 🌈",
    "You're phenomenal! 🌠",
    "Perfect strategy! 🎲",
    "You're a master! 🎭",
    "Incredible win! 🎪",
    "You're awesome! 🌟",
    "Flawless play! 💯",
    "You're a hero! 🦸",
    "Amazing skills! 🎯",
    "You're the champ! 🏆",
    "Brilliant victory! ✨",
    "You're a wizard! 🧙",
    "Perfect game! 🎮",
    "You're a ninja! 🥷",
    "Outstanding win! 🎉",
    "You're a legend! 👑",
    "Incredible play! 🎨",
    "You're a star! ⭐",
    "Epic skills! 🚀",
    "You're amazing! 💎",
    "Perfect execution! ✅",
    "You're the best! 🥇",
    "Brilliant mind! 🧠",
    "You're unstoppable! 🔥"
];

// Quirky loss messages (50+)
const QUIRKY_LOSS_MESSAGES = [
    "Oops... you played yourself 😆",
    "Strategic disaster detected 🚨",
    "That's one way to lose 😜",
    "Mission failed successfully! 🎯",
    "Well, that backfired! 💥",
    "Ninja mode strikes back! 🥷",
    "You just ninja'd yourself! 😂",
    "Better luck next time! 🍀",
    "That was... interesting 🤔",
    "Oops, wrong move! 😅",
    "Not your best moment! 😬",
    "That didn't go as planned! 📋",
    "You tried! 💪",
    "Close, but no cigar! 🚬",
    "Almost had it! 🎯",
    "Nice try though! 👍",
    "That's a bold strategy! 🎲",
    "You'll get 'em next time! ⏭️",
    "That's one for the books! 📚",
    "Well, that happened! 🤷",
    "You gave it your all! 💯",
    "That's a learning moment! 📖",
    "Not quite there yet! 🎯",
    "You'll bounce back! 🏀",
    "That's the spirit! 👻",
    "You're getting closer! 📍",
    "Keep practicing! 🏋️",
    "That was a valiant effort! ⚔️",
    "You're on the right track! 🛤️",
    "That's how you learn! 🎓",
    "You'll improve! 📈",
    "That's okay, try again! 🔄",
    "You're making progress! 📊",
    "That's part of the game! 🎮",
    "You're still awesome! 🌟",
    "That's a good attempt! ✅",
    "You'll do better next time! 🔮",
    "That's how champions learn! 🏆",
    "You're persistent! 🔁",
    "That's admirable! 👏",
    "You're resilient! 💪",
    "That's the attitude! 😊",
    "You're determined! 🎯",
    "That's commendable! 🎖️",
    "You're brave! 🦸",
    "That's courageous! 🦁",
    "You're strong! 💎",
    "That's impressive effort! ⚡",
    "You're a fighter! 🥊",
    "That's the way to learn! 📚"
];

// Quirky confirmation messages (50+)
const QUIRKY_CONFIRM_MESSAGES = [
    "Are you sure? Your game will be lost! 😱",
    "Wait! Your progress will disappear! 🚨",
    "Hold up! This will end your current game! ⚠️",
    "Are you absolutely sure? Game over! 🎮",
    "Think twice! Your moves will vanish! 💨",
    "Really? All that strategy gone? 🤔",
    "Sure about this? Your game will reset! 🔄",
    "Wait! Your epic game will be lost! ⚡",
    "Are you certain? Progress will be wiped! 🧹",
    "Hold on! Your masterpiece will disappear! 🎨",
    "Think about it! Your game will end! 🛑",
    "Are you sure? All moves will be lost! 📉",
    "Wait a sec! Your strategy will vanish! 🎯",
    "Really sure? Your game will reset! 🔁",
    "Are you positive? Everything will be gone! 💭",
    "Hold up! Your progress will disappear! 📊",
    "Think carefully! Your game will end! 🎲",
    "Are you certain? Your moves will be lost! 🎪",
    "Wait! Your epic battle will end! ⚔️",
    "Sure about this? Your game will reset! 🔄",
    "Are you really sure? Progress will vanish! 🌟",
    "Hold on! Your game will be lost! 🎭",
    "Think twice! Your strategy will disappear! 🧠",
    "Are you positive? Your game will end! 🎯",
    "Wait! Your moves will be wiped! 🧹",
    "Really? Your progress will be gone! 📉",
    "Are you certain? Your game will reset! 🔁",
    "Hold up! Your epic game will end! ⚡",
    "Think about it! Your moves will vanish! 💨",
    "Are you sure? Your game will be lost! 🎮",
    "Wait a sec! Your strategy will disappear! 🎨",
    "Really sure? Your game will reset! 🔄",
    "Are you positive? Progress will be wiped! 📊",
    "Hold on! Your game will end! 🛑",
    "Think carefully! Your moves will be lost! 🎲",
    "Are you certain? Your game will vanish! 💭",
    "Wait! Your progress will disappear! 🌟",
    "Sure about this? Your game will reset! 🔁",
    "Are you really sure? Your moves will be gone! 🎪",
    "Hold up! Your game will end! ⚔️",
    "Think twice! Your strategy will vanish! 🧠",
    "Are you positive? Your game will reset! 🎯",
    "Wait! Your progress will disappear! 📉",
    "Really? Your game will be lost! 🎮",
    "Are you certain? Your moves will vanish! 💨",
    "Hold on! Your game will end! ⚡",
    "Think about it! Your progress will be wiped! 🧹",
    "Are you sure? Your game will reset! 🔄",
    "Wait a sec! Your moves will disappear! 🎨",
    "Really sure? Your game will be lost! 🎯"
];

// Quirky bot win messages (50+)
const QUIRKY_BOT_WIN_MESSAGES = [
    "Bot owned you! 🤖",
    "Bot just schooled you! 🎓",
    "Bot crushed it! 💥",
    "Bot is too good! 🏆",
    "Bot outplayed you! 🎯",
    "Bot dominated! 👑",
    "Bot is unstoppable! 🚀",
    "Bot is a legend! ⭐",
    "Bot is on fire! 🔥",
    "Bot is a master! 🥷",
    "Bot is brilliant! 🧠",
    "Bot is incredible! ✨",
    "Bot is amazing! 🌟",
    "Bot is phenomenal! 🌠",
    "Bot is a genius! 🎓",
    "Bot is a wizard! 🧙",
    "Bot is a champion! 🏅",
    "Bot is a pro! 🎮",
    "Bot is spectacular! 🎊",
    "Bot is the best! 🥇",
    "Bot is mind-blowing! 🧨",
    "Bot is perfect! 💯",
    "Bot is a hero! 🦸",
    "Bot is a star! ⭐",
    "Bot is epic! 🚀",
    "Bot is awesome! 💎",
    "Bot is flawless! ✅",
    "Bot is a ninja! 🥷",
    "Bot is outstanding! 🎉",
    "Bot is a legend! 👑",
    "Bot is incredible! 🎨",
    "Bot is amazing! 🌟",
    "Bot is unstoppable! ⚡",
    "Bot is brilliant! 🧠",
    "Bot is a master! 🎭",
    "Bot is a wizard! 🧙",
    "Bot is a champion! 🏆",
    "Bot is a pro! 🎮",
    "Bot is spectacular! 🎪",
    "Bot is the best! 🥇",
    "Bot is mind-blowing! 🧨",
    "Bot is perfect! 💯",
    "Bot is a hero! 🦸",
    "Bot is a star! ⭐",
    "Bot is epic! 🚀",
    "Bot is awesome! 💎",
    "Bot is flawless! ✅",
    "Bot is a ninja! 🥷",
    "Bot is outstanding! 🎉"
];

// DOM Elements
const elements = {
    homeScreen: document.getElementById('homeScreen'),
    setupScreen: document.getElementById('setupScreen'),
    gameScreen: document.getElementById('gameScreen'),
    settingsScreen: document.getElementById('settingsScreen'),
    gameBoard: document.getElementById('gameBoard'),
    currentModeDisplay: document.getElementById('currentModeDisplay'),
    playerXName: document.getElementById('playerXName'),
    playerOName: document.getElementById('playerOName'),
    scoreX: document.getElementById('scoreX'),
    scoreO: document.getElementById('scoreO'),
    currentTurnText: document.getElementById('currentTurnText'),
    resultModal: document.getElementById('resultModal'),
    resultMessage: document.getElementById('resultMessage'),
    resultAnimation: document.getElementById('resultAnimation'),
    playAgainBtn: document.getElementById('playAgainBtn'),
    resetScoreBtn: document.getElementById('resetScoreBtn'),
    homeBtn: document.getElementById('homeBtn'),
    soundToggle: document.getElementById('soundToggle'),
    highContrastToggle: document.getElementById('highContrastToggle'),
    showAuthorToggle: document.getElementById('showAuthorToggle'),
    confirmModal: document.getElementById('confirmModal'),
    confirmMessage: document.getElementById('confirmMessage'),
    confirmOkBtn: document.getElementById('confirmOkBtn'),
    confirmCancelBtn: document.getElementById('confirmCancelBtn')
};

// Theme color presets
const THEME_COLORS = {
    indigo: {
        name: 'Indigo',
        primary: '#6366f1',
        secondary: '#8b5cf6',
        buttonColor: '#4f46e5', // Darker for better contrast
        bgStart: '#0f172a',
        bgEnd: '#1a1f3a'
    },
    pink: {
        name: 'Pink',
        primary: '#ec4899',
        secondary: '#f472b6',
        buttonColor: '#db2777', // Darker for better contrast
        bgStart: '#1a0f1a',
        bgEnd: '#2d1a2d'
    },
    blue: {
        name: 'Blue',
        primary: '#3b82f6',
        secondary: '#60a5fa',
        buttonColor: '#2563eb', // Darker for better contrast
        bgStart: '#0f172a',
        bgEnd: '#1a2332'
    },
    green: {
        name: 'Green',
        primary: '#10b981',
        secondary: '#34d399',
        buttonColor: '#059669', // Darker for better contrast
        bgStart: '#0f1a17',
        bgEnd: '#1a2e28'
    },
    purple: {
        name: 'Purple',
        primary: '#8b5cf6',
        secondary: '#a78bfa',
        buttonColor: '#7c3aed', // Darker for better contrast
        bgStart: '#1a0f1f',
        bgEnd: '#2a1f35'
    },
    red: {
        name: 'Red',
        primary: '#ef4444',
        secondary: '#f87171',
        buttonColor: '#dc2626', // Darker for better contrast
        bgStart: '#1a0f0f',
        bgEnd: '#2a1f1f'
    },
    orange: {
        name: 'Orange',
        primary: '#f59e0b',
        secondary: '#fbbf24',
        buttonColor: '#d97706', // Darker for better contrast
        bgStart: '#1a150f',
        bgEnd: '#2a231a'
    },
    teal: {
        name: 'Teal',
        primary: '#14b8a6',
        secondary: '#5eead4',
        buttonColor: '#0d9488', // Darker for better contrast
        bgStart: '#0f1a19',
        bgEnd: '#1a2e2c'
    }
};

// Initialize
function init() {
    setupEventListeners();
    loadSettings();
    createBoard();
    setupThemeSelector();
    applyTheme(gameState.themeColor); // Apply theme after loading settings
}

// Setup Event Listeners
function setupEventListeners() {
    // Mode toggle
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            gameState.gameMode = e.target.dataset.mode;
        });
    });

    // Play buttons
    document.getElementById('playFriendBtn').addEventListener('click', () => {
        gameState.playType = 'friend';
        showSetupScreen();
    });

    document.getElementById('playBotBtn').addEventListener('click', () => {
        gameState.playType = 'bot';
        showSetupScreen();
    });

    // Setup screen
    document.getElementById('backBtn').addEventListener('click', showHomeScreen);
    document.getElementById('startGameBtn').addEventListener('click', startGame);

    // Symbol selection
    document.querySelectorAll('.symbol-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const container = e.target.closest('.setup-form');
            container.querySelectorAll('.symbol-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Game screen
    document.getElementById('homeBtn').addEventListener('click', () => {
        showConfirmModal(() => {
            showHomeScreen();
        });
    });
    
    // Confirmation modal
    elements.confirmOkBtn.addEventListener('click', () => {
        if (elements.confirmModal.onConfirm) {
            elements.confirmModal.onConfirm();
        }
        hideConfirmModal();
    });
    
    elements.confirmCancelBtn.addEventListener('click', () => {
        hideConfirmModal();
    });
    
    // Close modal on background click
    elements.confirmModal.addEventListener('click', (e) => {
        if (e.target === elements.confirmModal) {
            hideConfirmModal();
        }
    });

    // Result modal
    document.getElementById('playAgainBtn').addEventListener('click', resetGame);
    document.getElementById('resetScoreBtn').addEventListener('click', resetScore);

    // Settings
    document.getElementById('settingsBtn').addEventListener('click', showSettingsScreen);
    document.getElementById('settingsBackBtn').addEventListener('click', showHomeScreen);
    
    elements.soundToggle.addEventListener('change', (e) => {
        gameState.soundEnabled = e.target.checked;
        saveSettings();
    });

    elements.highContrastToggle.addEventListener('change', (e) => {
        gameState.highContrast = e.target.checked;
        document.body.classList.toggle('high-contrast', e.target.checked);
        saveSettings();
    });
    
    elements.showAuthorToggle.addEventListener('change', (e) => {
        gameState.showAuthor = e.target.checked;
        updateAuthorVisibility();
        saveSettings();
    });
}

// Setup Theme Selector
function setupThemeSelector() {
    const colorOptionsContainer = document.getElementById('themeColorOptions');
    colorOptionsContainer.innerHTML = '';
    
    Object.keys(THEME_COLORS).forEach(themeKey => {
        const theme = THEME_COLORS[themeKey];
        const colorOption = document.createElement('div');
        colorOption.className = 'color-option';
        if (themeKey === gameState.themeColor) {
            colorOption.classList.add('active');
        }
        colorOption.style.backgroundColor = theme.primary;
        colorOption.dataset.theme = themeKey;
        colorOption.title = theme.name;
        colorOption.addEventListener('click', () => selectTheme(themeKey));
        colorOptionsContainer.appendChild(colorOption);
    });
}

// Select Theme
function selectTheme(themeKey) {
    gameState.themeColor = themeKey;
    applyTheme(themeKey);
    setupThemeSelector(); // Refresh to update active state
    saveSettings();
}

// Apply Theme
function applyTheme(themeKey) {
    const theme = THEME_COLORS[themeKey];
    if (!theme) return;
    
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--button-color', theme.buttonColor);
    document.documentElement.style.setProperty('--bg-gradient-start', theme.bgStart);
    document.documentElement.style.setProperty('--bg-gradient-end', theme.bgEnd);
}

// Update Author Visibility
function updateAuthorVisibility() {
    const authorElements = document.querySelectorAll('.author');
    authorElements.forEach(el => {
        el.style.display = gameState.showAuthor ? 'block' : 'none';
    });
}

// Show Confirmation Modal
function showConfirmModal(onConfirm) {
    const quirkyMessage = QUIRKY_CONFIRM_MESSAGES[Math.floor(Math.random() * QUIRKY_CONFIRM_MESSAGES.length)];
    elements.confirmMessage.textContent = quirkyMessage;
    elements.confirmModal.onConfirm = onConfirm;
    elements.confirmModal.classList.add('active');
}

// Hide Confirmation Modal
function hideConfirmModal() {
    elements.confirmModal.classList.remove('active');
    elements.confirmModal.onConfirm = null;
}

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showHomeScreen() {
    showScreen('homeScreen');
    resetGameState();
}

function showSetupScreen() {
    showScreen('setupScreen');
    const friendSetup = document.getElementById('friendSetup');
    const botSetup = document.getElementById('botSetup');
    const setupTitle = document.getElementById('setupTitle');
    
    if (gameState.playType === 'friend') {
        friendSetup.style.display = 'block';
        botSetup.style.display = 'none';
        setupTitle.textContent = 'Play with Friend';
    } else {
        friendSetup.style.display = 'none';
        botSetup.style.display = 'block';
        setupTitle.textContent = 'Play with Bot';
    }
}

function showSettingsScreen() {
    showScreen('settingsScreen');
    setupThemeSelector(); // Refresh theme selector to show current selection
}

// Create Game Board
function createBoard() {
    elements.gameBoard.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        cell.addEventListener('click', () => handleCellClick(i));
        elements.gameBoard.appendChild(cell);
    }
}

// Start Game
function startGame() {
    if (gameState.playType === 'friend') {
        const player1Name = document.getElementById('player1Name').value.trim() || 'Player 1';
        const player2Name = document.getElementById('player2Name').value.trim() || 'Player 2';
        const selectedSymbol = document.querySelector('#friendSetup .symbol-btn.active').dataset.symbol;
        
        if (selectedSymbol === 'X') {
            gameState.players.X = player1Name;
            gameState.players.O = player2Name;
            gameState.playerSymbol = 'X';
        } else {
            gameState.players.X = player2Name;
            gameState.players.O = player1Name;
            gameState.playerSymbol = 'O';
        }
    } else {
        const playerName = document.getElementById('playerName').value.trim() || 'Player';
        const selectedSymbol = document.querySelector('#botSetup .symbol-btn.active').dataset.symbol;
        gameState.botDifficulty = document.getElementById('botDifficulty').value;
        
        if (selectedSymbol === 'X') {
            gameState.players.X = playerName;
            gameState.players.O = 'Ninja Bot 🤖';
            gameState.playerSymbol = 'X';
        } else {
            gameState.players.X = 'Ninja Bot 🤖';
            gameState.players.O = playerName;
            gameState.playerSymbol = 'O';
        }
    }
    
    gameState.currentPlayer = 'X';
    updateUI();
    showScreen('gameScreen');
    playSound('move');
    
    // Bot makes first move if it's X
    if (gameState.playType === 'bot' && gameState.currentPlayer !== gameState.playerSymbol) {
        setTimeout(() => makeBotMove(), 500);
    }
}

// Handle Cell Click
function handleCellClick(index) {
    if (gameState.gameStatus !== 'IN_PROGRESS') return;
    if (gameState.board[index] !== null) return;
    if (gameState.playType === 'bot' && gameState.currentPlayer !== gameState.playerSymbol) return;
    
    makeMove(index);
}

// Make Move
function makeMove(index) {
    gameState.board[index] = gameState.currentPlayer;
    updateCell(index);
    playSound('move');
    
    checkGameStatus();
    
    if (gameState.gameStatus === 'IN_PROGRESS') {
        gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
        updateUI();
        
        // Bot's turn
        if (gameState.playType === 'bot' && gameState.currentPlayer !== gameState.playerSymbol) {
            setTimeout(() => makeBotMove(), 500);
        }
    } else {
        endGame();
    }
}

// Update Cell
function updateCell(index) {
    const cell = elements.gameBoard.children[index];
    cell.textContent = gameState.board[index];
    cell.classList.add('filled', gameState.board[index].toLowerCase());
    cell.classList.add('symbol-enter');
    
    setTimeout(() => {
        cell.classList.remove('symbol-enter');
    }, 300);
}

// Check Game Status
function checkGameStatus() {
    const currentSymbol = gameState.currentPlayer;
    const opponentSymbol = currentSymbol === 'X' ? 'O' : 'X';
    
    const currentHasThree = hasThreeInARow(gameState.board, currentSymbol);
    const opponentHasThree = hasThreeInARow(gameState.board, opponentSymbol);
    
    if (gameState.gameMode === 'normal') {
        // Normal Mode: First to make 3 wins
        if (currentHasThree) {
            gameState.gameStatus = 'WIN';
            gameState.winner = currentSymbol;
            gameState.loser = opponentSymbol;
        } else if (opponentHasThree) {
            gameState.gameStatus = 'WIN';
            gameState.winner = opponentSymbol;
            gameState.loser = currentSymbol;
        } else if (isBoardFull()) {
            gameState.gameStatus = 'DRAW';
        }
    } else {
        // Ninja Mode: Making 3 loses, forcing opponent to make 3 wins
        if (currentHasThree) {
            // Current player made 3, so they lose
            gameState.gameStatus = 'LOSS';
            gameState.loser = currentSymbol;
            gameState.winner = opponentSymbol;
        } else if (opponentHasThree) {
            // Opponent made 3, so current player wins
            gameState.gameStatus = 'WIN';
            gameState.winner = currentSymbol;
            gameState.loser = opponentSymbol;
        } else if (isBoardFull()) {
            gameState.gameStatus = 'DRAW';
        }
    }
}

// Check for Three in a Row
function hasThreeInARow(board, symbol) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => board[index] === symbol);
    });
}

// Check if Board is Full
function isBoardFull() {
    return gameState.board.every(cell => cell !== null);
}

// End Game
function endGame() {
    updateUI();
    
    if (gameState.gameStatus === 'DRAW') {
        showDrawResult();
    } else if (gameState.gameStatus === 'WIN') {
        updateScore(gameState.winner);
        showWinResult();
    } else if (gameState.gameStatus === 'LOSS') {
        updateScore(gameState.winner);
        showLossResult();
    }
    
    // Disable all cells
    Array.from(elements.gameBoard.children).forEach(cell => {
        cell.classList.add('disabled');
    });
}

// Show Win Result
function showWinResult() {
    const winnerName = gameState.players[gameState.winner];
    const isBot = winnerName.toLowerCase().includes('bot');
    
    let winMessage;
    if (isBot) {
        // Bot won - use quirky bot win message
        const quirkyMessage = QUIRKY_BOT_WIN_MESSAGES[Math.floor(Math.random() * QUIRKY_BOT_WIN_MESSAGES.length)];
        winMessage = `<span class="winner-name">${quirkyMessage}</span>`;
    } else {
        // Player won - use quirky win message
        const quirkyMessage = QUIRKY_WIN_MESSAGES[Math.floor(Math.random() * QUIRKY_WIN_MESSAGES.length)];
        winMessage = `<span class="winner-name">${winnerName} - ${quirkyMessage}</span>`;
    }
    
    elements.resultMessage.innerHTML = winMessage;
    elements.resultAnimation.innerHTML = '🎉';
    
    playSound('win');
    createConfetti();
    elements.resultModal.classList.add('active');
}

// Show Loss Result
function showLossResult() {
    const loserName = gameState.players[gameState.loser];
    const quirkyMessage = QUIRKY_LOSS_MESSAGES[Math.floor(Math.random() * QUIRKY_LOSS_MESSAGES.length)];
    
    elements.resultMessage.innerHTML = `<span class="loser-name">${loserName} Lost!</span>`;
    elements.resultAnimation.innerHTML = '<span class="laugh-emoji">😂</span>';
    
    setTimeout(() => {
        const quirkEl = document.createElement('div');
        quirkEl.className = 'quirk-message';
        quirkEl.textContent = quirkyMessage;
        elements.resultAnimation.appendChild(quirkEl);
    }, 300);
    
    playSound('lose');
    elements.resultModal.classList.add('active');
}

// Show Draw Result
function showDrawResult() {
    elements.resultMessage.textContent = "It's a Draw!";
    elements.resultAnimation.innerHTML = '🤝';
    elements.resultModal.classList.add('active');
}

// Create Confetti
function createConfetti() {
    const colors = ['#10b981', '#6366f1', '#8b5cf6', '#f59e0b', '#ef4444'];
    const modalContent = elements.resultModal.querySelector('.modal-content');
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        modalContent.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 2000);
    }
}

// Update Score
function updateScore(winner) {
    if (winner) {
        gameState.scores[winner]++;
    }
    elements.scoreX.textContent = gameState.scores.X;
    elements.scoreO.textContent = gameState.scores.O;
}

// Reset Score
function resetScore() {
    gameState.scores.X = 0;
    gameState.scores.O = 0;
    elements.scoreX.textContent = 0;
    elements.scoreO.textContent = 0;
    resetGame();
}

// Reset Game
function resetGame() {
    gameState.board = Array(9).fill(null);
    gameState.currentPlayer = 'X';
    gameState.gameStatus = 'IN_PROGRESS';
    gameState.winner = null;
    gameState.loser = null;
    
    elements.resultModal.classList.remove('active');
    createBoard();
    updateUI();
    
    // Bot makes first move if it's X
    if (gameState.playType === 'bot' && gameState.currentPlayer !== gameState.playerSymbol) {
        setTimeout(() => makeBotMove(), 500);
    }
}

// Reset Game State
function resetGameState() {
    gameState.board = Array(9).fill(null);
    gameState.currentPlayer = 'X';
    gameState.gameStatus = 'IN_PROGRESS';
    gameState.winner = null;
    gameState.loser = null;
    gameState.scores.X = 0;
    gameState.scores.O = 0;
}

// Update UI
function updateUI() {
    // Update mode display
    elements.currentModeDisplay.textContent = gameState.gameMode === 'normal' ? 'Normal Mode' : 'Ninja Mode 🥷';
    
    // Update player names
    elements.playerXName.textContent = gameState.players.X;
    elements.playerOName.textContent = gameState.players.O;
    
    // Update scores
    elements.scoreX.textContent = gameState.scores.X;
    elements.scoreO.textContent = gameState.scores.O;
    
    // Update turn indicator
    if (gameState.gameStatus === 'IN_PROGRESS') {
        elements.currentTurnText.textContent = `${gameState.players[gameState.currentPlayer]}'s Turn`;
    } else {
        elements.currentTurnText.textContent = 'Game Over';
    }
    
    // Update active player highlight
    document.getElementById('playerXScore').classList.toggle('active', gameState.currentPlayer === 'X' && gameState.gameStatus === 'IN_PROGRESS');
    document.getElementById('playerOScore').classList.toggle('active', gameState.currentPlayer === 'O' && gameState.gameStatus === 'IN_PROGRESS');
}

// Bot AI
function makeBotMove() {
    if (gameState.gameStatus !== 'IN_PROGRESS') return;
    
    let move;
    
    switch (gameState.botDifficulty) {
        case 'easy':
            move = getRandomMove();
            break;
        case 'medium':
            move = getMediumMove();
            break;
        case 'hard':
            move = getHardMove();
            break;
    }
    
    if (move !== null) {
        makeMove(move);
    }
}

// Easy Bot: Random move
function getRandomMove() {
    const availableMoves = gameState.board.map((cell, index) => cell === null ? index : null).filter(val => val !== null);
    return availableMoves.length > 0 ? availableMoves[Math.floor(Math.random() * availableMoves.length)] : null;
}

// Medium Bot: Basic logic
function getMediumMove() {
    const botSymbol = gameState.currentPlayer;
    const opponentSymbol = botSymbol === 'X' ? 'O' : 'X';
    
    // 1. Try to win (or avoid losing in ninja mode)
    if (gameState.gameMode === 'normal') {
        // Try to make 3 in a row
        for (let move of getAvailableMoves()) {
            const testBoard = [...gameState.board];
            testBoard[move] = botSymbol;
            if (hasThreeInARow(testBoard, botSymbol)) {
                return move;
            }
        }
        
        // Block opponent from winning
        for (let move of getAvailableMoves()) {
            const testBoard = [...gameState.board];
            testBoard[move] = opponentSymbol;
            if (hasThreeInARow(testBoard, opponentSymbol)) {
                return move;
            }
        }
    } else {
        // Ninja Mode: Avoid making 3, force opponent to make 3
        // Avoid moves that would make bot lose
        const safeMoves = getAvailableMoves().filter(move => {
            const testBoard = [...gameState.board];
            testBoard[move] = botSymbol;
            return !hasThreeInARow(testBoard, botSymbol);
        });
        
        if (safeMoves.length === 0) {
            return getRandomMove(); // No safe moves, random
        }
        
        // Try to force opponent into making 3
        for (let move of safeMoves) {
            const testBoard = [...gameState.board];
            testBoard[move] = botSymbol;
            // Check if opponent would be forced to make 3 next turn
            for (let oppMove of getAvailableMovesFromBoard(testBoard)) {
                const oppTestBoard = [...testBoard];
                oppTestBoard[oppMove] = opponentSymbol;
                if (hasThreeInARow(oppTestBoard, opponentSymbol)) {
                    // Check if opponent has other moves
                    const otherMoves = getAvailableMovesFromBoard(testBoard).filter(m => m !== oppMove);
                    let opponentHasSafeMove = false;
                    for (let otherMove of otherMoves) {
                        const otherTestBoard = [...testBoard];
                        otherTestBoard[otherMove] = opponentSymbol;
                        if (!hasThreeInARow(otherTestBoard, opponentSymbol)) {
                            opponentHasSafeMove = true;
                            break;
                        }
                    }
                    if (!opponentHasSafeMove) {
                        return move; // Force opponent to lose
                    }
                }
            }
        }
        
        return safeMoves[Math.floor(Math.random() * safeMoves.length)];
    }
    
    // 3. Take center if available
    if (gameState.board[4] === null) {
        return 4;
    }
    
    // 4. Take corner
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(i => gameState.board[i] === null);
    if (availableCorners.length > 0) {
        return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }
    
    // 5. Take any available move
    return getRandomMove();
}

// Hard Bot: Advanced strategy
function getHardMove() {
    const botSymbol = gameState.currentPlayer;
    const opponentSymbol = botSymbol === 'X' ? 'O' : 'X';
    
    if (gameState.gameMode === 'normal') {
        // Try to win
        for (let move of getAvailableMoves()) {
            const testBoard = [...gameState.board];
            testBoard[move] = botSymbol;
            if (hasThreeInARow(testBoard, botSymbol)) {
                return move;
            }
        }
        
        // Block opponent
        for (let move of getAvailableMoves()) {
            const testBoard = [...gameState.board];
            testBoard[move] = opponentSymbol;
            if (hasThreeInARow(testBoard, opponentSymbol)) {
                return move;
            }
        }
        
        // Create fork (two ways to win)
        for (let move of getAvailableMoves()) {
            const testBoard = [...gameState.board];
            testBoard[move] = botSymbol;
            let winCount = 0;
            for (let nextMove of getAvailableMovesFromBoard(testBoard)) {
                const nextTestBoard = [...testBoard];
                nextTestBoard[nextMove] = botSymbol;
                if (hasThreeInARow(nextTestBoard, botSymbol)) {
                    winCount++;
                }
            }
            if (winCount >= 2) {
                return move;
            }
        }
        
        // Block opponent fork
        for (let move of getAvailableMoves()) {
            const testBoard = [...gameState.board];
            testBoard[move] = opponentSymbol;
            let winCount = 0;
            for (let nextMove of getAvailableMovesFromBoard(testBoard)) {
                const nextTestBoard = [...testBoard];
                nextTestBoard[nextMove] = opponentSymbol;
                if (hasThreeInARow(nextTestBoard, opponentSymbol)) {
                    winCount++;
                }
            }
            if (winCount >= 2) {
                return move;
            }
        }
    } else {
        // Ninja Mode Hard: Advanced anti-strategy
        const safeMoves = getAvailableMoves().filter(move => {
            const testBoard = [...gameState.board];
            testBoard[move] = botSymbol;
            return !hasThreeInARow(testBoard, botSymbol);
        });
        
        if (safeMoves.length === 0) {
            return getRandomMove();
        }
        
        // Try to create a situation where opponent is forced to make 3
        for (let move of safeMoves) {
            const testBoard = [...gameState.board];
            testBoard[move] = botSymbol;
            
            // Check all opponent responses
            const oppMoves = getAvailableMovesFromBoard(testBoard);
            let allOppMovesLeadToLoss = true;
            
            for (let oppMove of oppMoves) {
                const oppTestBoard = [...testBoard];
                oppTestBoard[oppMove] = opponentSymbol;
                
                // If opponent makes 3, we win
                if (hasThreeInARow(oppTestBoard, opponentSymbol)) {
                    continue; // This is good for us
                }
                
                // Check if opponent can avoid making 3 on next turn
                const nextBotMoves = getAvailableMovesFromBoard(oppTestBoard);
                let opponentCanAvoid = false;
                
                for (let nextBotMove of nextBotMoves) {
                    const nextTestBoard = [...oppTestBoard];
                    nextTestBoard[nextBotMove] = botSymbol;
                    
                    // Check if opponent has a safe move after this
                    const finalOppMoves = getAvailableMovesFromBoard(nextTestBoard);
                    for (let finalOppMove of finalOppMoves) {
                        const finalTestBoard = [...nextTestBoard];
                        finalTestBoard[finalOppMove] = opponentSymbol;
                        if (!hasThreeInARow(finalTestBoard, opponentSymbol)) {
                            opponentCanAvoid = true;
                            break;
                        }
                    }
                    if (opponentCanAvoid) break;
                }
                
                if (opponentCanAvoid) {
                    allOppMovesLeadToLoss = false;
                    break;
                }
            }
            
            if (allOppMovesLeadToLoss && oppMoves.length > 0) {
                return move;
            }
        }
    }
    
    // Fallback to medium strategy
    return getMediumMove();
}

// Helper Functions
function getAvailableMoves() {
    return gameState.board.map((cell, index) => cell === null ? index : null).filter(val => val !== null);
}

function getAvailableMovesFromBoard(board) {
    return board.map((cell, index) => cell === null ? index : null).filter(val => val !== null);
}

// Sound Effects
function playSound(type) {
    if (!gameState.soundEnabled) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let frequency, duration;
    
    switch (type) {
        case 'move':
            frequency = 400;
            duration = 0.1;
            break;
        case 'win':
            frequency = 600;
            duration = 0.3;
            break;
        case 'lose':
            frequency = 200;
            duration = 0.2;
            break;
        default:
            return;
    }
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type === 'win' ? 'sine' : 'square';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Settings
function saveSettings() {
    localStorage.setItem('ticTacToeSettings', JSON.stringify({
        soundEnabled: gameState.soundEnabled,
        highContrast: gameState.highContrast,
        themeColor: gameState.themeColor,
        showAuthor: gameState.showAuthor
    }));
}

function loadSettings() {
    const saved = localStorage.getItem('ticTacToeSettings');
    if (saved) {
        const settings = JSON.parse(saved);
        gameState.soundEnabled = settings.soundEnabled !== false;
        gameState.highContrast = settings.highContrast === true;
        gameState.showAuthor = settings.showAuthor === true;
        if (settings.themeColor && THEME_COLORS[settings.themeColor]) {
            gameState.themeColor = settings.themeColor;
        }
        
        elements.soundToggle.checked = gameState.soundEnabled;
        elements.highContrastToggle.checked = gameState.highContrast;
        elements.showAuthorToggle.checked = gameState.showAuthor;
        document.body.classList.toggle('high-contrast', gameState.highContrast);
        updateAuthorVisibility();
    }
}

// Initialize on load
init();

