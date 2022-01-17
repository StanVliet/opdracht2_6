let slideIndex = 0;

function slideshowSetup() {
    document.getElementById("slideshow-next").addEventListener("click", slideshowNext);
    document.getElementById("slideshow-prev").addEventListener("click", slideshowPrev);
}

window.addEventListener("load", slideshowSetup);

function slideshowNext() {
    let slides = document.getElementsByClassName("slide");

    slides[slideIndex].classList.remove("visible");

    slideIndex += 1;
    //slides.length = 5
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].classList.add("visible");
}

function slideshowPrev() {
    let slides = document.getElementsByClassName("slide");

    slides[slideIndex].classList.remove("visible");

    slideIndex -= 1;

    if (slideIndex <= 0 ) {
        SlideIndex = slides.length - 1;
    }

    slides[slideIndex].classList.add("visible");
}