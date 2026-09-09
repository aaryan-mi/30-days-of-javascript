/**
 * Day 6 - BMI Calculator
 */

function updateHeightValue(value) {
    document.getElementById("height-value").textContent = value;
    calculateBMI();
}

function updateWeightValue(value) {
    document.getElementById("weight-value").textContent = value;
    calculateBMI();
}

function calculateBMI() {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const ageInput = document.getElementById("age");
    const genderChecked = document.querySelector("input[name='gender']:checked");

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const age = parseInt(ageInput.value, 10);

    if (!height || !weight || !age || !genderChecked) {
        return;
    }

    // BMI Formula: weight (kg) / [height (m)]^2
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    const bmiNum = parseFloat(bmi);

    // Update Result UI
    document.getElementById("bmi-result").textContent = bmi;

    let category = "";
    let badgeClass = "";
    let summaryText = "";

    if (bmiNum < 18.5) {
        category = "Underweight";
        badgeClass = "badge-underweight";
        summaryText = "Your BMI is below the healthy range. Consider consulting a nutritionist for balanced weight gain.";
    } else if (bmiNum <= 24.9) {
        category = "Normal Weight";
        badgeClass = "badge-normal";
        summaryText = "You have a healthy body weight! Keep up with your balanced diet and regular physical activity.";
    } else if (bmiNum <= 29.9) {
        category = "Overweight";
        badgeClass = "badge-overweight";
        summaryText = "Your BMI is slightly elevated. Regular workouts and portion control can help return to an ideal range.";
    } else {
        category = "Obese";
        badgeClass = "badge-obese";
        summaryText = "Your BMI indicates obesity. We recommend consulting a healthcare provider for personalized guidance.";
    }

    // Update category badge
    const badgeEl = document.getElementById("bmi-badge");
    badgeEl.textContent = category;
    badgeEl.className = `category-badge ${badgeClass}`;

    // Update summary text
    document.getElementById("bmi-summary").textContent = summaryText;

    // Calculate Healthy Weight Range for this height: BMI 18.5 to 24.9
    const minWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
    const maxWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);
    document.getElementById("healthy-range").textContent = `${minWeight} kg – ${maxWeight} kg`;

    // Update Gauge Pointer
    // Map BMI range [15, 35] to percentage [2%, 98%]
    let pointerPercent = ((bmiNum - 15) / (35 - 15)) * 100;
    if (pointerPercent < 2) pointerPercent = 2;
    if (pointerPercent > 98) pointerPercent = 98;

    const pointerEl = document.getElementById("gauge-pointer");
    if (pointerEl) {
        pointerEl.style.left = `${pointerPercent}%`;
    }
}

function resetCalculator() {
    document.getElementById("male").checked = true;
    document.getElementById("age").value = "25";
    document.getElementById("height").value = "170";
    document.getElementById("height-value").textContent = "170";
    document.getElementById("weight").value = "68";
    document.getElementById("weight-value").textContent = "68";
    
    calculateBMI();
}

// Initial calculation on load
document.addEventListener("DOMContentLoaded", () => {
    calculateBMI();
});
