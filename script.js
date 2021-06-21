// click event listeners

// changes root element variables


// use if..else if to bind multiple element changes to a single event (click)
document.addEventListener('click', function(event) {
    if (event.target.innerHTML == "Dark Mode" ) {
        document.documentElement.style.cssText = "--background-color: black; --background-image: url('dark_image.png'); --background-size: auto; --text-color: white; --button-highlight: #3d3c37;";
        document.getElementById('title').innerHTML="Dark Mode";
        document.getElementById('mode-btn').innerHTML="Light Mode";

        
    }
    else if (event.target.innerHTML == "Light Mode") {
        document.documentElement.style.cssText = "--background-color: white; --text-color: black; --button-highlight: #e7e7e7;",
        document.getElementById('title').innerHTML="Light Mode";
        document.getElementById('mode-btn').innerHTML="Dark Mode";
    }
}, false);