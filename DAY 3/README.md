# 🌟 Day 3 - Notes Application

> **Tags:** `JavaScript` `LocalStorage` `CRUD` `DOM-Manipulation` `Event-Handling`

A sticky notes web application that lets users create, edit, save, and delete personal notes with persistent data storage using browser `localStorage`.

---

## 📸 Preview & Features
- **Dynamic Note Creation:** Add new notes instantly with the `+` button.
- **Persistent Storage:** All notes are automatically saved to `localStorage` upon input and preserved across page refreshes.
- **Live Edit:** Direct text typing inside dynamic textarea elements.
- **Delete Notes:** Double-click on any note to remove it with a confirmation prompt.

---

## 🚀 How it Works
1. When page loads, `getNotes()` retrieves saved notes from `localStorage` (`JSON.parse`) and populates the board.
2. Clicking the `+` button creates a new note object with a unique random ID and empty content, appending it to the DOM and saving to `localStorage`.
3. Input events on any note textarea trigger `updateNote(id, content)` to keep `localStorage` synced in real-time.
4. Double-clicking (`dblclick`) triggers `deleteNote(id, element)`, which filters out the note from storage and removes the DOM element.

---

## 💻 Code Structure
- `index.html` - App shell structure, heading, and add note button.
- `style.css` - Grid layout, note cards styling, hover animations, and responsive design.
- `script.js` - CRUD operations, DOM creation, and `localStorage` synchronization.
