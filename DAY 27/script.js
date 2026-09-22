const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const items = document.querySelectorAll(".item");

let index = 0;

const updateSlideIndex = (offset) => {
    index += offset;
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
};

const updateSlides = () => {
    slidesContainer.style.transition = "transform 0.35s ease-in-out";
    slidesContainer.style.transform = `translateX(-${(index + 1) * 100}%)`;
};

const setActiveItem = () => {
    items.forEach((item) => item.classList.remove("active"));
    if (items[index]) {
        items[index].classList.add("active");
    }
};

const moveToNextSlide = () => {
    updateSlideIndex(1);
    updateSlides();
    setActiveItem();
};

const moveToPrevSlide = () => {
    updateSlideIndex(-1);
    updateSlides();
    setActiveItem();
};

const handleItemClick = (i) => {
    index = i;
    setActiveItem();
    updateSlides();
};

items.forEach((item, i) => {
    item.addEventListener("click", () => handleItemClick(i));
});

prevBtn.addEventListener("click", moveToPrevSlide);
nextBtn.addEventListener("click", moveToNextSlide);

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        moveToPrevSlide();
    } else if (e.key === "ArrowRight") {
        moveToNextSlide();
    }
});

slidesContainer.insertAdjacentHTML("afterbegin", slides[slides.length - 1].outerHTML);
slidesContainer.insertAdjacentHTML("beforeend", slides[0].outerHTML);
slidesContainer.style.transform = "translateX(-100%)";

setActiveItem();
