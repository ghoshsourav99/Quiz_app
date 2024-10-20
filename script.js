const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "What does CPU stand for?",
    a: "Central Processing Unit",
    b: "Computer Personal Unit",
    c: "Central Power Unit",
    d: "Computer Processing Unit",
    correct: "a",
},
{
    question: "Which of the following is an input device?",
    a: "Monitor",
    b: "Keyboard",
    c: "Printer",
    d: "Speaker",
    correct: "b",
},
{
    question: "What is the main function of RAM?",
    a: "Store permanent data",
    b: "Store temporary data",
    c: "Execute instructions",
    d: "Control peripheral devices",
    correct: "b",
},
{
    question: "What does the operating system do?",
    a: "Manage hardware and software resources",
    b: "Run applications",
    c: "Store data permanently",
    d: "Provide internet access",
    correct: "a",
},
{
    question: "Which file format is commonly used for images?",
    a: ".txt",
    b: ".jpg",
    c: ".exe",
    d: ".mp3",
    correct: "b",
},
{
    question: "What is the purpose of a web browser?",
    a: "To create web pages",
    b: "To access and view websites",
    c: "To store files",
    d: "To manage hardware",
    correct: "b",
},
{
    question: "Which of the following is a programming language?",
    a: "HTML",
    b: "HTTP",
    c: "FTP",
    d: "JPEG",
    correct: "a",
},
{
    question: "What does 'GUI' stand for?",
    a: "Graphical User Interface",
    b: "General User Interface",
    c: "Graphics Unified Interface",
    d: "Guided User Input",
    correct: "a",
},
{
    question: "What type of storage is an SSD?",
    a: "Magnetic",
    b: "Optical",
    c: "Solid State",
    d: "Flash",
    correct: "c",
},
{
    question: "What is phishing?",
    a: "A type of software",
    b: "A method to secure data",
    c: "A technique to trick users into revealing sensitive information",
    d: "A hardware component",
    correct: "c",
},
{
    question: "What does WWW stand for?",
    a: "World Without Windows",
    b: "World Wide Web",
    c: "World Wide Web Applications",
    d: "World Wide Warehouse",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index); 
