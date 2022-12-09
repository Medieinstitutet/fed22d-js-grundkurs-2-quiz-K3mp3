import './style/style.scss';

/* Global variables */
let btnStartQuiz;
let questionContainer;
let currentQuestion = 0;
let points = 0;

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
  {
    question: 'What is an object?',
    answerOptions: [
      'ett',
      'två',
      'tre',
    ],
    correctAnswer: 'två',
  },
];

/* Function to initialize the website */
function init() {
  btnStartQuiz = document.querySelector('.start-quiz-btn');
  questionContainer = document.querySelector('.question-container');
  /* Calling functions */
  btnStartQuiz.addEventListener('click', showQuestions);
  btnStartQuiz.addEventListener('click', nextQuestion);
  btnAnswer1.addEventListener('click', checkAnswer)
  btnAnswer2.addEventListener('click', checkAnswer)
  btnAnswer3.addEventListener('click', checkAnswer)
}


/* Function to hide the start quiz btn and to show the quiz container */
function showQuestions() {
  if (btnStartQuiz !== undefined) {
    btnStartQuiz.classList.add('btn-start-quiz-hidden');
  } else {

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

  questionTextDiv.innerHTML = questions[currentQuestion].question
  btnAnswer1.innerHTML = questions[currentQuestion].answerOptions[0]
  btnAnswer2.innerHTML = questions[currentQuestion].answerOptions[1]
  btnAnswer3.innerHTML = questions[currentQuestion].answerOptions[2]

  currentQuestion += 1;
 /* if(choosenAnswer = questions[currentQuestion].correctAnswer) {
    console.log("correct");
  }*/
}

init();
