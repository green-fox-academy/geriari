// 1) Select the rectangle by the ID: "very-rectangle"
// 2) Change the rectangle's position to x:50, y:50
// 3) Change its fill to tomato

const rec = document.querySelector('#very-rectangle');
rec.setAttribute('x', '50');
rec.setAttribute('y', '50');
rec.style.fill = 'tomato';
