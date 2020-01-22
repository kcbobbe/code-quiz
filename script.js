// 04-09 has an example of a countdown
countdownTimer = document.getElementById("countdown");
startButton = document.getElementById("startButton");
welcomeScreen = document.getElementById("welcomeScreen");
quizScreen = document.getElementById("quizScreen");
flashFeedback = document.getElementById("flashFeedback")

endOfQuiz = document.getElementById("endOfQuiz");
playerScore = document.getElementById("playerScore");

codeQuestion = document.getElementById("codeQuestion");
codeAnswer = document.getElementById("answerButtons")

questionNum = 0;
score = 0;

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
      console.log("ITS OVER");
    }
  }, 1000);

}

function flashFeedback(x){

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
      if (questionNum < (questions.length - 1)) {
        questionNum = questionNum + 1;
        displayQuestion()
      } 
      else {
        quizScreen.setAttribute("style", "display:none");
        endOfQuiz.setAttribute("style", "display: block")
        playerScore.innerText = "Your final score is: " + ((score / questions.length) * 100) + "%";
        console.log(score)
      }

    } else {
      console.log("false")
      if (questionNum < (questions.length - 1)) {
        questionNum = questionNum + 1;
        displayQuestion()
      }
      else {
        quizScreen.setAttribute("style", "display:none");
        endOfQuiz.setAttribute("style", "display: block")
        playerScore.innerText = "Your final score is: " + ((score / questions.length) * 100) + "%";
        console.log(score)
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


startButton.addEventListener("click", startQuiz)
// codeAnswerA.addEventListener("click", checkAnswer, 0)
codeAnswer.addEventListener("click", checkAnswer)

