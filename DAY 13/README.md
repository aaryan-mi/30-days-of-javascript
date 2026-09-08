# 🌟 Day 13 - Live Word Counter

> **Tags:** `JavaScript` `DOM-Manipulation` `Text-Analytics` `String-Parsing` `UI/UX`

A comprehensive real-time word counting and text analysis application featuring multi-metric breakdowns (words, characters, sentences, paragraphs), estimated reading/speaking times, case converters, and one-click clipboard tools.

---

## 📸 Preview & Features

- **Real-Time Word & Character Calculation:** Instant analysis as you type or paste without lag.
- **5-Metric Analytics Panel:**
  - **Words:** Total words parsed via regex tokenization.
  - **Characters (Total):** Total length including whitespace.
  - **Characters (No Spaces):** Total alphanumeric and punctuation length.
  - **Sentences:** Sentence boundary detection via terminal punctuation.
  - **Paragraphs:** Distinct paragraph detection via newline breaks.
- **Reading & Speaking Time Estimates:**
  - **Reading Speed:** Estimated at standard $200\text{ WPM}$.
  - **Speaking Speed:** Estimated at standard $130\text{ WPM}$.
- **Text Utilities & Case Converters:**
  - `UPPERCASE` conversion
  - `lowercase` conversion
  - `Title Case` capitalization
  - `Copy Text` with toast feedback
  - `Clear` editor button

---

## 🚀 How it Works

1. **Reactive String Parsing:**
   $$\text{Words} = \text{text.trim().split}(/\\s+/).\text{length}$$
   $$\text{No Spaces} = \text{text.replace}(/\\s/g, '').\text{length}$$
   $$\text{Reading Seconds} = \left\lceil \frac{\text{Words}}{200} \times 60 \right\rceil$$
2. **Case Manipulation:** Uses regex replacement handlers to transform casing without losing caret contexts.
3. **Responsive DOM Updates:** Updates metrics synchronously across the dashboard.

---

## 💻 Code Structure

- `index.html` - Semantic layout, metric dashboard, reading time pills, and action toolbar.
- `style.css` - Dark theme aesthetic, glowing highlight cards, monospace number counters, and responsive design.
- `script.js` - String parsing logic, reading time algorithms, case transforms, and clipboard API handler.
