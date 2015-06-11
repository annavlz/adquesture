window.onload = function() {
    var countdownElement = document.getElementById('countdown'),
        downloadButton = document.getElementById('download'),
        seconds = 3,
        second = 0,
        interval;

    // downloadButton.style.display = 'none';

    interval = setInterval(function() {
        countdownElement.firstChild.data = (seconds - second);
        if (second >= seconds) {
            // downloadButton.style.display = 'block';
            window.location="well.html"
            clearInterval(interval);
        }

        second++;
        
    }, 1000);
}

