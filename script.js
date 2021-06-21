// click event listeners

// changes root element variables


// use if..else if to bind multiple element changes to a single event (click)
document.addEventListener('click', function(event) {
    if (event.target.id == ('dark-btn') ) {
        document.documentElement.style.cssText = "--background-color: black; --text-color: white; --button-highlight: #3d3c37;";
        document.getElementById('title').innerHTML="Dark Mode";
    }
    else if (event.target.id == ('light-btn') ) {
        document.documentElement.style.cssText = "--background-color: white; --text-color: black; --button-highlight: #e7e7e7;",
        document.getElementById('title').innerHTML="Light Mode";
    }
}, false);