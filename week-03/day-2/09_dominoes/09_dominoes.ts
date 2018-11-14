import {Domino} from "./09_domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

console.log('Dominoes unordered: ');
print(dominoes);

let orderedDominoes: Domino[] = [];
orderedDominoes.push(dominoes.splice(0,1)[0]);
let orderedDominoesCounter = 1;

while (dominoes.length > 0) {
  for (let i: number = 0; i < dominoes.length; i++) {
  if (orderedDominoes[orderedDominoesCounter - 1].values[1] === dominoes[i].values[0]) {
    orderedDominoes.push(dominoes.splice(i,1)[0]);
    orderedDominoesCounter++;
  }
  }
}

console.log('Dominoes in order: ');
print(orderedDominoes);
