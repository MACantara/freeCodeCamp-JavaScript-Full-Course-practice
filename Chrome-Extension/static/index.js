let savedURLs = [];

// Get the DOM elements
const urlInput = document.getElementById("url-input");
const saveBtn = document.getElementById("save-btn");
const savedURLsList = document.getElementById("saved-urls-list");

// Get the saved URLs from localStorage
let savedURLsFromLocalStorage = JSON.parse(localStorage.getItem("savedURLs"));

// Verify that the saved URLs were retrieved from localStorage
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

    // Loop through the saved URLs and create a list item for each one
    for (let i = 0; i < savedURLs.length; i++) {
        // Add https:// to the URL if it doesn't start with http or https
        const url = savedURLs[i].startsWith("http") ? savedURLs[i] : "https://" + savedURLs[i];
        
        // Add the URL to the list of list items
        listItems += `
            <li>
                <a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>
            </li>
        `;
    }

    // Update the saved URLs list in the DOM
    savedURLsList.innerHTML = listItems;
}