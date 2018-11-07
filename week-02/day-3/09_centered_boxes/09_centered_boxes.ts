'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function squareToTheCenter(size: number): void {
  let x: number = (canvas.width - size) / 2;
  let y: number = (canvas.height - size) / 2;
  ctx.fillRect(x, y, size, size);
}

let fillColor: string[] = ['red', 'orange', 'yellow'];

for (let i: number = 0; i <3; i++) {
  ctx.fillStyle = fillColor[i];
  squareToTheCenter(250 - i * 100);
}
