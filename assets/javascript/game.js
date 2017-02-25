//initialize global variables!!! 	
var ranNum;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var totalScore;

function reset(){
ranNum = Math.floor((Math.random()*121));
crystalOne = Math.ceil((Math.random()*12));
crystalTwo = Math.ceil((Math.random()*12));
crystalThree = Math.ceil((Math.random()*12));
crystalFour = Math.ceil((Math.random()*12));
totalScore = 0;
write("randomBox", ranNum);
}

reset();
var wins = 0;
var losses = 0;

// writing variables in HTML
function write(divId, value){
	$("#"+divId).html(value);
	//document.getElementById(divId).innerHTML = value;
}

write("randomBox", ranNum);
write("winsScore", "wins: " + wins);
write("lossesScore", "losses: " + losses);
write("totalScoreBox", totalScore);


// adding crystal scores
function addCrystal(id, crystalNumber){
	var button = $("#"+id);
	button.click(function() {
	//button.onclick = function(){
		totalScore = totalScore + crystalNumber;
		// totalScoreBox.html(totalScore);
		$("#totalScoreBox").html(totalScore);
		//totalScoreBox.innerHTML = totalScore;
		if (totalScore === ranNum) {
			wins++;
			write("winsScore", "wins: "+ wins);
			write("message", "You WON!");
			reset();
		}
		else if (totalScore > ranNum) {
			console.log("over");
			losses++;
			write("lossesScore", "losses: "+ losses);
			write("message", "You LOST!");
			reset();
		}
	});

}

addCrystal("one", crystalOne);
addCrystal("two", crystalTwo);
addCrystal("three", crystalThree);
addCrystal("four", crystalFour);