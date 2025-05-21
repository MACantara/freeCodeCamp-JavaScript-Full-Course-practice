let savedURLs = [];

const urlInput = document.getElementById("url-input");
const saveBtn = document.getElementById("save-btn");
const savedURLsList = document.getElementById("saved-urls-list");

let savedURLsFromLocalStorage = JSON.parse(localStorage.getItem("savedURLs"));

console.log(savedURLsFromLocalStorage);

saveBtn.addEventListener("click", saveURL);

// Render the saved URLs when the page loads
renderSavedURLs();

function saveURL() {
    savedURLs.push(urlInput.value);
    console.log("URL saved!");

    // Clear the input field after saving the URL
    urlInput.value = "";

    // Save the updated list of saved URLs to localStorage
    localStorage.setItem("savedURLs", JSON.stringify(savedURLs));

    // Render the updated list of saved URLs
    renderSavedURLs();

    // Verify that the URL was saved into localStorage
    console.log(`Saved URLs: ${localStorage.getItem("savedURLs")}`);
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