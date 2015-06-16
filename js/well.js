// Opens dialog box on click or key pressed.
$(document).ready(function() {
	$('html').on('click', function() {
		$('form').show();
		$('.answer').show();
		// $('h2').text('Click the button, do not press Enter')

	});
});

var count = 0;

function testResults (form) {
    visitorAnswer = form.inputbox.value;
    
    // possible answers
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

	
	// gives answers
	for(var key in responses) {
		if (visitorAnswer.search(key) >= 0){
			$('h2').text(responses[key]);
			break;
		} else if (visitorAnswer.search("yes") >= 0
			|| visitorAnswer.search("yeah") >= 0
			|| visitorAnswer.search("yep") >= 0) {
			window.location="pass_out.html";
		} else if (visitorAnswer.length == 0) {
			$('h2').text("Doing nothing won't help in this situation");
			break;
		}else{$('h2').text("I don't understand you.");
		}
	};
	count++;
	// number of tries
	if (count == 5) {
			$('h2').text('Is there anyone outside?');
			$('h3').text('');
			
		};
	if (count == 10) {$('h2').text("You are tired.")};
	if (count > 10 || visitorAnswer.search("sleep") >= 0) {
			
			$('form').remove();
			$('h2').text("You've died of cold.");
			$('h3').text("Sad...");
		};
    // Clears the input box.
	form.inputbox.value = "";
 };



