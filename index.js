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

let flashcardsGerman = [
    { id: 1, question: 'good afternoon', answer: 'guten tag' },
    { id: 2, question: 'bicycle', answer: 'fahrrad' },
    { id: 3, question: 'vacuum cleaner', answer: 'staubsauger' },
    { id: 4, question: 'year', answer: 'jahr' },
    { id: 5, question: 'today', answer: 'heute' },
    { id: 6, question: 'tomorrow', answer: 'morgen' },
    { id: 7, question: 'yesterday', answer: 'gestern' },
    { id: 8, question: 'use', answer: 'verwenden' },
    { id: 9, question: 'difficult', answer: 'schwierig' },
    { id: 10, question: 'easy', answer: 'einfach' },
]

let flashcardsGermanNew = [
    { id: 1, question: 'weather', answer: 'wetter' },
    { id: 2, question: 'cheers', answer: 'prost' },
    { id: 3, question: 'flower', answer: 'blume' },
    { id: 4, question: 'lightning', answer: 'blitz' },
    { id: 5, question: 'celebrate', answer: 'feiern' },
    { id: 6, question: 'prince', answer: 'prinz' },
    { id: 7, question: 'pigeon', answer: 'taube' },
    { id: 8, question: 'groceries', answer: 'lebensmittel' },
    { id: 9, question: 'sunset', answer: 'sonnenuntergang' },
    { id: 10, question: 'ice cream', answer: 'eiscreme' },
]

let flashcardsIndonesian = [
    { id: 1, question: 'good afternoon', answer: 'selamat sore' },
    { id: 2, question: 'bicycle', answer: 'sepeda' },
    { id: 3, question: 'vacuum cleaner', answer: 'penyedot debu' },
    { id: 4, question: 'year', answer: 'tahun' },
    { id: 5, question: 'today', answer: 'hari ini' },
    { id: 6, question: 'tomorrow', answer: 'besok' },
    { id: 7, question: 'yesterday', answer: 'kemarin' },
    { id: 8, question: 'use', answer: 'menggunakan' },
    { id: 9, question: 'difficult', answer: 'sulit' },
    { id: 10, question: 'easy', answer: 'mudah' },
]

let flashcardsIndonesianNew = [
    { id: 1, question: 'weather', answer: 'cuaca' },
    { id: 2, question: 'cheers', answer: 'tepuk tangang' },
    { id: 3, question: 'flower', answer: 'bunga' },
    { id: 4, question: 'lightning', answer: 'petir' },
    { id: 5, question: 'celebrate', answer: 'merayakan' },
    { id: 6, question: 'prince', answer: 'pangeran' },
    { id: 7, question: 'pigeon', answer: 'merpati' },
    { id: 8, question: 'groceries', answer: 'bahan makanan' },
    { id: 9, question: 'sunset', answer: 'matahari terbenam' },
    { id: 10, question: 'ice cream', answer: 'es krim' },
]

let maths1A = (Math.floor(Math.random() * 8) + 2)
let maths1B = (Math.floor(Math.random() * 8) + 2)
let maths2A = (Math.floor(Math.random() * 89) + 11)
let maths2B = (Math.floor(Math.random() * 89) + 11)
let maths2C = (Math.floor(Math.random() * 89) + 11)
let maths2D = (Math.floor(Math.random() * 89) + 11)
let maths3A = (Math.floor(Math.random() * 899) + 101)
let maths3B = (Math.floor(Math.random() * 899) + 101)
let maths3C = (Math.floor(Math.random() * 899) + 101)
let maths3D = (Math.floor(Math.random() * 899) + 101)
let maths4A = (Math.floor(Math.random() * 8999) + 1001)
let maths4B = (Math.floor(Math.random() * 8999) + 1001)
let maths4C = (Math.floor(Math.random() * 8999) + 1001)
let maths4D = (Math.floor(Math.random() * 8999) + 1001)
let mathsOperator = ["+", "-", "*", "/"];

let flashcardsMathsB = [
    { id: 1, question: (maths2A + mathsOperator[0] + maths2B), answer: eval(maths2A + mathsOperator[0] + maths2B) },
    { id: 2, question: (maths2C + mathsOperator[1] + maths2D), answer: eval(maths2C + mathsOperator[1] + maths2D) },
    { id: 3, question: (maths1A + mathsOperator[2] + maths2A), answer: eval(maths1A + mathsOperator[2] + maths2A) },
    { id: 4, question: eval(maths1A + mathsOperator[2] + maths1B) + mathsOperator[3] + maths1B, answer: maths1A },
]

let flashcardsMathsI = [
    { id: 1, question: (maths3A + mathsOperator[0] + maths3B), answer: eval(maths3A + mathsOperator[0] + maths3B) },
    { id: 2, question: (maths3C + mathsOperator[1] + maths3D), answer: eval(maths3C + mathsOperator[1] + maths3D) },
    { id: 3, question: (maths2A + mathsOperator[2] + maths2B), answer: eval(maths2A + mathsOperator[2] + maths2B) },
    { id: 4, question: eval(maths2A + mathsOperator[2] + maths1A) + mathsOperator[3] + maths1A, answer: maths2A },
]

let flashcardsMathsE = [
    { id: 1, question: (maths4A + mathsOperator[0] + maths4B), answer: eval(maths4A + mathsOperator[0] + maths4B) },
    { id: 2, question: (maths4C + mathsOperator[1] + maths4D), answer: eval(maths4C + mathsOperator[1] + maths4D) },
    { id: 3, question: (maths2A + mathsOperator[2] + maths3A), answer: eval(maths2A + mathsOperator[2] + maths3A) },
    { id: 4, question: eval(maths2A + mathsOperator[2] + maths2B) + mathsOperator[3] + maths2B, answer: maths2A },
]

let flashcardsCreate = []

let randomCardNumberDutch = flashcardsDutch[Math.floor(Math.random() * flashcardsDutch.length)]
let randomCardNumberGerman = flashcardsGerman[Math.floor(Math.random() * flashcardsGerman.length)]
let randomCardNumberIndonesian = flashcardsIndonesian[Math.floor(Math.random() * flashcardsIndonesian.length)]
let randomCardNumberMathsB = flashcardsMathsB[Math.floor(Math.random() * flashcardsMathsB.length)]
let randomCardNumberMathsI = flashcardsMathsI[Math.floor(Math.random() * flashcardsMathsI.length)]
let randomCardNumberMathsE = flashcardsMathsE[Math.floor(Math.random() * flashcardsMathsE.length)]
let randomCardNumberCreate = flashcardsCreate[Math.floor(Math.random() * flashcardsCreate.length)]


function randomiseNow(quizType, questionSet, randomCardNumber) {
    if (questionSet.length >= 1) {
        document.getElementById(`randomQuestion${quizType}`).innerHTML = randomCardNumber.question;
        document.getElementById(`clearText${quizType}`).innerHTML = `<input type=text id=input${quizType} class=form-med placeholder=answer /><button class=button med-btn onclick=submit${quizType}()>Submit answer</button>`;
        document.getElementById(`result${quizType}P`).innerHTML = `<p id=result${quizType}P><br></p>`;
        document.getElementById(`showAnswer${quizType}P`).innerHTML = `<p id=showAnswer${quizType}P><br></p>`;
    } else {
        alert("There are no questions left! Click the \"Add bonus word\" button or fill in the forms and add your own questions.")
    }
}

function randomWordDutch() {
    randomCardNumberDutch = flashcardsDutch[Math.floor(Math.random() * flashcardsDutch.length)]
    randomiseNow('Dutch', flashcardsDutch, randomCardNumberDutch)
}

function randomWordGerman() {
    randomCardNumberGerman = flashcardsGerman[Math.floor(Math.random() * flashcardsGerman.length)]
    randomiseNow('German', flashcardsGerman, randomCardNumberGerman)
}

function randomWordIndonesian() {
    randomCardNumberIndonesian = flashcardsIndonesian[Math.floor(Math.random() * flashcardsIndonesian.length)]
    randomiseNow('Indonesian', flashcardsIndonesian, randomCardNumberIndonesian)
}

function randomEqMathsB() {
    randomCardNumberMathsB = flashcardsMathsB[Math.floor(Math.random() * flashcardsMathsB.length)]
    randomiseNow('MathsB', flashcardsMathsB, randomCardNumberMathsB)
}

function randomEqMathsI() {
    randomCardNumberMathsI = flashcardsMathsI[Math.floor(Math.random() * flashcardsMathsI.length)]
    randomiseNow('MathsI', flashcardsMathsI, randomCardNumberMathsI)
}

function randomEqMathsE() {
    randomCardNumberMathsE = flashcardsMathsE[Math.floor(Math.random() * flashcardsMathsE.length)]
    randomiseNow('MathsE', flashcardsMathsE, randomCardNumberMathsE)
}

function randomiseCreate(){
    randomCardNumberCreate = flashcardsCreate[Math.floor(Math.random() * flashcardsCreate.length)]
    randomiseNow('Create', flashcardsCreate, randomCardNumberCreate)
}

function getNewLanguage(questionSet, questionSetNew) {
    if (questionSetNew.length >= 1) {
        questionSet.push(questionSetNew[0])
        questionSetNew.shift(questionSetNew)
    } else {
        alert("You have added all the bonus questions!")
    }
}

function getNewDutch() {
    getNewLanguage(flashcardsDutch, flashcardsDutchNew)
    updateTotalDutch();
}

function getNewGerman() {
    getNewLanguage(flashcardsGerman, flashcardsGermanNew)
    updateTotalGerman();
}

function getNewIndonesian() {
    getNewLanguage(flashcardsIndonesian, flashcardsIndonesianNew)
    updateTotalIndonesian();
}

function mathsGenerator(questionSet, maths1, maths2, mathsOperator) {
    mathsOperator = ["+", "-", "*", "/"];
    maths1A = (Math.floor(Math.random() * 8) + 2)
    maths1B = (Math.floor(Math.random() * 8) + 2)
    maths2A = (Math.floor(Math.random() * 89) + 11)
    maths2B = (Math.floor(Math.random() * 89) + 11)
    maths2C = (Math.floor(Math.random() * 89) + 11)
    maths2D = (Math.floor(Math.random() * 89) + 11)
    maths3A = (Math.floor(Math.random() * 899) + 101)
    maths3B = (Math.floor(Math.random() * 899) + 101)
    maths3C = (Math.floor(Math.random() * 899) + 101)
    maths3D = (Math.floor(Math.random() * 899) + 101)
    maths4A = (Math.floor(Math.random() * 8999) + 1001)
    maths4B = (Math.floor(Math.random() * 8999) + 1001)
    maths4C = (Math.floor(Math.random() * 8999) + 1001)
    maths4D = (Math.floor(Math.random() * 8999) + 1001)
    questionSet.push({ id: questionSet.length + 1, question: (maths1 + mathsOperator[0] + maths2), answer: eval(maths1 + mathsOperator[0] + maths2) });
}

function getNewMathsBAdd() {
    mathsGenerator(flashcardsMathsB, maths2A, maths2B, mathsOperator[0])
    updateTotalMathsB();
}

function getNewMathsBSubtract() {
    mathsGenerator(flashcardsMathsB, maths2A, maths2B, mathsOperator[1])
    updateTotalMathsB();
}

function getNewMathsBMultiply() {
    mathsGenerator(flashcardsMathsB, maths1A, maths2A, mathsOperator[2])
    updateTotalMathsB();
}

function getNewMathsBDivide() {
    flashcardsMathsB.push({ id: 4, question: eval(maths1A + mathsOperator[2] + maths1B) + mathsOperator[3] + maths1B, answer: maths1A });
    updateTotalMathsB();
}

function getNewMathsIAdd() {
    mathsGenerator(flashcardsMathsI, maths3A, maths3B, mathsOperator[0])
    updateTotalMathsB();
}

function getNewMathsISubtract() {
    mathsGenerator(flashcardsMathsI, maths3A, maths3B, mathsOperator[1])
    updateTotalMathsI();
}

function getNewMathsIMultiply() {
    mathsGenerator(flashcardsMathsI, maths2C, maths2D, mathsOperator[2])
    updateTotalMathsI();
}

function getNewMathsIDivide() {
    flashcardsMathsI.push({ id: 4, question: eval(maths2A + mathsOperator[2] + maths1A) + mathsOperator[3] + maths1A, answer: maths2A });
    updateTotalMathsI();
}

function getNewMathsEAdd() {
    mathsGenerator(flashcardsMathsE, maths4A, maths4B, mathsOperator[0])
    updateTotalMathsE();
}

function getNewMathsESubtract() {
    mathsGenerator(flashcardsMathsE, maths4C, maths4D, mathsOperator[1])
    updateTotalMathsE();
}

function getNewMathsEMultiply() {
    mathsGenerator(flashcardsMathsE, maths2A, maths3A, mathsOperator[2])
    updateTotalMathsE();
}

function getNewMathsEDivide() {
    flashcardsMathsE.push({ id: 4, question: eval(maths2A + mathsOperator[2] + maths2B) + mathsOperator[3] + maths2B, answer: maths2A });
    updateTotalMathsE();
}

function submit(quizType, questionSet, randomCardNumber) {
    if ((questionSet.length >= 1) && document.getElementById(`randomQuestion${quizType}`).innerHTML == randomCardNumber.question && document.getElementById(`input${quizType}`).value == randomCardNumber.answer) {
        document.getElementById(`result${quizType}P`).innerHTML = "Correct!";
    } else if ((questionSet.length >= 1) && document.getElementById(`randomQuestion${quizType}`).innerHTML == randomCardNumber.question && document.getElementById(`input${quizType}`).value !== randomCardNumber.answer) {
        document.getElementById(`result${quizType}P`).innerHTML = "Incorrect.";
    } else {
        alert("You need to generate a question first!")
    }
}

function submitDutch() {
    submit('Dutch', flashcardsDutch, randomCardNumberDutch)
}

function submitGerman() {
    submit('German', flashcardsGerman, randomCardNumberGerman)
}

function submitIndonesian() {
    submit('Indonesian', flashcardsIndonesian, randomCardNumberIndonesian)
}

function submitMathsB() {
    submit('MathsB', flashcardsMathsB, randomCardNumberMathsB)
}

function submitMathsI() {
    submit('MathsI', flashcardsMathsI, randomCardNumberMathsI)
}

function submitMathsE() {
    submit('MathsE', flashcardsMathsE, randomCardNumberMathsE)
}

function submitCreate() {
    submit('Create', flashcardsCreate, randomCardNumberCreate)
}

function showAnswer(quizType, questionSet, randomCardNumber) {
    if ((questionSet.length >= 1) && document.getElementById(`randomQuestion${quizType}`).innerHTML == randomCardNumber.question) {
        document.getElementById(`showAnswer${quizType}P`).innerHTML = randomCardNumber.answer;
    } else {
        alert("You need to generate a word first!");
    }
}

function showAnswerDutch() {
    showAnswer('Dutch', flashcardsDutch, randomCardNumberDutch)
}

function showAnswerGerman() {
    showAnswer('German', flashcardsGerman, randomCardNumberGerman)
}

function showAnswerIndonesian() {
    showAnswer('Indonesian', flashcardsIndonesian, randomCardNumberIndonesian)
}

function showAnswerMathsB() {
    showAnswer('MathsB', flashcardsMathsB, randomCardNumberMathsB)
}

function showAnswerMathsI() {
    showAnswer('MathsI', flashcardsMathsI, randomCardNumberMathsI)
}

function showAnswerMathsE() {
    showAnswer('MathsE', flashcardsMathsE, randomCardNumberMathsE)
}

function showAnswerCreate() {
    showAnswer('Create', flashcardsCreate, randomCardNumberCreate)
}

function removeQ(quizType, questionSet, randomCardNumber) {
    n = questionSet.indexOf(randomCardNumber)
    if (questionSet.length >= 1 && document.getElementById(`randomQuestion${quizType}`).innerHTML == randomCardNumber.question) {
        questionSet.splice(n, 1);
        document.getElementById(`randomQuestion${quizType}`).innerHTML = `<p id=randomQuestion${quizType}><br></p>`;
        document.getElementById(`clearText${quizType}`).innerHTML = `<input type=text id=input${quizType} class=form-med placeholder=answer /><button class=button med-btn onclick=submit${quizType}()>Submit answer</button>`;
        document.getElementById(`result${quizType}P`).innerHTML = `<p id=result${quizType}P><br></p>`;
        document.getElementById(`showAnswer${quizType}P`).innerHTML = `<p id=showAnswer${quizType}P><br></p>`;
    } else {
        alert("You need to generate a word first!");
    }
}

function removeQDutch() {
    removeQ('Dutch', flashcardsDutch, randomCardNumberDutch)
    updateTotalDutch();
}

function removeQGerman() {
    removeQ('German', flashcardsGerman, randomCardNumberGerman)
    updateTotalGerman();
}

function removeQIndonesian() {
    removeQ('Indonesian', flashcardsIndonesian, randomCardNumberIndonesian)
    updateTotalIndonesian();
}

function removeQMathsB() {
    removeQ('MathsB', flashcardsMathsB, randomCardNumberMathsB)
    updateTotalMathsB();
}

function removeQMathsI() {
    removeQ('MathsI', flashcardsMathsI, randomCardNumberMathsI)
    updateTotalMathsI();
}

function removeQMathsE() {
    removeQ('MathsE', flashcardsMathsE, randomCardNumberMathsE)
    updateTotalMathsE();
}

function removeQCreate() {
    removeQ('Create', flashcardsCreate, randomCardNumberCreate)
    updateTotalCreate();
}

function submitQ(quizType, questionSet) {
    if (document.getElementById(`newQ${quizType}`).value !== "" && document.getElementById(`newA${quizType}`).value !== "") {
        questionSet.push({ id: questionSet.length + 1, question: document.getElementById(`newQ${quizType}`).value, answer: document.getElementById(`newA${quizType}`).value });
        document.getElementById(`clear${quizType}Submit`).innerHTML = `<input type=text id=newQ${quizType} class=form-med placeholder=question /><input type=text id=newA${quizType} class=form-med placeholder=answer /><button id=submitQ${quizType} class=button med-btn onclick=submitQ${quizType}()>Add question</button>`;
    } else {
        alert("Make sure you have added a question and an answer to the corresponding boxes.");
    }
}

function submitQDutch() {
    submitQ('Dutch', flashcardsDutch)
    updateTotalDutch();
}

function submitQGerman() {
    submitQ('German', flashcardsGerman)
    updateTotalGerman();
}

function submitQIndonesian() {
    submitQ('Indonesian', flashcardsIndonesian)
    updateTotalIndonesian();
}

function submitQMathsB() {
    submitQ('MathsB', flashcardsMathsB)
    updateTotalMathsB();
}

function submitQMathsI() {
    submitQ('MathsI', flashcardsMathsI)
    updateTotalMathsI();
}

function submitQMathsE() {
    submitQ('MathsE', flashcardsMathsE)
    updateTotalMathsE();
}

function submitQCreate() {
    submitQ('Create', flashcardsCreate)
    updateTotalCreate();
}

function updateTotal(quizType, questionSet, updateTotal) {
    let totalQuestionsP = document.getElementById(`totalQuestions${quizType}P`);
    let totalQuestions = questionSet.length;
    totalQuestionsP.innerHTML = totalQuestions;
    document.getElementById(`removeQ${quizType}`).addEventListener("click", updateTotal);
    document.getElementById(`submitQ${quizType}`).addEventListener("click", updateTotal);
}

function updateTotalDutch() {
    updateTotal('Dutch', flashcardsDutch, updateTotalDutch)
}

function updateTotalGerman() {
    updateTotal('German', flashcardsGerman, updateTotalGerman)
}

function updateTotalIndonesian() {
    updateTotal('Indonesian', flashcardsIndonesian, updateTotalIndonesian)
}

function updateTotalMathsB() {
    updateTotal('MathsB', flashcardsMathsB, updateTotalMathsB)
}

function updateTotalMathsI() {
    updateTotal('MathsI', flashcardsMathsI, updateTotalMathsI)
}

function updateTotalMathsE() {
    updateTotal('MathsE', flashcardsMathsE, updateTotalMathsE)
}

function updateTotalCreate() {
    updateTotal('Create', flashcardsCreate, updateTotalCreate)
}

updateTotalDutch();
updateTotalGerman();
updateTotalIndonesian();
updateTotalMathsB();
updateTotalMathsI();
updateTotalMathsE();
updateTotalCreate();