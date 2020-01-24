document.addEventListener('DOMContentLoaded', function() {

// 04-09 has an example of a countdown
var countdownTimer = document.getElementById("countdown");
var startButton = document.getElementById("startButton");
var welcomeScreen = document.getElementById("welcomeScreen");
var quizScreen = document.getElementById("quizScreen");

var flashFeedbackTrue = document.getElementById("flashFeedbackTrue")
var flashFeedbackFalse = document.getElementById("flashFeedbackFalse")

var inputInitials = document.getElementById("inputInitials")
var inputInitialsButton = document.getElementById("inputInitialsButton")
var highScoreForm = document.getElementById("highScoreForm")


var playAgain = document.getElementById("playAgain")
var viewHighScores = document.getElementById("viewHighScores")

var endOfQuiz = document.getElementById("endOfQuiz");
var playerScore = document.getElementById("playerScore");

var codeQuestion = document.getElementById("codeQuestion");
var codeAnswer = document.getElementById("answerButtons")

var questionNum = 0;
var score = 0;
var endGame=false

if (!localStorage.getItem("highScores")){
  var highScores = [];
} else{
  var highScores = JSON.parse(localStorage.getItem("highScores"))
  localStorage.setItem("highScores", JSON.stringify(highScores))
}


var questions = [
  {question: "What is my favorite video game?",
  answers: [["Pokemon", true],["Super Mario Bros",false],["Earthbound", false],["Super Smash Bros",false]]
  },
  {question: "Which one of the following is a retro console that I don't own?",
  answers: [["N64", true], ["GameCube", false], ["SNES", true], ["Playstation", false]]},
  {question: "Which of the following is an odd number?",
  answers: [["6", false], ["7", true], ["0", false], ["2", false]]}
]


var secondsLeft = 9;



function startQuiz(){
  flashFeedbackFalse.setAttribute("style", "display:none");
  flashFeedbackTrue.setAttribute("style", "display:none");
  inputInitials.removeAttribute("disabled");


  endGame=false;
  score=0;
  questionNum=0;
  secondsLeft=9;
  countdownTimer.innerText= "Time Remaining: 10 seconds";
  endOfQuiz.setAttribute("style", "display: none")
  countdown();
  displayQuestion(0);
}

function countdown(){
  var countdownInterval = setInterval(function(){
    if(endGame){
      clearInterval(countdownInterval);
      console.log("ITS OVER");
      // countdownTimer.innerText= "Clear time: " + secondsLeft + " seconds";
    } else {
      countdownTimer.innerText= "Time Remaining: " + secondsLeft + " seconds";
      console.log(secondsLeft)
      if (secondsLeft === 0){
        countdownTimer.innerText= "Out of time.";
        clearInterval(countdownInterval);
        quizScreen.setAttribute("style", "display:none");
        endOfQuiz.setAttribute("style", "display: block")
        var scorePercent = (Math.floor((score / questions.length) * 100)) 
        playerScore.innerText = "You ran out of time. Your final score is: " + scorePercent + "%";
        // highScores.push(score);
        // localStorage.setItem("highScores", highScores);
        clearInterval(countdownInterval);
      }
      secondsLeft--;
    }
    
  }, 1000);

}

function flashFeedback(correct){
  if (correct){
    flashFeedbackFalse.setAttribute("style", "display:none");
    flashFeedbackTrue.setAttribute("style", "display:block");
    setTimeout(function(){
      flashFeedbackTrue.setAttribute("style", "opacity:0");
    }, 1000)
  }
  else {
    flashFeedbackTrue.setAttribute("style", "display:none");
    flashFeedbackFalse.setAttribute("style", "display:block");
    setTimeout(function(){
      flashFeedbackFalse.setAttribute("style", "opacity:0");
    }, 1000)
  }
}

function displayQuestion(){
  welcomeScreen.setAttribute("style", "display:none")
  quizScreen.setAttribute("style", "display:block");

  // for (i = 0; i < questions.length; i++){
    codeQuestion.innerText = questions[questionNum].question;
    for (i=0; i<codeAnswer.children.length; i++){
      codeAnswer.children[i].innerText = questions[questionNum].answers[i][0];
    }
    // codeAnswerA.innerText = questions[0].answers[0][0]
    // codeAnswerB.innerText = questions[0].answers[1][0]
    // codeAnswerC.innerText = questions[0].answers[2][0]
    // codeAnswerD.innerText = questions[0].answers[3][0]
  // }
}

function checkAnswer(e){
  event.preventDefault();
  if(e.target.matches("button")){
    if(questions[questionNum].answers[e.target.id][1]===true){
      console.log("true");
      score = score + 1;

      flashFeedback(true);

      if (questionNum < (questions.length - 1)) {
        questionNum = questionNum + 1;
        displayQuestion()
      } 
      else {
        questionNum = questionNum + 1;
        quizScreen.setAttribute("style", "display:none");
        endOfQuiz.setAttribute("style", "display: block")
        var scorePercent = (Math.floor((score / questions.length) * 100)) 
        playerScore.innerText = "Your final score is: " + scorePercent+ "%";
        countdownTimer.innerText= "Clear time: " + secondsLeft + " seconds";
        endGame=true;
        // highScores.push(scorePercent);
        // localStorage.setItem("highScores", highScores);
        // console.log(score)
      }

    } else {
      console.log("false")
      
      flashFeedback(false);

      if (questionNum < (questions.length - 1)) {
        questionNum = questionNum + 1;
        displayQuestion()
      }
      else {
        questionNum = questionNum + 1;
        endGame=true
        quizScreen.setAttribute("style", "display:none");
        endOfQuiz.setAttribute("style", "display: block")
        var scorePercent = (Math.floor((score / questions.length) * 100)) 
        playerScore.innerText = "Your final score is: " + scorePercent + "%";
        // highScores.push(scorePercent);
        // localStorage.setItem("highScores", highScores);
        console.log(highScores)
      }
  }
} }

function logHighScore(e){
  e.preventDefault();
  var scorePercent = (Math.floor((score / questions.length) * 100)) 
  highScores.push({score:scorePercent,initials: inputInitials.value});
  localStorage.setItem("highScores",JSON.stringify(highScores))
  console.log(highScores)
  inputInitialsButton.setAttribute("disabled","")
  inputInitials.setAttribute("disabled","")
  inputInitialsButton.setAttribute("class", "btn-secondary");
  // inputInitialsButton.removeAttribute("btn-secondary")
}
  // if (questions[0].answers[i][0]===true){
  //   score = score + 1;
  //   console.log("true");
  //   // displayQuestion()
  // } else {
  //   console.log('false')
  // //   displayQuestion()
  // }

  function checkInitialsInput() {
    if (inputInitials.value){
      inputInitialsButton.removeAttribute("disabled")
      inputInitialsButton.setAttribute("class", "btn-primary");
      inputInitialsButton.removeAttribute("btn-secondary")
    }
  }

highScoreForm.addEventListener('submit', logHighScore)

playAgain.addEventListener("click", startQuiz)

startButton.addEventListener("click", startQuiz)
// codeAnswerA.addEventListener("click", checkAnswer, 0)
codeAnswer.addEventListener("click", checkAnswer)

inputInitials.addEventListener("input", checkInitialsInput)

})