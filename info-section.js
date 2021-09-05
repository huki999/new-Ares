var slideIndex = [1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
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

// first slideshow
let holder1 = document.getElementById("card-holder-img");

let container1 = document.getElementById("slideshow-container1");

container1.style.display = "none";

holder1.addEventListener("click", () => {
  if (container1.style.display === "none") {
    container1.style.display = "block"
    container1.scrollIntoView();
  }
});

let xIcon1 = document.getElementById("x-icon1");

xIcon1.addEventListener("click", () => {
  if (container1.style.display === "block") {
    container1.style.display = "none";
  }
});

//second slideshow
let holder2 = document.getElementById("card-holder-img2");

let container2 = document.getElementById("slideshow-container2");

container2.style.display = "none";

holder2.addEventListener("click", () => {
  if (container2.style.display === "none") {
    container2.style.display = "block"
    container2.scrollIntoView();
  }
});

let xIcon2 = document.getElementById("x-icon2");

xIcon2.addEventListener("click", () => {
  if (container2.style.display === "block") {
    container2.style.display = "none";
  }
});

//thirth slideshow
let holder3 = document.getElementById("card-holder-img3");

let container3 = document.getElementById("slideshow-container3");

container3.style.display = "none";

holder3.addEventListener("click", () => {
  if (container3.style.display === "none") {
    container3.style.display = "block"
    container3.scrollIntoView();
  }
});

let xIcon3 = document.getElementById("x-icon3");

xIcon3.addEventListener("click", () => {
  if (container3.style.display === "block") {
    container3.style.display = "none";
  }
});