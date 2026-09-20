const ageCalculatorForm = document.getElementById("ageCalculator");
const birthdateInput = document.getElementById("birthdate");
const resultContainer = document.getElementById("resultContainer");
const result = document.getElementById("result");

const today = new Date();
const todayFormatted = today.toISOString().split("T")[0];
birthdateInput.setAttribute("max", todayFormatted);

const parseDateInput = (value) => {
    if (!value) return null;

    if (value.includes("-")) {
        const parts = value.split("-");
        if (parts[0].length === 4) {
            return new Date(parts[0], parts[1] - 1, parts[2]);
        } else if (parts[2].length === 4) {
            return new Date(parts[2], parts[1] - 1, parts[0]);
        }
    }

    const parsed = new Date(value);
    return isNaN(parsed.getTime()) ? null : parsed;
};

const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
};

const calculateAge = () => {
    const rawValue = birthdateInput.value.trim();
    const birthDate = parseDateInput(rawValue);
    const now = new Date();

    if (!birthDate || isNaN(birthDate.getTime())) {
        result.innerHTML = `
            <div class="error-banner">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span>Please enter a valid birthdate.</span>
            </div>
        `;
        resultContainer.style.display = "block";
        return;
    }

    if (birthDate > now) {
        result.innerHTML = `
            <div class="error-banner">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span>Birthdate cannot be in the future!</span>
            </div>
        `;
        resultContainer.style.display = "block";
        return;
    }

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const diffMilliseconds = now.getTime() - birthDate.getTime();
    const totalSeconds = Math.floor(diffMilliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = (years * 12) + months;

    result.innerHTML = `
        <div class="result-hero">
            <h2>Chronological Age</h2>
            <div class="hero-age">${years} Years, ${months} Months, ${days} Days</div>
        </div>
        <div class="result-grid">
            <div class="result-card">
                <h3><i class="fa-regular fa-calendar"></i> Total Months</h3>
                <p>${formatNumber(totalMonths)}</p>
            </div>
            <div class="result-card">
                <h3><i class="fa-solid fa-calendar-week"></i> Total Weeks</h3>
                <p>${formatNumber(totalWeeks)}</p>
            </div>
            <div class="result-card">
                <h3><i class="fa-regular fa-sun"></i> Total Days</h3>
                <p>${formatNumber(totalDays)}</p>
            </div>
            <div class="result-card">
                <h3><i class="fa-regular fa-clock"></i> Total Hours</h3>
                <p>${formatNumber(totalHours)}</p>
            </div>
            <div class="result-card">
                <h3><i class="fa-solid fa-hourglass-half"></i> Total Minutes</h3>
                <p>${formatNumber(totalMinutes)}</p>
            </div>
            <div class="result-card">
                <h3><i class="fa-solid fa-stopwatch"></i> Total Seconds</h3>
                <p>${formatNumber(totalSeconds)}</p>
            </div>
        </div>
    `;

    resultContainer.style.display = "block";
};

ageCalculatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAge();
});
