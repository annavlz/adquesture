$(document).ready(function() {
	$('html').on('click', function() {
		$('form').show();
		$('.answer').show();
		// $('h2').text('Click the button, do not press Enter')

	});
});

$("input").keydown(function(event){
    if(event.keyCode == 13){
    	event.preventDefault();
        $("#button").click();
    }
});

var count = 0;

function testResults (form) {
    visitorAnswer = form.inputbox.value;
    
    // possible answers
    var responses = {
    	"hi": "Hi Hi We eat you",
    	"hello": "Hi Hi We eat you",
    	"hey": "Hi Hi We eat you",
    	"ahoj": "Hi Hi We eat you",
    	"greetings": "Hi Hi We eat you",
    	"not tasty": "You look me very good tasty",
    	"sausage": "Do you have one?"

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
		}else{$('.answer').text("WHA?? Look tasty. We eat you");
		}
	};
	count++;
	// number of tries
	if (count == 5) {
			$('h2').text('What would you eat?');
			$('h3').text('If you would have been a goblin.');
			$('.answer').text("Goblin love sizzle meat");
		};
	if (count == 10) {$('.answer').text("Stop talk We eat you")};
	if (count > 10) {
			$('.answer').remove();
			$('form').remove();
			$('h2').text("Goblins have eaten you.");
			$('h3').text("Yumm...");
		};
	
    // Clears the input box.
	form.inputbox.value = "";
 };




