const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~|}{[]<>?-=";
const allChars = upperCase + lowerCase + numbers + symbols;

const generatePassword = () => {
    const length = 14;
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    const shuffled = password.split("").sort(() => 0.5 - Math.random()).join("");
    passwordBox.value = shuffled;
};

const copyPassword = () => {
    const password = passwordBox.value.trim();
    if (!password) {
        generatePassword();
        return;
    }

    const icon = copyButton.querySelector("i");

    const onCopied = () => {
        if (icon) {
            icon.className = "fa-solid fa-check";
            copyButton.style.color = "#10b981";
            setTimeout(() => {
                icon.className = "fa-regular fa-copy";
                copyButton.style.color = "";
            }, 1800);
        }
    };

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(password).then(onCopied).catch(() => {
            passwordBox.select();
            document.execCommand("copy");
            onCopied();
        });
    } else {
        passwordBox.select();
        document.execCommand("copy");
        onCopied();
    }
};

button.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);
