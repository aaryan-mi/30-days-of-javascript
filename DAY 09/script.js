const filterBlur = document.getElementById("blur");
const filterContrast = document.getElementById("contrast");
const filterHue = document.getElementById("hue-rotate");
const filterSepia = document.getElementById("sepia");

const blurValue = document.getElementById("blur-value");
const contrastValue = document.getElementById("contrast-value");
const hueValue = document.getElementById("hue-rotate-value");
const sepiaValue = document.getElementById("sepia-value");

const noFlipBtn = document.getElementById("no-flip");
const flipXBtn = document.getElementById("flip-x");
const flipYBtn = document.getElementById("flip-y");

const uploadButton = document.getElementById("upload-button");
const image = document.getElementById("chosen-image");
const imageContainer = document.getElementById("image-container");
const placeholderBox = document.getElementById("placeholder-box");
const downloadButton = document.getElementById("download-button");
const resetButton = document.getElementById("reset-button");

// Apply CSS Filters & Update Badges
function applyFilter() {
    const blur = filterBlur.value;
    const contrast = filterContrast.value;
    const hue = filterHue.value;
    const sepia = filterSepia.value;

    image.style.filter = `blur(${blur}px) contrast(${contrast}%) hue-rotate(${hue}deg) sepia(${sepia}%)`;

    blurValue.textContent = `${blur}px`;
    contrastValue.textContent = `${contrast}%`;
    hueValue.textContent = `${hue}°`;
    sepiaValue.textContent = `${sepia}%`;
}

// Flip Transformations
function flipImage() {
    if (flipXBtn.checked) {
        image.style.transform = "scaleX(-1)";
    } else if (flipYBtn.checked) {
        image.style.transform = "scaleY(-1)";
    } else {
        image.style.transform = "scale(1, 1)";
    }
}

// Reset All Filters and Transforms
function resetFilter() {
    filterBlur.value = "0";
    filterContrast.value = "100";
    filterHue.value = "0";
    filterSepia.value = "0";
    noFlipBtn.checked = true;

    applyFilter();
    flipImage();
}

// Image Upload Handler
uploadButton.addEventListener("change", () => {
    const file = uploadButton.files[0];
    if (file) {
        resetFilter();
        const reader = new FileReader();
        reader.onload = () => {
            image.src = reader.result;
            placeholderBox.style.display = "none";
            imageContainer.style.display = "flex";
            downloadButton.removeAttribute("disabled");
        };
        reader.readAsDataURL(file);
    }
});

// Slider & Control Listeners
[filterBlur, filterContrast, filterHue, filterSepia].forEach((slider) => {
    slider.addEventListener("input", applyFilter);
});

const radioBtns = document.querySelectorAll(".flip-option input[type='radio']");
radioBtns.forEach((radio) => {
    radio.addEventListener("change", flipImage);
});

resetButton.addEventListener("click", resetFilter);

// Export/Download Filtered Image
downloadButton.addEventListener("click", () => {
    if (!image.src) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.crossOrigin = "anonymous";
    img.src = image.src;

    img.onload = () => {
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;

        ctx.filter = `blur(${filterBlur.value}px) contrast(${filterContrast.value}%) hue-rotate(${filterHue.value}deg) sepia(${filterSepia.value}%)`;

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);

        if (flipXBtn.checked) {
            ctx.scale(-1, 1);
        } else if (flipYBtn.checked) {
            ctx.scale(1, -1);
        }

        ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        ctx.restore();

        const link = document.createElement("a");
        link.download = "edited-photo.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    };
});

// Initialize on Load
resetFilter();
