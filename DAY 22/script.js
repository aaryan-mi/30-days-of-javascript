const generateBtn = document.getElementById("generate-btn");
const numberElement = document.getElementById("random-number");
const numberContainer = document.querySelector(".number-container");

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const triggerGeneration = () => {
    const randomNumber = getRandomNumber(1, 100);
    numberElement.textContent = randomNumber;

    if (numberContainer) {
        numberContainer.classList.remove("animate");
        void numberContainer.offsetWidth;
        numberContainer.classList.add("animate");
    }
};

generateBtn.addEventListener("click", triggerGeneration);
triggerGeneration();
