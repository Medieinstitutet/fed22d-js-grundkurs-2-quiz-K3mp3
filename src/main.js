import './style/style.scss';

/* Global variables */
let btnStartQuiz;
let questionContainer;
let currentQuestion = 0;
let points = 0;
let newGame;

const questionTextDiv = document.querySelector('.question');
const btnAnswer1 = document.querySelector('.btn-answer1');
const btnAnswer2 = document.querySelector('.btn-answer2');
const btnAnswer3 = document.querySelector('.btn-answer3');

const pointsContainer = document.querySelector('.points-container');
const scoredPoints = document.querySelector('.scored-points');

const questions = [
  {
    question: 'What is a variable?',
    answerOptions: [
      'A datatype',
      'A function',
      'A name of storage location',
    ],
    correctAnswer: 'A name of storage location',
  },
  {
    question: 'What is an object?',
    answerOptions: [
      'A combination of variables, functions and data structure',
      'A combination of strings',
      'A combination of functions',
    ],
    correctAnswer: 'A combination of variables, functions and data structure',
  },
  {
    question: 'Which company developed JavaScript?',
    answerOptions: [
      'Microsoft',
      'Netscape',
      'IBM',
    ],
    correctAnswer: 'Netscape',
  },
  {
    question: 'Which one of these alternatives is not a JavaScript data type?',
    answerOptions: [
      'Number',
      'Add',
      'Boolean',
    ],
    correctAnswer: 'Add',
  },
];

/* Function to initialize the website */
function init() {
  btnStartQuiz = document.querySelector('.start-quiz-btn');
  questionContainer = document.querySelector('.question-container');
  newGame = document.querySelector('.new-game');
  /* Calling functions */
  btnStartQuiz.addEventListener('click', showQuestions);
  btnStartQuiz.addEventListener('click', nextQuestion);
  btnAnswer1.addEventListener('click', checkAnswer);
  btnAnswer2.addEventListener('click', checkAnswer);
  btnAnswer3.addEventListener('click', checkAnswer);
  newGame.addEventListener('click', playAgain);

  /* Adding classes to HTML elements */
  pointsContainer.classList.add('points-container-hidden');
}


/* Function which shows btn to play a new game */
function playAgain() {
  btnStartQuiz.classList.remove('btn-start-quiz-hidden');
  pointsContainer.classList.add('points-container-hidden');
  currentQuestion = 0;
  points = 0;
  showQuestions();
}


/* Function to hide the start quiz btn and to show the quiz container */
function showQuestions() {
  if (btnStartQuiz !== undefined) {
    btnStartQuiz.classList.add('btn-start-quiz-hidden');
  } 

  questionContainer.classList.add('quiz-container-visible');
}
console.log(points)


function checkAnswer(e) {
  const choosenAnswer = e.currentTarget.innerText;

  if (choosenAnswer == questions[currentQuestion - 1].correctAnswer) {
    points ++;
  }
  console.log(points);

  nextQuestion();
}


/* Function to show the questions*/
function nextQuestion() {
  questionContainer.classList.remove('quiz-container-hidden');

  if (currentQuestion >= questions.length) {
    showPoints();
  }

  questionTextDiv.innerHTML = questions[currentQuestion].question
  btnAnswer1.innerHTML = questions[currentQuestion].answerOptions[0]
  btnAnswer2.innerHTML = questions[currentQuestion].answerOptions[1]
  btnAnswer3.innerHTML = questions[currentQuestion].answerOptions[2]

  currentQuestion += 1;
}


/* Function which hides the questions and
   show total amount of scored points */
function showPoints() {
  questionContainer.classList.add('quiz-container-hidden');
  console.log("showPoints")
  pointsContainer.classList.remove('points-container-hidden');

  if (points > 1 | points == 0) {
    scoredPoints.innerHTML = `You scored a total amount of ${points} points`; 
  } else {
    scoredPoints.innerHTML = `You scored a total amount of ${points} point`; 
  }
}

init();
