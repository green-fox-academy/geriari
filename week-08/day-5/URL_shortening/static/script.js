const form = document.querySelector('form');
const { url, alias } = form.elements;
const h1 = document.querySelector('h1');
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
    if (postXhr.status === 400) {
      h1.style.color = 'red';
      h1.textContent = `Your alias is already in use!`;
    }
    if (postXhr.status === 200) {
      const record = JSON.parse(postXhr.responseText);
      h1.style.color = 'black';
      h1.textContent = `Your URL is aliased to ${record.alias} and your secret code is ${record.secretCode}.`;
      form.reset();
    }
  }
});
