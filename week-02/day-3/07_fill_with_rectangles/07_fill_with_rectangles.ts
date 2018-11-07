'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let color: string[] = ['red', 'orange', 'yellow', 'green'];

for (let i: number = 1; i <= 4; i++) {
  ctx.fillStyle = color[i - 1];
  ctx.fillRect(i * 50, i * 50, i * 10, i * 15);
}
