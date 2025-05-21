let savedURLs = ["www.google.com", "www.facebook.com", "www.youtube.com"];

const urlInput = document.getElementById("url-input");
const saveBtn = document.getElementById("save-btn");
const savedURLsList = document.getElementById("saved-urls-list");

saveBtn.addEventListener("click", saveURL);

// Render the saved URLs when the page loads
renderSavedURLs();

function saveURL() {
    savedURLs.push(urlInput.value);
    console.log("URL saved!");
    console.log(savedURLs);

    // Clear the input field after saving the URL
    urlInput.value = "";

    // Render the updated list of saved URLs
    renderSavedURLs();
}

function renderSavedURLs() {
    let listItems = "";

    for (let i = 0; i < savedURLs.length; i++) {
        const url = savedURLs[i].startsWith("http") ? savedURLs[i] : "https://" + savedURLs[i];
        
        listItems += `
            <li>
                <a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>
            </li>
        `;
    }

    savedURLsList.innerHTML = listItems;
}