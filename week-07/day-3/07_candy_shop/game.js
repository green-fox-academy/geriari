// Gather 10.000 candies!
// Clicking the ‘Create candies’ button gives you 1 candy.
// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// 10 lollipops generate 1 candy per second.
// Use the 🍭 emoji to display the lollipops you have
// Display the candy producton rate in the Candies / Second row
// If you press the "make candy rain" button, the candy generation should speed up 10x

const createCandies = document.querySelector('.create-candies');
const buyLollypops = document.querySelector('.buy-lollypops');
const makeCandyRain = document.querySelector('.candy-machine');

const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');

let numOfCandies = 90;
let numOfLollypops = 9;
let oneLollypop = '🍭';
let candyRainRate = 1;

const addCandy = () => {
  numOfCandies ++;
  candies.innerText = numOfCandies;
}

const addLollypop = () => {
  if (numOfCandies >= 100) {
    numOfCandies -= 100;
    numOfLollypops ++;
    lollypops.innerText += oneLollypop;
    candies.innerText = numOfCandies;
  }
}

createCandies.addEventListener('click', addCandy);
buyLollypops.addEventListener('click', addLollypop);
makeCandyRain.addEventListener('click', () => {
  candyRainRate *= 10;
});

const candyGenerator = () => {
  let candyProductionRate = Math.floor(numOfLollypops / 10) * candyRainRate;
  numOfCandies += candyProductionRate;
  candies.innerText = numOfCandies;
  speed.innerText = candyProductionRate;
}

setInterval(candyGenerator, 1000);
