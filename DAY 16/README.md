# 🌟 Day 16 - Dictionary Application

> **Tags:** `JavaScript` `REST-API` `Asynchronous-JS` `DOM-Manipulation` `Speech-Synthesis` `UI/UX`

An interactive Lexicon Dictionary and Vocabulary Explorer powered by asynchronous REST APIs and the Web Speech API. Users can look up real-time definitions, IPA phonetics, audio pronunciations, contextual examples, and clickable synonym tags.

---

## 📸 Preview & Features

- **Asynchronous Word Lookup:** Fetches real-time definitions from the Free Dictionary REST API with seamless offline curated fallback.
- **Audio Pronunciation Engine:** Plays native phonetic recordings when available, with automatic Web Speech Synthesis fallback.
- **Rich Linguistic Breakdown:**
  - **Parts of Speech:** Distinct colored badges for nouns, verbs, adjectives, adverbs, etc.
  - **Definitions & Context:** Multi-definition lists with contextual italicized example sentences.
  - **Interactive Synonyms:** Clickable synonym chips that trigger instant lookup for the selected word.
- **Trending Exploration Pills:** Quick-access word pills (`serendipity`, `ephemeral`, `resilience`, `eloquent`, `solitude`).
- **Modern Responsive UI:** Dark ambient theme with glowing typography, smooth loading spinner, and friendly empty/error states.

---

## 🚀 How it Works

1. **REST API Fetch Pipeline:**
   ```javascript
   const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
   const data = await res.json();
   ```
2. **Audio Fallback Architecture:**
   - Evaluates `data[0].phonetics` for valid `.mp3` audio recordings.
   - Falls back to `window.speechSynthesis.speak(new SpeechSynthesisUtterance(word))` if no audio file is provided.
3. **Dynamic Meaning Mapping:** Recursively renders definitions, examples, and synonyms with event delegation for sub-queries.

---

## 💻 Code Structure

- `index.html` - Search interface, trending word pills, loading skeletons, and results card.
- `style.css` - Dark ambient styling, glowing header badges, responsive layout, and definition cards.
- `script.js` - Asynchronous fetch engine, SpeechSynthesis fallback, UI state managers, and interactive synonym listeners.
