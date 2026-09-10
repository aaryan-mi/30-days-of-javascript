document.addEventListener("DOMContentLoaded", () => {
    const charInput = document.getElementById("char-input");
    const detectBtn = document.getElementById("detect-btn");
    const pickButtons = document.querySelectorAll(".pick-btn");

    const charDisplay = document.getElementById("char-display");
    const charTypeEl = document.getElementById("char-type");
    const charNameEl = document.getElementById("char-name");

    const valHex = document.getElementById("val-hex");
    const valDecimal = document.getElementById("val-decimal");
    const valHtmlDec = document.getElementById("val-html-dec");
    const valHtmlHex = document.getElementById("val-html-hex");
    const valJs = document.getElementById("val-js");
    const valCss = document.getElementById("val-css");

    const codeCards = document.querySelectorAll(".code-card");
    const toast = document.getElementById("toast");

    function getScriptType(codePoint) {
        if (codePoint <= 31 || codePoint === 127) return "ASCII Control Character";
        if (codePoint >= 32 && codePoint <= 126) return "Basic Latin (ASCII)";
        if (codePoint >= 128 && codePoint <= 255) return "Latin-1 Supplement";
        if (codePoint >= 256 && codePoint <= 591) return "Latin Extended";
        if (codePoint >= 880 && codePoint <= 1023) return "Greek & Coptic";
        if (codePoint >= 1024 && codePoint <= 1279) return "Cyrillic";
        if (codePoint >= 2304 && codePoint <= 2431) return "Devanagari (Indic)";
        if (codePoint >= 8352 && codePoint <= 8399) return "Currency Symbols";
        if (codePoint >= 8592 && codePoint <= 8703) return "Arrows & Navigation";
        if (codePoint >= 8704 && codePoint <= 8959) return "Mathematical Operators";
        if (codePoint >= 9600 && codePoint <= 9983) return "Miscellaneous Symbols";
        if (codePoint >= 19968 && codePoint <= 40959) return "CJK Unified Ideographs";
        if (codePoint >= 127744 && codePoint <= 129791) return "Emoji & Pictographs";
        return "Unicode Extended Plane";
    }

    function inspectCharacter() {
        const rawText = charInput.value;
        if (!rawText) {
            charDisplay.textContent = "—";
            charTypeEl.textContent = "Empty";
            charNameEl.textContent = "Please enter a character";
            valHex.textContent = "—";
            valDecimal.textContent = "—";
            valHtmlDec.textContent = "—";
            valHtmlHex.textContent = "—";
            valJs.textContent = "—";
            valCss.textContent = "—";
            return;
        }

        // Handle surrogate pairs & emojis accurately
        const charArray = Array.from(rawText);
        const char = charArray[0];
        const codePoint = char.codePointAt(0);
        const hex = codePoint.toString(16).toUpperCase().padStart(4, "0");

        // Display Glyphs & Meta
        charDisplay.textContent = char;
        charTypeEl.textContent = getScriptType(codePoint);
        charNameEl.textContent = `Character: "${char}"`;

        // Update Formats
        valHex.textContent = `U+${hex}`;
        valDecimal.textContent = `${codePoint}`;
        valHtmlDec.textContent = `&#${codePoint};`;
        valHtmlHex.textContent = `&#x${hex};`;
        valJs.textContent = codePoint > 0xffff ? `\\u{${hex}}` : `\\u${hex}`;
        valCss.textContent = `\\${hex}`;
    }

    // Copy to Clipboard with Toast
    let toastTimeout;
    function showToast(text) {
        clearTimeout(toastTimeout);
        toast.textContent = `Copied "${text}" to clipboard!`;
        toast.classList.add("show");
        toastTimeout = setTimeout(() => {
            toast.classList.remove("show");
        }, 2000);
    }

    codeCards.forEach((card) => {
        card.addEventListener("click", () => {
            const valElement = card.querySelector(".code-val");
            const textToCopy = valElement.textContent;
            if (!textToCopy || textToCopy === "—") return;

            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(textToCopy).then(() => showToast(textToCopy));
            } else {
                const tempInput = document.createElement("input");
                tempInput.value = textToCopy;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);
                showToast(textToCopy);
            }
        });
    });

    // Quick Pick Pills
    pickButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            charInput.value = btn.dataset.char;
            inspectCharacter();
        });
    });

    // Input Listeners
    charInput.addEventListener("input", inspectCharacter);
    detectBtn.addEventListener("click", inspectCharacter);

    // Initial Inspection
    inspectCharacter();
});
