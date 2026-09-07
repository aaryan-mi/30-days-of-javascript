document.addEventListener("DOMContentLoaded", () => {
    const daysData = [
        {
            name: "Sunday",
            icon: "☀️",
            vibe: "Rest, Recharge & Reflect",
            quote: "Take time to relax, recharge your soul, and prepare for the adventures ahead."
        },
        {
            name: "Monday",
            icon: "🚀",
            vibe: "Fresh Start & Momentum",
            quote: "Set the tone for the rest of your week with focused energy and clear goals."
        },
        {
            name: "Tuesday",
            icon: "⚡",
            vibe: "Deep Focus & Progress",
            quote: "Keep the momentum rolling and turn your plans into solid execution."
        },
        {
            name: "Wednesday",
            icon: "🎯",
            vibe: "Midweek Milestone",
            quote: "You're halfway through! Keep pushing and make every moment count."
        },
        {
            name: "Thursday",
            icon: "🔥",
            vibe: "Finishing Strong",
            quote: "Stay persistent—great achievements are built on consistent daily habits."
        },
        {
            name: "Friday",
            icon: "🎉",
            vibe: "Celebration & Wins",
            quote: "Finish your week with pride and get ready to celebrate your achievements!"
        },
        {
            name: "Saturday",
            icon: "🌴",
            vibe: "Adventure & Weekend Fun",
            quote: "Enjoy your freedom, explore new horizons, and create wonderful memories."
        }
    ];

    const currentDateEl = document.getElementById("current-date");
    const liveClockEl = document.getElementById("live-clock");
    const todayTagEl = document.getElementById("today-tag");
    const dayIconEl = document.getElementById("day-icon");
    const weekdayEl = document.getElementById("weekday");
    const vibePillEl = document.getElementById("vibe-pill");
    const phraseEl = document.getElementById("phrase");
    const pills = document.querySelectorAll(".day-pills .pill");

    const realTodayIndex = new Date().getDay();

    // Update Live Clock and Date
    function updateLiveClock() {
        const now = new Date();
        const dateOptions = { weekday: "short", month: "short", day: "numeric", year: "numeric" };
        currentDateEl.textContent = now.toLocaleDateString("en-US", dateOptions);
        liveClockEl.textContent = now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });
    }

    setInterval(updateLiveClock, 1000);
    updateLiveClock();

    // Render Selected Day
    function renderDay(index) {
        const data = daysData[index];

        dayIconEl.textContent = data.icon;
        weekdayEl.textContent = data.name;
        vibePillEl.textContent = data.vibe;
        phraseEl.textContent = `"${data.quote}"`;

        if (index === realTodayIndex) {
            todayTagEl.textContent = "TODAY IS";
            todayTagEl.style.color = "#818cf8";
        } else {
            todayTagEl.textContent = "VIEWING";
            todayTagEl.style.color = "#38bdf8";
        }

        pills.forEach((pill, idx) => {
            pill.classList.toggle("active", idx === index);
        });
    }

    // Pill Click Handlers
    pills.forEach((pill) => {
        pill.addEventListener("click", () => {
            const selectedDay = parseInt(pill.dataset.day, 10);
            renderDay(selectedDay);
        });
    });

    // Initialize with Real Today
    renderDay(realTodayIndex);
});
