//   1) replace the list items' content with items from this list:
//   ['apple', 'banana', 'cat', 'dog']
//   2) change the <ul> element's background color to 'limegreen'
//     - use css class to change the color instead of the style property

const list = ['apple', 'banana', 'cat', 'dog'];
const listElements = document.querySelectorAll('li');

listElements.forEach((e, i) => {
  e.innerText = list[i];
});

const ulElements = document.querySelector('ul');
ulElements.classList.add('limeBckgrnd');
