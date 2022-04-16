
// open window and make it move 

var win;

var x = 0,
    y = 0,
    incrementedX = 5,
    incrementedY = 5,
    windowWidth = 50,
    windowHeight = 50;

var interval;


function openWindow() {
    win = window.open("", "myWindow", "width=50,height=50");
    win.document.write("Hello, Ali");
    win.focus();


    // Initial Position on screen at  0 , 0
    win.moveTo(x, y);
    // Interval to make window move diagonally each second
    interval = setInterval(function () {
        if (((x + incrementedX) > (screen.availWidth - windowWidth)) || ((x + incrementedX) < 0)) {
            incrementedX = -incrementedX;
            incrementedY = -incrementedY;
        }
        if (((y + incrementedY) > (screen.availHeight - windowHeight)) || ((y + incrementedY) < 0)) {
            incrementedX = -incrementedX;
            incrementedY = -incrementedY;
        }
        x += incrementedX;
        y += incrementedY;

        // Move to new position
        win.moveTo(x, y);
    }, 50);
}


function stopWindow() {
    clearInterval(interval);
    x = 0;
    y = 0;
    win.focus();
    //setTimeout(function () { win.close(); }, 2000);
}
function closeWindow() {
    clearInterval(interval);
    win.close();

}
