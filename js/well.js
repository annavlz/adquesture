// Opens dialog box on click or key pressed.

$(document).ready(function() {
	$('html').on('click', function() {
		$('form').show();
		$('.answer').show();
	

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
		$('h2').text("Doing nothing can help.")
		$('h3').text("But not in your case.")
		count += 1;
	}


	else if (inTheList("yes", wordList)
		|| inTheList("yeah", wordList)
		|| inTheList("y", wordList)) {

		window.location="pass_out.html";
	}

	else if (inTheList("shout", wordList)
		|| inTheList("cry", wordList)) {
		$('h2').text("There is someone there!");
		$('h3').text("He asks if you need help.");
	
	} else {
		$('h2').text("I don't understand.")
		$('h3').text("")

		count += 1;
		
		if (count == 5) {
			$('h2').text('Where are you?')
			$('h3').text('May be there is someone around')
			
		}

		if (count > 10) {
			$('.answer').remove();
			$('form').remove();
			$('h2').text("You have died of dehydration and cold.");
			$('h3').text("Sad...");
		};
	}
	// Clears the input box.
	form.inputbox.value = "";
	
};

