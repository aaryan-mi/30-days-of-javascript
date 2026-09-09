# 🌟 Day 1 - Invalid Input Shake Effect

> **Tags:** `JavaScript` `DOM-Manipulation` `CSS-Animation` `Form-Validation` `UI-Component`

A form validation UI component that alerts the user with a shake animation and an error popup when empty input is submitted.

---

## 📸 Preview & Demo
- **Tech Stack:** HTML5, CSS3, JavaScript
- **Key Concept:** CSS `@keyframes` triggered via JavaScript class toggling (`classList.add('shake')`) and `setTimeout`.

---

## 🚀 How it Works
1. When the user clicks **Submit**, the `validateInput()` function runs.
2. If the input is empty:
   - The `.shake` CSS class is attached to the input field to trigger the horizontal shake animation.
   - The error message visibility is toggled to `visible`.
   - After `500ms`, `setTimeout` removes the shake class and hides the error message.
3. If text is entered, it displays a success alert.

---

## 💻 Code Structure
- `index.html` - Form markup and input field.
- `style.css` - Styling and keyframe shake animation.
- `script.js` - Validation logic and timeout reset.
