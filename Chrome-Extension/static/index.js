let savedURLs = [];

const urlInput = document.getElementById("url-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", saveURL);

function saveURL() {
    savedURLs.push(urlInput.value);
    console.log("URL saved!");
    console.log(savedURLs);
}