// Create an empty array called colors
let colors = [];

// Add three colours to the array using push()
colors.push("red");
colors.push("blue");
colors.push("green");

// Create another array called numbers with five numbers
let numbers = [10, 20, 30, 40, 50];

// Remove the last colour from the colours array
colors.pop();

// Add a new colour to the beginning of the colours array
colors.unshift("yellow");

// Print the length of both arrays
console.log("Length of colours array:", colors.length);
console.log("Length of numbers array:", numbers.length);

// Display both arrays to confirm changes
console.log("Colours:", colors);
console.log("Numbers:", numbers);