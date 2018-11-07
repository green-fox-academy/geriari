'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function coloredSquare(size: number, color: string): void {
  let x: number = (canvas.width - size) / 2;
  let y: number = (canvas.height - size) / 2;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}

let colorList: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

for (let i: number = 6; i > 0; i--) {
  let squareSize: number = canvas.height / 6 * i);
  coloredSquare(squareSize, colorList[6 - i]);
}