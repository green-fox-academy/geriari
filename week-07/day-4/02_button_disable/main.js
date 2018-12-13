'use strict'

const form = document.forms.myform;
const petSelection = form["favourite_pet"];
const factSelection = form.facts;
const signupbtn = document.querySelector('.signup');
const lovecatsbtn = document.querySelector('.ilovecats');
const buttons = document.querySelectorAll('button');

form.addEventListener('change', () => {
  if (petSelection.value === 'dog' || petSelection.value === 'cat' || (petSelection.value === 'viktor' && factSelection.value === 'no')) {
    signupbtn.removeAttribute('disabled');
  } else {
    signupbtn.disabled = 'true';
  }

  if (factSelection.value === 'yes') {
    lovecatsbtn.removeAttribute('disabled');
  } else {
    lovecatsbtn.disabled = 'true';
  }
});

buttons.forEach(e => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    if (factSelection.value === 'no' && petSelection.value === 'viktor') {
      alert('Sigh, we still added you to the cat facts');
    } else {
      alert('thank you, you successfully signed up for cat facts');
    }
  });
});
