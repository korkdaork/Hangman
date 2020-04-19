//INITIAL VARIABLES VARIABLES!!!!!!1111!!
//array of different words based on historical civilizations of ancient times
var words = ["Roxalani", "Alani", "Alans", "Scythians", "Romans", "Macedonians", "Athenians", "Spartans", "Carthigians", "Sarmatians", "Dacians"];

//random word selection
var word = words[Math.floor(Math.random() * words.length)];

//answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
//Remaining letters
var remainingLetters = word.length;


//GAME SECTION