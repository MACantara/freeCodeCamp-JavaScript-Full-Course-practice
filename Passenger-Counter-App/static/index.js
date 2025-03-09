let peopleEnteredCounter = document.getElementById("people-entered-counter");
let previousEntries = document.getElementById("previous-entries");
let count = 0;

console.log(previousEntries);

function increment() {
    console.log("Button clicked");
    count += 1;
    
    peopleEnteredCounter.innerText = count;
    console.log("People entered: " + count);
}

function save() {
    let previousCount = + count + " - ";
    previousEntries.textContent += previousCount;

    count = 0;
    peopleEnteredCounter.innerText = 0;

    console.log(count);
}