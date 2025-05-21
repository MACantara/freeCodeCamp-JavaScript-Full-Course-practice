const container = document.getElementById("container");

container.innerHTML = "<button id='buy-btn'>Buy!</button>";

const buyBtn = document.getElementById("buy-btn");

buyBtn.addEventListener("click", buy);

function buy() {
    container.innerHTML += "<p>Thank you for buying!</p>";
}