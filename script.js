// click event listeners

// changes root element variables


// use if..else if to bind multiple element changes to a single event (click)
document.addEventListener('click', function(event) {
    if (event.target.innerHTML == "Dark Mode" ) {
        document.documentElement.style.cssText = "--background-color: black; --background-image: url('dark_image2.jpg'); --background-size: auto; --text-color: white; --button-highlight: #3d3c37;";
        document.getElementById('mode-btn').innerHTML="Light Mode";
        document.getElementById('mode-btn').style.color="orange";
        document.getElementById('mode-btn').style.fontWeight="1000";


        // change textbox bottom border and text if exists
        if (document.getElementById("nameInput") != null) {
            document.getElementById("nameInput").style.color = "white";
            document.getElementById("nameInput").style.borderBottomColor = "white";
        }

        
    }
    else if (event.target.innerHTML == "Light Mode") {
        document.documentElement.style.cssText = "--background-color: white; --background-image: url('light_image2.jpg'); --text-color: black; --button-highlight: #e7e7e7;";
        document.getElementById('mode-btn').innerHTML="Dark Mode";
        document.getElementById('mode-btn').style.color="black"; // make more consise
        document.getElementById('mode-btn').style.fontWeight="normal";
    }

    else if (event.target.getAttribute("id") == "edit") {
        var welcomeMsg = document.getElementById("message").innerHTML; // get 'good afternoon name' text
        document.getElementById("message").innerHTML = welcomeMsg.substring(0, welcomeMsg.lastIndexOf(" ")); // removes name from text
        document.getElementById("nameInput").style.display = "block"; // displays text input box
        localStorage.removeItem("myName");
        setName();
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


var textbox = document.querySelector('input[type="text"]');

// if name not in browser cache
let msg;
function setName() {

    if (localStorage['myName'] == undefined || localStorage['myName'] == "") {
        document.getElementById("edit").style.display = "none";
        var hour = today.getHours();
        if (hour > 6 && hour <=12) {
            msg = "Good morning, ";
        }
        else if (hour > 12 && hour < 18) {
            msg = "Good afternoon, ";
        }
        else {
            msg = "Good evening, ";
        }
        document.getElementById("message").innerHTML=msg;


    // if name not in cache (hense there exists an input box for the blur event) get name when user clicks off text input box
    textbox.addEventListener('blur', (event) => {
        var name = document.getElementById("nameInput").value; // set name of user

        if (name != "") {
            localStorage['myName'] = name; // only strings
            document.getElementById("message").innerHTML= msg+localStorage['myName']; // add name to good morning/afternoon... msg
            document.getElementById("nameInput").style.display = "none"; 
            document.getElementById("edit").style.display = "block";
        }

    });
    }
}
setName();

window.onload = function() {
    liveClock();

    // if name already in browser cache
    if (localStorage['myName'] != undefined && localStorage['myName'] != "") {
        var hour = today.getHours();
        if (hour > 6 && hour <=12) {
            document.getElementById("message").innerHTML="Good morning, "+localStorage['myName'];
        }
        else if (hour > 12 && hour < 18) {
            document.getElementById("message").innerHTML="Good afternoon, "+localStorage['myName'];
        }
        else {
            document.getElementById("message").innerHTML="Good evening, "+localStorage['myName'];
        }
        document.getElementById("nameInput").style.display = "none";
        document.getElementById("edit").style.display = "block";
    }
};