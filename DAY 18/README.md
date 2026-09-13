# 🌟 Day 18 - CSS Changer Studio

> **Tags:** `JavaScript` `CSS-Variables` `CSS-Filters` `DOM-Manipulation` `FileReader-API` `UI/UX` `Clipboard-API`

An interactive CSS Custom Properties and Image Filter Studio built with modern HTML5, CSS3, and vanilla JavaScript. It empowers developers and designers to dynamically manipulate CSS variables, tweak graphical filters in real-time at 60fps, switch across curated presets, upload custom imagery, and export generated CSS code.

---

## 📸 Preview & Features

- **Dynamic CSS Variable Manipulation:**
  - **Frame & Layout:** Live control of accent base color, frame padding (`px`), border radius (`px`), width scaling (`%`), and shadow glow (`px`).
  - **CSS Filter Suite:** Real-time adjustments for Blur, Brightness, Contrast, Grayscale, Sepia, Hue Rotate, Saturation, and Invert.
  - **Transform & Angles:** Smooth continuous canvas tilt and rotation (`deg`).
- **Interactive Preset Engine:**
  - One-click filters: *Default*, *Cyberpunk Neon*, *Vintage Film*, *Emerald Mist*, *Warm Sunset*, *Noir Film*, and *Inverted Dimension*.
- **Live Image Gallery & Custom Upload:**
  - Curated high-resolution image switcher (Cyberpunk, Aurora, Landscape, Minimal Architecture).
  - Client-side **FileReader API** integration for custom user image uploads.
- **Real-Time Code Generator & Clipboard Export:**
  - Dynamically synthesizes clean `:root` CSS rules and element declarations.
  - One-click **Copy CSS** button with clipboard feedback.
- **Responsive Obsidian UI:** Dark theme, checkered canvas stage for transparency verification, and live metric badges.

---

## 🚀 How it Works

1. **CSS Custom Properties Syncing:**
   ```javascript
   function handleUpdate() {
       const suffix = this.dataset.sizing || '';
       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
       updateCssOutput();
   }
   ```
2. **Dual Event Listening (`input` + `change`):**
   - Listens to `input` for real-time continuous updates during slider dragging, and `change` for completed adjustments.
3. **Dynamic CSS Filter Composition:**
   ```css
   filter: blur(var(--blur))
           brightness(var(--brightness))
           contrast(var(--contrast))
           grayscale(var(--grayscale))
           sepia(var(--sepia))
           hue-rotate(var(--hue-rotate))
           saturate(var(--saturate))
           invert(var(--invert));
   ```

---

## 💻 Code Structure

- `index.html` - Dual-panel studio layout, slider controls, gallery selector, live preview canvas, and code output.
- `style.css` - CSS Custom properties, responsive 2-column grid, checkered canvas viewport, and range sliders.
- `script.js` - CSS variable updater, filter preset engine, FileReader handler, and clipboard manager.
- `images/` - High-resolution royalty-free asset library (`aurora.jpg`, `cyberpunk.jpg`, `landscape.jpg`, `minimal.jpg`).
