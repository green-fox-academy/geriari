// Create a simple HTML document with one button.
// If the user clicks the button 3 times, 
// and 5 seconds is already elapsed since the page is loaded, 
// a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed

const button = document.querySelector('button');
const paragraph = document.querySelector('p');
let clickCounter = 0;

const clickThreeTimes = (e) => {
  clickCounter ++;
  if (e.timeStamp < 5000) {
    button.removeEventListener('click', clickThreeTimes);
  } else if (clickCounter === 3) {
    paragraph.innerText = '5 seconds elapsed and clicked 3 times.';
  }
}

button.addEventListener('click', clickThreeTimes);
