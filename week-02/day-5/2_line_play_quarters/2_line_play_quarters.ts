'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLinePlay(virtualCanvasWidth: number, virtualCanvasHeight: number, virtualOrigoX: number, virtualOrigoY: number): void {
  let incrementX: number = virtualCanvasWidth / 20;
  let incrementY: number = virtualCanvasHeight / 20;
  for (let i: number = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.moveTo(virtualOrigoX + i * incrementX, virtualOrigoY);
    ctx.lineTo(virtualOrigoX + virtualCanvasWidth, virtualOrigoY + i * incrementY);
    ctx.strokeStyle = 'fuchsia';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(virtualOrigoX, virtualOrigoY + i * incrementY);
    ctx.lineTo(virtualOrigoX + i * incrementX, virtualOrigoY + virtualCanvasHeight);
    ctx.strokeStyle = 'green';
    ctx.stroke();
  }
}

let numberOfScreens: number = 16; // can be 1, 4, 16, 64 ...
let virtCanvWidth: number = canvas.width / Math.sqrt(numberOfScreens);
let virtCanvHeight: number = canvas.height / Math.sqrt(numberOfScreens);

for (let row: number = 0; row < Math.sqrt(numberOfScreens); row++) {
  for (let col: number = 0; col < Math.sqrt(numberOfScreens); col++) {
    drawLinePlay(virtCanvWidth, virtCanvHeight, row * virtCanvWidth, col * virtCanvHeight);
  }
}
