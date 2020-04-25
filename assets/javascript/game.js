//PSUDOCODE AND CODE FOR HANGMAN GAME:


//1.  Random world list (minor)
var words = ["Roxalani", "Alani", "Alans", "Scythians", "Romans", "Macedonians", "Athenians", "Spartans", "Carthigians", "Sarmatians", "Dacians"];
//2.  Random word select (minor)
var word = words[Math.floor(Math.random() * words.length)];


//3.  SECTION 1:  GETTING THE WORD  IN "_" BLANK SPACES
var remainLetters = word.length;
//3a. Generate blank spaces instead of word



//4.  SECTION 2:  USER LETTER GUESS
//4a.  Start Function (onkeyup)
//4b.  Valid guesses


//5.  SECTION 3:  SCRIPT REACT TO USER GUESS
//5a. CORRECT GUESS, then change the "_" into a letter correctly guessed.
//5b. INCORRECT GUESS, then add letter to already to list below 
//5c. INCORRECT GUESS, removes guesses reamining #.


//6.  SECTION 4:  WIN/LOSE CONDITIONS
//6a. If all letters guessed, else: win - else if: lose.
//6b. Upgrade the wins counter




