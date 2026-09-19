let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

const updateDisplay = () => {
    value.textContent = count;

    value.classList.remove("positive", "negative", "zero", "pop");
    void value.offsetWidth;

    if (count > 0) {
        value.classList.add("positive");
    } else if (count < 0) {
        value.classList.add("negative");
    } else {
        value.classList.add("zero");
    }

    value.classList.add("pop");
};

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        const elementId = e.currentTarget.id;

        if (elementId === "decrease") {
            count--;
        } else if (elementId === "reset") {
            count = 0;
        } else {
            count++;
        }

        updateDisplay();
    });
});

window.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") {
        count++;
        updateDisplay();
    } else if (e.key === "ArrowDown") {
        count--;
        updateDisplay();
    } else if (e.key.toLowerCase() === "r") {
        count = 0;
        updateDisplay();
    }
});

updateDisplay();
