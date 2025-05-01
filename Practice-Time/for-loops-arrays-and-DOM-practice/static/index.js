let sentence = ["Hello", "my", "name", "is", "Mik"];
let greetingEl = document.getElementById("greeting-el");

for (let i = 0; i < sentence.length; i++)
{
    greetingEl.textContent += sentence[i] + " ";
    console.log("Adding " + sentence[i] + " | Current sentence: " + greetingEl.textContent);
}