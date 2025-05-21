let savedURLs = ["www.google.com", "www.facebook.com", "www.youtube.com"];

const urlInput = document.getElementById("url-input");
const saveBtn = document.getElementById("save-btn");
const savedURLsList = document.getElementById("saved-urls-list");

saveBtn.addEventListener("click", saveURL);

renderSavedURLs();

function saveURL() {
    savedURLs.push(urlInput.value);
    console.log("URL saved!");
    console.log(savedURLs);

    renderSavedURLs();
}

function renderSavedURLs() {
    let listItems = "";

    for (let i = 0; i < savedURLs.length; i++) {
        listItems += "<li>" + savedURLs[i] + "</li>";
    }

    savedURLsList.innerHTML = listItems;
}