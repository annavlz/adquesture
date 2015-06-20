

var count = 0;


var responses = {
	"hi": "Talking to yourself? Already?",
	"hello": "Talking to yourself? Already?",
	"hey": "Talking to yourself? Already?",
	"ahoj": "Talking to yourself? Already?",
	"greetings": "Talking to yourself? Already?",
	" out": "The walls are too steep.",
	"shout": "Someone is outside. Do you want help?",
	"eat": "There's nothing to eat.",
	"drink": "Water looks filthy."
	

};

var nextLocation = "pass_out.html";
var silentAnswer = "Doing nothing won't help in this situation";
var notUnderstandAnswer = "I don't understand you.";
var hintH2 = 'Is there anyone outside?';
var hintH3 = ' ';
var hintAnswer = " ";
var warning = "You are tired.";
var finishH2 = "You've died of cold.";
var finishH3 = "Sad...";


function testResults (form) {
    visitorAnswer = form.inputbox.value;
	talk('h2');
	count++;
	numberOfTries();
	form.inputbox.value = "";
	deathWord("sleep");
 };	

	


