// Opens dialog box on click or key pressed.

$(document).ready(function() {
	$('html').on('click', function() {
		$('form').show();
		$('.answer').show();
		$('h2').text('Click the button, do not press Enter')

	});
	$('html').on('keydown', function(e) {
		$('form').show();
		$('.answer').show();
			
	});
});

// Number of tries to talk before game is over.
var count = 0;


// Gets data from users input and returns answer.
function testResults (form) {
    var visitorAnswer = form.inputbox.value;
    var wordList = visitorAnswer.toLowerCase().split(" ");
    
    // Searches the user's answer for matches.
    function inTheList(word, list) {
    	for (i in list) {
    		if (list[i] === word) {
    			return true;
    		} 
    	}	
    	return false;
    };

    // Checks if the answer is empty.
    function emptyList(list) {
    	for (i in list) {
    		if (list[i].length != 0) {
    			return true;
    		}
    	}
    	return false;
    }

    // Answers.

   	if (!emptyList(wordList)) {
		$('.answer').text("Silent? We hungry. We eat you.")
		console.log(name);
	}

	else if (inTheList("sausage", wordList)) {

		$('.answer').text("Do you have one?");
	}

	else if (inTheList("yes", wordList)
		|| inTheList("yeah", wordList)
		|| inTheList("y", wordList)) {

		window.location="pass_out.html";
	}

	else if (inTheList("hi", wordList)
		|| inTheList("hey", wordList)
		|| inTheList("ahoj", wordList)
		|| inTheList("ho", wordList)
		|| inTheList("greetings", wordList)) {

		$('.answer').text("Hi Hi We eat you");
	} 
	else if (inTheList("not", wordList)
		&& inTheList("tasty", wordList)) {
		$('.answer').text("You look me very good tasty");
	
	} else {
		$('.answer').text("WHA?? Look tasty. We eat you")
		count += 1;
		if (count == 10){
			$('.answer').text("Stop talk We eat you");
			
		};
		if (count == 5) {
			$('h2').text('What would you eat?')
			$('h3').text('If you would have been a goblin.')
			$('.answer').text("Goblin love sizzle meat");
		}
		if (count > 10) {
			$('.answer').remove();
			$('form').remove();
			$('h2').text("Goblins have eaten you.");
			$('h3').text("Yumm...");
		};
	}
	// Clears the input box.
	form.inputbox.value = "";
	
};
