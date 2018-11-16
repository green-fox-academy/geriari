'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, 600, 600);

function drawRectangles(x: number, y: number, size: number, baseCase: number): void {
  ctx.strokeRect(x, y + size / 3, size, size / 3);
  ctx.strokeRect(x + size / 3, y, size / 3, size);

  if (baseCase > 1) {
    drawRectangles(x, y + size / 3, size / 3, baseCase - 1);
    drawRectangles(x + size / 3, y, size / 3, baseCase - 1);
    drawRectangles(x + (size * 2) / 3, y + size / 3, size / 3, baseCase - 1);
    drawRectangles(x + size / 3, y + (size * 2) / 3, size / 3, baseCase - 1);
  }
}

drawRectangles(0, 0, 600, 10);
