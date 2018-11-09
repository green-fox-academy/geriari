'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

let numbersEntered: number[] = [1, 3, 5, 7, 9]; //Sum: 25, Average: 5
let sum: number = 0;

numbersEntered.forEach((element) => { sum += element });

console.log(`Sum: ${sum}, Average: ${sum/numbersEntered.length}`);
