# 🌟 Day 6 - BMI Calculator

> **Tags:** `JavaScript` `Health-Metrics` `DOM-Manipulation` `Interactive-Sliders` `UI/UX-Design`

An interactive Body Mass Index (BMI) calculator application that computes health categories in real-time with dynamic visual gauges, healthy weight range recommendations, and responsive controls.

---

## 📸 Preview & Features

- **Interactive Sliders:** Real-time height ($90\text{ cm} - 220\text{ cm}$) and weight ($30\text{ kg} - 180\text{ kg}$) slider controls with live badge updates.
- **Dynamic Calculation:** Instantly calculates Body Mass Index based on standard WHO health formula:
  $$\text{BMI} = \frac{\text{Weight (kg)}}{(\text{Height (m)})^2}$$
- **Color-Coded Health Categories:**
  - 🔵 **Underweight:** $\text{BMI} < 18.5$
  - 🟢 **Normal Weight:** $18.5 \le \text{BMI} \le 24.9$
  - 🟡 **Overweight:** $25.0 \le \text{BMI} \le 29.9$
  - 🔴 **Obese:** $\text{BMI} \ge 30.0$
- **Visual Spectrum Gauge:** Animated indicator needle moving along the 4 health brackets to visually pinpoint BMI status.
- **Ideal Weight Guidance:** Automatically computes the ideal weight range ($18.5 - 24.9\text{ BMI}$) tailored specifically to the selected height.
- **Gender & Age Inputs:** Custom segmented radio selectors for gender alongside age validation.
- **Reset Capability:** One-click reset to restore standard baseline values.

---

## 🚀 How it Works

1. **Reactive Input Listeners:** Updating height, weight, age, or gender triggers `calculateBMI()` automatically.
2. **Formula Execution:** Height is converted from centimeters to meters and squared; weight is divided by height squared.
3. **Category & Spectrum Mapping:** Evaluates category brackets and calculates pointer percentage along the visual meter.
4. **Ideal Weight Range Calculation:**
   $$\text{Min Healthy Weight} = 18.5 \times (\text{Height in meters})^2$$
   $$\text{Max Healthy Weight} = 24.9 \times (\text{Height in meters})^2$$

---

## 💻 Code Structure

- `index.html` - Semantic layout, gender toggle pills, sliders, result cards, and gauge container.
- `style.css` - Dark modern aesthetic, glassmorphism card, custom glowing sliders, and category badge styles.
- `script.js` - Dynamic slider event listeners, BMI formula calculation, pointer positioning, and DOM updates.
