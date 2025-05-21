const player = "Mik";
const opponent = "Mika";
const game = "Minecraft Fighter";

let points = 0;
let hasWon = false;

points += 100
hasWon = true;

if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`);
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game.`);
}