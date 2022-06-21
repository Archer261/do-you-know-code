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
var questionBox = $('#questionBox');
var quizQuestions = [
    {
        question: "",
        answers: {
            a: '',
            b: '',
            c: '',
            d: ''
        },
        rightAnswer: ''
    }
];


function pushQuestions(questionSet) {
    for (var i = 0; i < questionSet.length; i++) {
        questionBox.append('<button class="btn btn-primary" type="button">Button</button>');
    }
}


/*Score Button*/
var scoreBoard = $('<button type="button" class="btn btn-outline-success">Score</button>');

/*Score*/
function genScore() {

}

//scoreBoard.text('test');
//scoreBoard.attr('ahref', '')

$('main').append(scoreBoard);

function gameStart() {
    $('section').append('<button id="startBtn">Start</button>');
    $('#startBtn').on('click', pushQuestions(quizQuestions));

}

gameStart();

