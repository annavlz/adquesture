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

	
	// gives answers
	for(var key in responses) {
		if (visitorAnswer.search(key) >= 0){
			$('.answer').text(responses[key]);
			break;
		} else if (visitorAnswer.search("yes") >= 0
			|| visitorAnswer.search("yeah") >= 0
			|| visitorAnswer.search("yep") >= 0) {
			window.location="pass_out.html";
		} else if (visitorAnswer.length == 0) {
			$('.answer').text("Silent? We hungry. We eat you.");
			break;
		}else{$('.answer').text("Pardon? My handsome tasty dinner.");
		}
	};
	count++;
	// number of tries
	if (count == 5) {
			$('h2').text('What would you eat?');
			$('h3').text('If you would have been an old witch.');
			$('.answer').text("You are so sweet.");
		};
	if (count == 10) {$('.answer').text("Enough words! Let's start!")};
	if (count > 10) {
			$('.answer').remove();
			$('form').remove();
			$('h2').text("The witch fried you.");
			$('h3').text("Yumm...");
		};
	
    // Clears the input box."Pardon? My handsome tasty dinner."
	form.inputbox.value = "";
 };



