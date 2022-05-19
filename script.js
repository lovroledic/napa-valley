const body = document.querySelector('body');
const hero = document.querySelector(".hero");
const heroBackground = document.querySelector(".hero-background img");
const heroContent = document.querySelector(".hero-content");
const craft = document.querySelector(".craft");
const swiper3btn = document.querySelector('.swiper-3-button-next');
const swiper3img = document.querySelector('.swiper-3-item-image img');
const modals = document.querySelectorAll(".modal-container");
const moreSpacing = document.querySelector(".more-spacing");
const slider3 = document.querySelector(".slider-3-content");

window.onload = function() {
    hero.classList.add("active");
    swiper3btn.style.top = swiper3img.clientHeight / 2 + "px";
}

window.addEventListener("scroll", function() {
    let position = window.scrollY;

    craft.style.top = position < 300 ? -Math.sqrt(position) * 12.32 + "px" : "-213.4px";
    heroBackground.style.top = position < 370 ? position * 0.6 + "px" : "222px"; 
    heroContent.style.top = position < 370 ? -Math.sqrt(position) * 7.79 + "px" : "-150px"; 
})

window.addEventListener('resize', function() {
    swiper3btn.style.top = (swiper3img.clientHeight / 2) + "px";
})

function togglePlay(slide) {
    let video = slide.querySelector("video");
    if (video.paused) {
        video.play();
        slide.style.cursor = "url(assets/wine/cursor-pause.svg) 32 32, auto";
        slide.style.display = "none";
        slide.style.display = "flex";
    } else {
         video.pause();
         slide.style.cursor = "url(assets/wine/cursor-play.svg) 32 32, auto";
    }
}
function openModal(index) {
    body.style.overflow = "hidden";
    modals[index].style.transform = "translateY(0)";
    modals[index].scrollTop = 0;
}
function closeModal(btn) {
    let modal = btn.parentNode.parentNode.parentNode.parentNode;
    modal.style.transform = "translateY(100%)";
    body.style.overflow = "initial";
}