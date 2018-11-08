'use strict';

export { }

// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The first columns should be automatically as wide as the longest key

const ingredients: any[] = [
	{ name: 'vodka', inStock: 111, needsCooling: true },
	{ name: 'coffee_liqueur', inStock: 0, needsCooling: true },
	{ name: 'fresh_cream', inStock: 1, needsCooling: true },
	{ name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
];

function tablePrinter(list: any[]): void {

  function multiplyChar(char: string, num: number): string {
    let charChain: string = char;  
    for (let a: number = 1; a < num; a++) {
      charChain = charChain + char;
    }
    return charChain;
  }

  let longestNameLength: number = 0;
  for (let i: number = 0; i < list.length; i++) {
    if (list[i].name.length > longestNameLength) {
      longestNameLength = list[i].name.length;
    }
  }
  let coloumnAWidth: number = longestNameLength + 2;
  let coloumnBWidth: number = 15;
  let coloumnCWidth: number = 10;
  let wordALength: number;
  let wordB: string;
  let wordBLength: number;
  let wordCLength: number;

  let horizontalDivider: string = '+' + multiplyChar('-', coloumnAWidth) + '+' + multiplyChar('-', coloumnBWidth) + '+' + multiplyChar('-', coloumnCWidth) + '+';

  console.log(horizontalDivider);
  console.log('| Ingredient' + multiplyChar(' ', coloumnAWidth - 11) + '| Needs cooling | In stock |');
  console.log(horizontalDivider);

  for (let j: number = 0; j < list.length; j++) {
    wordALength = list[j].name.length;
    if (list[j].needsCooling) {
      wordBLength = 3;
      wordB = 'Yes';
    } else {
      wordBLength = 2;
      wordB = 'No';
    }  
    wordCLength = list[j].inStock.toString().length;
    console.log('| ' + list[j].name + multiplyChar(' ', coloumnAWidth - wordALength - 1) + '| ' + wordB + multiplyChar(' ', coloumnBWidth - wordBLength - 1) + '| ' + list[j].inStock + multiplyChar(' ', coloumnCWidth - wordCLength - 1) + '|');
  }

  console.log(horizontalDivider);
}

tablePrinter(ingredients);
