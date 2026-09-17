# 🎲 Day 22 - Random Number Generator

> **Tags:** `JavaScript` `DOM-Manipulation` `Math-API` `UI/UX` `CSS-Animations` `Responsive-Design`

A clean, responsive Random Number Generator built with vanilla JavaScript, modern CSS3 gradients, and HTML5. Generates random numbers within a specified range instantly with smooth visual pop animations and modern glassmorphic aesthetics.

---

## 📸 Preview & Features

- **Instant Number Generation:**
  - Fast, client-side numeric randomization between 1 and 100 powered by `Math.random()`.
  - Auto-initializes on load with immediate feedback.
- **Dynamic Micro-Interactions:**
  - Custom pop/bounce CSS keyframe animation upon every number roll.
  - Interactive gradient button with smooth elevation and hover states.
- **Vibrant & Modern UI/UX:**
  - Colorful multi-stop gradient background with ambient radial glow highlights.
  - Glassmorphic container with backdrop blur and neon-accented typography.
  - Mobile-responsive layout tailored for seamless viewing across all screen sizes.

---

## 🚀 How it Works

1. **Random Number Computation:**
   ```javascript
   const getRandomNumber = (min, max) => {
       return Math.floor(Math.random() * (max - min + 1)) + min;
   };
   ```
2. **Animation Trigger Pipeline:**
   - Clears and retriggers the CSS animation class via DOM reflow (`void offsetWidth`) on every button click for consistent micro-interactions.

---

## 💻 Code Structure

- `index.html` - Semantic structure containing the badge, heading, number display card, and trigger button.
- `style.css` - Vibrant ambient gradient theme, glassmorphic container, typography, and bounce animations.
- `script.js` - Random number generation logic and animation state triggers.
