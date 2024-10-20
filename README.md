# 🎲 Truth and Dare Web App

A fun, interactive **Truth and Dare** game built using **HTML**, **CSS**, and **JavaScript**. Players can be added dynamically, randomly selected for truth or dare, and timed to complete their tasks or answer questions. The app also tracks player scores and allows players to be removed from the game at any point.

## 🚀 Features

1. **Add Players**: Easily add as many players as you want.
2. **Random Selection**: The game randomly selects one player to either answer a truth or complete a dare.
3. **Random Truth/Dare**: Truth or dare questions are randomly selected from a predefined list.
4. **60-Second Timer**: Players have 60 seconds to answer or complete the task. They earn points if they complete the task within the time limit.
5. **Score Tracking**: The app keeps track of player scores, awarding 1 point for completed tasks.
6. **Remove Players**: Players can be removed from the game at any point using the cross (`❌`) icon.
7. **End Game**: Players can finish the game at any time, and the final scores will be displayed.
8. **Start a New Game**: Once the game ends, a button allows the group to start a new game, resetting all players and scores.

## 📷 Screenshots

![image](https://github.com/user-attachments/assets/953074a6-30d3-4f10-8f5e-921d69238b6e)


---

## 🛠️ Technologies Used

- **HTML**: For structuring the web app.
- **CSS**: For styling the user interface.
- **JavaScript**: For the game logic, dynamic player handling, and timer management.

---

## 📂 Project Structure

```
📦 truth-and-dare-web-app
├── 📄 index.html      # Main HTML file
├── 📄 script.js       # JavaScript for game logic
├── 📄 style.css       # CSS for styling the UI
└── 📄 README.md       # Project README (this file)
```

---

## ⚙️ How It Works

1. **Add Players**: Enter player names in the input field and click the "Add Player" button to add them to the game.
2. **Select Player**: Click the "Select" button to choose the player for their turn.
3. **Truth or Dare**: The player then picks "Truth" or "Dare" to get a randomly assigned question or task.
4. **Complete Task**: The player has 60 seconds to complete their task. If successful, click the "Done" button to award them a point. If the timer runs out, the player gets 0 points.
5. **Remove Player**: Click the cross (`❌`) icon next to any player to remove them from the game.
6. **Finish Game**: At any point, click the "Finish Game" button to end the game and display the scores.
7. **Start New Game**: After finishing the game, click the "New Game" button to reset everything and start over.

---

## 🎨 Styling

The web app is styled using CSS to provide a clean, minimalistic design. It features:
- A centered layout for easy interaction.
- Clear buttons for player actions (Select, Truth, Dare, Done).
- A timer and score display to keep track of the game progress.
- Intuitive icons and buttons for removing players.

---

## 📑 Key Concepts Used

### 1. **JavaScript Map Function**
The `map()` function is used to dynamically render the player list in the DOM and manage updates like player removal.

### 2. **State Management**
Game state (such as current players, selected player, scores, and timer) is managed using JavaScript variables and updated in real-time.

### 3. **JSON for Persistence**
Although the current version doesn't use JSON for data storage, it’s designed with the idea that player data can be serialized into JSON for potential future enhancements (such as saving and loading games).

---

## 📚 Future Enhancements

- **Persistent Data**: Use `localStorage` or a backend to save game data and scores even after refreshing the page.
- **Custom Truth/Dare**: Allow users to input custom truth and dare questions.
- **Player Avatars**: Add the ability to upload and display avatars for players.
- **Difficulty Levels**: Allow for different difficulty levels of questions and tasks.
  
---

## 💻 How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/truth-and-dare-web-app.git
   ```

2. **Navigate to the Project Folder**:
   ```bash
   cd truth-and-dare-web-app
   ```

3. **Open the `index.html` File in Your Browser**:
   ```bash
   open index.html
   ```

4. **Enjoy Playing**! Add players and have fun!

---


