let btn = document.getElementById("btn");

btn.addEventListener("click", alert);
btn.addEventListener("click", log);
btn.addEventListener("dblclick", easterEgg);

function alert() {
    console.log("Alert!");
}

function log() {
    console.log("Log!");
}

function easterEgg() {
    console.log("Easter egg!");
}