# 🔢 Day 24 - Counter Application

> **Tags:** `JavaScript` `DOM-Manipulation` `UI/UX` `Keyboard-Events` `CSS-Animations` `Responsive-Design`

An interactive, responsive Counter Application built with vanilla JavaScript, modern CSS3 gradients, and HTML5. Features dynamic color feedback reflecting count state (positive, negative, zero), micro-bounce animations, and keyboard accessibility.

---

## 📸 Preview & Features

- **Dynamic State Representation:**
  - Distinct real-time color styling and glows for positive (emerald), negative (rose), and zero (cyan) numerical values.
  - Smooth scale pop animation triggered on every count alteration.
- **Keyboard Shortcuts:**
  - `ArrowUp`: Increment counter.
  - `ArrowDown`: Decrement counter.
  - `R`: Instant reset back to zero.
- **Vibrant & Modern UI/UX:**
  - Ambient multi-radial glow backdrop on an obsidian gradient base.
  - Glassmorphic card design with frosted blur effects.
  - Multi-colored interactive gradient action buttons with tactile press states.

---

## 🚀 How it Works

1. **State Evaluation & Visual Dispatch:**
   ```javascript
   const updateDisplay = () => {
       value.textContent = count;
       value.classList.remove("positive", "negative", "zero", "pop");
       void value.offsetWidth;

       if (count > 0) value.classList.add("positive");
       else if (count < 0) value.classList.add("negative");
       else value.classList.add("zero");

       value.classList.add("pop");
   };
   ```
2. **Unified Action Delegation:**
   - Evaluates button identifiers (`decrease`, `reset`, `increase`) or matching keyboard triggers to modify state and invoke UI rendering.

---

## 💻 Code Structure

- `index.html` - Semantic markup including badge, title, numerical display area, and control buttons.
- `style.css` - Vibrant ambient styling, glassmorphic layout, button gradient themes, and bounce keyframes.
- `script.js` - Counter state management, DOM class dispatcher, and keyboard event bindings.
