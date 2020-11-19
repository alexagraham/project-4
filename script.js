var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "";
  setTimeout(() => {
    slides[slideIndex - 1].classList.add("active");
  }, 100);
  dots[slideIndex - 1].className += " active";
}

//slide 1 citation modal
var modal = document.getElementById("modal");
var openModal = document.getElementById("openModal");
var closeModal = document.getElementById("closeModal");

function toggleModal() {
  modal.classList.toggle("active");
}

openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);

//slide 9 colorize the image
function colorize() {
  var img = document.querySelector("#slide-nine-image");
  img.classList.toggle("colorized");
}

var checkbox = document.getElementById("checkbox");

// for X ray slide 8
// get reference to first image

var imageOne = document.getElementById("slide-eight-torso");

// get reference to the second image

var imageTwo = document.getElementById("slide-eight-x-ray");

checkbox.addEventListener("change", function (e) {
  if (e.target.checked) {
    console.log("The checkbox is checked");
    // imageOne.classList.remove("active")
    // imageTwo.classList.add("active")

    imageOne.classList.remove("active");
    imageTwo.classList.add("active");
  } else {
    console.log("The checkbox is not checked.");
    // imageOne.classList.add("active")
    // imageTwo.classList.remove("active")

    imageOne.classList.add("active");
    imageTwo.classList.remove("active");
  }
});
