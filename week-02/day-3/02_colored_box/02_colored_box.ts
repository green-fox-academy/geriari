'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(500, 100);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(500, 100);
ctx.lineTo(500, 300);
ctx.strokeStyle = "orange";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(500, 300);
ctx.lineTo(100, 300);
ctx.strokeStyle = "yellow";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(100, 100);
ctx.strokeStyle = "green";
ctx.stroke();
