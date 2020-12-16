// html var global
var mainEl = document.querySelector(".container");
var heading = document.querySelector(".heading");
var pInstructions = document.querySelector(".instructions");
var playerOptions = document.querySelector(".playerOptions");
var playBtn = document.querySelector("#playBtn");
var timer = document.querySelector("#timer");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var answerButtons = document.querySelector(".answerButtons");
var answerBtn = document.querySelector(".btn");
var showQuestion = document.querySelector(".question");
var highscoreScreen = document.querySelector(".highscoreScreen");
var scores = document.querySelector(".scores")
var questCounter = 0;
var timerIntvl;
var gameTimer = 60;
// questions/answers
var questions = [
    {
        title: "Joey plays Dr. Drake Ramoray on which soap opera show?",
        options: ["The Doctors", "Days of Our Lives", "General Hospital", "Chicago Hope"],
        answer: "Days of Our Lives"
    },
    {
        title: "Who pees on Monica after she is stung by a jellyfish?",
        options: ["Chandler", "Joey", "Ross", "Richard"],
        answer: "Chandler"
    },
    {
        title: "What causes the fire in Pheobe and Rachel's apartment?",
        options: ["Pheobe's incence burner.", "Pheobe's bedside candle.", "Rachel's hair straightener.", "Rachel's curling iron."],
        answer: "Rachel's hair straightener."
    },
    {
        title: "Ross worked as a professor at which school?",
        options: ["Bernard Collage", "Fordham University", "Manhattan Collage", "New York University"],
        answer: "New York University"
    }
];
var questionLength = questions.length
answerButtons.style.display = "none"
highscoreScreen.style.display = "none"
// welcome screen
// button to start screen
// instructions
playBtn.addEventListener("click", function () {
    mainEl.style.display = "none"
    answerButtons.style.display = "block"
    quiz()
    console.log("playBtn worked");
})


// quiz question screen
// set timer
// end timer at 0 or when all Qs are answered
// display single question
// display buttons for options
// alert correct/wrong selection
// deduct timer for wrong answer only
// repeat for as many questions in game
// when quiz ends/ all questions answered, hid quiz screen

function quiz() { 
    timerIntvl = setInterval(decrement, 1000);
    function decrement() {
        gameTimer--;
        timer.innerHTML = gameTimer;
        if (timer === 0) {
            endGame();
        };
    };
    questDisplay(0)

};
function questDisplay(questCounter) {
    showQuestion.textContent = questions[questCounter].title
    answerButtons.style.display = "block"
    answer1.textContent = questions[questCounter].options[0]
    answer2.textContent = questions[questCounter].options[1]
    answer3.textContent = questions[questCounter].options[2]
    answer4.textContent = questions[questCounter].options[3]
    answerButtons.addEventListener("click", function (event) {
        console.log("any answer clicked");
        if (event.target.textContent == questions[questCounter].answer) {
            correct()
        } else {
            wrong()
        }
        console.log(event);
    });
}
function correct() {
    questCounter++
    if (questCounter == questionLength) {
        endGame()
    } else {
        questDisplay(questCounter)
    };
};
function wrong() {
    questCounter++;
    gameTimer-= 10;
    if (questCounter == questionLength) {
        endGame()
    } else {
        questDisplay(questCounter)
    };
};
// score screen
    // show score screen
    // set initials
    // retrieve score from local storage
    // push score to score list as array
    // save player score list to local storage
    // display to player

function endGame() {
    answerButtons.style.display = "none";
    clearInterval(timerIntvl);
    highscoreScreen.style.display = "block"

}
