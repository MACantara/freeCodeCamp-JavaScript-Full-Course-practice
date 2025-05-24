function generateSentence(description, array) {
    let sentence = `The ${array.length} ${description} are `;
    const lastIndex = array.length - 1;

    // Why this approach?
    // 1. It allows for dynamic generation of sentences based on the array length
    // 2. It handles the case where the array has only one element
    // 3. It handles the case where the array has multiple elements
    for (let i = 0; i < array.length; i++) {
        if (i === lastIndex) {
            sentence += `and ${array[i]}.`;
        } else {
            sentence += `${array[i]}, `;
        }
    }

    console.log(sentence);
}

generateSentence("colors", ["red", "blue", "green"]);
generateSentence("fruits", ["apple", "banana", "orange"]);
generateSentence("vegetables", ["carrot", "broccoli", "spinach"]);
