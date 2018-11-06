export { }

'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// solution with for loop

function candyFilter(s: any[]): void {
  console.log('The students, who have more than 4 candies: ');
  for (let i: number = 0; i < s.length; i++) {
    if (s[i].candies > 4) {
      console.log(students[i].name);
    }  
  }
}

candyFilter(students);

// solution with array filter

function candyFilter2(s: any[]): void {
  
  function isBiggerThanFour(value) {
    return value.candies > 4;
  }

  let fs: any[] = s.filter(isBiggerThanFour);
  
  console.log('The students, who have more than 4 candies: ');
  
  function printName(student) {
    console.log(student.name);
  }
  
  fs.forEach(printName);
  
}

candyFilter2(students);

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function averageCandies(stud: any[]): void {
  let sumCandies: number = 0;
  for (let i: number = 0; i < students.length; i++) {
    sumCandies = sumCandies + students[i].candies;
  }
  let avgCandies: number = sumCandies / students.length;
  console.log(`Our students have ${avgCandies} candies on average.`);
}

averageCandies(students);
