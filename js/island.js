$(document).ready(function() {
	$('html').on('click', function() {
		$('form').show();
		$('.answer_blue').show();
		$('h2').text('What are you going to do?');
		$('h3').text(' ')
					
	});
	$('html').on('keydown', function() {
		$('form').show();
		$('.answer_blue').show();
		$('h2').text('What are you going to do?');
		$('h3').text(' ')
					
	});
});
 
function testResults (form) {
    var visitorAnswer = form.inputbox.value;
    var wordList = visitorAnswer.toLowerCase().split(" ");
    for (i in wordList) {
    	if (wordList[i] === "hey" || "hi") {
    		$('.answer_blue').text("Hi Hi");
    		console.log(wordList[i])
    	} else {
    		$('.answer_blue').text("WHA??")
    	}

    };



    
}
