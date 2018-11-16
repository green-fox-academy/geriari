'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawOneTriangle(x, y, sideLength): void {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + sideLength / 2, y);
  ctx.lineTo(x + sideLength / 4, y + sideLength / 2 * 0.866);
  ctx.closePath();
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

function drawThreeTriangles(x, y, sideLength): void {
  drawOneTriangle(x, y, sideLength); // 
  drawOneTriangle(x + sideLength / 2, y, sideLength);
  drawOneTriangle(x + sideLength / 4, y + sideLength / 2 * 0.866, sideLength);

  if (sideLength > 5) {
    // left
    drawThreeTriangles(x, y, sideLength / 2);
    // right
    drawThreeTriangles(x + sideLength / 2, y, sideLength / 2);
    // bottom
    drawThreeTriangles(x + sideLength / 4, y + sideLength / 2 * 0.866, sideLength / 2);

  }
}

drawThreeTriangles(0, 0, 600);
