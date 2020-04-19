//Sections of codes for Game
//1. Random Words
//2. Word Selection
//3. Guessing the letter/current guess
//4. Guess remaining
//5. Letters already guessed
//6. End Conditions (win/los)
//7. Display the number of wins



//Array dealing with Words
var words = ["Roxalani", "Alani", "Alans", "Scythians", "Romans", "Macedonians", "Athenians", "Spartans", "Carthigians", "Sarmatians", "Dacians"];
var word = words[Math.floor(Math.random() * words.length)];
var remainingLetters = word.length;

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}