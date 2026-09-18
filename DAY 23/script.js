document.addEventListener("DOMContentLoaded", () => {
    const numberInput = document.getElementById("numberInput");
    const checkButton = document.getElementById("checkButton");
    const resultMessage = document.getElementById("resultMessage");

    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    };

    const displayResult = (message, type, iconClass) => {
        resultMessage.className = `show ${type}`;
        resultMessage.innerHTML = `<i class="${iconClass}"></i><span>${message}</span>`;
    };

    const checkNumber = () => {
        const value = numberInput.value.trim();

        if (value === "") {
            displayResult("Please enter a number to check", "warning", "fa-solid fa-triangle-exclamation");
            return;
        }

        const number = Number(value);

        if (!Number.isInteger(number) || number < 0) {
            displayResult("Please enter a positive whole integer", "warning", "fa-solid fa-circle-exclamation");
            return;
        }

        if (number === 0 || number === 1) {
            displayResult(`${number} is neither prime nor composite`, "not-prime", "fa-solid fa-circle-xmark");
            return;
        }

        if (isPrime(number)) {
            displayResult(`${number} is a prime number!`, "prime", "fa-solid fa-circle-check");
        } else {
            displayResult(`${number} is a composite (non-prime) number`, "not-prime", "fa-solid fa-circle-xmark");
        }
    };

    checkButton.addEventListener("click", checkNumber);
    numberInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            checkNumber();
        }
    });
});
