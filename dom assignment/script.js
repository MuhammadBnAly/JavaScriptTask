//var
var img = document.getElementById('myImg');
var ul = document.getElementById('nav');
var cloneImg;

// cloning the image
function cloneHere() {
    cloneImg = img.cloneNode(true);
    img.style.textAlign = 'end';
    document.body.appendChild(cloneImg);
    ul.style.listStyle = 'circle';

}