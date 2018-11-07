'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let squareSize: number = 25;
let offset: number;

for (let coloumn: number = 0; coloumn <= 23; coloumn++) {
  for (let row: number = 0; row <= 7; row++) {
    if (coloumn % 2 !== 0) {
      offset = squareSize;
    } else {
      offset = 0;
    }
    ctx.fillRect(coloumn * squareSize, row * squareSize * 2 + offset, squareSize, squareSize);
  }
}
