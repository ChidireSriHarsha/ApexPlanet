const quizData = [
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Syntax",
      "Computer Style Sheets"
    ],
    correct: 1
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: ["<break>", "<br>", "<lb>", "<hr>"],
    correct: 1
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    answers: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: 1
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: ["Boolean", "Float", "Number", "String"],
    correct: 1
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["<!-- comment -->", "// comment", "** comment **", "# comment"],
    correct: 1
  },
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Tool Markup Language"
    ],
    correct: 1
  },
  {
    question: "Which property is used to change text color in CSS?",
    answers: ["font-color", "text-color", "color", "background-color"],
    correct: 2
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    answers: ["<script>", "<js>", "<javascript>", "<code>"],
    correct: 0
  },
  {
    question: "Which of these is used to declare a variable in JavaScript?",
    answers: ["var", "int", "let", "Both A and C"],
    correct: 3
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const data = quizData[currentQuestion];

  questionEl.textContent = data.question;
  answersEl.innerHTML = "";

  data.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const buttons = document.querySelectorAll("#answers button");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === quizData[currentQuestion].correct) {
      btn.style.backgroundColor = "lightgreen";
    } else if (i === selected) {
      btn.style.backgroundColor = "salmon";
    }
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = `
      <h3>Quiz Completed!</h3>
      <p>Thanks for taking the quiz.</p>
    `;
  }
}

loadQuestion();
