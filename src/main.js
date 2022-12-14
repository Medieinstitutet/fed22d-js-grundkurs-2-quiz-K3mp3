import './style/style.scss';

/* Global variables */
let btnStartQuiz;
let questionContainer;
let currentQuestion = 0;
let points = 0;
let newGame;

const labelForQuestion1 = document.querySelector('.label-for-question1');
const labelForQuestion2 = document.querySelector('.label-for-question2');
const labelForQuestion3 = document.querySelector('.label-for-question3');

const btnAnswer1 = document.querySelector('.btn-answer1');
const btnAnswer2 = document.querySelector('.btn-answer2');
const btnAnswer3 = document.querySelector('.btn-answer3');

const labelForAnswerOption1 = document.querySelector('.answer1');
const labelForAnswerOption2 = document.querySelector('.answer2');
const labelForAnswerOption3 = document.querySelector('.answer3');

const questionTextDiv = document.querySelector('.question');


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
  {
    question: 'Inside which HTML element do you put the JavaScript?',
    answerOptions: [
      'Script',
      'Scripts',
      'JavaScript',
    ],
    correctAnswer: 'Script',
  },
  {
    question: 'What is the correct JavaScript syntax to add content to an HTML element?',
    answerOptions: [
      'Variable.add',
      'Variable.innerHTML',
      'Variable.HTMLelement',
    ],
    correctAnswer: 'Variable.innerHTML',
  },
  {
    question: 'How do you call a JavaScript function?',
    answerOptions: [
      'name()',
      'function name()',
      'call(name())',
    ],
    correctAnswer: 'name()',
  },
];

const randomQuestion = questions.sort((a, b) => 0.5 - Math.random()) // Randomization of the questions array



/* Function to initialize the website */
function init() {
  btnStartQuiz = document.querySelector('.start-quiz-btn');
  questionContainer = document.querySelector('.question-container');
  newGame = document.querySelector('.new-game');
  /* Calling functions */
  btnStartQuiz.addEventListener('click', showQuestions);
  btnStartQuiz.addEventListener('click', nextQuestion);
  labelForAnswerOption1.addEventListener('click', checkAnswer);
  labelForAnswerOption2.addEventListener('click', checkAnswer);
  labelForAnswerOption3.addEventListener('click', checkAnswer);
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
  init();
}


/* Function to hide the start quiz btn and to show the quiz container */
function showQuestions() {
  if (btnStartQuiz !== undefined) {
    btnStartQuiz.classList.add('btn-start-quiz-hidden');
  } 

  questionContainer.classList.add('quiz-container-visible');
}


function checkAnswer(e) {
  const choosenAnswer = e.currentTarget.innerText;
  console.log(choosenAnswer);

  if (choosenAnswer !== questions[currentQuestion - 1].correctAnswer) {
    points -= 1;
  } else {
      points += 1;
  }

  btnAnswer1.checked = false;
  btnAnswer2.checked = false;
  btnAnswer3.checked = false;
    
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
  labelForAnswerOption1.innerHTML = questions[currentQuestion].answerOptions[0]
  labelForAnswerOption2.innerHTML = questions[currentQuestion].answerOptions[1]
  labelForAnswerOption3.innerHTML = questions[currentQuestion].answerOptions[2]

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
