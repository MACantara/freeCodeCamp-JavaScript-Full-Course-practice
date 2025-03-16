const errorMessage = document.getElementById('error-message');
console.log(errorMessage);

function purchase() {
    console.log('Purchase button clicked');
    errorMessage.textContent = "Something went wrong, please try again.";
}