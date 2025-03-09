let myPoints = 3;

console.log("Initial points: " + myPoints); // Initial output: 3

function add3Points() {
    myPoints += 3;
    console.log("3 points added. Total points: " + myPoints);
}

function remove1Point() {
    myPoints -= 1;
    console.log("1 point removed. Total points: " + myPoints);
}

add3Points(); // Output: 6
remove1Point(); // Output: 5
add3Points(); // Output: 8
remove1Point(); // Output: 7
add3Points(); // Output: 10

console.log("Final points: " + myPoints); // Final output: 10