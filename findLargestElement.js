/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        return null; // Return null for an empty array
    }

    // Initialize the largest number with the first element
    let largest = numbers[0];

    // Iterate through the array
    for (let i = 1; i < numbers.length; i++) {
        // If current number is greater than the largest, update the largest
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

module.exports = findLargestElement;