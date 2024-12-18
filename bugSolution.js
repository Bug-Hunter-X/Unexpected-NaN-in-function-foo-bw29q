function foo(a, b) {
  // Check if both arguments are provided
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Perform addition if both are numbers
  } else {
    // Handle cases where one or both arguments are not numbers or are missing
    console.error('Error: Both arguments must be numbers.'); // Or throw an error, return a default value, etc.
    return 0; // Or another appropriate default value
  }
}

console.log(foo(2, 3)); // 5
console.log(foo(2)); // Error message and 0
console.log(foo(2, 'a')); // Error message and 0