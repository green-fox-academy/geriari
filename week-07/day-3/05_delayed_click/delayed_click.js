// Create a simple HTML document with one button. 
// If the user clicks the button it should wait 2 seconds 
// and it should show a text under the button: 2 seconds ellapsed

button = document.querySelector('button');
paragraph = document.querySelector('p');

const showTextInTwoSeconds = () => {
  setTimeout(() => {
    paragraph.innerText = '2 seconds elapsed.';
  }, 2000);
}

button.addEventListener('click', showTextInTwoSeconds);
