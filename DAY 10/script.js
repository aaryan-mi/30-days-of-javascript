const textInput = document.getElementById("text-input");
const charCountDisplay = document.getElementById("char-count");
const charNoSpaceDisplay = document.getElementById("char-no-space-count");
const wordCountDisplay = document.getElementById("word-count");
const spaceCountDisplay = document.getElementById("space-count");

const copyBtn = document.getElementById("copy-btn");
const clearBtn = document.getElementById("clear-btn");
const toast = document.getElementById("toast");

function updateMetrics() {
    const text = textInput.value;

    // Total characters (including spaces & special characters)
    const totalChars = text.length;

    // Characters without spaces
    const noSpaces = text.replace(/\s/g, "").length;

    // Word count
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    // Space count
    const spaces = (text.match(/\s/g) || []).length;

    // Update DOM
    charCountDisplay.textContent = totalChars;
    charNoSpaceDisplay.textContent = noSpaces;
    wordCountDisplay.textContent = words;
    spaceCountDisplay.textContent = spaces;
}

// Copy to Clipboard
let toastTimeout;
function showToast() {
    clearTimeout(toastTimeout);
    toast.classList.add("show");
    copyBtn.textContent = "Copied!";
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
        copyBtn.textContent = "Copy Text";
    }, 2000);
}

copyBtn.addEventListener("click", () => {
    if (!textInput.value) return;

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textInput.value).then(showToast).catch(() => {
            fallbackCopy(textInput.value);
        });
    } else {
        fallbackCopy(textInput.value);
    }
});

function fallbackCopy(text) {
    textInput.select();
    try {
        document.execCommand("copy");
        showToast();
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}

// Clear Text
clearBtn.addEventListener("click", () => {
    textInput.value = "";
    updateMetrics();
    textInput.focus();
});

// Event Listeners for real-time responsiveness
["input", "keyup", "paste", "cut"].forEach((event) => {
    textInput.addEventListener(event, () => {
        // Timeout to handle paste/cut after DOM text insertion
        setTimeout(updateMetrics, 0);
    });
});

// Initialize on Load
updateMetrics();
