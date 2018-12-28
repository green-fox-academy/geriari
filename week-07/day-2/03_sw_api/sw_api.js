'use strict'

const xhr = new XMLHttpRequest();
let url = 'https://swapi.co/api/';
let characters = [];
let numberOfCharacters = 0;

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    numberOfCharacters = response.count;
  }
};
xhr.open('GET', `${url}people/`, false);
xhr.send();
console.log(numberOfCharacters);

let requests = new Array();

for (let i = 1; i <= numberOfCharacters; i ++) {
  requests[i] = new XMLHttpRequest();
  requests[i].open('GET', `${url}people/${i}/`, true);
  requests[i].onload = () => {
    if (requests[i].status === 200) {
      characters[i] = JSON.parse(requests[i].response);
      console.log(characters[i]);
      console.log(typeof characters[i]);
      console.log(characters[i].name);
    }
  };
  requests[i].send();
}

const myForm = document.querySelector('form');
const characterList = document.querySelector('#characterlist');
const filmList = document.querySelector('#filmlist');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = myForm.querySelector('input[type="text"]').value;
  console.log(value);
  console.log(characters[2].name);
  for (let i = 0; i < characters.length -1; i ++) {
    if (characters[i].name.indexOf(value) !== -1) { // erre a sorja ki az undefined hibát
      let character = document.createElement('p');
      character.innerText = characters[i].name;
      characterList.appendChild(character);
    }
  }
});
