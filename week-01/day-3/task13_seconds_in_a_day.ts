'use strict';

let currentHours: number = 14;
let currentMinutes: number = 0;
let currentSeconds: number = 42;

console.log(60 - currentSeconds + (60 - currentMinutes - 1) * 60 + (24 - currentHours - 1) * 3600);
