window.addEventListener('scroll', reveal);
function reveal() {
    //console.log("hello");
    let reveals = document.querySelectorAll('.content');
    for (let i=0; i<reveals.length; i++){
       let windowheight = window.innerHeight; 
       let revealtop = reveals[i].getBoundingClientRect().top;
       let revealpoint = 250;

       if (revealtop<(windowheight-revealpoint)) {
        reveals[i].classList.add('active');
       } else {
        reveals[i].classList.remove('active');
       }
    }
}
window.onload = function() {
    typewriter();
    notblink();
}
window.onscroll = function () {
    scrollRotate();
}
function scrollRotate() {
    let image = document.getElementById("logoimg");
    image.style.transform = "rotate(" + window.pageYOffset/5.5 + "deg)";
}
let speed = 150;
let text = "Hi, I'm Sameen."
let i = 0;
function typewriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
} 
function blink() {
    document.getElementById("blink").style.visibility = "visible";
    setTimeout(notblink, 500);
}
function notblink() {
    document.getElementById("blink").style.visibility = "hidden";
    setTimeout(blink, 500);
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}






var modal = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img02");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


var modal = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img03");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}




var modal = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img04");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}