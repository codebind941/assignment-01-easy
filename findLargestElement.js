/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/


function findLargestElement(numbers) {
    // Check if the array is empty
   
        

        // Step 1: Assume the first element is the largest
        let largest = numbers[0];
        
    
        // Step 2: Loop through the array to check each element
        for (let i = 1; i < numbers.length; i++) {
        
            // Step 3: If the current element is greater, update the largest
            if (numbers[i] > largest) {
                largest = numbers[i];
                
            }
        }
    
        // Step 4: Return the largest element found
        return largest;
    }
    
    // Example usage:
    const numbers = [3, 7, 2, 9, 1];
    const result = findLargestElement(numbers);
    console.log("Largest element:", result); // Output should be 9
    
          
    
    
 

module.exports = findLargestElement;