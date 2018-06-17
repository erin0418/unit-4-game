var yourNumber = 0;
var randomNumber = Math.floor(Math.random() * 100);
var treasure = (Math.floor(Math.random() * 12) +1);
var mushroom = (Math.floor(Math.random() * 12) +1);
var coin = (Math.floor(Math.random() * 12)+1);
var bag = (Math.floor(Math.random() * 12)+1);

$(".yourNumber").append(yourNumber);
$(".randomNumber").append(randomNumber);

$("#bag").on("click", function (){
    yourNumber=(yourNumber + bag);
    $(".yourNumber").html(yourNumber);
}) 
$("#treasure").on("click", function (){
    yourNumber=(yourNumber + treasure);
    $(".yourNumber").html(yourNumber);
})
$("#coin").on("click", function (){
    yourNumber=(yourNumber + coin);
    $(".yourNumber").html(yourNumber);
})
$("#mushroom").on("click", function (){
    yourNumber=(yourNumber + mushroom);
    $(".yourNumber").html(yourNumber);
})


