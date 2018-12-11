'use strict'

console.log('OK');
const myAPIKey = 'QF5htYCILFyqeSK6Ea5hGo6oCreq8KgU';

let httpRequest = new XMLHttpRequest();

httpRequest.open('GET', `http://api.giphy.com/v1/gifs/search?q=monkey&api_key=${myAPIKey}&limit=16`, true);
httpRequest.send();

httpRequest.onreadystatechange = () => {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      const images = JSON.parse(httpRequest.responseText).data;
      //console.log(images[0]);
      const mybody = document.querySelector('body');
      for (let i = 0; i < images.length; i ++) {
        let actualImage = document.createElement('img');
        mybody.appendChild(actualImage);
        actualImage.setAttribute('src', images[i].images.original_still.url);
        actualImage.onclick = () => {
          actualImage.setAttribute('src', images[i].images.original.url)
        }
      }    
    }
  }
}
