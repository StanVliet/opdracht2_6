
function slideshowSetup() {
    document.getElementById("slideshow-next").addEventListener("click", slideshowNext);
}

window.addEventListener("load", slideshowSetup);

function slideshowNext() {
    let slides = document.getElementsByClassName("slide");

    slides[0].classList.remove("visible");
    slides[1].classList.add("visible");
    
}