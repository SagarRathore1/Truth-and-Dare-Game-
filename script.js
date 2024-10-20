let players = [];
let currentPlayerIndex = null; 
let timerInterval;
let remainingTime = 60;

const truthQuestions = [
  "What's your biggest fear?",
  "Have you ever lied to your parents?",
  "What's your most embarrassing moment?",
  "Who was your first crush?",
  "What's one thing you've done that you're most ashamed of?",
  "If you could change one thing about yourself, what would it be?",
  "Have you ever cheated on a test?",
  "What's the weirdest dream you've ever had?",
  "Who in this group would you most want to trade lives with for a day?",
  "What’s something you’ve never told anyone?"
];

const dareTasks = [
  "Do 10 pushups.",
  "Sing a song loudly.",
  "Dance without music for 1 minute.",
  "Do your best impression of someone in the group.",
  "Try to lick your elbow.",
  "Post an embarrassing photo on social media.",
  "Hold your breath for 30 seconds.",
  "Let another player text someone on your phone",
  "Talk in an accent for the next 3 rounds.",
  "Share a video of yourself singing a song.",
  "Run around the outside of the house three times."
];


function addPlayer() {
    const playerName = document.getElementById('player-name').value;
    if (playerName) {
        players.push({ name: playerName, score: 0 });
        document.getElementById('player-name').value = '';
        updatePlayersList();
    }
}


function updatePlayersList() {
    const playersListDiv = document.getElementById('players-list');
    playersListDiv.innerHTML = `<h3>Players:</h3><ul>`;
    players.map((player, index) => {
        playersListDiv.innerHTML += `
            <li>
                ${player.name} - Score: ${player.score}
                <button onclick="selectPlayer(${index})">Select</button>
                <button class="remove-btn" onclick="removePlayer(${index})">❌</button>
            </li>
        `;
    });
    playersListDiv.innerHTML += `</ul>`;
    document.getElementById('game-section').style.display = 'block';
}


function selectPlayer(index) {
    currentPlayerIndex = index; 
    document.getElementById('current-player').innerText = `Current Player: ${players[currentPlayerIndex].name}`;
}


function removePlayer(index) {
    players.splice(index, 1); 
    updatePlayersList(); 
    if (currentPlayerIndex === index) {
        currentPlayerIndex = null;
        document.getElementById('current-player').innerText = 'Select a player to play';
    }
}

function pickTruth() {
    if (currentPlayerIndex === null) {
        alert("Please select a player to play.");
        return;
    }
    const randomTruth = truthQuestions[Math.floor(Math.random() * truthQuestions.length)];
    document.getElementById('question').innerText = `Truth: ${randomTruth}`;
    startTimer();
}


function pickDare() {
    if (currentPlayerIndex === null) {
        alert("Please select a player to play.");
        return;
    }
    const randomDare = dareTasks[Math.floor(Math.random() * dareTasks.length)];
    document.getElementById('question').innerText = `Dare: ${randomDare}`;
    startTimer();
}


function startTimer() {
    remainingTime = 60;
    document.getElementById('done-btn').style.display = 'inline-block';
    document.getElementById('timer').innerText = `Time Left: ${remainingTime} seconds`;
    
    timerInterval = setInterval(() => {
        remainingTime--;
        document.getElementById('timer').innerText = `Time Left: ${remainingTime} seconds`;
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            document.getElementById('done-btn').style.display = 'none';
            document.getElementById('timer').innerText = 'Time is up! 0 points awarded.';
        }
    }, 1000);
}


function markDone() {
    clearInterval(timerInterval);
    players[currentPlayerIndex].score++;
    document.getElementById('done-btn').style.display = 'none';
    document.getElementById('timer').innerText = 'Task done! 1 point awarded.';
    updatePlayersList();
}


function finishGame() {
    clearInterval(timerInterval);
    document.getElementById('scores').innerHTML = '<h2>Final Scores</h2>';
    players.map(player => {
        document.getElementById('scores').innerHTML += `<p>${player.name}: ${player.score} points</p>`;
    });
    document.getElementById('new-game-btn').style.display = 'block';
}


function startNewGame() {
    players = [];
    currentPlayerIndex = null;
    document.getElementById('players-list').innerHTML = '';
    document.getElementById('scores').innerHTML = '';
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('new-game-btn').style.display = 'none';
}
