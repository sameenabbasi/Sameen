
let speed = 400;
let text = "Hi, I'm Sameen."
let i = 0;

document.body.onload = function() {
    typewriter();
    blink();
}
document.body.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("logoimg");
    image.style.transform = "rotate(" + window.pageYOffset/5.3 + "deg)";
}

function typewriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
} 
function blink() {
    document.getElementById("blink").style.visibility = "visible";
    setTimeout(notblink, 600);
}
function notblink() {
    document.getElementById("blink").style.visibility = "hidden";
    setTimeout(blink, 600);
}