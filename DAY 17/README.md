# 🌟 Day 17 - Random Paragraph Generator

> **Tags:** `JavaScript` `DOM-Manipulation` `Text-Processing` `UI/UX` `Clipboard-API` `Responsive-Design`

A versatile, multi-thematic Random Paragraph and Placeholder Text Generator built with modern HTML5, CSS3, and JavaScript. It allows developers, designers, and writers to generate curated dummy text across distinct domains with custom quantities, live statistics, and multiple export formats.

---

## 📸 Preview & Features

- **Thematic Content Categories:**
  - 🪐 **Deep Space & Cosmos:** Astrophysics, nebulae, gravitational lensing, and cosmic radiation.
  - ⚡ **Technology & AI:** Distributed systems, neural representations, quantum computing, and cryptography.
  - 🌿 **Nature & Planetary Ecology:** Mycorrhizal networks, oceanic bioluminescence, and microclimates.
  - 🧠 **Philosophy & Human Mind:** Phenomenology of consciousness, stoic equanimity, and epistemology.
  - 📜 **Classic Latin Lorem Ipsum:** Traditional Cicero prose and classical placeholder passages.
  - 🌐 **All Topics (Mixed Pool):** Dynamic combination across all domain libraries.
- **Configurable Controls:**
  - **Paragraph Count Stepper:** Quick stepper controls (1–10) with one-click quick select pills.
  - **Multiple Output Formats:** Seamlessly switch between Plain Text, HTML `<p>` tags, and Markdown blocks.
- **Live Metrics Dashboard:** Real-time calculation of total paragraphs, word count, character count, and estimated reading time.
- **Clipboard Integration:**
  - One-click **Copy All** action with interactive visual feedback.
  - Individual **Copy Paragraph** buttons on each generated card.
- **Dark Obsidian UI:** Glassmorphic layout with glowing left-accent borders, smooth entrance animations, and responsive layout.

---

## 🚀 How it Works

1. **Fisher-Yates Shuffling Algorithm:**
   ```javascript
   function shuffleArray(array) {
       const arr = [...array];
       for (let i = arr.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           [arr[i], arr[j]] = [arr[j], arr[i]];
       }
       return arr;
   }
   ```
2. **Format Transformation Engine:**
   - Evaluates selected formatting mode (`plain`, `html`, `markdown`) and wraps paragraphs accordingly.
3. **Async Clipboard API:**
   - Uses `navigator.clipboard.writeText()` for asynchronous clipboard copying with automatic fallback handling and toast alerts.

---

## 💻 Code Structure

- `index.html` - Generator controls, category selectors, live metrics bar, and output container.
- `style.css` - Dark ambient styling, stepper controls, responsive card grid, and animated toast alerts.
- `script.js` - Domain dataset repository, Fisher-Yates shuffle engine, format parsers, and clipboard managers.
