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

var wins = 0;

//Vars w/ references
var userChoiceText = document.getElementById("user-guess");
var letterGuessText = document.getElementById("letter-guessed");
var remainingGuessText = document.getElementById("remaining-guesses");
var winsText = document.getElementById("wins");


var answerArray = [];

//Loop
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

//function for onkeyup

document.onkeyup = function (event) {
    var userGuesss = event.key;
    //need to write code on what happens once user presses a key

    //display what letter was guessed and storing letters and wins
    userChoiceText.textContent = userGuess;
    winsText = textContent = "Wins: " + wins;
};