const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

// Remove the king from the list.
const ul = document.querySelector('ul');
const li = document.querySelector('li');
ul.removeChild(li);   

// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
// Each list item should have its category as a class and its content as text content. -->
const ul2 = document.querySelector('ul');
planetData.forEach(e => {
  if (e.asteroid) {
    var node = document.createElement("li");
    node.textContent = e.content;
    ul2.appendChild(node);
    node.classList.add(e.category);
  } 
});
