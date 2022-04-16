//
// all var
var timerId,
    myWindow,
    str = "Here is your message:",
    message = prompt("enter your message:"),
    writeMsg,
    i = 0;
//
//open new window
function openWindow() {
    myWindow = window.open("", "myWindow", "width=300,height=200,position= center ");

    myWindow.focus();
    writeMsg = str.concat(message, "...").split("");

    timerId = setInterval(function () {
        if (i == writeMsg.length - 1) {
            clearInterval(timerId);
            setTimeout(function () {
                myWindow.close();
            }, 2000);
        }
        myWindow.document.write(writeMsg[i]);
        i++

    }, 150);

}
//
//close
function closeWindow() {
    myWindow.close();
}