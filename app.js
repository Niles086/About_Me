// guessing game questions

const questions = [
    "What's my favorite Anime?",
    "What's my favorite Anime Character?",
    "At what age did I graduate from school?",
    "How many pets do I have?",
    "What type of pets do i have?"

]

const answers = ["Yes", "yes", "y", "Y", "no", "No", "n", "N", "NO", "YES"];

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const userInput = document.getElementById("userInput");
const submitButton = document.getElementById("submit");
const messageElement = document.getElementById("message");

function displayQuestion() {
    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion];
        userInput.value = "";
        messageElement.textContent = "";
    } else {
        questionElement.textContent = "Game Over!";
        submitButton.disabled = true;
    }
}

function checkAnswer() {
    const userAnswer = userInput.value.toLowerCase();
    if (userAnswer === answers[currentQuestion]) {
        // Use console.log to notify the user (you'll replace this with alerts later)
        console.log("Correct!");
        messageElement.textContent = "Correct!";
    } else {
        // Use console.log to notify the user (you'll replace this with alerts later)
        console.log("Wrong answer. Try again.");
        messageElement.textContent = "Wrong answer. Try again.";
    }
    currentQuestion++;
    displayQuestion();
}

submitButton.addEventListener("click", checkAnswer);

// Initial question display
displayQuestion();