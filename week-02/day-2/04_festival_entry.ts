'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

function securityCheck(list: any[]): any[] {
  let canEnter: string[] = [];
  for (let i: number = 0; i < list.length; i++) {
    if (list[i].guns === 1) { 
      watchlist.push(list[i].name);
    } else if (list[i].alcohol !== 0) {
      securityAlcoholLoot = securityAlcoholLoot + list[i].alcohol;
      list[i].alcohol = 0;
      canEnter.push(list[i].name);
    } else {
      canEnter.push(list[i].name);
    }
  }
  return canEnter;
}

console.log('These people can enter the festival: ', securityCheck(queue));
console.log('These people could not enter, they are on watch list: ', watchlist);
console.log('The security alcohol loot has', securityAlcoholLoot, 'units of alcohol.');

export = securityCheck;
