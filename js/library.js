$(document).ready(function() {
	$('html').on('click', function() {
		$('form').show();
		$('.answer').show();
		

	});
});


$("input").keydown(function(event){
    if(event.keyCode == 13){
    	event.preventDefault();
        $("#button").click();
    }
});
var talk = function(src){
	for(var key in responses) {
		if (visitorAnswer.search(key) >= 0){
			$(src).text(responses[key]);
			break;
		} else if (visitorAnswer.search("yes") >= 0
			|| visitorAnswer.search("yeah") >= 0
			|| visitorAnswer.search("yep") >= 0) {
			window.location=nextLocation;
		} else if (visitorAnswer.length == 0) {
			$(src).text(silentAnswer);
			break;
		}else{$(src).text(notUnderstandAnswer);
		}
	};
};

var numberOfTries = function () {
	if (count == 5) {
			$('h2').text(hintH2);
			$('h3').text(hintH3);
			$('.answer').text(hintAnswer);
		};
	if (count == 10) {$('.answer').text(warning)};
	if (count > 10) {
			$('.answer').remove();
			$('form').remove();
			$('h2').text(finishH2);
			$('h3').text(finishH3);
		};
	
};

var deathWord = function (word){
	if (visitorAnswer.search(word) >= 0){
		$('.answer').remove();
		$('form').remove();
		$('h2').text(finishH2);
		$('h3').text(finishH3);
	};
};
