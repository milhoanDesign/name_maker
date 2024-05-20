const firstNameInput = document.getElementById('firstname');
const generateButton = document.getElementById('generate');
const resetButton = document.getElementById('reset');
const funnyNameDisplay = document.getElementById('funny-name');

const funnyLastNames = [
    "McGiggles", 
    "BananaHammock", 
    "Snickerbottom", 
    "Wobblepants", 
    "Tickletoes",
    "Fuzzykins",
    "Bumblefluff",
    "Jellybean",
    "Whiskerfidget",
    "Puddingworth",
    "Giggleblossom",
    "Sprinkles",
    "Twinkletoes",
    "Chuckles",
    "Dinglehopper",
    "Bananabread",
    "Fluffernutter"
];

function getRandomLastName() {
    const randomIndex = Math.floor(Math.random() * funnyLastNames.length);
    return funnyLastNames[randomIndex];
}

function generateFunnyName() {
    const firstName = firstNameInput.value.trim();
    if (firstName !== "") {
        const lastName = getRandomLastName();
        funnyNameDisplay.textContent = `${firstName} ${lastName}`;
    } else {
        funnyNameDisplay.textContent = "Please enter a first name.";
    }
}

function reset() {
    firstNameInput.value = "";
    funnyNameDisplay.textContent = "";
}

generateButton.addEventListener('click', generateFunnyName);
resetButton.addEventListener('click', reset);
