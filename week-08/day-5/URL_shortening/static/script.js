console.log('I am the frontend script.js');

const form = document.querySelector('form');
const { url, alias } = form.elements;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  postXhr = new XMLHttpRequest();
  postXhr.open('POST', '/api/links');
  postXhr.setRequestHeader('Content-Type', 'application/json');
  postXhr.send(JSON.stringify({
    url: url.value,
    alais: alias.value
  }));
});
