# 🔐 Day 21 - Random Password Generator

> **Tags:** `JavaScript` `DOM-Manipulation` `Clipboard-API` `Security` `UI/UX` `Responsive-Design`

A modern, fast, and responsive Random Password Generator built with vanilla JavaScript, modern CSS3 gradients, and HTML5. Generates strong, cryptographically diverse passwords combining uppercase letters, lowercase letters, numbers, and special symbols with instant one-click clipboard copying.

---

## 📸 Preview & Features

- **Secure Character Composition:**
  - Guarantees character coverage spanning uppercase letters, lowercase letters, numeric digits, and special symbols.
  - Generates secure 14-character passwords utilizing random indexing and array shuffling.
- **One-Click Clipboard Integration:**
  - Built-in asynchronous Clipboard API with automatic fallback mechanism for cross-browser compatibility.
  - Instant visual feedback upon copying, transitioning the copy icon to a confirmation checkmark.
- **Vibrant & Modern UI/UX:**
  - Colorful multi-stop gradient background with ambient radial glow highlights.
  - Glassmorphic container with backdrop filters and glowing accents.
  - Fluid responsive styling optimized for mobile and desktop screens.

---

## 🚀 How it Works

1. **Character Set Composition & Shuffling:**
   ```javascript
   const generatePassword = () => {
       const length = 14;
       let password = "";

       password += upperCase[Math.floor(Math.random() * upperCase.length)];
       password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
       password += numbers[Math.floor(Math.random() * numbers.length)];
       password += symbols[Math.floor(Math.random() * symbols.length)];

       while (password.length < length) {
           password += allChars[Math.floor(Math.random() * allChars.length)];
       }

       const shuffled = password.split("").sort(() => 0.5 - Math.random()).join("");
       passwordBox.value = shuffled;
   };
   ```
2. **Asynchronous Clipboard Copy:**
   - Evaluates `navigator.clipboard` support in secure contexts with automatic `document.execCommand` fallback.
   - Triggers dynamic icon and color state transitions during confirmation.

---

## 💻 Code Structure

- `index.html` - Semantic structure containing the generator header badge, display input, and action triggers.
- `style.css` - Vibrant gradient theme, glassmorphic card design, custom fonts, and responsive layout rules.
- `script.js` - Character sets, password generation algorithm, and clipboard copy handler.
