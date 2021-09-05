var slideIndex = [1,1,1];
var slideId = ["mySlides4", "mySlides5", "mySlides6"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

// first rent slideshow
let holder4 = document.getElementById("card-holder-img4");

let container4 = document.getElementById("slideshow-container4");

container4.style.display = "none";

holder4.addEventListener("click", () => {
  if (container4.style.display === "none") {
    container4.style.display = "block"
    container4.scrollIntoView();
  }
});

let xIcon4 = document.getElementById("x-icon4");

xIcon4.addEventListener("click", () => {
  if (container4.style.display === "block") {
    container4.style.display = "none";
  }
});

// second rent slideshow
let holder5 = document.getElementById("card-holder-img5");

let container5 = document.getElementById("slideshow-container5");

container5.style.display = "none";

holder5.addEventListener("click", () => {
  if (container5.style.display === "none") {
    container5.style.display = "block"
    container5.scrollIntoView();
  }
});

let xIcon5 = document.getElementById("x-icon5");

xIcon5.addEventListener("click", () => {
  if (container5.style.display === "block") {
    container5.style.display = "none";
  }
});

// thirth rent slideshow
let holder6 = document.getElementById("card-holder-img6");

let container6 = document.getElementById("slideshow-container6");

container6.style.display = "none";

holder6.addEventListener("click", () => {
  if (container6.style.display === "none") {
    container6.style.display = "block"
    container6.scrollIntoView();
  }
});

let xIcon6 = document.getElementById("x-icon6");

xIcon6.addEventListener("click", () => {
  if (container6.style.display === "block") {
    container6.style.display = "none";
  }
});

