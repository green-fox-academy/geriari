'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function lineToCenter(x: number, y: number): void {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(canvas.width / 2, canvas.height /2);
  ctx.stroke();
}

for (let coloumn: number = 0; coloumn <= canvas.width; coloumn += 20) {
  lineToCenter(coloumn, 0);
  lineToCenter(coloumn, canvas.height);
}

for (let row: number = 0; row <= canvas.height; row += 20) {
  lineToCenter(0, row);
  lineToCenter(canvas.width, row);
}
