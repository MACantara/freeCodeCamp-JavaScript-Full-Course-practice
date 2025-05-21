let data = [
    {
        player: "Mik",
        score: 21
    },
    {
        player: "John",
        score: 18
    }
];

const mikScoreLogBtn = document.getElementById("mik-score-log-btn");
const johnScoreLogBtn = document.getElementById("john-score-log-btn");

mikScoreLogBtn.addEventListener("click", updateScoreMik);
johnScoreLogBtn.addEventListener("click", updateScoreJohn);

function updateScoreMik() {
    console.log(`The score of ${data[0].player} is ${data[0].score}.`);
}

function updateScoreJohn() {
    console.log(`The score of ${data[1].player} is ${data[1].score}.`);
}