const form = document.querySelector('form');
const { url, alias } = form.elements;
form.addEventListener('submit', (event) => {
  event.preventDefault();
  postXhr = new XMLHttpRequest();
  postXhr.open('POST', '/api/links');
  postXhr.setRequestHeader('Content-Type', 'application/json');
  postXhr.send(JSON.stringify({
    url: url.value,
    alias: alias.value
  }));
  postXhr.onload = () => {
    //todo: lekezelni a 400-as kódot
    const record = JSON.parse(postXhr.responseText);
    const h1 = document.querySelector('h1');
    h1.textContent = `Your URL is aliased to ${record.alias} and your secret code is ${record.secretCode}.`;
  }
});
