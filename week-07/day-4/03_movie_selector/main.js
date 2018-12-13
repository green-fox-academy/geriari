'use strict'

/*
Moon - sci-fi
2001 Space odessy - sci-fu
Contact - sci-fi
Darkest hour - drama
There will be blood - drama
American beauty - drama
Airplane! - comedy
Deadpool - comedy
Wayne's World - comedy
*/

const genre = document.querySelector('#genre');
const movie = document.querySelector('#movie');
const movies = document.querySelectorAll('#movie option');
const scifi = document.querySelectorAll('.scifi');
const drama = document.querySelectorAll('.drama');
const comedy = document.querySelectorAll('.comedy');
const selectedMovie = document.querySelector('.selected');

genre.addEventListener('change', () => {
  switch (genre.value) {
    case 'scifi':
      movies.forEach(e => {
        e.style.display = 'none';
      });
      scifi.forEach(e => {
        e.style.display = 'inherit';
      });
      break;
    case 'drama':
      movies.forEach(e => {
        e.style.display = 'none';
      });
      drama.forEach(e => {
        e.style.display = 'inherit';
      });
      break;
    case 'comedy':
      movies.forEach(e => {
        e.style.display = 'none';
      });
      comedy.forEach(e => {
        e.style.display = 'inherit';
      });
      break;
  }
});

movie.addEventListener('change', () => {
  selectedMovie.innerText = movie.value;
});
