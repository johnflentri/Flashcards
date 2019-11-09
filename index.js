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

let randomCardNumberDutch = Math.floor(Math.random() * flashcardsDutch.length)

function randomWordDutch() {
    randomCardNumberDutch = Math.floor(Math.random() * flashcardsDutch.length)
    document.getElementById("randomQuestionDutch").innerHTML = flashcardsDutch[randomCardNumberDutch].question;
}

function showAnswerDutch() {
    document.getElementById("showAnswerDutchP").innerHTML = flashcardsDutch[randomCardNumberDutch].answer;
}