'use strict'

const Xhr = new XMLHttpRequest();
Xhr.open('GET', '/booksfulldata');
Xhr.onload = () => {
  if (Xhr.status === 200) {
    const res = JSON.parse(Xhr.responseText);
    listBooksFullData(res);
  }
}
Xhr.send();

const select = document.querySelector('select');
const input = document.querySelector('input');
select.addEventListener('change', (event) => {
  input.setAttribute("name", event.target.value);
});

const submit = document.querySelector('button');
submit.addEventListener('click', (event) => {
  event.preventDefault();
  const queryKey = input.name;
  const queryValue = input.value;
  Xhr.open('GET', `/booksfulldata?${queryKey}=${queryValue}` );
  Xhr.send();
});

const listBooksFullData = (data) => {
  const tableDiv = document.querySelector('table');
  while (tableDiv.firstChild) {
    tableDiv.removeChild(tableDiv.firstChild);
  }
  const tr = document.createElement('tr');
  const thTitle = document.createElement('th');
  const thAuthor = document.createElement('th');
  const thCategory = document.createElement('th');
  const thPublisher = document.createElement('th');
  const thPrice = document.createElement('th');
  thTitle.textContent = 'Book title';
  thAuthor.textContent = 'Author';
  thCategory.textContent = 'Category';
  thPublisher.textContent = 'Publisher';
  thPrice.textContent = 'Price';
  tr.appendChild(thTitle);
  tr.appendChild(thAuthor);
  tr.appendChild(thCategory);
  tr.appendChild(thPublisher);
  tr.appendChild(thPrice);
  tableDiv.appendChild(tr);
  data.forEach(book => {
    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdCategory = document.createElement('td');
    const tdPublisher = document.createElement('td');
    const tdPrice = document.createElement('td');
    tdTitle.textContent = book.book_name;
    tdAuthor.textContent = book.aut_name;
    tdCategory.textContent = book.cate_descrip;
    tdPublisher.textContent = book.pub_name;
    tdPrice.textContent = book.book_price;
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdCategory);
    tr.appendChild(tdPublisher);
    tr.appendChild(tdPrice);
    tableDiv.appendChild(tr);
  });
}
