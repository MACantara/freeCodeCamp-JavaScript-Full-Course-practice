let savedURLs = [];

// Get the DOM elements
const urlInput = document.getElementById("url-input");
const saveBtn = document.getElementById("save-btn");
const saveTabBtn = document.getElementById("save-tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const savedURLsList = document.getElementById("saved-urls-list");

// Get the saved URLs from localStorage
const savedURLsFromLocalStorage = JSON.parse(localStorage.getItem("savedURLs"));

if (savedURLsFromLocalStorage) {
    savedURLs = savedURLsFromLocalStorage;

    render(savedURLs);
}

function render(urls) {
    let listItems = "";

    // Loop through the saved URLs and create a list item for each one
    for (let i = 0; i < urls.length; i++) {
        // Add https:// to the URL if it doesn't start with http or https
        const url = urls[i].startsWith("http") ? urls[i] : "https://" + urls[i];
        
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

saveBtn.addEventListener("click", saveURL);
deleteBtn.addEventListener("dblclick", deleteAllURLs);
saveTabBtn.addEventListener("click", saveCurrentTabURL);

function saveURL() {
    savedURLs.push(urlInput.value);
    console.log("URL saved!");

    // Clear the input field after saving the URL
    urlInput.value = "";

    // Save the updated list of saved URLs to localStorage
    localStorage.setItem("savedURLs", JSON.stringify(savedURLs));

    // Render the updated list of saved URLs
    render(savedURLs);

    // Verify that the URL was saved into localStorage
    console.log(`Saved URLs: ${localStorage.getItem("savedURLs")}`);
}

function deleteAllURLs() {
    console.log("All URLs deleted!");
    localStorage.clear();
    savedURLs = [];
    render(savedURLs);
}

const tabs = [
    {
        url: "https://www.google.com"
    }
]

function saveCurrentTabURL() {
    console.log(tabs[0].url);
}