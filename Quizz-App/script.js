const javaQuizData = [
    {
        question: "Which of the following is not a feature of Java?",
        a: "Platform Independence",
        b: "Automatic Memory Management",
        c: "Multiple Inheritance",
        d: "Object-Oriented Programming",
        correct: "c",
    },
    {
        question: "What does JPA stand for?",
        a: "Java Persistence API",
        b: "Java Programming Association",
        c: "JavaScript Persistence API",
        d: "Java Programmatic Access",
        correct: "a",
    },
    {
        question: "Which of the following is not a type of association in Hibernate?",
        a: "One-to-One",
        b: "One-to-Many",
        c: "Many-to-None",
        d: "Many-to-Many",
        correct: "c",
    },
    {
        question: "What is Spring Framework primarily used for?",
        a: "Database Management",
        b: "Web Application Development",
        c: "Game Development",
        d: "Operating System Development",
        correct: "b",
    },
];

const quizz = document.getElementById('quizz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuizz = 0;
let score = 0;

loadQuizz();

function loadQuizz(){
    deselectAnswers();

    const currentQuizzData = javaQuizData[currentQuizz];

    questionEl.innerText = currentQuizzData.question;
    a_text.innerText = currentQuizzData.a;
    b_text.innerText = currentQuizzData.b;
    c_text.innerText = currentQuizzData.c;
    d_text.innerText = currentQuizzData.d;
}


function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked=false);
}

function getSelected(){
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener('click', ()=> {
    const answer = getSelected();

    if(answer){
        if(answer === javaQuizData[currentQuizz].correct){
            score++;
        }
        currentQuizz++;

        if(currentQuizz< javaQuizData.length){
            loadQuizz();
        }else{
            quizz.innerHTML = `
              <h2> You answered correctly at ${score}/${javaQuizData.length} questions </h2>

              <button onclick = "location.reload()">Reload</button>
            `;
        }
    }
})
