// Add an item that says 'The Green Fox' to the asteroid list.
const asteroidList = document.querySelector('ul.asteroids');
const newAsteroid = document.createElement('li');
newAsteroid.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid);

// Add an item that says 'The Lamplighter' to the asteroid list.
const newAsteroid2 = document.createElement('li');
newAsteroid2.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid2);

// Add a heading saying 'I can add elements to the DOM!' to the .container.
const container = document.querySelector('.container');
const newHeading = document.createElement('h1');
newHeading.textContent = 'I can add elements to the DOM!';
container.appendChild(newHeading);

// Add an image, any image, to the container.
const container2 = document.querySelector('.container');
const newImage = document.createElement('img');
const newImgUrl = 'http://cdn1.haon.hu/2011/08/geronazzo-bajban-van-446-12507-d0002A2848fee8923405a.jpg';
newImage.setAttribute('src', newImgUrl);
container2.appendChild(newImage);
