# Unexpected NaN in function foo
This repository demonstrates an unexpected behavior in a JavaScript function when called with fewer arguments than expected.

## Bug Description
The function `foo` is designed to add two numbers. However, when called with only one argument, it returns `NaN` instead of throwing an error or returning a default value.

## Bug Reproduction
1. Clone this repository.
2. Open `bug.js`.
3. Run the script using a JavaScript interpreter (Node.js, for example).
4. Observe the unexpected `NaN` output.

## Solution
The solution involves adding input validation to the function to handle cases where fewer than two arguments are provided. This ensures more robust behavior and prevents unexpected results. The solution code is available in `bugSolution.js`.