# 🌟 Day 8 - Blob Maker

> **Tags:** `JavaScript` `CSS-Generators` `DOM-Manipulation` `CSS-Border-Radius` `UI/UX`

An interactive CSS Blob Generator tool that lets developers dynamically manipulate eight-value `border-radius` properties and dimensions to craft organic vector-like blob shapes with instant CSS code export.

---

## 📸 Preview & Features

- **8-Value CSS Border-Radius Engine:** Interactive sliders mapping the 4 horizontal and 4 vertical radius corners to produce fluid, organic geometric shapes.
- **Dynamic Dimension Controls:** Real-time width and height inputs with automatic shape scaling and boundary preservation.
- **One-Click CSS Exporter:** Instantly copy the generated `border-radius`, `height`, and `width` declaration to the clipboard with toast feedback.
- **Live Visual Canvas:** Rendered on a dark gradient canvas with glowing neon accents.
- **Responsive & Accessible Design:** Optimized layout for both desktop and mobile viewports.

---

## 🚀 How it Works

1. **8-Value Border Radius Syntax:**
   $$\text{border-radius}: r_1\% \ (100 - r_1)\% \ (100 - r_3)\% \ r_3\% \ / \ r_4\% \ r_2\% \ (100 - r_2)\% \ (100 - r_4)\%$$
2. **Reactive Input Listeners:** Any adjustment to sliders or dimension fields recalculates the 8 radius points and dynamically updates the DOM element inline style.
3. **Clipboard Integration:** Uses the modern `navigator.clipboard` API with seamless legacy fallback to write the snippet to the user's clipboard.

---

## 💻 Code Structure

- `index.html` - Canvas stage, dimension inputs, range sliders, and CSS export container.
- `style.css` - Dark theme design, glowing gradient blob styling, custom slider tracks, and toast notifications.
- `script.js` - Real-time calculation logic, slider math mapping, and clipboard copy handler.
