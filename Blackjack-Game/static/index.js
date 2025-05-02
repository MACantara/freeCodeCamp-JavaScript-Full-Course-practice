let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let playRoundMessage = document.getElementById("play-round-message");
let sumCounter = document.getElementById("sum-counter");
let cardCollection = document.getElementById("card-collection");

function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1;
}

function startGame() {
    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    playRoundMessage.textContent = message;
    cardCollection.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++)
    {
        cardCollection.textContent += cards[i] + " ";
    }

    sumCounter.textContent = "Sum: " + sum;

    console.log("hasBlackJack: " + hasBlackJack); 
    console.log("isAlive: " + isAlive);
}

function newCard() {
    let newCard = getRandomCard();

    sum += newCard;
    cards.push(newCard);
    renderGame();

    console.log("New card drawn: " + newCard);
    console.log("New sum: " + sum);
}