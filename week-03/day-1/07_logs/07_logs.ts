// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    console.log(e.message);
    return null;
  }
}

function returnIPaddress(fileName: string): string[] {
  let inputTextFile: string = readFromFile('log.txt');
  let logOneDimArray: string[] = inputTextFile.split('\n');
  let logTwoDimArray: string[][] = new Array();
  let iPaddressArray: string[] = new Array();
  
  for (let i = 0; i < logOneDimArray.length; i++) {
    logTwoDimArray.push(logOneDimArray[i].split('   '));
  }
  
  for (let j: number = 0; j < logTwoDimArray.length; j++) {
    iPaddressArray[j] = logTwoDimArray[j][1];
  }
  
  return iPaddressArray;
}

console.log(returnIPaddress('log.txt'));

function getPostRatio(fileName: string): number {
  let inputTextFile: string = readFromFile('log.txt');
  let logOneDimArray: string[] = inputTextFile.split('\n');
  let logTwoDimArray: string[][] = new Array();
  let getPostArray: string[] = new Array();

  for (let i = 0; i < logOneDimArray.length; i++) {
    logTwoDimArray.push(logOneDimArray[i].split('   '));
  }
  
  for (let j: number = 0; j < logTwoDimArray.length; j++) {
    getPostArray[j] = logTwoDimArray[j][2];
  }  
  
  let numberOfGet: number = 0;

  for (let k: number = 0; k < getPostArray.length; k++) {
    if (getPostArray[k] === 'GET /') {
       numberOfGet++;
    }
  }
  return numberOfGet / (getPostArray.length - numberOfGet);
}

console.log(getPostRatio('log.txt'));
