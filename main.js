const firstNameInput = document.getElementById('firstname');
const generateButton = document.getElementById('generate');
const resetButton = document.getElementById('reset');
const funnyNameDisplay = document.getElementById('funny-name');

const funnyLastNames = [
    "Whiskerfidget",
    "Fluffernutter",
    "Snugglepaws",
    "Barkington",
    "Purrmuffin",
    "Wigglebutt",
    "Fuzzball",
    "Waggytail",
    "Mittens",
    "Sprinklepaws",
    "Snickerdoodle",
    "Cuddlebug",
    "Pawsworth",
    "Meowzers",
    "Rufflebottom",
    "Snugglekins",
    "Puddlejumper"
];

// - Generate a random last name from the funnyLastNames array
function getRandomLastName() {
    const randomIndex = Math.floor(Math.random() * funnyLastNames.length);
    return funnyLastNames[randomIndex];
}

// - Get the first name from #firstname and trim the whitespace
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
