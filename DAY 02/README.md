# 🌟 Day 2 - Box Shadow Generator

> **Tags:** `JavaScript` `CSS-Generator` `DOM-Manipulation` `Clipboard-API` `UI-Component`

An interactive Box Shadow Generator tool that allows users to customize CSS box-shadow properties with live visual preview and copy the generated CSS code with one click.

---

## 📸 Preview & Features
- **Live Preview:** Visual box element updates in real-time as sliders and inputs change.
- **Customizable Controls:**
  - Horizontal Shadow & Vertical Shadow (-100px to 100px)
  - Blur Radius (0px to 100px)
  - Spread Radius (-50px to 50px)
  - Shadow Color (Color Picker)
  - Shadow Color Opacity (0.0 to 1.0)
  - Inset Shadow (Toggle Checkbox)
- **One-Click Copy:** Copy the resulting CSS `box-shadow` rule directly to your clipboard using the Navigator Clipboard API.

---

## 🚀 How it Works
1. Sliders and inputs have event listeners listening to `input` events.
2. `generateShadow()` extracts slider values and converts hex color + opacity into `rgba()`.
3. Combines parameters into a valid CSS `box-shadow` string and applies it to the element style.
4. Updates the textarea with the CSS rule and allows instant copying via `navigator.clipboard.writeText()`.

---

## 💻 Code Structure
- `index.html` - UI layout with sliders, preview container, and output code area.
- `style.css` - Responsive styling, sliders layout, and container styling.
- `script.js` - Dynamic shadow calculation, RGBA color conversion, and clipboard copy logic.
