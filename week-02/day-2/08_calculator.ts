'use strict';
// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.

// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:

// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

// You should use the command line arguments to accept user input

// It should work like this:

// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

function calculate(): void {
  const args = process.argv.splice(2); // Just a helper for you to get started
  if (parseInt(args[1]) === NaN || parseInt(args[2]) === NaN) {
    console.log('Error: operands are not numbers.');
  } else {
    let numA: number = parseInt(args[1]);
    let numB: number = parseInt(args[2]);
    switch (args[0]) {
      case '+':
        console.log(numA + numB);
        break;
      case '-':
        console.log(numA - numB);
        break;
      case 'x':
        console.log(numA * numB);
        break;
      case 'slash':
        console.log(numA / numB);
        break;
      case '%':
        console.log(numA % numB);
        break;
      default:
        console.log('Error: operation is not valid.');
    }
  }
}

calculate();

export = calculate;
