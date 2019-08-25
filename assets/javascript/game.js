$(document).ready(function () {

    ///////////////////////
    // Global Variables //
    /////////////////////
    var compScore = 0;
    var userScore = 0;
    var winsTotal = 0;
    var lossesTotal = 0;


    ////////////////
    // Functions //
    //////////////

    // function to randomly generate a computer score between 19 and 120
    function genComputerScore() {
        compScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log("CompScore: " + compScore);
        $("#comp-score").text(compScore);
    }

    ///////////////////
    // Main Process //
    ///////////////// 
    $("#wins-total").text(winsTotal);
    $("#losses-total").text(lossesTotal);
    $("#total-score").text(userScore);

    //Set up Initial State when script begins
    //Generate a random number between 19 and 120
    genComputerScore();

    // Generate random values ranging from 1 to 12 for each
    // crystal image.
    blueVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    greenVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    heartVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    purpleVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    // If the game is won or lost this function generates a new
    // random number for the computer score, resets the user score
    // to 0, and generates random values ranging from 1 to 12 for
    // each crystal image

    function reset() {
        genComputerScore();

        userScore = 0;
        $("#user-score").text(userScore);

        blueVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        greenVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        heartVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        purpleVal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    }

    $("#blue-gem").on("click", function () {
        userScore += blueVal;
        console.log("Blue value: " + blueVal);
        $("#user-score").text(userScore);
        if (userScore == compScore) {
            winner();
        }
        if (userScore > compScore) {
            loser();
        }
    });

    $("#green-gem").on("click", function () {
        userScore += greenVal;
        console.log("green value: " + greenVal);
        $("#user-score").text(userScore);
        if (userScore == compScore) {
            winner();
        }
        if (userScore > compScore) {
            loser();
        }
    });

    $("#heart-gem").on("click", function () {
        userScore += heartVal;
        console.log("heart value: " + heartVal);
        $("#user-score").text(userScore);
        if (userScore == compScore) {
            winner();
        }
        if (userScore > compScore) {
            loser();
        }
    });

    $("#purple-gem").on("click", function () {
        userScore += purpleVal;
        console.log("purple value: " + purpleVal);
        $("#user-score").text(userScore);
        if (userScore == compScore) {
            winner();
        }
        if (userScore > compScore) {
            loser();
        }
    });

    //Run when a winner
    function winner() {
        alert("You win");
        winsTotal++;
        $("#wins-total").text(winsTotal);
        reset();
    }
    //Run when a loser
    function loser() {
        alert("You Lose");
        lossesTotal++;
        $("#losses-total").text(lossesTotal);
        reset();
    }

});