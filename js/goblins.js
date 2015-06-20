
var count = 0;
var responses = {
	"hi": "Hi Hi We eat you",
	"hello": "Hi Hi We eat you",
	"hey": "Hi Hi We eat you",
	"ahoj": "Hi Hi We eat you",
	"greetings": "Hi Hi We eat you",
	"not tasty": "You look me very good tasty",
	"sausage": "Do you have one?"

};

var nextLocation = "pass_out.html";
var silentAnswer = "Silent? We hungry. We eat you.";
var notUnderstandAnswer = "WHA?? Look tasty. We eat you";
var hintH2 = 'What would you eat?'
var hintH3 = 'If you would have been a goblin.'
var hintAnswer = "Goblin love sizzle meat"
var warning = "Stop talk We eat you"
var finishH2 = "Goblins have eaten you."
var finishH3 = "Yumm..."

function testResults (form) {
    visitorAnswer = form.inputbox.value;
	talk('.answer');
	count++;
	numberOfTries();
	form.inputbox.value = "";
 };




