let savedURLs = [];

const urlInput = document.getElementById("url-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", saveURL);

function saveURL() {
    savedURLs.push("www.google.com");
    console.log("URL saved!");
    console.log(savedURLs);
}