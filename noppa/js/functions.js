function rollDice() {
    var diceDiv = document.getElementById("dice");
    var diceImage = document.getElementById("diceImage");

    var randomNumber = Math.floor(Math.random() * 6) + 1;

    diceImage.src = "img/" + randomNumber + ".png";
}