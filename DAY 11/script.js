let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const slideBadge = document.getElementById("slide-badge");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const sliderContainer = document.getElementById("slider-container");

const totalSlides = slides.length;

function updateSlide(newIndex) {
    // Wrap around bounds
    if (newIndex < 0) {
        currentSlide = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = newIndex;
    }

    // Update active slide class
    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
    });

    // Update active pagination dot
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
        dot.setAttribute("aria-selected", index === currentSlide ? "true" : "false");
    });

    // Update slide counter badge
    const currentNum = String(currentSlide + 1).padStart(2, "0");
    const totalNum = String(totalSlides).padStart(2, "0");
    slideBadge.textContent = `${currentNum} / ${totalNum}`;
}

function nextSlide() {
    updateSlide(currentSlide + 1);
}

function prevSlide() {
    updateSlide(currentSlide - 1);
}

// Button Click Listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Dot Pagination Click Listeners
dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        const targetIndex = parseInt(dot.dataset.index, 10);
        updateSlide(targetIndex);
    });
});

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        nextSlide();
    } else if (e.key === "ArrowLeft") {
        prevSlide();
    }
});

// Auto-Slide Interval (with pause on hover)
let autoSlideTimer = setInterval(nextSlide, 4500);

sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(autoSlideTimer);
});

sliderContainer.addEventListener("mouseleave", () => {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(nextSlide, 4500);
});

// Initialize on Load
updateSlide(0);
