let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

console.log("Original array: " + largeCountries);

largeCountries.pop(); // Removes the last element
largeCountries.push("Pakistan"); // Adds an element to the end
largeCountries.shift(); // Removes the first element
largeCountries.unshift("China"); // Adds an element to the beginning

console.log("Modified array: " + largeCountries);