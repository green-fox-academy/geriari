export { };

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');

let myName: string = 'Andras Gerencser';

try { 
  fs.writeFileSync('my-file.txt', myName);
} catch(e) {
  console.log('Unable to write file: my-file.txt');
}
