// 04-09 has an example of a countdown
countdownTimer = document.getElementById("countdown");
startButton = document.getElementById("startButton");
welcomeScreen = document.getElementById("welcomeScreen");
quizScreen = document.getElementById("quizScreen");

flashFeedbackTrue = document.getElementById("flashFeedbackTrue")
flashFeedbackFalse = document.getElementById("flashFeedbackFalse")




playAgain = document.getElementById("playAgain")

endOfQuiz = document.getElementById("endOfQuiz");
playerScore = document.getElementById("playerScore");

codeQuestion = document.getElementById("codeQuestion");
codeAnswer = document.getElementById("answerButtons")

questionNum = 0;
score = 0;

var highscores = []
localStorage.setItem("highScores", [])
highScores = localStorage.getItem("highScores")

var questions = [
  {question: "What is my favorite video game?",
  answers: [["Pokemon", true],["Super Mario Bros",false],["Earthbound", false],["Super Smash Bros",false]]
  },
  {question: "Which one of the following is a retro console that I don't own?",
  answers: [["N64", true], ["GameCube", false], ["SNES", true], ["Playstation", false]]},
  {question: "Which of the following is an odd number?",
  answers: [["6", false], ["7", true], ["0", false], ["2", false]]}
]


var secondsLeft = 60;



function startQuiz(){
  secondsLeft = 60;
  score=0;
  questionNum=0;
  countdownTimer.innerText= "Time Remaining: 60 seconds";
  endOfQuiz.setAttribute("style", "display: none")
  countdown();
  displayQuestion(0);
}

function countdown(){

  var countdownInterval = setInterval(function(){
    countdownTimer.innerText= "Time Remaining: " + secondsLeft + " seconds";
    secondsLeft--;
    if (secondsLeft === 0){
      countdownTimer.innerText= "Out of time.";
      clearInterval(countdownInterval);
      quizScreen.setAttribute("style", "display:none");
      endOfQuiz.setAttribute("style", "display: block")
      var scorePercent = (Math.floor((score / questions.length) * 100)) 
      playerScore.innerText = "You ran out of time. Your final score is: " + scorePercent + "%";
      highScores.push(score);
      localStorage.setItem("highScores", highScores);
      console.log("ITS OVER");
    }
    if(questionNum > (questions.length - 1)){
      countdownTimer.innerText= "Clear time: " + secondsLeft + " seconds";
      clearInterval(countdownInterval);
    }
  }, 1000);

}

function flashFeedback(correct){
  if (correct){
    flashFeedbackTrue.setAttribute("style", "display:block");
    flashFeedbackFalse.setAttribute("style", "display:none");
    setTimeout(function(){
      flashFeedbackTrue.setAttribute("style", "opacity:0");
    }, 1000)
  }
  else {
    flashFeedbackFalse.setAttribute("style", "display:block");
    flashFeedbackTrue.setAttribute("style", "display:none");
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
        highScores.push(scorePercent);
        localStorage.setItem("highScores", highScores);
        console.log(score)
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
        quizScreen.setAttribute("style", "display:none");
        endOfQuiz.setAttribute("style", "display: block")
        var scorePercent = (Math.floor((score / questions.length) * 100)) 
        playerScore.innerText = "Your final score is: " + scorePercent + "%";
        highScores.push(0);
        localStorage.setItem("highScores", highScores);
        console.log(highScores)
      }
  }
} }
  // if (questions[0].answers[i][0]===true){
  //   score = score + 1;
  //   console.log("true");
  //   // displayQuestion()
  // } else {
  //   console.log('false')
  // //   displayQuestion()
  // }

playAgain.addEventListener("click", startQuiz)

startButton.addEventListener("click", startQuiz)
// codeAnswerA.addEventListener("click", checkAnswer, 0)
codeAnswer.addEventListener("click", checkAnswer)

