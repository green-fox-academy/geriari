const xhr = new XMLHttpRequest();
xhr.open('GET', '/books');
xhr.onload = () => {
  if (xhr.status === 200) {
    const res = JSON.parse(xhr.responseText);
    listBooks(res);
  }
}
xhr.send();

listBooks = (data) => {
  const placeOfBooksList = document.querySelector('#booklist');
  data.forEach(book => {
    const bookName = document.createElement('p');
    bookName.textContent = book.book_name;
    placeOfBooksList.appendChild(bookName);
  });
}

const fullXhr = new XMLHttpRequest();
fullXhr.open('GET', '/booksfulldata');
fullXhr.onload = () => {
  if (fullXhr.status === 200) {
    const res = JSON.parse(fullXhr.responseText);
    listBooksFullData(res);
  }
}
fullXhr.send();

//todo: megírni a /booksfulldata táblázat kiírását (html-ben)
listBooksFullData = (data) => {
  const tableDiv = document.querySelector('table');
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
