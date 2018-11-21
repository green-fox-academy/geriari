'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, 600, 600);

function drawOneHexagon(upperLeftX: number, upperLeftY: number, sideLength: number): void {
  ctx.beginPath();
  ctx.moveTo(upperLeftX, upperLeftY);
  ctx.lineTo(upperLeftX + sideLength, upperLeftY);
  ctx.lineTo(upperLeftX + sideLength + sideLength / 2, upperLeftY + 1.733 * sideLength / 2);
  ctx.lineTo(upperLeftX + sideLength, upperLeftY + 1.733 * sideLength);
  ctx.lineTo(upperLeftX, upperLeftY + 1.733 * sideLength);
  ctx.lineTo(upperLeftX - sideLength / 2, upperLeftY + 1.733 * sideLength / 2);
  ctx.lineTo(upperLeftX, upperLeftY);
  ctx.stroke();
}

function drawThreeHexagons(x: number, y: number, size: number, baseCase: number): void {
  drawOneHexagon(x, y, size);
  drawOneHexagon(x, y - size * 1.733, size);
  drawOneHexagon(x + size, y - size * 1.733, size);

  if (baseCase > 1) {
    
  }
}

//drawThreeHexagons()
let x = 100;
let y = 100;
let size = 100;
drawOneHexagon(x, y, size);
//drawOneHexagon(x, y - size * 1.733, size);
//drawOneHexagon(x + size, y - size * 1.733, size);
