'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawHexagon(sideLength: number, lowerLeftX: number, LowerLeftY: number): void {
  ctx.beginPath();
  ctx.moveTo(lowerLeftX, LowerLeftY);
  ctx.lineTo(lowerLeftX + sideLength, LowerLeftY);
  ctx.lineTo(lowerLeftX + sideLength + sideLength / 2, LowerLeftY + 1.733 * sideLength / 2);
  ctx.lineTo(lowerLeftX + sideLength, LowerLeftY + 1.733 * sideLength);
  ctx.lineTo(lowerLeftX, LowerLeftY + 1.733 * sideLength);
  ctx.lineTo(lowerLeftX - sideLength / 2, LowerLeftY + 1.733 * sideLength / 2);
  ctx.lineTo(lowerLeftX, LowerLeftY);
  ctx.stroke();
}

let numOfHex: number = 7;
let hexSideLength: number = 30;
let hexHeight: number = hexSideLength * 1.733;

for (let col: number = 0; col <= 3; col++) {
  for (let row: number = 0; row < numOfHex; row++) {
    drawHexagon(hexSideLength, 300 + col * hexSideLength * 1.5, 120 + row * hexHeight + col * hexHeight / 2);
    drawHexagon(hexSideLength, 300 - col * hexSideLength * 1.5, 120 + row * hexHeight + col * hexHeight / 2);
  }
  numOfHex -= 1;
}
