let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let playRoundMessage = document.getElementById("play-round-message");
let sumCounter = document.getElementById("sum-counter");
let cardCollection = document.getElementById("card-collection");

let player = {
    name: "Mik",
    chips: 145
}

let playerScore = document.getElementById("player-score");
playerScore.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;

    if (randomCard === 1) {
        return 11;
    } else if (randomCard === 11 || randomCard === 12 || randomCard === 13) {
        return 10;
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    
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
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();

        console.log("New card drawn: " + newCard);
        console.log("New sum: " + sum);
    }
}