var highScores = [{score: 30, initials: "bnb"},{score: 40, initials: "kcn"},{score: 10, initials: "ppp"},{score: 100, initials: "nop"}]

var sortedArray =[]

function findMax(){
    var max = [0, 0]
    for (i=0; i < highScores.length; i++){
      if (highScores[i].score > max[0]){
        max = [highScores[i].score, i]
        console.log(max, "max")
      }
    }
    var topScore = (highScores.splice(max[1], 1))
    console.log(topScore, "here is the calculated top score...")
    sortedArray.push(topScore[0])
    if (highScores.length > 0){
      findMax(highScores);
    } else {
      highScores =  sortedArray;
    }
  }
console.log(highScores)
console.log(sortedArray)
findMax()
console.log(highScores)
console.log(sortedArray)
