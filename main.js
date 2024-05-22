const firstNameInput = document.getElementById('firstname');
const generateButton = document.getElementById('generate');
const resetButton = document.getElementById('reset');
const funnyNameDisplay = document.getElementById('funny-name');



// Function to generate a random last name from the funnyLastNames array
function getRandomLastName() {
    const randomIndex = Math.floor(Math.random() * funnyLastNames.length);
    return funnyLastNames[randomIndex];
}

// Function to shuffle the letters of a given string
function shuffleString(string) {
    const array = string.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

// Function to generate the funny name
function generateFunnyName() {
    const firstName = firstNameInput.value.trim();
    if (firstName !== "") {
        const scrambledFirstName = shuffleString(firstName);
        const lastName = getRandomLastName();
        funnyNameDisplay.textContent = `${scrambledFirstName} ${lastName}`;
    } else {
        funnyNameDisplay.textContent = "Please enter a first name.";
    }
}

// Function to reset the input and display
function reset() {
    firstNameInput.value = "";
    funnyNameDisplay.textContent = "";
}

// Event listeners for the buttons
generateButton.addEventListener('click', generateFunnyName);
resetButton.addEventListener('click', reset);