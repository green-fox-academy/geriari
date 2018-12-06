// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
const paragraphs = document.querySelectorAll('p');

if (paragraphs[3].classList.contains('dolphin')) {
  paragraphs.forEach(e => {
    if (e.classList.contains('apple')) {
      e.innerText = 'pear';
    }
  });
}

// If the first p has an 'apple' class, replace cat's content with 'dog'
if (paragraphs[0].classList.contains('apple')) {
  paragraphs.forEach(e => {
    if (e.classList.contains('cat')) {
      e.innerText = 'dog';
    }
  });  
}

// Make apple red by adding a .red class
paragraphs.forEach(e => {
  if (e.classList.contains('apple')) {
    e.classList.add('red');
  }
}); 

// Make balloon less balloon-like (change its shape)
paragraphs.forEach(e => {
  if (e.classList.contains('balloon')) {
    e.classList.remove('balloon');
    e.classList.add('pear');
  }
}); 
