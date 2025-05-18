// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Herald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.length);
// console.log(course.tags);

let airbnbCastleListing = {
    listingTitle: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.jpg", "img/castle2.jpg", "img/castle3.jpg", "img/castle4.jpg", "img/castle5.jpg", "img/castle6.jpg"],
    rating: 4.99,
    reviews: 1200,
    location: "Galway, Ireland",
    owner: {
        name: "John Doe",
        isSuperHost: true
    }
}

console.log("The owner of the listing is: " + airbnbCastleListing.owner.name);
console.log("The owner of the listing is a superhost: " + airbnbCastleListing.owner.isSuperHost);
console.log("The rating of the listing is: " + airbnbCastleListing.rating + " | The number of reviews is: " + airbnbCastleListing.reviews);
console.log("The location of the listing is: " + airbnbCastleListing.location);
console.log("The price of the listing is: " + airbnbCastleListing.price);
console.log("The listing is a superhost: " + airbnbCastleListing.isSuperHost);
console.log("The listing title is: " + airbnbCastleListing.listingTitle);
