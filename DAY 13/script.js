const textarea = document.getElementById("input-textarea");

const wordCountEl = document.getElementById("word-count");
const charCountEl = document.getElementById("char-count");
const charNoSpaceCountEl = document.getElementById("char-no-space-count");
const sentenceCountEl = document.getElementById("sentence-count");
const paragraphCountEl = document.getElementById("paragraph-count");

const readingTimeEl = document.getElementById("reading-time");
const speakingTimeEl = document.getElementById("speaking-time");

const btnUpper = document.getElementById("btn-upper");
const btnLower = document.getElementById("btn-lower");
const btnTitle = document.getElementById("btn-title");
const btnCopy = document.getElementById("btn-copy");
const btnClear = document.getElementById("btn-clear");
const toast = document.getElementById("toast");

function calculateMetrics() {
    const text = textarea.value;

    // 1. Character Counts
    const totalChars = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;

    // 2. Word Count
    const trimmed = text.trim();
    const words = trimmed === "" ? 0 : trimmed.split(/\s+/).filter(w => w.length > 0).length;

    // 3. Sentence Count (based on period, exclamation, or question marks)
    let sentences = 0;
    if (trimmed !== "") {
        const matches = text.match(/[^.!?]+[.!?]+(\s|$)/g);
        sentences = matches ? matches.length : 1;
    }

    // 4. Paragraph Count (separated by newlines)
    const paragraphs = trimmed === "" ? 0 : text.split(/\n+/).filter(p => p.trim().length > 0).length;

    // 5. Reading Time (avg 200 WPM) & Speaking Time (avg 130 WPM)
    const readingSeconds = Math.ceil((words / 200) * 60);
    const speakingSeconds = Math.ceil((words / 130) * 60);

    const formatTime = (seconds) => {
        if (seconds < 60) {
            return `${seconds} sec`;
        }
        const mins = Math.floor(seconds / 60);
        const remSecs = seconds % 60;
        return remSecs > 0 ? `${mins}m ${remSecs}s` : `${mins} min`;
    };

    // Update DOM Display
    wordCountEl.textContent = words;
    charCountEl.textContent = totalChars;
    charNoSpaceCountEl.textContent = charsNoSpaces;
    sentenceCountEl.textContent = sentences;
    paragraphCountEl.textContent = paragraphs;

    readingTimeEl.textContent = formatTime(readingSeconds);
    speakingTimeEl.textContent = formatTime(speakingSeconds);
}

// Case Converter Tools
btnUpper.addEventListener("click", () => {
    textarea.value = textarea.value.toUpperCase();
    calculateMetrics();
});

btnLower.addEventListener("click", () => {
    textarea.value = textarea.value.toLowerCase();
    calculateMetrics();
});

btnTitle.addEventListener("click", () => {
    textarea.value = textarea.value
        .toLowerCase()
        .replace(/(?:^|\s|-|\/)\S/g, (match) => match.toUpperCase());
    calculateMetrics();
});

// Copy to Clipboard
let toastTimeout;
function showToast() {
    clearTimeout(toastTimeout);
    toast.classList.add("show");
    btnCopy.textContent = "Copied!";
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
        btnCopy.textContent = "Copy Text";
    }, 2000);
}

btnCopy.addEventListener("click", () => {
    if (!textarea.value) return;

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textarea.value).then(showToast).catch(() => {
            fallbackCopy(textarea.value);
        });
    } else {
        fallbackCopy(textarea.value);
    }
});

function fallbackCopy(text) {
    textarea.select();
    try {
        document.execCommand("copy");
        showToast();
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}

// Clear Text
btnClear.addEventListener("click", () => {
    textarea.value = "";
    calculateMetrics();
    textarea.focus();
});

// Event Listeners for real-time tracking
["input", "keyup", "paste", "cut"].forEach((event) => {
    textarea.addEventListener(event, () => {
        setTimeout(calculateMetrics, 0);
    });
});

// Initialize on Load
calculateMetrics();
