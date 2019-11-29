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

// let flashcardsIndonesian = [
//     { id: 1, question: 'good afternoon', answer: 'selamat sore' },
//     { id: 2, question: 'bicycle', answer: 'sepeda' },
//     { id: 3, question: 'vacuum cleaner', answer: 'penyedot debu' },
//     { id: 4, question: 'year', answer: 'tahun' },
//     { id: 5, question: 'today', answer: 'hari ini' },
//     { id: 6, question: 'tomorrow', answer: 'besok' },
//     { id: 7, question: 'yesterday', answer: 'kemarin' },
//     { id: 8, question: 'use', answer: 'menggunakan' },
//     { id: 9, question: 'difficult', answer: 'sulit' },
//     { id: 10, question: 'easy', answer: 'mudah' },
// ]

// let flashcardsIndonesianNew = [
//     { id: 1, question: 'weather', answer: 'cuaca' },
//     { id: 2, question: 'cheers', answer: 'tepuk tangang' },
//     { id: 3, question: 'flower', answer: 'bunga' },
//     { id: 4, question: 'lightning', answer: 'petir' },
//     { id: 5, question: 'celebrate', answer: 'merayakan' },
//     { id: 6, question: 'prince', answer: 'pangeran' },
//     { id: 7, question: 'pigeon', answer: 'merpati' },
//     { id: 8, question: 'groceries', answer: 'bahan makanan' },
//     { id: 9, question: 'sunset', answer: 'matahari terbenam' },
//     { id: 10, question: 'ice cream', answer: 'es krim' },
// ]

let maths1
let maths2
let mathsOperator = ["+", "-", "*", "/"];

let flashcardsMathsB = [
    { id: 1, question: ((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[0] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[0] + maths2) },
    { id: 2, question: ((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[1] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[1] + maths2) },
    { id: 3, question: ((maths1 = Math.floor(Math.random() * 8) + 2) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[2] + maths2) },
    { id: 4, question: eval((maths1 = Math.floor(Math.random() * 8) + 2) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 8) + 2)) + mathsOperator[3] + maths2, answer: maths1 },
]

// let flashcardsMathsI = [
//     { id: 1, question: ((maths1 = Math.floor(Math.random() * 899) + 101) + mathsOperator[0] + (maths2 = Math.floor(Math.random() * 899) + 101)), answer: eval(maths1 + mathsOperator[0] + maths2) },
//     { id: 2, question: ((maths1 = Math.floor(Math.random() * 899) + 101) + mathsOperator[1] + (maths2 = Math.floor(Math.random() * 899) + 101)), answer: eval(maths1 + mathsOperator[1] + maths2) },
//     { id: 3, question: ((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[2] + maths2) },
//     { id: 4, question: eval((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 8) + 2)) + mathsOperator[3] + maths2, answer: maths1 },
// ]

// let flashcardsMathsE = [
//     { id: 1, question: ((maths1 = Math.floor(Math.random() * 8999) + 1001) + mathsOperator[0] + (maths2 = Math.floor(Math.random() * 8999) + 1001)), answer: eval(maths1 + mathsOperator[0] + maths2) },
//     { id: 2, question: ((maths1 = Math.floor(Math.random() * 8999) + 1001) + mathsOperator[1] + (maths2 = Math.floor(Math.random() * 8999) + 1001)), answer: eval(maths1 + mathsOperator[1] + maths2) },
//     { id: 3, question: ((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 899) + 101)), answer: eval(maths1 + mathsOperator[2] + maths2) },
//     { id: 4, question: eval((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 89) + 11)) + mathsOperator[3] + maths2, answer: maths1 },
// ]

// let flashcardsCreate = []

let randomCardNumberDutch = flashcardsDutch[Math.floor(Math.random() * flashcardsDutch.length)]
let randomCardNumberGerman = flashcardsGerman[Math.floor(Math.random() * flashcardsGerman.length)]
let randomCardNumberMathsB = flashcardsMathsB[Math.floor(Math.random() * flashcardsMathsB.length)]

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

// function randomWordIndonesian(){
//     randomiseNow('Indonesian', flashcardsIndonesian)
// }

function randomEqMathsB() {
    randomCardNumberMathsB = flashcardsMathsB[Math.floor(Math.random() * flashcardsMathsB.length)]
    randomiseNow('MathsB', flashcardsMathsB, randomCardNumberMathsB)
}

// function randomEqMathsI(){
//     randomiseNow('MathsI', flashcardsMathsI)
// }

// function randomEqMathsE(){
//     randomiseNow('MathsE', flashcardsMathsE)
// }

// function randomiseCreate(){
//     randomiseNow('Create', flashcardsCreate)
// }

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

// function getNewIndonesian() {
//     getNew(flashcardsIndonesian, flashcardsIndonesianNew)
//     updateTotalIndonesian();
// }

function getNewMaths(questionSet, questionSetNew) {
    questionSet.push(questionSetNew)
}

function getNewMathsBAdd() {
    flashcardsMathsBAdd = { id: flashcardsMathsB.length + 1, question: ((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[0] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[0] + maths2) };
    getNewMaths(flashcardsMathsB, flashcardsMathsBAdd)
    updateTotalMathsB();
}

// function getNewMathsBAdd() {
//     flashcardsMathsB.push({ id: flashcardsMathsB.length + 1, question: ((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[0] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[0] + maths2) });
//     updateTotalMathsB();
// }

// function getNewMathsBSubtract() {
//     flashcardsMathsB.push({ id: flashcardsMathsB.length + 1, question: ((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[1] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[1] + maths2) });
//     updateTotalMathsB();
// }

// function getNewMathsBMultiply() {
//     flashcardsMathsB.push({ id: flashcardsMathsB.length + 1, question: ((maths1 = Math.floor(Math.random() * 8) + 2) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[2] + maths2) });
//     updateTotalMathsB();
// }

// function getNewMathsBDivide() {
//     flashcardsMathsB.push({ id: flashcardsMathsB.length + 1, question: eval((maths1 = Math.floor(Math.random() * 8) + 2) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 8) + 2)) + mathsOperator[3] + maths2, answer: maths1 });
//     updateTotalMathsB();
// }

// function getNewMathsIAdd() {
//     flashcardsMathsI.push({ id: flashcardsMathsB.length + 1, question: ((maths1 = Math.floor(Math.random() * 899) + 101) + mathsOperator[0] + (maths2 = Math.floor(Math.random() * 899) + 101)), answer: eval(maths1 + mathsOperator[0] + maths2) });
//     updateTotalMathsI();
// }

// function getNewMathsISubtract() {
//     flashcardsMathsI.push({ id: flashcardsMathsB.length + 1, question: ((maths1 = Math.floor(Math.random() * 899) + 101) + mathsOperator[1] + (maths2 = Math.floor(Math.random() * 899) + 101)), answer: eval(maths1 + mathsOperator[1] + maths2) });
//     updateTotalMathsI();
// }

// function getNewMathsIMultiply() {
//     flashcardsMathsI.push({ id: flashcardsMathsB.length + 1, question: ((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 89) + 11)), answer: eval(maths1 + mathsOperator[2] + maths2) });
//     updateTotalMathsI();
// }

// function getNewMathsIDivide() {
//     flashcardsMathsI.push({ id: flashcardsMathsB.length + 1, question: eval((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 8) + 2)) + mathsOperator[3] + maths2, answer: maths1 });
//     updateTotalMathsI();
// }

// function getNewMathsEAdd() {
//     flashcardsMathsE.push({ id: flashcardsMathsE.length + 1, question: ((maths1 = Math.floor(Math.random() * 8999) + 1001) + mathsOperator[0] + (maths2 = Math.floor(Math.random() * 8999) + 1001)), answer: eval(maths1 + mathsOperator[0] + maths2) });
//     updateTotalMathsE();
// }

// function getNewMathsESubtract() {
//     flashcardsMathsE.push({ id: flashcardsMathsE.length + 1, question: ((maths1 = Math.floor(Math.random() * 8999) + 1001) + mathsOperator[1] + (maths2 = Math.floor(Math.random() * 8999) + 1001)), answer: eval(maths1 + mathsOperator[1] + maths2) });
//     updateTotalMathsE();
// }

// function getNewMathsEMultiply() {
//     flashcardsMathsE.push({ id: flashcardsMathsE.length + 1, question: ((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 899) + 101)), answer: eval(maths1 + mathsOperator[2] + maths2) });
//     updateTotalMathsE();
// }

// function getNewMathsEDivide() {
//     flashcardsMathsE.push({ id: flashcardsMathsE.length + 1, question: eval((maths1 = Math.floor(Math.random() * 89) + 11) + mathsOperator[2] + (maths2 = Math.floor(Math.random() * 89) + 11)) + mathsOperator[3] + maths2, answer: maths1 });
//     updateTotalMathsE();
// }

    function submit(quizType, questionSet, randomCardNumber) {
        if ((questionSet.length >= 1) && document.getElementById(`randomQuestion${quizType}`).innerHTML == randomCardNumber.question && document.getElementById(`input${quizType}`).value == randomCardNumber.answer) {
            document.getElementById(`result${quizType}P`).innerHTML = "Correct!";
        } else if ((questionSet.length >= 1) && document.getElementById(`randomQuestion${quizType}`).innerHTML == randomCardNumber.question && document.getElementById(`input${quizType}`).value !== randomCardNumber.answer) {
            document.getElementById(`result${quizType}P`).innerHTML = "Incorrect.";
        } else {
            alert("You need to generate a word first!")
        }
    }

    function submitDutch() {
        submit('Dutch', flashcardsDutch, randomCardNumberDutch)
    }

    function submitGerman() {
        submit('German', flashcardsGerman, randomCardNumberGerman)
    }

    // function submitIndonesian() {
    //     if (document.getElementById("randomQuestionIndonesian").innerHTML == flashcardsIndonesian[randomCardNumberIndonesian].question && inputIndonesian.value == flashcardsIndonesian[randomCardNumberIndonesian].answer) {
    //         document.getElementById("resultIndonesianP").innerHTML = "Correct!";
    //     } else if (document.getElementById("randomQuestionIndonesian").innerHTML == flashcardsIndonesian[randomCardNumberIndonesian].question && inputIndonesian.value !== flashcardsIndonesian[randomCardNumberIndonesian].answer) {
    //         document.getElementById("resultIndonesianP").innerHTML = "Incorrect.";
    //     } else {
    //         alert("You need to generate a word first!")
    //     }
    // }

    function submitMathsB() {
        submit('MathsB', randomCardNumberMathsB)
    }

    // function submitMathsI() {
    //     if (document.getElementById("randomQuestionMathsI").innerHTML == flashcardsMathsI[randomCardNumberMathsI].question && inputMathsI.value == flashcardsMathsI[randomCardNumberMathsI].answer) {
    //         document.getElementById("resultMathsIP").innerHTML = "Correct!";
    //     } else if (document.getElementById("randomQuestionMathsI").innerHTML == flashcardsMathsI[randomCardNumberMathsI].question && inputMathsI.value !== flashcardsMathsI[randomCardNumberMathsI].answer) {
    //         document.getElementById("resultMathsIP").innerHTML = "Incorrect.";
    //     } else {
    //         alert("You need to generate an equation first!")
    //     }
    // }

    // function submitMathsE() {
    //     if (document.getElementById("randomQuestionMathsE").innerHTML == flashcardsMathsE[randomCardNumberMathsE].question && inputMathsE.value == flashcardsMathsE[randomCardNumberMathsE].answer) {
    //         document.getElementById("resultMathsEP").innerHTML = "Correct!";
    //     } else if (document.getElementById("randomQuestionMathsE").innerHTML == flashcardsMathsE[randomCardNumberMathsE].question && inputMathsE.value !== flashcardsMathsE[randomCardNumberMathsE].answer) {
    //         document.getElementById("resultMathsEP").innerHTML = "Incorrect.";
    //     } else {
    //         alert("You need to generate an equation first!")
    //     }
    // }

    // function submitCreate() {
    //     if (document.getElementById("randomQuestionCreate").innerHTML == flashcardsCreate[randomCardNumberCreate].question && inputCreate.value == flashcardsCreate[randomCardNumberCreate].answer) {
    //         document.getElementById("resultCreateP").innerHTML = "Correct!";
    //     } else if (document.getElementById("randomQuestionCreate").innerHTML == flashcardsCreate[randomCardNumberCreate].question && inputCreate.value !== flashcardsCreate[randomCardNumberCreate].answer) {
    //         document.getElementById("resultCreateP").innerHTML = "Incorrect.";
    //     } else {
    //         alert("You need to generate a question first!")
    //     }
    // }

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

    // function showAnswerIndonesian() {
    //     if (document.getElementById("randomQuestionIndonesian").innerHTML == flashcardsIndonesian[randomCardNumberIndonesian].question) {
    //         document.getElementById("showAnswerIndonesianP").innerHTML = flashcardsIndonesian[randomCardNumberIndonesian].answer;
    //     } else {
    //         alert("You need to generate a word first!");
    //     }
    // }

    function showAnswerMathsB() {
        showAnswer('MathsB', randomCardNumberMathsB)
    }

    // function showAnswerMathsB() {
    //     if (document.getElementById("randomQuestionMathsB").innerHTML == flashcardsMathsB[randomCardNumberMathsB].question) {
    //         document.getElementById("showAnswerMathsBP").innerHTML = flashcardsMathsB[randomCardNumberMathsB].answer;
    //     } else {
    //         alert("You need to generate an equation first!");
    //     }
    // }

    // function showAnswerMathsI() {
    //     if (document.getElementById("randomQuestionMathsI").innerHTML == flashcardsMathsI[randomCardNumberMathsI].question) {
    //         document.getElementById("showAnswerMathsIP").innerHTML = flashcardsMathsI[randomCardNumberMathsI].answer;
    //     } else {
    //         alert("You need to generate an equation first!");
    //     }
    // }

    // function showAnswerMathsE() {
    //     if (document.getElementById("randomQuestionMathsE").innerHTML == flashcardsMathsE[randomCardNumberMathsE].question) {
    //         document.getElementById("showAnswerMathsEP").innerHTML = flashcardsMathsE[randomCardNumberMathsE].answer;
    //     } else {
    //         alert("You need to generate an equation first!");
    //     }
    // }

    // function showAnswerCreate() {
    //     if (document.getElementById("randomQuestionCreate").innerHTML == flashcardsCreate[randomCardNumberCreate].question) {
    //         document.getElementById("showAnswerCreateP").innerHTML = flashcardsCreate[randomCardNumberCreate].answer;
    //     } else {
    //         alert("You need to generate a question first!");
    //     }
    // }

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

    // function removeQIndonesian() {
    //     if (document.getElementById("randomQuestionIndonesian").innerHTML == flashcardsIndonesian[randomCardNumberIndonesian].question) {
    //         flashcardsIndonesian.splice(randomCardNumberIndonesian, 1);
    //         document.getElementById("randomQuestionIndonesian").innerHTML = "<p id=randomQuestionIndonesian><br></p>";
    //         document.getElementById("clearTextIndonesian").innerHTML = "<input type=text id=inputIndonesian class=form-med placeholder=answer /><button class=button med-btn onclick=submitIndonesian()>Submit answer</button>";
    //         document.getElementById("resultIndonesianP").innerHTML = "<p id=resultIndonesianP><br></p>";
    //         document.getElementById("showAnswerIndonesianP").innerHTML = "<p id=showAnswerIndonesianP><br></p>";
    //     } else {
    //         alert("You need to generate a word first!");
    //     }
    // }

    function removeQMathsB() {
        removeQ('MathsB', flashcardsMathsB, randomCardNumberMathsB)
        updateTotalMathsB();
    }

    // function removeQMathsI() {
    //     if (document.getElementById("randomQuestionMathsI").innerHTML == flashcardsMathsI[randomCardNumberMathsI].question) {
    //         flashcardsMathsI.splice(randomCardNumberMathsI, 1);
    //         document.getElementById("randomQuestionMathsI").innerHTML = "<p id=randomQuestionMathsI><br></p>";
    //         document.getElementById("clearTextMathsI").innerHTML = "<input type=text id=inputMathsI class=form-med placeholder=answer /><button class=button med-btn onclick=submitMathsI()>Submit answer</button>";
    //         document.getElementById("resultMathsIP").innerHTML = "<p id=resultMathsIP><br></p>";
    //         document.getElementById("showAnswerMathsIP").innerHTML = "<p id=showAnswerMathsIP><br></p>";
    //     } else {
    //         alert("You need to generate an equation first!");
    //     }
    // }

    // function removeQMathsE() {
    //     if (document.getElementById("randomQuestionMathsE").innerHTML == flashcardsMathsE[randomCardNumberMathsE].question) {
    //         flashcardsMathsE.splice(randomCardNumberMathsE, 1);
    //         document.getElementById("randomQuestionMathsE").innerHTML = "<p id=randomQuestionMathsE><br></p>";
    //         document.getElementById("clearTextMathsE").innerHTML = "<input type=text id=inputMathsE class=form-med placeholder=answer /><button class=button med-btn onclick=submitMathsE()>Submit answer</button>";
    //         document.getElementById("resultMathsEP").innerHTML = "<p id=resultMathsEP><br></p>";
    //         document.getElementById("showAnswerMathsEP").innerHTML = "<p id=showAnswerMathsEP><br></p>";
    //     } else {
    //         alert("You need to generate an equation first!");
    //     }
    // }

    // function removeQCreate() {
    //     if (document.getElementById("randomQuestionCreate").innerHTML == flashcardsCreate[randomCardNumberCreate].question) {
    //         flashcardsCreate.splice(randomCardNumberCreate, 1);
    //         document.getElementById("randomQuestionCreate").innerHTML = "<p id=randomQuestionCreate><br></p>";
    //         document.getElementById("clearTextCreate").innerHTML = "<input type=text id=inputCreate class=form-med placeholder=answer /><button class=button med-btn onclick=submitCreate()>Submit answer</button>";
    //         document.getElementById("resultCreateP").innerHTML = "<p id=resultCreateP><br></p>";
    //         document.getElementById("showAnswerCreateP").innerHTML = "<p id=showAnswerCreateP><br></p>";
    //     } else {
    //         alert("You need to generate a question first!");
    //     }
    // }

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
    }

    // function submitQIndonesian() {
    //     if (newQIndonesian.value !== "" && newAIndonesian.value !== "") {
    //         flashcardsIndonesian.push({ id: flashcardsIndonesian.length + 1, question: newQIndonesian.value, answer: newAIndonesian.value });
    //         document.getElementById("clearIndonesianSubmit").innerHTML = "<input type=text id=newQIndonesian class=form-med placeholder=question /><input type=text id=newAIndonesian class=form-med placeholder=answer /><button id=submitQIndonesian class=button med-btn onclick=submitQIndonesian()>Add question</button>";
    //         updateTotalIndonesian();
    //     } else {
    //         alert("Make sure you have added a question and an answer to the corresponding boxes.");
    //     }
    // }

    function submitQMathsB() {
        submitQ('MathsB', flashcardsMathsB)
    }

    // function submitQMathsI() {
    //     if (newQMathsI.value !== "" && newAMathsI.value !== "") {
    //         flashcardsMathsI.push({ id: flashcardsMathsI.length + 1, question: newQMathsI.value, answer: newAMathsI.value });
    //         document.getElementById("clearMathsISubmit").innerHTML = "<input type=text id=newQMathsI class=form-med placeholder=question /><input type=text id=newAMathsI class=form-med placeholder=answer /><button id=submitQMathsI class=button med-btn onclick=submitQMathsI()>Add question</button>";
    //         updateTotalMathsI();
    //     } else {
    //         alert("Make sure you have added a question and an answer to the corresponding boxes.");
    //     }
    // }

    // function submitQMathsE() {
    //     if (newQMathsE.value !== "" && newAMathsE.value !== "") {
    //         flashcardsMathsE.push({ id: flashcardsMathsE.length + 1, question: newQMathsE.value, answer: newAMathsE.value });
    //         document.getElementById("clearMathsESubmit").innerHTML = "<input type=text id=newQMathsE class=form-med placeholder=question /><input type=text id=newAMathsE class=form-med placeholder=answer /><button id=submitQMathsE class=button med-btn onclick=submitQMathsE()>Add question</button>";
    //         updateTotalMathsE();
    //     } else {
    //         alert("Make sure you have added a question and an answer to the corresponding boxes.");
    //     }
    // }

    // function submitQCreate() {
    //     if (newQCreate.value !== "" && newACreate.value !== "") {
    //         flashcardsCreate.push({ id: flashcardsCreate.length + 1, question: newQCreate.value, answer: newACreate.value });
    //         document.getElementById("clearCreateSubmit").innerHTML = "<input type=text id=newQCreate class=form-med placeholder=question /><input type=text id=newACreate class=form-med placeholder=answer /><button id=submitQCreate class=button med-btn onclick=submitQCreate()>Add question</button>";
    //         updateTotalCreate();
    //     } else {
    //         alert("Make sure you have added a question and an answer to the corresponding boxes.");
    //     }
    // }

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

    updateTotalDutch();



    function updateTotalGerman() {
        updateTotal('German', flashcardsGerman, updateTotalGerman)
    }

    updateTotalGerman();


    // function updateTotalIndonesian() {
    //     let totalQuestionsIndonesianP = document.getElementById("totalQuestionsIndonesianP");
    //     let totalQuestionsIndonesian = flashcardsIndonesian.length;
    //     totalQuestionsIndonesianP.innerHTML = totalQuestionsIndonesian;
    //     document.getElementById("removeQIndonesian").addEventListener("click", updateTotalIndonesian);
    //     document.getElementById("submitQIndonesian").addEventListener("click", updateTotalIndonesian);
    // }

    function updateTotalMathsB() {
        updateTotal('MathsB', flashcardsMathsB, updateTotalMathsB)
    }

    updateTotalMathsB();

// function updateTotalMathsB() {
//     let totalQuestionsMathsBP = document.getElementById("totalQuestionsMathsBP");
//     let totalQuestionsMathsB = flashcardsMathsB.length;
//     totalQuestionsMathsBP.innerHTML = totalQuestionsMathsB;
//     document.getElementById("removeQMathsB").addEventListener("click", updateTotalMathsB);
//     document.getElementById("submitQMathsB").addEventListener("click", updateTotalMathsB);
// }

// function updateTotalMathsI() {
//     let totalQuestionsMathsIP = document.getElementById("totalQuestionsMathsIP");
//     let totalQuestionsMathsI = flashcardsMathsI.length;
//     totalQuestionsMathsIP.innerHTML = totalQuestionsMathsI;
//     document.getElementById("removeQMathsI").addEventListener("click", updateTotalMathsI);
//     document.getElementById("submitQMathsI").addEventListener("click", updateTotalMathsI);
// }

// function updateTotalMathsE() {
//     let totalQuestionsMathsEP = document.getElementById("totalQuestionsMathsEP");
//     let totalQuestionsMathsE = flashcardsMathsE.length;
//     totalQuestionsMathsEP.innerHTML = totalQuestionsMathsE;
//     document.getElementById("removeQMathsE").addEventListener("click", updateTotalMathsE);
//     document.getElementById("submitQMathsE").addEventListener("click", updateTotalMathsE);
// }

// function updateTotalCreate() {
//     let totalQuestionsCreateP = document.getElementById("totalQuestionsCreateP");
//     let totalQuestionsCreate = flashcardsCreate.length;
//     totalQuestionsCreateP.innerHTML = totalQuestionsCreate;
//     document.getElementById("removeQCreate").addEventListener("click", updateTotalCreate);
//     document.getElementById("submitQCreate").addEventListener("click", updateTotalCreate);
// }

// updateTotalDutch();
// updateTotalGerman();
// updateTotalIndonesian();
// updateTotalMathsB();
// updateTotalMathsI();
// updateTotalMathsE();
// updateTotalCreate();