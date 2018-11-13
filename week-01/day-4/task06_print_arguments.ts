export{}

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...arg: any[]) {
  for (let i = 0; i < arg.length; i++) {
    console.log(arg[i]);
  }
}

printParams(1, 'alma', true, 2.35);
