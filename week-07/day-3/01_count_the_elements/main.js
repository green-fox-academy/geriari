// On the click of the button,
// Count the items in the list
// And display the result in the result element.

const button = document.querySelector('button');

const countItems = () => {
  let listItems = document.querySelectorAll('li');
  const result = document.querySelector('.result');
  result.innerHTML = listItems.length;
}

button.addEventListener('click', countItems);
