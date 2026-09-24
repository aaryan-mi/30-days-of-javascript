const options = [
    { id: "option1", text: "JavaScript", votes: 12, icon: "fa-brands fa-js icon-js", color: "linear-gradient(90deg, #f59e0b, #fbbf24)" },
    { id: "option2", text: "Python", votes: 15, icon: "fa-brands fa-python icon-py", color: "linear-gradient(90deg, #0ea5e9, #38bdf8)" },
    { id: "option3", text: "Java", votes: 8, icon: "fa-brands fa-java icon-java", color: "linear-gradient(90deg, #e11d48, #f43f5e)" },
    { id: "option4", text: "C++", votes: 5, icon: "fa-solid fa-code icon-cpp", color: "linear-gradient(90deg, #7c3aed, #a855f7)" }
];

const getTotalVotes = () => {
    return options.reduce((total, option) => total + option.votes, 0);
};

const displayResult = () => {
    const result = document.getElementById("result");
    result.innerHTML = "";

    const totalVotes = getTotalVotes();

    options.forEach((option) => {
        const percentage = totalVotes > 0 ? ((option.votes / totalVotes) * 100).toFixed(1) : "0.0";

        const optionResult = document.createElement("div");
        optionResult.className = "option-result";
        optionResult.innerHTML = `
            <div class="result-header">
                <span class="option-text"><i class="${option.icon}"></i> ${option.text} (${option.votes} votes)</span>
                <span class="percentage">${percentage}%</span>
            </div>
            <div class="bar-container">
                <div class="bar" style="width: ${percentage}%; background: ${option.color};"></div>
            </div>
        `;

        result.appendChild(optionResult);
    });
};

const submitVote = () => {
    const selectedOption = document.querySelector('input[name="poll"]:checked');
    const existingError = document.querySelector(".poll-error");

    if (existingError) {
        existingError.remove();
    }

    if (!selectedOption) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "poll-error";
        errorDiv.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i><span>Please select an option to vote!</span>`;
        const poll = document.querySelector(".poll");
        poll.insertBefore(errorDiv, document.getElementById("result"));
        return;
    }

    const optionId = selectedOption.value;
    const selectedOptionObj = options.find((option) => option.id === optionId);

    if (selectedOptionObj) {
        selectedOptionObj.votes++;
        selectedOption.checked = false;
        displayResult();
    }
};

displayResult();
