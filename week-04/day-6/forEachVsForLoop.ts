// Feladat: menjünk végig egy tömb minden elemén,
// a páros értékű elemeket szorozzuk meg kettővel,
// a páratlan értékűeket nullázzuk le!

// 1. verzió: for loop

let array: number[] = [0, 1, 2, 3, 4, 5];

console.log('1. verzió');
console.log(array);

for (let i: number = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    array[i] *= 2;
  } else {
    array[i] = 0;
  }
}

console.log(array);


// 2. verzió: forEach, de hibás, mert az elementnek adunk új értéket

array = [0, 1, 2, 3, 4, 5];

console.log('2. verzió (hibás)');
console.log(array);

array.forEach((e, i, a) => {
  if (e % 2 === 0) {
    e *= 2;
  } else {
    e = 0;
  }
});

console.log(array);


// 3. verzió: forEach, így már működik

array = [0, 1, 2, 3, 4, 5];

console.log('3. verzió');
console.log(array);

array.forEach((e, i, a) => {
  if (e % 2 === 0) {
    a[i] *= 2;
  } else {
    a[i] = 0;
  }
});

console.log(array);
