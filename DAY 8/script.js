const outputCode = document.getElementById("css-code");
const blob = document.getElementById("blob");
const sliders = document.querySelectorAll(".sliders input[type='range']");
const heightInput = document.getElementById("blob-height");
const widthInput = document.getElementById("blob-width");
const copyBtn = document.getElementById("copy");
const toast = document.getElementById("toast");

function createBlob() {
    const radiusOne = sliders[0].value;
    const radiusTwo = sliders[1].value;
    const radiusThree = sliders[2].value;
    const radiusFour = sliders[3].value;

    const blobHeight = parseInt(heightInput.value, 10) || 200;
    const blobWidth = parseInt(widthInput.value, 10) || 200;

    /*
     * border-radius: 
     * horizontal-top-left horizontal-top-right horizontal-bottom-right horizontal-bottom-left / 
     * vertical-top-left vertical-top-right vertical-bottom-right vertical-bottom-left;
     */
    const borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`;

    blob.style.borderRadius = borderRadius;
    blob.style.height = `${blobHeight}px`;
    blob.style.width = `${blobWidth}px`;

    const generatedCSS = `border-radius: ${borderRadius}; height: ${blobHeight}px; width: ${blobWidth}px;`;
    outputCode.value = generatedCSS;
}

// Copy Code to Clipboard with Toast
let toastTimeout;
function showToast() {
    clearTimeout(toastTimeout);
    toast.classList.add("show");
    copyBtn.textContent = "Copied!";
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
        copyBtn.textContent = "Copy CSS";
    }, 2000);
}

copyBtn.addEventListener("click", () => {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(outputCode.value).then(showToast).catch(() => {
            fallbackCopy(outputCode.value);
        });
    } else {
        fallbackCopy(outputCode.value);
    }
});

function fallbackCopy(text) {
    outputCode.select();
    try {
        document.execCommand("copy");
        showToast();
    } catch (err) {
        console.error("Failed to copy CSS code: ", err);
    }
}

// Real-time Event Listeners
sliders.forEach((slider) => {
    slider.addEventListener("input", createBlob);
});

[heightInput, widthInput].forEach((inp) => {
    inp.addEventListener("input", createBlob);
    inp.addEventListener("change", createBlob);
});

// Initialize on Load
createBlob();
