# 🎸 80s Trivia Challenge

🕹 Test Your 80s Knowledge with This Interactive Quiz Game!

## 📔 Overview

The 80s Trivia Challenge is a nostalgic, interactive trivia game where players test their knowledge of 80s pop culture, music, movies, and history. The app features dynamic question generation, a real-time countdown timer, and an intuitive UI, all styled in a retro 80s theme.

This game is built entirely with vanilla JavaScript, HTML, and CSS—no frameworks needed! The logic dynamically updates the DOM, manages state transitions, and provides an engaging user experience.

### 🚀 Live Demo: Try It Here (https://smart79.github.io/TriviaGame/)

## 📂 Project Structure

📁 80s-Trivia-Challenge
│── assets/
│ ├── css/
│ │ ├── style.css # Styling & responsive design
│ ├── javascript/
│ │ ├── app.js # Game logic & event handling
│ ├── images/
│── index.html # Main HTML file
│── README.md # Documentation

## 💻 Installation & Usage

To run the game locally:

    Clone the Repository

    git clone https://github.com/smart79/80s-trivia-challenge.git
    cd 80s-trivia-challenge

    Open index.html in a Browser
    No need for a server—just open index.html in Chrome, Firefox, or Edge!

## 🚀 Technologies Used

Technology Purpose
HTML5 Structure of the game
CSS3 80s-inspired UI styling & responsiveness
JavaScript (ES6) Game logic, DOM manipulation, event handling
jQuery Simplifies event binding & animations
Google Fonts (Fascinate Inline) 80s-style typography

## 🧠 Skills Demonstrated

JavaScript ES6 Features – let/const, arrow functions, template literals.
DOM Manipulation – Dynamic question rendering & UI updates.
Event Handling – Button clicks & countdown timer logic.
State Management – Handles quiz progress, question cycling, and scores.
CSS Media Queries – Mobile-friendly, responsive design.
Timer Functionality – Custom countdown that resets each question.

## 🕹 Features & Functionality

✔ Dynamic Question Rendering – Questions update instantly via JavaScript.
✔ Countdown Timer – Players must answer before time runs out!
✔ Score Tracking – Keeps track of correct & incorrect answers.
✔ Retro 80s Theme – Styled with bold colors & vintage fonts.
✔ Mobile-Responsive – Fully optimized for phones & tablets.
✔ Hover Effects & Animations – Buttons and transitions for better UX.

## 📜 Algorithms & Code Breakdown

### 📌 Game Flow Logic

    Start Button Clicked → Timer starts, first question loads.
    Question Appears → Player selects an answer within the time limit.
    Check Answer → Correct = Score Increases | Incorrect = No Change.
    Next Question Loads → Repeats until the quiz ends.
    Game Over → Final score displayed with restart option.

### 📌 Timer Mechanism

    JavaScript setInterval() dynamically updates the countdown.
    If time reaches 0, the next question loads automatically.

let timeLeft = 30;
const timer = setInterval(() => {
timeLeft--;
document.getElementById("timer").textContent = timeLeft;
if (timeLeft <= 0) {
clearInterval(timer);
loadNextQuestion();
}
}, 1000);

## 🚀 Future Enhancements

📌 Local Storage Leaderboard – Save high scores between sessions.
📌 API-Generated Questions – Dynamically fetch trivia from an external API.
📌 Sound Effects & Background Music – Enhance the immersive 80s vibe.
📌 Multiple Difficulty Levels – Add Easy, Medium, and Hard modes.
📌 Theming Options – Let users switch between different retro themes.

## 👥 Contributors

👤 Stephen Martinez – GitHub (https://github.com/smart79)

Want to contribute? Feel free to fork this repo and submit a pull request!

## 📜 Credits & Acknowledgments

🔹 Google Fonts – "Fascinate Inline" font.
🔹 jQuery CDN – Used for easier DOM manipulation.
🔹 80s-Inspired UI Design – Inspired by classic arcade aesthetics.

## 📜 License

📄 This project is licensed under the MIT License – feel free to modify and share!

## 📁 More Projects

💻 Check out my full portfolio for more apps like this:
🔗 My portfolio page (https://stephenmartinez.dev/portfolio.html)

✉️ Want to work together? Contact me here:
🔗 My Portfolio Contact Page (https://stephenmartinez.dev/contact.html)
