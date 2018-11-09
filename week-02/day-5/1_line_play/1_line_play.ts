'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

for (let i: number = 0; i < 20; i++) {
  ctx.beginPath();
  ctx.moveTo(i * 30, 0);
  ctx.lineTo(canvas.width, i * 20);
  ctx.strokeStyle = 'fuchsia';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, i * 20);
  ctx.lineTo(i * 30, canvas.height);
  ctx.strokeStyle = 'green';
  ctx.stroke();
}
