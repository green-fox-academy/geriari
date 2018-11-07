'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function squareFifty(x: number, y: number): void {
  ctx.fillRect(x, y, 50, 50);
}

for (let i: number = 1; i <= 3; i++) {
  ctx.fillStyle = `rgb(${i * 80}, ${i * 70}, ${i * 60})`;
  squareFifty(i * 75, i * 100);
}
