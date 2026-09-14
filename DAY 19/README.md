# 🌟 Day 19 - Robot Joke Generator

> **Tags:** `JavaScript` `REST-APIs` `Web-Speech-API` `Web-Audio-API` `DOM-Manipulation` `UI/UX` `SVG-Animation`

An interactive AI comic companion and Robot Joke Generator (**CYBER-BOT 3000**) built with modern HTML5, CSS3, and vanilla JavaScript. Powered by dynamic REST APIs, the Web Speech Synthesis API, and procedural Web Audio synthesized sound effects.

---

## 📸 Preview & Features

- **Animated Robot Character (CYBER-BOT 3000):**
  - **Animated SVG Face:** Blinking LED eyes, glowing antenna pulse, and dynamic mouth equalizer visualizer.
  - **Dynamic State Engine:** Real-time state transitions between *Idle*, *Synthesizing*, and *Speaking Aloud*.
- **Voice Synthesis & Procedural Audio:**
  - **Web Speech API:** Reads jokes aloud in a robotic tone with voice toggle controls.
  - **Web Audio API:** Generates procedural robotic bleeps, fanfare chimes, and frequency sweep sound FX with zero external audio dependencies.
- **Multi-Category Humor Matrix:**
  - 💻 **Code & Tech:** Classic developer humor (JavaScript, SQL, CSS, Binary, OOP).
  - 🤖 **AI & Robotics:** Neural networks, machine learning, and cyberpunk puns.
  - 🧪 **Science & Math:** Physics, chemistry, calculus, and atom jokes.
  - ☕ **Dad Jokes & Classic Puns:** Wholesome, timeless wordplay.
  - 🎲 **Random Surprise Mode:** Shuffles across the entire humor matrix.
- **Dual Fetch Architecture & Offline Resilience:**
  - Live REST API integration (*Official Joke API*, *icanhazdadjoke*) paired with an offline curated repository for 100% reliable offline execution.
- **Interactive Chat Interface:**
  - User and bot conversational bubbles with separate setup and punchline highlights.
  - In-bubble **Listen**, **Copy Joke**, and **Laugh Counter** actions.

---

## 🚀 How it Works

1. **Procedural Web Audio Synthesizer:**
   ```javascript
   function playSound(type) {
       const ctx = new (window.AudioContext || window.webkitAudioContext)();
       const osc = ctx.createOscillator();
       const gain = ctx.createGain();
       osc.frequency.setValueAtTime(523.25, ctx.currentTime);
       osc.connect(gain);
       gain.connect(ctx.destination);
       osc.start();
   }
   ```
2. **Web Speech Synthesis Engine:**
   ```javascript
   const utterance = new SpeechSynthesisUtterance(jokeText);
   utterance.pitch = 1.25;
   utterance.rate = 1.05;
   window.speechSynthesis.speak(utterance);
   ```
3. **Dual API & Curated Fallback Pipeline:**
   - Queries public joke endpoints asynchronously, and smoothly falls back to internal curated datasets on network interruptions or rate limits.

---

## 💻 Code Structure

- `index.html` - Animated SVG robot avatar, category tab switcher, chat viewport, and action triggers.
- `style.css` - Dark obsidian theme, SVG robot animations, chat message bubbles, and responsive layout.
- `script.js` - Joke dataset, REST API fetch pipeline, Web Speech synthesizer, and Web Audio SFX engine.
