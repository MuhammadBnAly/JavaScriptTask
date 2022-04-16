//
var countNext, countPrevious, current = 1;
//
//previous()
//
function previous() {
    countPrevious = --current;
    document.getElementById("img").src = "images/" + countPrevious + ".jpg";
    current = countPrevious;
    // first pic
    if (current < 1) {
        document.getElementById("img").src = "images/1.jpg";
        current = 1;
    }
}
//
//slide show
//
var x;


function slideShowPrevious() {
    x = setInterval(function() {
        countPrevious = --current;
        document.getElementById("img").src = "images/" + countPrevious + ".jpg";
        current = countPrevious;
        // first pic
        if (current < 1) {
            document.getElementById("img").src = "images/1.jpg";
            current = 7;
        }
    }, 1000);
}



function slideShowForward() {
    x = setInterval(function() {
        countNext = ++current;
        document.getElementById("img").src = "images/" + countNext + ".jpg";
        current = countNext;
        //last pic
        if (current > 6) {
            document.getElementById("img").src = "images/6.jpg";
            current = 0;
        }
    }, 1000);
}
//
//stop
function stop() {
    clearInterval(x);
}
//
//next
function next() {

    countNext = ++current;
    document.getElementById("img").src = "images/" + countNext + ".jpg";
    current = countNext;
    //last pic
    if (current > 6) {
        document.getElementById("img").src = "images/6.jpg";
        current = 6;
    }
}