'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLine(fromX: number, fromY: number, toX: number, toY: number, color: string): void {
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.strokeStyle = color;
  ctx.stroke();
}

for (let i: number = 20; i < canvas.height / 2 + 1; i += 20) {
  drawLine(i, canvas.height / 2, canvas.width / 2, canvas.height / 2 - i, 'Lime');
  drawLine(canvas.width - i, canvas.height / 2, canvas.width / 2, canvas.height / 2 - i, 'Lime');
  drawLine(i, canvas.height / 2, canvas.width / 2, canvas.height / 2 + i, 'Lime');
  drawLine(canvas.width - i, canvas.height / 2, canvas.width / 2, canvas.height / 2 + i, 'Lime');
}
