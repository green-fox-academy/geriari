const body = document.body;
let scrollThreshold = 300;

let createTenBoxes = (position) => {
  for (let i = 1; i <= 10; i ++) {
    const square = document.createElement('div');
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    if (position === 'after') {
      body.appendChild(square);
    }
    if (position === 'before') {
      body.insertBefore(square, body.childNodes[0]);
    }
  }
}

createTenBoxes('after');

window.addEventListener('scroll', event => {
  if (window.scrollY + window.innerHeight >= body.offsetHeight - scrollThreshold) {
    createTenBoxes('after');
  }
  console.log(window.scrollY);
  if (window.scrollY < scrollThreshold) {
    createTenBoxes('before');
  }
});
