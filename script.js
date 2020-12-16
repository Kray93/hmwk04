// HTML object variables
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
var startButton = document.querySelector("#startButton");
var questCounter = 0;
var intervalId;
var correctAnswer = 0;
var wrongAnswer = 0;
var notAnswered = 0;
var currQuestion;

// list of questions
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
startButton.addEventListener("click", function () {
    questDisplay()
})
function correct() {
    answerBtn.addEventListener("click");
    answerButtons.style.display = "none";
    showQuestion.textContent = "Correct!";
    questCounter++;
    correctAnswer++;
    clearInterval(intervalId);
    if (questCounter == questionLength) {
        setTimeout(gameOver, 1000 * 2);
    } else {
        setTimeout(questDisplay, 1000 * 2);
    };
};
function wrong() {
    answerBtn.addEventListener("click");
    answerButtons.style.display = "none";
    showQuestion.textContent = "Wrong!";
    questCounter++;
    wrongAnswer++;
    clearInterval(intervalId);
    if (questCounter == questionLength) {
        setTimeout(gameOver, 1000 * 2);
    } else {
        setTimeout(questDisplay, 1000 * 2);
    };
};
function endTime() {
    answerBtn.addEventListener("click");
    answerButtons.style.display = "none";
    showQuestion.textContent = "Wrong!";
    questCounter++;
    notAnswered++;
    clearInterval(intervalId);
    if (questCounter == questionLength) {
        setTimeout(gameOver, 1000 * 2);
    } else {
        setTimeout(questDisplay, 1000 * 2);
    };
};
function gameOver() {
    answerButtons.style.display = "block";
    showQuestion.textContent = "Game Over! Here's your score.";
    answer1.textContent = "Correct answers: " + correctAnswer;
    answer2.textContent = "Wrong answers: " + wrongAnswer;
    answer3.textContent = "Not answered: " + notAnswered;
    answer4.textContent = "Play Again!";
    answer4.addEventListener("click", function () {
        resetGame();
        questDisplay();
    });
};
function resetGame() {
    questCounter = 0;
    correctAnswer = 0;
    wrongAnswer = 0;
    notAnswered = 0;

    return questCounter;
    return correctAnswer;
    return wrongAnswer;
    return notAnswered;
};
function questDisplay() {
    var gameTimer = 60;
    intervalId = setInterval(decrement, 1000);
    function decrement() {
        gameTimer--;
        timer.innerHTML = timer;
        if (timer === 0) {
            endTime();
        };
    };
    for (var i = 0; i < questions.length; i++) {
        answerButtons.style.display = "block"
        answer1.textContent = questions[i].options[0]
        answer2.textContent = questions[i].options[1]
        answer3.textContent = questions[i].options[2]
        answer4.textContent = questions[i].options[3]
        answerButtons.addEventListener("click", function () {
            if (answerBtn.textContent == questions[i].answer) {
                correct()
            } else {
                wrong()
            }
        });  
        
    }
    
};










// when play button is pushed, clear instructions and present first question.
// when play button is pressed, start timer at 60 seconds.
// when player answers wrong, deduct 10 seconds.
// when player answers correct, add 5 secoonds.
// when timer gets to 0 or all questions are answered, game over screen.
// when game over screen is preented, prompt player for initials for highscore record.
// log highscores in local storage.
// home button to return to instructions/play page
// link to highscores to view any time

// function to display instructions
// instructionsPage()

// function instructionsPage() {
//     answerButtons.style.display = "none"
//     clearDetails();
//     reset();
//     heading.textContent = "This game is timed!";
//     pInstructions.textContent = "Instructions: You have 60 seconds to answer all questons. If you answer any wrong, 10 seconds will be deducted from your time. your score is your remaining time, so think quick and dont get any wrong!";
//     playBtn.textContent = "PLAY!"
//     mainEl.appendChild(heading);
//     mainEl.appendChild(pInstructions)
//     mainEl.appendChild(playBtn)
// }
// function clearDetails() {
//     // mainEl.innerHTML = "";
// }
// function reset() {
//     // quizType ="";
//     // score = 0;
//     // gameDuration = 0;
//     // gameTimeElapsed = 0;
//     // gameInterval;
// }



// var quizIndex = 0;

// playBtn.addEventListener("click", function() {
//     quizStart()

// });
// function quizStart() {
//     playBtn.style.display = "none";
//     pInstructions.style.display = "none";
//     answerButtons.style.display = "block";

//     for (var i = 0; i < questions.length; i++) {
//         // if (answerBtn.addEventListener("click")) {
//         //             quizIndex++

//         showQuestion.textContent = questions[i].title
//     answer1.textContent = questions[i].options[i]
//     answer2.textContent = questions[i].options[i]
//     answer3.textContent = questions[i].options[i]
//     answer4.textContent = questions[i].options[i]
//         // }
//     };


//     // var options = document.createElement("<li>")
//     // var answerSelection = document.querySelector(".answerSelection");

//     // questionP.innerHTML = questions[1].title;
//     // var questionP = document.querySelector(".heading")
//     // answerSelection.innerHTML = questions[1].options
// }

// function validateAnswer() {
//     if () {

//     }
//     if (condition) {

//     }
// }