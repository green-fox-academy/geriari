export{}

let name = ['Peter'];  
console.log(name); // gives: [ 'Peter' ]
  
let secondName = name;
console.log(secondName); // gives: [ 'Peter' ]
  
name.push('Pal');
console.log(secondName); // gives: [ 'Peter', 'Pal' ]
