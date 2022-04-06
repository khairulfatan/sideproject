const quizData = [
    {
        question: "Aku kerja dimana sekarang?",
        a: "Gojek",
        b: "8x8",
        c: "Midtrans",
        d: "Google",
        correct: "b",
    },
    {
        question: "Tim bola favorit saya apa?",
        a: "Arsenal",
        b: "Real Madrid",
        c: "Barcelona",
        d: "Manchester United",
        correct: "a",
    },
    {
        question: "Siapa rekor pencetak goal terbanyak untuk Arsenal?",
        a: "Dennis Bergkamp",
        b: "Van Persie",
        c: "Thierry Henry",
        d: "Aubameyang",
        correct: "c",
    },
    {
        question: "Siapakah kiper pada saat membuat rekor Invincible musim 2003/2004",
        a: "David Seaman",
        b: "Manuel Almunia",
        c: "Petr Cech",
        d: "Jens Lehmann",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})