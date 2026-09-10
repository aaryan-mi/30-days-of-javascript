# 🌟 Day 15 - Unicode Character Inspector

> **Tags:** `JavaScript` `Unicode` `Character-Encoding` `DOM-Manipulation` `UI/UX`

An interactive Unicode Character Value Inspector and Encoding Converter that decodes any keyboard character, symbol, math operator, international glyph, or emoji into decimal code points, hexadecimal notations, HTML entities, and CSS/JS escape sequences.

---

## 📸 Preview & Features

- **Astral Plane & Emoji Support:** Uses modern `String.prototype.codePointAt()` and `Array.from()` to accurately decode 4-byte surrogate pair emojis and extended characters without truncation.
- **6-Format Code Converter:**
  - **Unicode Hex:** `U+0041`
  - **Decimal Code Point:** `65`
  - **HTML Entity (Dec):** `&#65;`
  - **HTML Entity (Hex):** `&#x41;`
  - **JavaScript Escape:** `\u0041` / `\u{1F680}`
  - **CSS Escape:** `\0041`
- **Intelligent Script & Category Classification:** Identifies ASCII, Latin Extended, Cyrillic, Devanagari, Currency Symbols, Math Operators, CJK Ideographs, and Emojis.
- **Interactive Quick-Picker:** Single-click character chips for rapid testing.
- **Click-to-Copy:** Tap any code card to copy formatted strings with toast feedback.

---

## 🚀 How it Works

1. **Character Extraction & Code Point Conversion:**
   $$\text{codePoint} = \text{Array.from(text)[0].codePointAt(0)}$$
2. **Hexadecimal String Mapping:**
   $$\text{Hex Notation} = \text{U+} + \text{codePoint.toString}(16).\text{toUpperCase}().\text{padStart}(4, '0')$$
3. **Entity Serialization:** Generates standard HTML decimal (`&#...;`) and hex (`&#x...;`) entity representations.

---

## 💻 Code Structure

- `index.html` - Inspector input, quick-pick buttons, character showcase stage, and code card grid.
- `style.css` - Dark theme styling, glowing circular hero badge, monospace code cards, and toast styles.
- `script.js` - Unicode code point parser, script classification engine, and clipboard handler.
