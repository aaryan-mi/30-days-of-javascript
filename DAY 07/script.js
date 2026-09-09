const billInput = document.getElementById("bill");
const tipSlider = document.getElementById("tip");
const splitSlider = document.getElementById("no-of-people");

const tipPercentDisplay = document.getElementById("tip-percent");
const splitNumDisplay = document.getElementById("split-num");
const tipAmountDisplay = document.getElementById("tip-amount");
const totalAmountDisplay = document.getElementById("total-amount");
const tipPerPersonDisplay = document.getElementById("tip-per-person");
const totalPerPersonDisplay = document.getElementById("total-per-person");

function calculateTip() {
    const bill = parseFloat(billInput.value) || 0;
    const tipPercent = parseInt(tipSlider.value, 10) || 0;
    const noOfPeople = parseInt(splitSlider.value, 10) || 1;

    const totalTip = parseFloat((bill * (tipPercent / 100)).toFixed(2));
    const total = parseFloat((bill + totalTip).toFixed(2));
    const tipPerPerson = (totalTip / noOfPeople).toFixed(2);
    const totalPerPerson = (total / noOfPeople).toFixed(2);

    tipPercentDisplay.textContent = `${tipPercent}%`;
    splitNumDisplay.textContent = `${noOfPeople}`;
    tipAmountDisplay.textContent = `$${totalTip.toFixed(2)}`;
    totalAmountDisplay.textContent = `$${total.toFixed(2)}`;
    tipPerPersonDisplay.textContent = `$${tipPerPerson}`;
    totalPerPersonDisplay.textContent = `$${totalPerPerson}`;
}

// Event Listeners for real-time responsiveness
billInput.addEventListener("input", calculateTip);
billInput.addEventListener("change", () => {
    const val = parseFloat(billInput.value);
    if (!isNaN(val) && val >= 0) {
        billInput.value = val.toFixed(2);
    }
    calculateTip();
});

tipSlider.addEventListener("input", calculateTip);
splitSlider.addEventListener("input", calculateTip);

// Initialize calculations on load
calculateTip();
