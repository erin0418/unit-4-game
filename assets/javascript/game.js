// Setting random number variables
var yourNumber = 0;
var randomNumber = (Math.floor(Math.random() * 100) + 48);
var treasure = (Math.floor(Math.random() * 12) +1);
var mushroom = (Math.floor(Math.random() * 12) +1);
var coin = (Math.floor(Math.random() * 12)+1);
var bag = (Math.floor(Math.random() * 12)+1);

// Setting other variables
var wins = 0;
var loses = 0;

// Writting intial variables to html
$(".yourNumber").append(yourNumber);
$(".randomNumber").append(randomNumber);
$("#wins").append(wins);
$("#loses").append(loses);

// Functions of game
function startOver() {
    randomNumber = 0;
    yourNumber = 0;
    $(".yourNumber").text(yourNumber);
    $(".randomNumber").text(randomNumber);
    treasure = (Math.floor(Math.random() * 12) +1);
    mushroom = (Math.floor(Math.random() * 12) +1);
    coin = (Math.floor(Math.random() * 12)+1);
    bag = (Math.floor(Math.random() * 12)+1);
    randomNumber = (Math.floor(Math.random() * 100) + 48);
    $(".randomNumber").text(randomNumber);
}

function youWin () {
    wins++;
    $("#wins").text("Wins: " + wins);
}

function youLose () {
    loses++;
    $("#loses").text("Loses: " + loses);
}

// On click adding random numbers together and checking conditions
$("#bag").on("click", function (){
    yourNumber=(yourNumber + bag);
    $(".yourNumber").text(yourNumber);
    if (yourNumber > randomNumber) {
        youLose ();
        startOver();
    }
    if (yourNumber == randomNumber) {
        youWin ();
        startOver ();
    }
}) 
$("#treasure").on("click", function (){
    yourNumber=(yourNumber + treasure);
    $(".yourNumber").html(yourNumber);
    if (yourNumber > randomNumber) {
        youLose ();
        startOver();
    }
    if (yourNumber == randomNumber) {
        youWin ();
        startOver ();
    }
})
$("#coin").on("click", function (){
    yourNumber=(yourNumber + coin);
    $(".yourNumber").html(yourNumber);
    if (yourNumber > randomNumber) {
        youLose ();
        startOver();
    }
    if (yourNumber == randomNumber) {
        youWin ();
        startOver ();
    }
})
$("#mushroom").on("click", function (){
    yourNumber=(yourNumber + mushroom);
    $(".yourNumber").html(yourNumber);
    if (yourNumber > randomNumber) {
        youLose ();
        startOver();
    }
    if (yourNumber == randomNumber) {
        youWin ();
        startOver ();
    }
})


