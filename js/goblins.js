$(document).ready(function() {
	$('html').on('click', function() {
		$('form').show();
		$('.answer').show();
					
	});
	$('html').on('keydown', function() {
		$('form').show();
		$('.answer').show();
					
	});
});
var count = 0;
function testResults (form) {
    var visitorAnswer = form.inputbox.value;
    var wordList = visitorAnswer.toLowerCase().split(" ");
    
    function inTheList(word, list) {
    	for (i in list) {
    		if (list[i] === word) {
    			return true;
    		} 
    	}	
    	return false;
    };

	if (inTheList("hi", wordList)
		|| inTheList("hey", wordList)
		|| inTheList("ahoj", wordList)
		|| inTheList("ho", wordList)
		|| inTheList("greetings", wordList)) {

		$('.answer').text("Hi Hi We eat you");
	} 
	else if (inTheList("not", wordList)
		&& inTheList("tasty", wordList)) {
		$('.answer').text("You look me very good tasty");

	}else {
		$('.answer').text("WHA?? Anyway, let's dine!")
		count += 1;
		if (count == 10){
			$('.answer').text("Stop talk We eat you");
			
		};
		if (count > 10) {
			$('.answer').remove();
			$('h2').text("Goblins have eaten you.");
			$('h3').text("Yumm...");
		};
	}
};

