// Create an array called numbers with values 1 through 5
let numbers = [1, 2, 3, 4, 5];

// For loop that prints each number in the array
for (let b = 0; b < numbers.length; b++) {
  console.log("number", numbers[b]);
}

// While loop that counts down from 5 to 1
let count = 5;
while (count >= 1) {
  console.log("countdown", count);
  count--;
}

// Loop that prints only even numbers from the array
for (let b = 0; b < numbers.length; b++) {
  if (numbers[b] % 2 === 0) {
    console.log("even number", numbers[b]);
  }
}

// Loop that calculates the sum of all numbers in the array
let sum = 0;
for (let b = 0; b < numbers.length; b++) {
  sum += numbers[b];
}
console.log("sum of all numbers", sum);
