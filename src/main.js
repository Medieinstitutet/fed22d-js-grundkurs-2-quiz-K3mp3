import './style/style.scss';

/* Global variables */
let btnStartQuiz;
let questionContainer;

const questionTextDiv = document.querySelector('.question');
const btnAnswer1 = document.querySelector('.btn-answer1');
const btnAnswer2 = document.querySelector('.btn-answer2');
const btnAnswer3 = document.querySelector('.btn-answer3');

const questions = [
  {
    question: 'What is a variable?',
    answerOptions: [
      'hej',
      'nej',
      'inte',
    ],
    correctAnswer: 'hej',
  },
];

let currentQuestion = 0;

/* Function to initialize the website */
function init() {
  btnStartQuiz = document.querySelector('.start-quiz-btn');
  questionContainer = document.querySelector('.question-container');
  /* Calling functions */
  btnStartQuiz?.addEventListener('click', showQuestions);
}


/* Function to show the quiz questions */
function showQuestions() {
  if (btnStartQuiz !== undefined) {
    console.log('hej');
    console.log(btnStartQuiz);
    btnStartQuiz.classList.add('btn-start-quiz-hidden');
  } else {
    console.error(btnStartQuiz);
  }

  questionContainer.classList.add('quiz-container-visible');

  console.log(questions.question)

  questionTextDiv.innerHTML = questions[currentQuestion].question
  btnAnswer1.innerHTML = questions[currentQuestion].answerOptions[0]
  btnAnswer2.innerHTML = questions[currentQuestion].answerOptions[1]
  btnAnswer3.innerHTML = questions[currentQuestion].answerOptions[2]

  currentQuestion += 1;
}

init();
