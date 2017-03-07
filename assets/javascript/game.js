//initialize global variables!!!
var ranNum;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var totalScore;
var wins = 0;
var losses = 0;

function reset(){
  ranNum = Math.floor((Math.random() * 102)) + 19;
  crystalOne = Math.ceil((Math.random() * 12));
  crystalTwo = Math.ceil((Math.random() * 12));
  crystalThree = Math.ceil((Math.random() * 12));
  crystalFour = Math.ceil((Math.random() * 12));
  totalScore = 0;

  addCrystal("one", crystalOne);
  addCrystal("two", crystalTwo);
  addCrystal("three", crystalThree);
  addCrystal("four", crystalFour);

  write("randomBox", ranNum);
  write("totalScoreBox", totalScore);
}

// writing variables in HTML
function write(divId, value){
  $("#" + divId).html(value);
  //document.getElementById(divId).innerHTML = value;
}

// adding crystal scores
function addCrystal(id, crystalNumber){
  var button = $("#" + id);

  button.click(function() {
  //button.onclick = function(){

    totalScore += crystalNumber;

    $("#totalScoreBox").html(totalScore);
    //totalScoreBox.innerHTML = totalScore;

    if (totalScore === ranNum) {
      wins++;
      write("message", "You WON!");
      write("winsScore", "wins: " + wins);
      reset();
    }
    else if (totalScore > ranNum) {
      losses++;
      write("lossesScore", "losses: " + losses);
      write("message", "You LOST!");
      reset();
    }
  });

}

reset();
