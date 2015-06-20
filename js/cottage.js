

var responses = {
	"hi": "Hello, sweetheart",
	"hello": "Hello, sweetheart",
	"hey": "Hello, sweetheart",
	"ahoj": "Hello, sweetheart",
	"greetings": "Hello, sweetheart",
	"not tasty": "You look very tasty for me.",
	"chocolate": "Do you have one?",
	"sweet": "Do you have one?",
	"lolly": "Do you have one?",
	"cookie": "Do you have one?"

};

var count = 0;

var nextLocation = "pass_out.html";
var silentAnswer = "Silent? We hungry. We eat you.";
var notUnderstandAnswer = "Pardon? My handsome tasty dinner.";
var hintH2 = 'What would you eat?'
var hintH3 = 'If you would have been an old witch.'
var hintAnswer = "You are so sweet."
var warning = "Enough words! Let's start!"
var finishH2 = "The witch fried you."
var finishH3 = "Yumm..."

function testResults (form) {
    visitorAnswer = form.inputbox.value;
	talk('.answer');
	count++;
	numberOfTries();
	form.inputbox.value = "";
 };
