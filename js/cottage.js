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
    for (i in wordList) {
    	if (wordList[i] === "hey" || "hi") {
    		$('.answer').text("Hi Hi");
    		console.log(wordList[i])
    	} else {
    		$('.answer').text("WHA??")
    	}

    };



    
}

