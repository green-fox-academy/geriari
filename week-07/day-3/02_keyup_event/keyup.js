// 1) Subscibe to keyup events on the global window object
// 2) Console log the event object and peek inside
// 3) Display the last pressed key's code as "Last pressed key code is: __"

window.addEventListener('keyup', (e) => {
  const text = document.querySelector('h1');
  text.innerText = `Last pressed key code is: ${e.keyCode}`;
});
