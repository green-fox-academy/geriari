'use strict';

const question = document.querySelector('.question');
const answers = document.querySelector('#answers');
const answer1 = document.querySelector('.answer.one');
const answer2 = document.querySelector('.answer.two');
const answer3 = document.querySelector('.answer.three');
const answer4 = document.querySelector('.answer.four');
let score = 0;

const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/game');
xhr.onload = () => {
  if (xhr.status === 200) {
    const res = JSON.parse(xhr.responseText);
    question.textContent = res[0].question;
    answer1.textContent = res[0].answer;
    answer2.textContent = res[1].answer;
    answer3.textContent = res[2].answer;
    answer4.textContent = res[3].answer;
  }
}
xhr.send();

answers.addEventListener('click', (event) => {
  console.log(event);
  const chosen = parseInt(event.path[0].dataset.answer);
  console.log(typeof chosen);
  console.log(chosen);

});
