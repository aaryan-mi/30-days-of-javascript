# 🔢 Day 23 - Prime Number Checker

> **Tags:** `JavaScript` `DOM-Manipulation` `Algorithms` `Mathematics` `UI/UX` `Responsive-Design`

An interactive, responsive Prime and Composite Number Checker built with vanilla JavaScript, modern CSS3 gradients, and HTML5. Evaluates integers using trial division, giving instant visual feedback with custom status indicators and mathematical validation.

---

## 📸 Preview & Features

- **Accurate Mathematical Verification:**
  - Fast trial-division algorithm testing divisors up to `\(\sqrt{n}\)` with 6k ± 1 optimization.
  - Proper edge-case handling for 0, 1, negative values, and non-integer inputs.
- **Dynamic Contextual Feedback:**
  - Instant visual categorization with colored alert badges and icons.
  - Distinct status treatments for prime numbers, composite numbers, and validation warnings.
- **Vibrant & Modern UI/UX:**
  - Atmospheric dark gradient background with emerald and indigo ambient radial glows.
  - Glassmorphic card container with backdrop blur and responsive typography.
  - Full keyboard accessibility with `Enter` key check triggers.

---

## 🚀 How it Works

1. **Optimized Prime Trial Division:**
   ```javascript
   const isPrime = (num) => {
       if (num <= 1) return false;
       if (num <= 3) return true;
       if (num % 2 === 0 || num % 3 === 0) return false;
       for (let i = 5; i * i <= num; i += 6) {
           if (num % i === 0 || num % (i + 2) === 0) return false;
       }
       return true;
   };
   ```
2. **Dynamic UI Rendering:**
   - Appends contextual status icons and classes (`prime`, `not-prime`, `warning`) to render interactive feedback without page reloads.

---

## 💻 Code Structure

- `index.html` - Semantic layout featuring project badge, numeric input group, action button, and result display.
- `style.css` - Vibrant ambient gradient theme, glassmorphic card styling, responsive input controls, and status banners.
- `script.js` - Input validation, trial-division algorithm, and dynamic UI state handlers.
