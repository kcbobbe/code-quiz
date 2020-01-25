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

var highScoreParent = document.getElementById("highScoreParent")

var playAgain = document.getElementById("playAgain")
var viewHighScores = document.getElementById("viewHighScores")

var endOfQuiz = document.getElementById("endOfQuiz");
var playerScore = document.getElementById("playerScore");

var codeQuestion = document.getElementById("codeQuestion");
var codeAnswer = document.getElementById("answerButtons")

var back = document.getElementById("back");

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
  {question: "Which of the following HTML elements DOES NOT have default styling?",
  answers: [
    ["<h1>", false],["<p>",false],["<div>", true],["<ul>",false]]
  },
  {question: "Which of the following can be used to dynamically change styles in response to user input?",
  answers: [
    ["CSS", true], ["HTML", false], ["Java", false], ["JavaScript", true]]},
  {question: "Which of the following values is falsy?",
  answers: [
    ["true", false], ["12", false], ["0", true], ["hello", false]]},
  {question: "var sum1 ='3' + 3; var sum2 = 3 + 2 + '3' + 3;  what is the value of var1 and var2?",
  answers: [
    ["'33' and '3233'", false], ["'6' and '11", false], ["'6' and '533'", false], ["'33' and '533'", true]]},
  {question: "Which of the following is a reason why jQuery might be used? (Choose the best answer)",
  answers: [
    ["Makes it easier to manipulate the DOM", false], 
    ["Simplifies cross-browser compatibility", false], 
    ["Can be used to add animations and effects to the page.", false], 
    ["All of the above.", true]]},
  {question: "Which of the following is a JavaScript object?",
  answers: [
    ["[6, 8, 9]", false], 
    ["{name: 'Bob', age: '20', favoriteFood: 'pizza'}", true], 
    ["[[0,2],[9,'cat']]", false],
    ["All of the above.", false]]},
  {question: "Which of the following refers to 'scope' in JavaScript (pick the best answer)",
  answers: [
    ["Scope refers to all of the parts of the web application that is accessible by the user", false], 
    ["Scope refers to the hierachy of CSS selectors.", false], 
    ["Scope refers to how the accessibility of a variable to different blocks of code depends on where the variables are initialized.", true], 
    ["Scope refers to the complexity and volume of code that needs to be written in order to get a working prototype.", false]]},
  {question: "Which of the following is an inline element?",
  answers: [["<div>", false], ["<span>", true], ["<h1>", false], ["<p>", false]]},
  {question: "Which of the following is an example of event bubbling?",
  answers: [
    ["Clicking a button causes a function to be called in JavaScript.", false], 
    ["The JavaScript loads only after the DOM content renders.", false], 
    ["An event causes a function to run in an infinite loop.", false], 
    ["Clicking a child element also triggers an event linked to a parent element", true]]},
  {question: "What is a use of local storage?",
  answers: [
    ["To reliably store confidential data on a local computer, such as passwords.", false], 
    ["To store data in a database for users to access from any device.", false], 
    ["To store some information or preferences in the user's browser that will be saved even if the page is refreshed.", true], 
    ["To store documents and downloads on your device.", false]]}
]


var secondsLeft = 59;



function startQuiz(){
  flashFeedbackFalse.setAttribute("style", "display:none");
  flashFeedbackTrue.setAttribute("style", "display:none");
  inputInitials.removeAttribute("disabled");


  endGame=false;
  score=0;
  questionNum=0;
  secondsLeft=59;
  countdownTimer.innerText= "Time Remaining: 60 seconds";
  endOfQuiz.setAttribute("style", "display: none")
  countdown();
  displayQuestion(0);
}

function countdown(){
  var countdownInterval = setInterval(function(){
    if(endGame){
      clearInterval(countdownInterval);
      console.log("ITS OVER");
      countdownTimer.innerText= "Clear time: " + secondsLeft + " seconds";
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

  function seeHighScores(){
    endOfQuiz.setAttribute("style","display:none");
    highScoresView.setAttribute("style","display: block");
    // for (i = 0; i < highScoreParent.childNodes.length; i++){
    //   highScoreParent.removeChild(highScoreParent.childNodes[i]);
    // }
    highScoreParent.innerHTML = "";
    for (i = 0; i < highScores.length; i++){
      // console.log(highScores[i])
      var newTableRow= document.createElement('tr');
      var newRankingCell = document.createElement('th');
      newRankingCell.innerText = i;
      var newScoreCell = document.createElement('td');
      var newScoreCellText = document.createTextNode(highScores[i].score);
      newScoreCell.appendChild(newScoreCellText)
      var newInitialsCell = document.createElement('td');
      newInitialsCell.innerText = highScores[i].initials;
      highScoreParent.appendChild(newTableRow);
      newTableRow.appendChild(newRankingCell);
      newTableRow.appendChild(newScoreCell);
      newTableRow.appendChild(newInitialsCell);

    }
  }

  function clear(){
    localStorage.clear();
    highScores=[];
    highScoreParent.innerHTML="";
  }

  function backToMain(){
    countdownTimer.innerText= "Time Remaining: 60 seconds";

    highScoresView.setAttribute("style","display:none");
    welcomeScreen.setAttribute("style", "display:block");

  }

highScoreForm.addEventListener('submit', logHighScore)

playAgain.addEventListener("click", startQuiz)

startButton.addEventListener("click", startQuiz)
// codeAnswerA.addEventListener("click", checkAnswer, 0)
codeAnswer.addEventListener("click", checkAnswer)

inputInitials.addEventListener("input", checkInitialsInput)

viewHighScores.addEventListener("click", seeHighScores)

clearLocalStorage.addEventListener("click", clear)

back.addEventListener("click",backToMain)

})