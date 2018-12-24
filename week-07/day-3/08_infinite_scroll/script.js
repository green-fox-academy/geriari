const body = document.body;
let scrollThreshold = 300;

let createTenBoxes = () => {
  for (let i = 1; i <= 10; i ++) {
    const square = document.createElement('div');
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    body.appendChild(square);
  }
}

createTenBoxes();

window.addEventListener('scroll', event => {
  if (window.scrollY + window.innerHeight >= body.offsetHeight - scrollThreshold) {
    createTenBoxes();
  }
});
