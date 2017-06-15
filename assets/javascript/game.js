var words = ["avengers", "tmnt", "captain america", "iron man", "star wars", "the dark knight", "jurassic park", "titanic", "finding nemo", "transformers", "spider man", "forrest gump",
"harry potter and the deathly hallows", "pirates of the caribbean", "frozen", "inception", "shrek", "guardians of the galaxy", "the sixth sense", "beverly hills cop", "the lord of the rings", "rocky", "skyfall", "the blind side", "the incredibles", "home alone" ];
var word = "";
var blanks = [];
var userGuess = "";
var guessBank = [];
var message = "";
var guessesLeft = 0;
var remainingLetters = 0;
var gameend = false;

	function randomWord(){
		word = words[Math.floor(Math.random() * words.length)];
		return;
	};

    function checkForSpace(word){
        for (var i = 0; i < word.length; i++) {
            if (word[i] === " ") {
                return true;
            }

            else {
                return false;
            }
        }
    }

	function setBlanks(){
		blanks = [];
	 	for (var i = 0; i < word.length; i++) {
        if (checkForSpace(word)){
            blanks.push(" ");
        }
        else {
            blanks.push("_");
        }

        }
		document.getElementById("blanks").innerHTML = blanks.join(" ");
		return;
	};

	function setBoard(){
		guessesLeft = 10;
        guessBank.length = 0;
        gameend = false;
		document.getElementById("remaining").innerHTML = "Remaining Guesess: " + guessesLeft;
        document.getElementById("guess").innerHTML = guessBank;
		document.getElementById("start").style.visibility = "hidden";
        document.getElementById("gameover").style.visibility = "hidden";
        document.getElementById("saved").style.visibility = "hidden";
		document.getElementById("img-tnt").style.visibility = "visible";
		document.getElementById("instruction").innerHTML = "Choose letters to guess the right movie";
	};

    function wrongLetter() {
        message = "Sorry, no " + userGuess + "'s." + " Do you want this guy to die?";
        guessesLeft--;
        document.getElementById("remaining").innerHTML = "Remaining Guesses: " + guessesLeft;
    };

    function win() {
        message = "You Guessed " + word + "." + " You know your Blockbusters!";
        document.getElementById("btn_name").innerHTML = "Play Again";
        document.getElementById("start").style.visibility = "visible";
        document.getElementById("saved").style.visibility = "visible";

    };

    function lose() {
        message = "GAME OVER";
        document.getElementById("btn_name").innerHTML = "Try Again";
        document.getElementById("img-tnt").style.visibility = "hidden";
        document.getElementById("gameover").style.visibility = "visible";
        document.getElementById("start").style.visibility = "visible";
    };

	document.getElementById("start").onclick = function() {
		randomWord();
		setBlanks();
		setBoard();
	};

	document.onkeyup = function(event) {

	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessBank.push(userGuess);
	message = "";

  	if (gameend === true) {
      message ="You might want to retry.";
  	} else {

        var i=0;
        for (i = 0; i < word.length; i++) {
            if (word[i] === userGuess) {
                blanks[i] = userGuess;
                message = "Nice job. " + "You guessed an " + userGuess + " correctly.";
            }
        }

        remainingLetters = blanks.length;
        for (i = 0; i < blanks.length; i++) {
            if (blanks[i] !== '_') {
            remainingLetters -= 1;
            }
        }

        if (message === "") {
            wrongLetter();
        }

        if (remainingLetters == 0) {
            gameend = true;
            win();
     	}

        if (guessesLeft === 0) {
            gameend = true;
            lose();
        }
        document.getElementById("blanks").innerHTML = blanks.join(" ");
        document.getElementById("guess").innerHTML = guessBank.join(", ");
  }
  document.getElementById("instruction").innerHTML = message;
};





