// click event listeners

// changes root element variables


// use if..else if to bind multiple element changes to a single event (click)
document.addEventListener('click', function(event) {
    if (event.target.innerHTML == "Dark Mode" ) {
        document.documentElement.style.cssText = "--background-color: black; --background-image: url('dark_image.png'); --background-size: auto; --text-color: white; --button-highlight: #3d3c37;";
        document.getElementById('mode-btn').innerHTML="Light Mode";

        
    }
    else if (event.target.innerHTML == "Light Mode") {
        document.documentElement.style.cssText = "--background-color: white; --text-color: black; --button-highlight: #e7e7e7;";
        document.getElementById('mode-btn').innerHTML="Dark Mode";
    }
}, false);


// generate today's date
var placeHolder = document.getElementById("title");
var today = new Date();

function liveClock() {
    var today = new Date(); // needed to update time
    var seconds= today.getSeconds();
    var minutes= today.getMinutes();
    var hour= today.getHours();
    placeHolder.innerHTML = ("0"+hour).substr(-2)+":"+("0"+minutes).substr(-2)+":"+("0"+seconds).substr(-2);
}
setInterval(liveClock, 1000); // runs function every second - update time


// set personalised message (depending on name and time)
setTimeout(function() {
    var name = prompt("Please enter your name", " ");
    var hour = today.getHours();
    if (hour > 6 && hour <=12) {
        document.getElementById("message").innerHTML="Good morning, "+name;
    }
    else if (hour > 12 && hour < 18) {
        document.getElementById("message").innerHTML="Good afternoon, "+name;
    }
    else {
        document.getElementById("message").innerHTML="Good evening, "+name;
    }
}, 500)



window.onload = function() {
    liveClock();
    var hour = today.getHours();
    if (hour > 6 && hour <=12) {
        document.getElementById("message").innerHTML="Good morning, ";
    }
    else if (hour > 12 && hour < 18) {
        document.getElementById("message").innerHTML="Good afternoon, ";
    }
    else {
        document.getElementById("message").innerHTML="Good evening, ";
    }
};