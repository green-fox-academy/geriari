// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

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

function ticTacResult(fileName: string): string {
  let fileContent = readFromFile(fileName);
  let fileContentArray: string[] = fileContent.split('\n')
  let winner: string = 'draw';

  for (let i: number = 0; i < 3; i++) {
    if (fileContentArray[i].slice(0, 1) === fileContentArray[i].slice(1, 2) && fileContentArray[i].slice(0, 1) === fileContentArray[i].slice(2, 3)) {
      winner = fileContentArray[i].slice(0, 1);
      break;
    } else if (fileContentArray[0].slice(i, i + 1) === fileContentArray[1].slice(i, i + 1) && fileContentArray[0].slice(i, i + 1) === fileContentArray[2].slice(i, i + 1)) {
      winner = fileContentArray[0].slice(i, i + 1);
      break;
    } 
  }

  if (fileContentArray[0].slice(0, 1) === fileContentArray[1].slice(1, 2) && fileContentArray[0].slice(0, 1) === fileContentArray[2].slice(2, 3)) {
    winner = fileContentArray[0].slice(0, 1);
  } else if (fileContentArray[0].slice(2, 3) === fileContentArray[1].slice(1, 2) && fileContentArray[0].slice(2, 3) === fileContentArray[2].slice(0, 1)) {
    winner = fileContentArray[0].slice(2, 3);
  }
    
  return winner;
}

console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-o-horizontal.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"
