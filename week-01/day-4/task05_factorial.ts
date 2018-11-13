export{}

// -  Create a function called `factorio`
//    that returns it's input's factorial

let num: number = 5;

function factorio(a: number): number {
  let f: number = 1;
  for (let i: number = 2; i <= a; i++) {
    f = f * i;
  } 
  return f; 
}

console.log(factorio(num));
