# 💻 Day 28 - Live Code Editor

> **Tags:** `JavaScript` `DOM-Manipulation` `Iframe-API` `Code-Execution` `UI/UX` `Responsive-Design`

An interactive in-browser Live Code Editor built with vanilla JavaScript, modern CSS3 gradients, and HTML5. Provides partitioned input panes for HTML5, CSS3, and JavaScript with instantaneous synchronized rendering inside an isolated execution sandbox.

---

## 📸 Preview & Features

- **Multi-Language Pane Layout:**
  - Dedicated code editors for HTML5 (Orange), CSS3 (Sky Blue), and JavaScript (Amber).
  - Pre-loaded interactive starter template with markup, styles, and event listeners.
- **Isolated Sandbox Execution:**
  - Leverages iframe sandbox rendering (`srcdoc`) for safe, isolated DOM compilation.
  - Wrapped JavaScript evaluation prevents editor crashes during partial typing.
- **Developer Micro-Interactions:**
  - Full indentation support with custom `Tab` key handling (2-space inserts).
  - Custom scrollbars, monospace typography, and responsive split view.
- **Vibrant & Modern UI/UX:**
  - Dark obsidian background with vibrant ambient orange, sky blue, and amber radial glows.
  - Distinct colored headers matching standard web technology brand palettes.

---

## 🚀 How it Works

1. **Reactive Compilation Engine:**
   ```javascript
   const run = () => {
       const html = htmlCode.value;
       const css = cssCode.value;
       const js = jsCode.value;

       const source = `
           <!DOCTYPE html>
           <html>
           <head><style>${css}</style></head>
           <body>
               ${html}
               <script>
                   try { ${js} } catch (err) { console.warn(err); }
               <\/script>
           </body>
           </html>
       `;

       output.srcdoc = source;
   };
   ```
2. **Keyboard Ergonomics:**
   - Intercepts default browser tab navigation to insert two spaces at the current cursor selection range.

---

## 💻 Code Structure

- `index.html` - Semantic layout organizing the header badge, code input containers, and live output frame.
- `style.css` - Vibrant ambient gradient theme, editor pane styles, monospace typography, and responsive breakpoints.
- `script.js` - Code compilation pipeline, starter templates, real-time input dispatch, and tab key mechanics.
