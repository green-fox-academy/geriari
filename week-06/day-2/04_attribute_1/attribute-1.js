//   Write the image's url to the console.
const imgUrl = document.querySelector('img');
console.log(imgUrl.getAttribute('src'));

//   Replace the image with a picture of your favorite animal.
const newImgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMBICRLlYUGHepuESLs0GPnZ6yX51du5zpsAfCdDkfV3CJrnqxw';
imgUrl.setAttribute('src', newImgUrl);

//   Make the link point to the Green Fox Academy website.
const link = document.querySelector('a');
const newLink = 'https://www.greenfoxacademy.com';
link.setAttribute('href', newLink);

//   Disable the second button.
const secondButton = document.querySelector('.this-one');
secondButton.setAttribute('disabled', '');

//   Replace its text with 'Don't click me!'.
console.log(secondButton);
secondButton.textContent = 'Don\'t click me!';
