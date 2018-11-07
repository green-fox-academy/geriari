'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

function randomInt(min: number, max: number): number{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i: number = 0; i < 100; i++) {
  let starColor: number = randomInt(10, 255);
  let starXPos: number = randomInt(0, canvas.width - 4);
  let starYPos: number = randomInt(0, canvas.height - 4);
  let starSize: number = randomInt(1, 4);
  ctx.fillStyle = `rgb(${starColor}, ${starColor}, ${starColor})`;
  ctx.fillRect(starXPos, starYPos, starSize, starSize);
}
