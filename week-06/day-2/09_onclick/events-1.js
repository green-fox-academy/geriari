'use strict'

// Turn the party on and off by clicking the button. (the whole page)

const btn = document.querySelector('button');
const div = document.querySelector('div');

btn.addEventListener('click', () => {
  if (div.hasAttribute('class')) {
    div.removeAttribute('class');
  } else {
    div.classList.add('party');
  }
});
