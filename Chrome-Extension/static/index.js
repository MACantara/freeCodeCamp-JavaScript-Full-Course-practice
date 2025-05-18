let savedURLs = ["www.google.com", "www.facebook.com", "www.youtube.com"];

const urlInput = document.getElementById("url-input");
const saveBtn = document.getElementById("save-btn");
const savedURLsList = document.getElementById("saved-urls-list");

saveBtn.addEventListener("click", saveURL);

function saveURL() {
    savedURLs.push(urlInput.value);
    console.log("URL saved!");
    console.log(savedURLs);
}

for (let i = 0; i < savedURLs.length; i++) {
    console.log(savedURLs[i]);
}