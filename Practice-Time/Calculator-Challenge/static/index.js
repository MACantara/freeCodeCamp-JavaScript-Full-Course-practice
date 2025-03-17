let num1 = 8;
let num2 = 2;

document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;

const result = document.getElementById("result");

function add() {
    console.log("Add button clicked");
    sum = num1 + num2;
    result.textContent = "Result: " + sum;
}

function subtract() {
    console.log("Subtract button clicked");
    difference = num1 - num2;
    result.textContent = "Result: " + difference;
}

function divide() {
    console.log("Divide button clicked");
    quotient = num1 / num2;
    result.textContent = "Result: " + quotient;
}

function multiply() {
    console.log("Multiply button clicked");
    product = num1 * num2;
    result.textContent = "Result: " + product;
}