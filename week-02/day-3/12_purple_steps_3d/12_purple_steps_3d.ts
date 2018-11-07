'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

ctx.fillStyle = 'fuchsia';
let actualSize: number = 0;
let actualPos: number = 13;

for (let i: number = 1; i <= 6; i++) {
  actualSize = actualSize + 13;
  ctx.fillRect(actualPos, actualPos, actualSize, actualSize);
  ctx.strokeRect(actualPos, actualPos, actualSize, actualSize);
  actualPos = actualPos + actualSize;
}
