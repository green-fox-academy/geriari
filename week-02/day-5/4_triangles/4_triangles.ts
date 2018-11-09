'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawTriangle(lowerLeftX: number, LowerLeftY: number): void {
  ctx.beginPath();
  ctx.moveTo(lowerLeftX, LowerLeftY);
  ctx.lineTo(lowerLeftX + 30, LowerLeftY);
  ctx.lineTo(lowerLeftX + 15, LowerLeftY - 26);
  ctx.lineTo(lowerLeftX, LowerLeftY);
  ctx.stroke();
}

let startPosX: number = 0;
let numOfTriangles: number = 21;

for (let row: number = 21; row > 0; row--) { 
  for (let col: number = 0; col < numOfTriangles; col++) {
    drawTriangle(startPosX + col * 30, row * 26 + 42);
  }
  startPosX += 15;
  numOfTriangles -= 1;
}
