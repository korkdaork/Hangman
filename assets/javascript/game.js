//Sections/Steps of codes for Game
//1. Random Words
//2. Word Selection
//3. Key functions (on keyup.etc)
//4. Guessing the letter/current guess and guess remaining
//5. Letters already guessed
//6. End Conditions (win/los)
//7. Display the number of wins



//Variables
var words = ["Roxalani", "Alani", "Alans", "Scythians", "Romans", "Macedonians", "Athenians", "Spartans", "Carthigians", "Sarmatians", "Dacians"];
var word = words[Math.floor(Math.random() * words.length)];
var remainingLetters = word.length;

//var of to start game with 0 wins
var wins = 0;

//var to hold the index of current word
var wordIndex = 0;

//Vars w/ references
var userChoiceText = document.getElementById("user-guess");
var secretWordText = document.getElementById("secret-word");
var remainingGuessText = document.getElementById("remaining-guesses");
var winsText = document.getElementById("wins");

//need to identify what user can choose - letter wise and add in toLowerCase().charAt()

//Loop
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";

    var answerArray = [];
}

//Rendering the word function
function renderWord() {
    if (wordInedx <= (words.lenght - 1)) {
        document.querySelector("#secret-word").innerHTML = words[wordIndex];
    }
    else {
        document.querySelector("#secret-word").innerHTML = "There are no more words to guess!";
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
    }
}

//Function to update the wins.
function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}

//MAIN GAME START

//Starting game functions
renderWord();
updateWins();

//function for onkeyup to start game
document.onkeyup = function (event) {

    //stop function
    if (wordIndex === words.length) {
        return;
    }

    //Determines what  which key was pressed and makes it lowercase
    var userInput = event.key.toLowerCase();
}


//need to write code on what happens once user presses a key


//display what letter was guessed and storing letters and wins
userChoiceText.textContent = ;
winsText = textContent = "Wins: " + wins;
;