var win = false;
var randomNumber = 0;
var yourNumber = 0;

var treasure = (Math.floor(Math.random() * 12) +1);
var mushroom = (Math.floor(Math.random() * 12) +1);
var coin = (Math.floor(Math.random() * 12)+1);
var bag = (Math.floor(Math.random() * 12)+1);

$("#bag").on("click", function (){
    $(".yournumber").html(bag);
}) 

if (win === false) {
        randomNumber = Math.floor(Math.random() * 100);
        $(".randomNumber").append(randomNumber);
    }

    if (randomNumber === yourNumber) {
        win = true;
    }


   console.log(bag,treasure,coin,mushroom)