// 1)  Fill every paragraph with the last one's content.
// 2)  Do the same again, but you should keep the cat strong.

const paragraphs = document.querySelectorAll('p');
const lastElement = document.querySelector('.animals');

for (i = 0; i < paragraphs.length; i++) {
  paragraphs[i].innerHTML = lastElement.innerHTML;
}
