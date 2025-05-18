let fruit = [
    "🍎", "🍊", "🍎", "🍎", "🍊",
    "🍎", "🍊", "🍎", "🍎", "🍊",
    "🍎", "🍊", "🍎", "🍎", "🍊",
    "🍇"
];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
let unsortedShelf = document.getElementById("unsorted-shelf");

function sortFruits() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += fruit[i];
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += fruit[i];
        } else {
            unsortedShelf.textContent += fruit[i];
        }
    }
}

sortFruits();