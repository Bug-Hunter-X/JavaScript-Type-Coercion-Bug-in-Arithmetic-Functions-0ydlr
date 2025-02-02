function add(a, b) {
  // Explicit type checking and conversion
  a = parseInt(a, 10);
  b = parseInt(b, 10);

  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Please provide numbers";
  }
  return a + b;
}

function subtract(a, b) {
  // Explicit type checking and conversion
  a = parseInt(a, 10);
  b = parseInt(b, 10);
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Please provide numbers";
  }
  return a - b; 
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 5)); // Output: 5
console.log(add("5", "3")); // Output: 8
console.log(subtract("10", 5)); // Output: 5
console.log(add("abc", 5)); // Output: "Invalid input: Please provide numbers"