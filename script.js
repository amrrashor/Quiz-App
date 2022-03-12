const startBtn = document.getElementById('start_btn'); //start button question
const nextBtn = document.getElementById('next_btn'); //next question button
const questionContainer = document.getElementById('question_container'); // question and answer
const questionElement = document.getElementById('question'); //questions
const answerBtns = document.getElementById('answer_buttons') //every answer button
let shuffledQuestions,
    currentQuestionIndex


startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    startBtn.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerBtns.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtns.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'restart'
        startBtn.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: "what is javascript?",
        answers: [
            { text: "library", correct: false },
            { text: "framework", correct: false },
            { text: "programming language", correct: true },
            { text: "coocking pot", correct: false },
        ]
    },
    {
        question: "what is PHP?",
        answers: [
            { text: "fry pan", correct: false },
            { text: "cookies", correct: false },
            { text: "programming language", correct: true },
            { text: "solo stove", correct: false },
        ]
    },
    {
        question: "what is Python?",
        answers: [
            { text: "programming language", correct: true },
            { text: "framework", correct: false },
            { text: "dog breed", correct: false },
            { text: "snake", correct: false },
        ]
    },
    {
        question: "what is React?",
        answers: [
            { text: "library", correct: true },
            { text: "framework", correct: false },
            { text: "nuclear reactor", correct: false },
            { text: "honey pot", correct: false },
        ]
    },
    {
        question: "what is Angular?",
        answers: [
            { text: "library", correct: false },
            { text: "framework", correct: true },
            { text: "programming language", correct: false },
            { text: "medical drug", correct: false },
        ]
    },
]