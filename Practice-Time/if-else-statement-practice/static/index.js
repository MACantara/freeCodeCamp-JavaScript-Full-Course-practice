let age = 15;

if (age < 6) {
    console.log("Free");
} else if (age >= 6 && age <= 17) {
    console.log("Child discount");
} else if (age >= 18 && age <= 26) {
    console.log("Student discount");
} else if (age >= 27 && age <= 66) {
    console.log("Full price");
} else {
    console.log("Senior citizen discount");
}