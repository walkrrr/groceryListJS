var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];

console.log(groceries.length);

// Create a Function to Remove Duplicates

var deleteDuplicates = function (list) {
  var cleanList = [];

  for (var item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
  return cleanList;
};

// Check the Length of the New Array

var newGroceries = deleteDuplicates(groceries);

console.log(newGroceries.length);

// Create a Numbered List of the Grocery Items

newGroceries.forEach(function (item, index) {
  console.log(`#${index + 1} - ${item}`);
});
