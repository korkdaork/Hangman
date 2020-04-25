//PSUDOCODE AND CODE FOR HANGMAN GAME:


//1.  Random world list (minor)
var words = ["Roxalani", "Alani", "Alans", "Scythians", "Romans", "Macedonians", "Athenians", "Spartans", "Carthigians", "Sarmatians", "Dacians"];
//2.  Random word select (minor)
var word = words[Math.floor(Math.random() * 10)];
//2a.  Setting variable for word index so that we can render a word on the page.
var wordIndex = 0;
//2b. Letters in a word variable
var remainLetters = word.length;
//2c. Wins variable
var wins = 0;
//2d.  Valid letter guesses
var validGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var answerArray = [];


//3.  SECTION 1:  GETTING THE WORD  IN "_" BLANK SPACES
//3b. Generate a word
function renderWord() {
    document.querySelector("#selected-word").innerHTML = "Selected Word: " + word;
    //3b1. Target variable and replace the letters in the variable into underscore "_"
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_"
    };
    console.log(answerArray)
};



function renderWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
};


//3c. Replace the letters in a word with "_" spaces

//3d. Calling the functions
renderWord()
renderWins()

//4.  SECTION 2:  USER LETTER GUESS
//4a.  Start Function (onkeyup)
document.onkeyup = function (event) {
    document.querySelector("#selected-word").innerHTML = "_" + word;
    var userGuess = event.key.toLowerCase();
    for (var j = 0; i < validGuess.length; i++) {
        answerArray[j]
    };
};

console.log(answerArray)
//4b.  Valid guesses


//5.  SECTION 3:  SCRIPT REACT TO USER GUESS
//5a. CORRECT GUESS, then change the "_" into a letter correctly guessed.
//5b. INCORRECT GUESS, then add letter to already to list below 
//5c. INCORRECT GUESS, removes guesses reamining #.


//6.  SECTION 4:  WIN/LOSE CONDITIONS
//6a. If all letters guessed, else: win - else if: lose.
//6b. Update the wins counter (scoreboard)




