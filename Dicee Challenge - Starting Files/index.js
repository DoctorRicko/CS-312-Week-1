var randomNumber1 = Math.floor(Math.random() * 6) + 1; //gives us a random number between 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //uses randomNumber1 to select random dice image

var randomImageSource = "images/" + randomDiceImage; //ensures the path file for the dice images

var image1 = document.querySelectorAll("img") [0]; //selects the player 1's image

image1.setAttribute("src", randomImageSource); //provides player 1's new random dice image

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //repeating the process for player 2

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //compacting lines 3 and 5 into one line

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
