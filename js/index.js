
var player1 = prompt("Enter player1 name: ");
if (player1 === "" ) {
    alert("Please enter player1 name. ");
}
var player2 = prompt("Enter player2 name: ");
if (player2 === "" ) {
    alert("Please enter player2 name. ");
} 


// if (player1 === "" && player2 === "") {
//     alert("need names");
// }

document.querySelectorAll("p")[0].innerHTML = player1;
document.querySelectorAll("p")[1].innerHTML = player2;


var randomNum1 = Math.random() * 6;
randomNum1 = Math.floor(randomNum1) + 1;

var randomDiceImg = "dice" + randomNum1 + ".png"; // here its from dice1.png to dice6.png

var randomImg = "images/" + randomDiceImg; // images/dice1.png to images/dice6.png

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImg);


var randomNum2 = Math.random() * 6; 
randomNum2 = Math.floor(randomNum2) + 1;

var randomDiceImg2 = "dice" + randomNum2 + ".png";

var randomImg2 = "images/" + randomDiceImg2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImg2);



// if player 1 wins
if (player1 === "" && player2 === "") {
    alert("Enter names for player1 and player2.");
    document.querySelector("h2").innerHTML = "Players have no names!";
} 
else if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Hurrayy " + player1 + " Wins";
}
else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Hurrayy " + player2 + " Wins";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw!"
}






 
