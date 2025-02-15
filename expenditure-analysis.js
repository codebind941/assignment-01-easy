/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    // Step 1: Create an empty object to store total spent by category
    const categoryTotals = {};
	console.log("Initial categoryTotals:", categoryTotals);

    // Step 2: Loop through each transaction
    for (let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i];
        console.log("\nCurrent transaction:", transaction);

        // Step 3: Get the category and price from the current transaction
        const category = transaction.category;
        const price = transaction.price;
        console.log("Category:", category, "| Price:", price);

        // Step 4: Check if this category is already in the object
        if (categoryTotals[category]) {
            // If it exists, add the price to the existing total
            categoryTotals[category] += price;
			console.log(`Updated total for ${category}:`, categoryTotals[category]);

        } else {
            // If it doesn't exist, create a new entry with the current price
            categoryTotals[category] = price;
			console.log(`New category added - ${category}:`, categoryTotals[category]);

        }
    }
    console.log("\nFinal categoryTotals object:", categoryTotals);

    // Step 5: Convert the categoryTotals object into an array of objects
    const result = [];
    for (let category in categoryTotals) {
        result.push({
            category: category,
            totalSpent: categoryTotals[category]
        });
    }
	console.log("\nFinal Result Array:", result);


    return result;
}

const transactions = [
	{ id: 1, price: 10, category: 'Food' },
    { id: 2, price: 5, category: 'Food' },
    { id: 3, price: 20, category: 'Clothing' },
    { id: 4, price: 15, category: 'Food' }
];

calculateTotalSpentByCategory(transactions);


  
  module.exports = calculateTotalSpentByCategory;
