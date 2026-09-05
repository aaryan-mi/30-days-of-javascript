# 🌟 Day 10 - Input Character Counter

> **Tags:** `JavaScript` `DOM-Manipulation` `Text-Analytics` `String-Methods` `UI/UX`

A modern, responsive character counter and text metrics application that provides real-time character analytics, word counts, space counts, and one-click clipboard copying.

---

## 📸 Preview & Features

- **Real-Time Character Tracking:** Instantly counts total characters including alphanumeric symbols, spaces, and punctuation.
- **Detailed Analytics Grid:**
  - **Total Characters:** Overall string length.
  - **Characters (No Spaces):** Total character count excluding whitespace characters.
  - **Word Count:** Calculates distinct words across lines and paragraphs.
  - **Whitespace Count:** Tracks total spaces and line breaks.
- **Convenient Controls:**
  - **Copy Text:** One-click copy with toast popup notification.
  - **Clear Text:** Fast field wipe and focus reset.
- **Clean Responsive UI:** Dark theme aesthetic with glowing counter typography and subtle glassmorphic styling.

---

## 🚀 How it Works

1. **Reactive Event Pipeline:** Listens to `input`, `keyup`, `paste`, and `cut` events on the input area.
2. **Text Processing Logic:**
   $$\text{Total Characters} = \text{text.length}$$
   $$\text{No Spaces} = \text{text.replace(/\\s/g, '').length}$$
   $$\text{Words} = \text{text.trim().split(/\\s+/).length}$$
   $$\text{Spaces} = (\text{text.match(/\\s/g)} \ || \ []).\text{length}$$
3. **DOM Updates:** Metrics update synchronously without re-rendering unnecessary DOM trees.

---

## 💻 Code Structure

- `index.html` - Semantic layout, counter display card, stats grid, and text input area.
- `style.css` - Dark theme design, glowing metric typography, responsive layout, and toast styling.
- `script.js` - Real-time string metric computations, clipboard API integration, and event handlers.
