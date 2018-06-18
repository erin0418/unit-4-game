var yourNumber = 0;
var randomNumber = Math.floor(Math.random() * 100);
var treasure = (Math.floor(Math.random() * 12) +1);
var mushroom = (Math.floor(Math.random() * 12) +1);
var coin = (Math.floor(Math.random() * 12)+1);
var bag = (Math.floor(Math.random() * 12)+1);
var wins = 0;
var loses = 0;

$(".yourNumber").append(yourNumber);
$(".randomNumber").append(randomNumber);
$("#wins").append(wins);
$("#loses").append(loses);

if (yourNumber != randomNumber) {
$("#bag").on("click", function (){
    yourNumber=(yourNumber + bag);
}) 
$("#treasure").on("click", function (){
    yourNumber=(yourNumber + treasure);
})
$("#coin").on("click", function (){
    yourNumber=(yourNumber + coin);
})
$("#mushroom").on("click", function (){
    yourNumber=(yourNumber + mushroom);
})
$(".yourNumber").html(yourNumber);
}
else if (yourNumber > randomNumber) {
    console.log("You lose!")
}
else {
    alert("You Win!")
}

// if (yourNumber === randomNumber)

