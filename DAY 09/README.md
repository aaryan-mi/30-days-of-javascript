# 🌟 Day 9 - Basic Image Editor

> **Tags:** `JavaScript` `Canvas-API` `CSS-Filters` `DOM-Manipulation` `File-Reader` `UI/UX`

A client-side image editing studio built in pure JavaScript that allows users to upload local photos, adjust optical filters in real-time, apply perspective flips, and export high-resolution edited graphics via the HTML5 Canvas API.

---

## 📸 Preview & Features

- **Live CSS Filter Engine:**
  - **Blur:** Soften or bokeh effect ($0\text{px} - 10\text{px}$).
  - **Contrast:** Dynamic dynamic tonal range adjustment ($0\% - 200\%$).
  - **Hue Rotate:** Full $360^\circ$ color spectrum rotation.
  - **Sepia:** Warm vintage tone application ($0\% - 100\%$).
- **Perspective Transformations:** Instant horizontal and vertical image flipping.
- **Local File Upload:** Read and preview user photos with `FileReader` API.
- **High-Resolution Canvas Export:** Downloads the rendered image preserving original image dimensions and applied filters.
- **One-Click Reset:** Quickly revert all adjustments back to original defaults.

---

## 🚀 How it Works

1. **FileReader Processing:** When a file is selected, `FileReader.readAsDataURL()` converts the local file to a base64 string for immediate preview.
2. **Dynamic CSS Filter Composition:**
   $$\text{filter} = \text{blur}(X\text{px}) \ \text{contrast}(Y\%) \ \text{hue-rotate}(Z\text{deg}) \ \text{sepia}(W\%)$$
3. **Canvas Drawing & Export:**
   - A virtual `<canvas>` element matches the source image's native resolution.
   - 2D context filter (`ctx.filter`) and matrix transforms (`ctx.scale(-1, 1)`) are applied before rendering.
   - `canvas.toDataURL("image/png")` triggers automatic client-side file download.

---

## 💻 Code Structure

- `index.html` - Dual-panel studio layout, filter range controls, flip selectors, and preview canvas stage.
- `style.css` - Dark creative studio aesthetics, glowing sliders, custom segmented controls, and responsive layout.
- `script.js` - Filter calculation engine, file loader, transform handlers, and Canvas rendering pipeline.
