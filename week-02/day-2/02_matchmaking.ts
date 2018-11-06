'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(g: string[], b: string[]): string[] {
  for (let i: number = 0; i < b.length; i++) {
    g.splice(1 + 2 * i, 0, b[i]);
  }
  return g;
}

console.log(makingMatches(girls, boys));

export = makingMatches;
