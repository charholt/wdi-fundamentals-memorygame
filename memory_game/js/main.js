console.log("Up and running!");


var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

var flipCard = function (cardId) {
console.log("User flipped" + cards[cardId]);
cardsInPlay.push([cardId]);
if (cardsInPlay.length === 2) {
		checkForMatch()
	}else{
		return(cardId);
	}
};
var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]){
	console.log("You found a match!");
}
else {
	console.log("Sorry, try again!");
		}
	};
flipCard(1);
flipCard(2);