window.onload = function() {
    var countdownElement = document.getElementById('countdown'),
        downloadButton = document.getElementById('download'),
        seconds = 30,
        second = 0,
        interval;

    downloadButton.style.display = 'none';

    interval = setInterval(function() {
        countdownElement.firstChild.data = (seconds - second);
        if (second >= seconds) {
            downloadButton.style.display = 'block';
            clearInterval(interval);
        }

        second++;
    }, 1000);
}
var count = 0;
window.addEventListener('keydown', function(e) {
    
    if(e.keyCode == 38) {
        count += 1;
        
    }
    if(count == 10) {
        window.location="sea_surface.html";
        console.log('yes')
    }
});
//keydown   keyCode=38 which=38 charCode=0 char=&//

