let lapsCompleted = 0;

function incrementLap() {
    lapsCompleted += 1;
    console.log(lapsCompleted);
}

incrementLap();
incrementLap();
incrementLap();

console.log("The laps completed is: " + lapsCompleted);