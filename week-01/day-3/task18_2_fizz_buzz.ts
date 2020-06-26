'use strict';

for (let i: number = 1; i <= 100; i ++) {
    let printout: string = '';
    if (i % 3 == 0) {
        printout = printout + 'Fizz';
    }
    if (i % 5 == 0) {
        printout = printout + 'Buzz';
    }
    if (printout == '') {
        printout = String(i);
    }
    console.log(printout);
}
