/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score*/

var controlBtns = $('#controlBtns');
var start = $('<button>').text("Start Quiz!");
var startBtn = controlBtns.append(start);
var yourScore = 0;
var questionBox = $('#questionBox');
var answerList = $('#answerList');

/* List of Questions */
var quizQuestions = [
    {
        question: "What is the paragraph element tag?",
        answers: [
            { op: '<p>', eval: true },
            { op: '<br />', eval: false },
            { op: '<div>', evel: false },
            { op: '<par>', eval: false }
        ]
    }
];

/*Score Button*/
var scoreBoard = $('<button type="button" class="btn btn-outline-success">Score</button>');

/* Evaluate Answers */
function evalAnswer(actualAnswer) {
    var answerMessage = '';
    var damage = 0;
    if (actualAnswer.eval === true) {
        answerMessage = 'Correct!';
    } else {
        answerMessage = 'Incorrect';
        damage = 50;
    }
    return answerMessage, damage;
}

/*function pushQuestions() {
    var quest = $('<button>');
    for (let i in quizQuestions) {
        questionBox.append(quest.text(quizQuestions[i].answers.a));
        questionBox.append(quest.text(quizQuestions[i].answers.b));
        questionBox.append(quest.text(quizQuestions[i].answers.c));
        questionBox.append(quest.text(quizQuestions[i].answers.d));

    }
}*/





/*Generate ScoreBoard*/
function genScore() {

}

//scoreBoard.text('test');
//scoreBoard.attr('ahref', '')

$('main').append(scoreBoard);

/* Starts the Quiz */
function quizStart() {
    startBtn.hide();
    var q = 0;
    //for (i = 0; i < quizQuestions.length; i++) {
    questionBox.text(quizQuestions[q].question);
    for (let i in quizQuestions[q].answers) {
        //answerList.append($('<p>').text(i.op));
        console.log(quizQuestions[q].answers[i]);
    }
    //}

}

/** Generates Start Button for Main Menu */
function mainMenu() {
    startBtn.on('click', quizStart);


}

mainMenu();