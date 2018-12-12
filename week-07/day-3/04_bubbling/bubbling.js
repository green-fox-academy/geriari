'use strict'

// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//   - the nav buttons (up, down, left, right) move the background by 10px
//   - the zoom buttons increase/decrease the image by 20%
//   - attach only two event listeners to the nav element
//     - one for navigation
//     - one for zooming

const imgInspector = document.querySelector('.img-inspector');
const nav = document.querySelector('nav');
let zoom = 200;
let posX = 0;
let posY = 0;

nav.addEventListener('click', (e) => {
    switch (e.target.getAttribute('data-direction')) {
      case 'in': {
        zoom += 20;
        imgInspector.style.backgroundSize = `${zoom}%`;
        break;
      }
      case 'out': {
        zoom -= 20;
        imgInspector.style.backgroundSize = `${zoom}%`;
        break;
      }
      case 'up': {
        posY -= 10;
        imgInspector.style.backgroundPosition = `${posX}px ${posY}px`;
        break;
      }
      case 'down': {
        posY += 10;
        imgInspector.style.backgroundPosition = `${posX}px ${posY}px`;
        break;
      }
      case 'left': {
        posX -= 10;
        imgInspector.style.backgroundPosition = `${posX}px ${posY}px`;
        break;
      }
      case 'right': {
        posX += 10;
        imgInspector.style.backgroundPosition = `${posX}px ${posY}px`;
        break;
      }
    }
});
