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

	if (inTheList("hi", wordList)) {
		$('.answer').text("Hi Hi");
	} else {
		$('.answer').text("WHA??")
	}
  
};

