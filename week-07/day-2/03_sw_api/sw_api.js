'use strict'

const xhr = new XMLHttpRequest();
const url = 'https://swapi.co/api/';
const myForm = document.querySelector('form');
const characterList = document.querySelector('#characterlist');
const filmList = document.querySelector('#filmlist');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearCharacterList();
  clearFilmList();
  const searchedCharacter = myForm.querySelector('input[type="text"]').value;
  xhr.open('GET', `${url}people/?search=${searchedCharacter}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      pushCharactersToDom(response);
    }
  }
  xhr.send();
});

characterList.addEventListener('click', (event) => {
  event.preventDefault();
  const selectedCharacter = event.target.innerText;
  console.log(selectedCharacter);
  xhr.open('GET', `${url}people/?search=${selectedCharacter}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      pushFilmsToDom(response);
    }
  }
  xhr.send();
})

const clearCharacterList = () => {
  characterList.innerHTML = '';
}

const clearFilmList = () => {
  filmList.innerHTML = '';
}

const pushCharactersToDom = (response) => {
  response.results.forEach(character => {
    let characterName = character.name;
    let characterElement = document.createElement('p');
    characterElement.innerText = characterName;
    characterList.appendChild(characterElement);
  });
}

const pushFilmsToDom = (response) => {
  response.results[0].films.forEach(film => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', film);
    xhr.onload = () => {
      if (xhr.status === 200) {
        let filmResponse = JSON.parse(xhr.responseText);
        let filmTitle = filmResponse.title;
        let filmElement = document.createElement('p');
        filmElement.innerText = filmTitle;
        filmList.appendChild(filmElement);
      }
    }
    xhr.send();
  });
}
