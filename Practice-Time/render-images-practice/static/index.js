const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300"
];

const imageContainer = document.getElementById("image-container");

function renderImages() {
    let renderedImages = "";

    for (let i = 0; i < images.length; i++) {
        renderedImages += `<img src="${images[i]}" alt="Random Image ${i + 1}" class="team-img">`;
    }

    // Updates the DOM once instead of multiple times
    imageContainer.innerHTML = renderedImages;
}

renderImages();