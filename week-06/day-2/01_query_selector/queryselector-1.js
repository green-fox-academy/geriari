      // 1. store the element that says 'The King' in the 'king' variable.
      // console.log it.
      // 2. store 'The Businessman' and 'The Lamplighter'
      // in the 'businessLamp' variable.
      // console.log each of them.
      // 3. store 'The King' and 'The Conceited Man'
      // in the 'conceitedKing' variable.
      // alert them one by one.
      // 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
      // in the 'noBusiness' variable.
      // console.log each of them.

const king = document.querySelector('#b325');
console.log(king.innerText);

const businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(e => {
  console.log(e.innerText);
});

const conceitedKing = document.querySelectorAll('.container div');
conceitedKing.forEach(e => {
  alert(e.innerHTML);
});

const noBusiness = document.querySelectorAll('div');
noBusiness.forEach(e => {
  console.log(e.innerText);
});
