let flashcardsDutch = [
    { id: 1, question: 'good afternoon', answer: 'goedemiddag' },
    { id: 2, question: 'bicycle', answer: 'fiets' },
    { id: 3, question: 'vacuum cleaner', answer: 'stofzuiger' },
    { id: 4, question: 'year', answer: 'jaar' },
    { id: 5, question: 'today', answer: 'vandaag' },
    { id: 6, question: 'tomorrow', answer: 'morgen' },
    { id: 7, question: 'yesterday', answer: 'gisteren' },
    { id: 8, question: 'use', answer: 'gebruiken' },
    { id: 9, question: 'difficult', answer: 'moeilijk' },
    { id: 10, question: 'easy', answer: 'gemakkelijk' },
]

let flashcardsDutchNew = [
    { id: 1, question: 'weather', answer: 'weer' },
    { id: 2, question: 'cheers', answer: 'proost' },
    { id: 3, question: 'flower', answer: 'bloem' },
    { id: 4, question: 'lightning', answer: 'bliksem' },
    { id: 5, question: 'celebrate', answer: 'vieren' },
    { id: 6, question: 'prince', answer: 'prins' },
    { id: 7, question: 'pigeon', answer: 'duif' },
    { id: 8, question: 'groceries', answer: 'boodschappen' },
    { id: 9, question: 'sunset', answer: 'zonsondergang' },
    { id: 10, question: 'ice cream', answer: 'ijsje' },
]

let randomCardNumberDutch = Math.floor(Math.random() * flashcardsDutch.length)

function randomWordDutch() {
    randomCardNumberDutch = Math.floor(Math.random() * flashcardsDutch.length)
    document.getElementById("randomQuestionDutch").innerHTML = flashcardsDutch[randomCardNumberDutch].question;
}

function submitDutch() {
    if (document.getElementById("randomQuestionDutch").innerHTML == flashcardsDutch[randomCardNumberDutch].question && inputDutch.value == flashcardsDutch[randomCardNumberDutch].answer) {
        document.getElementById("resultDutchP").innerHTML = "Correct!";
    } else if (document.getElementById("randomQuestionDutch").innerHTML == flashcardsDutch[randomCardNumberDutch].question && inputDutch.value !== flashcardsDutch[randomCardNumberDutch].answer) {
        document.getElementById("resultDutchP").innerHTML = "Incorrect.";
    } else {
        alert("You need to generate a word first!")
    }
}

function showAnswerDutch() {
    document.getElementById("showAnswerDutchP").innerHTML = flashcardsDutch[randomCardNumberDutch].answer;
}

function getNewDutch() {
    flashcardsDutch.push(flashcardsDutchNew[0])
    flashcardsDutchNew.shift(flashcardsDutchNew)
}

function submitQDutch() {
    flashcardsDutch.push({ id: flashcardsDutch.length + 1, question: newQDutch.value, answer: newADutch.value });
}

function removeQDutch() {
    if (document.getElementById("randomQuestionDutch").innerHTML == flashcardsDutch[randomCardNumberDutch].question) {
        flashcardsDutch.splice(randomCardNumberDutch, 1);
    } else {
        alert("You need to generate a question first!");
    }
}

let maths1
let maths2
let mathsOperator = ["+", "-", "*", "/"];

let flashcardsMathsB = [
    { id: 1, question: ((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[0] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[0] + maths2) },
    { id: 2, question: ((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[1] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[1] + maths2) },
    { id: 3, question: ((maths1 = Math.floor(Math.random() * 8) + 2) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[2] + maths2) },
    { id: 4, question: eval((maths1 = Math.floor(Math.random() * 8) + 2) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 8) + 2)) + mathsOperator[3] + maths2, answer: maths1 },
]

let randomCardNumberMathsB = Math.floor(Math.random() * flashcardsMathsB.length);

function randomEqMathsB() {
    randomCardNumberMathsB = Math.floor(Math.random() * flashcardsMathsB.length);
    document.getElementById("randomQuestionMathsB").innerHTML = flashcardsMathsB[randomCardNumberMathsB].question;
}

function submitMathsB() {
    if (document.getElementById("randomQuestionMathsB").innerHTML == flashcardsMathsB[randomCardNumberMathsB].question && inputMathsB.value == flashcardsMathsB[randomCardNumberMathsB].answer) {
        document.getElementById("resultMathsBP").innerHTML = "Correct!";
    } else if (document.getElementById("randomQuestionMathsB").innerHTML == flashcardsMathsB[randomCardNumberMathsB].question && inputMathsB.value !== flashcardsMathsB[randomCardNumberMathsB].answer) {
        document.getElementById("resultMathsBP").innerHTML = "Incorrect.";
    } else {
        alert("You need to generate an equation first!")
    }
}

function showAnswerMathsB() {
    document.getElementById("showAnswerMathsBP").innerHTML = flashcardsMathsB[randomCardNumberMathsB].answer;
}

function getNewMathsBAdd() {
    flashcardsMathsB.push({ id: flashcardsMathsB.length + 1, question: ((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[0] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[0] + maths2) });
    updateTotalMathsB();
}

function getNewMathsBSubtract() {
    flashcardsMathsB.push({ id: flashcardsMathsB.length + 1, question: ((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[1] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[1] + maths2) });
    updateTotalMathsB();
}

function getNewMathsBMultiply() {
    flashcardsMathsB.push({ id: flashcardsMathsB.length + 1, question: ((maths1 = Math.floor(Math.random() * 8) + 2) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[2] + maths2) });
    updateTotalMathsB();
}

function getNewMathsBDivide() {
    flashcardsMathsB.push({ id: flashcardsMathsB.length + 1, question: eval((maths1 = Math.floor(Math.random() * 8) + 2) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 8) + 2)) + mathsOperator[3] + maths2, answer: maths1 });
    updateTotalMathsB();
}

function submitQMathsB() {
    flashcardsMathsB.push({ id: flashcardsMathsB.length + 1, question: newQMathsB.value, answer: newAMathsB.value });
}

function removeQMathsB() {
    if (document.getElementById("randomQuestionMathsB").innerHTML == flashcardsMathsB[randomCardNumberMathsB].question) {
        flashcardsMathsB.splice(randomCardNumberMathsB, 1);
    } else {
        alert("You need to generate a question first!");
    }
}