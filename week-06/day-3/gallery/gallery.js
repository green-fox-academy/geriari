const images = [
  {source: 'IMG_7730.jpeg', 
  title: 'Shinjuku Gyoen National Garden - Tokyo',
  description: 'Shinjuku Gyo-en (新宿御苑) is a large park and garden in Shinjuku and Shibuya, Tokyo, Japan. It was originally a residence of the Naitō family in the Edo period. Afterwards, it became a garden under the management of the Imperial Household Agency of Japan. It is now a national park under the jurisdiction of the Ministry of the Environment.'},

  {source: 'IMG_7773.jpeg',
  title: 'E5 series Shinkansen',
  description: '10-car sets in service since March 2011 with a maximum speed of 320 km/h.'},

  {source: 'IMG_7848.jpeg',
  title: 'The Shinkyo Bridge - Nikko',
  description: "The Shinkyo Bridge (神橋, Shinkyō, 'sacred bridge') stands at the entrance to Nikko's shrines and temples, and technically belongs to Futarasan Shrine. The bridge is ranked as one of Japan's three finest bridges together with Iwakuni's Kintaikyo and Saruhashi in Yamanashi Prefecture."},

  {source: 'IMG_7898.jpeg',
  title: 'Kamakura Daibutsu (Great Buddha of Kamakura)',
  description: 'The statue commonly known as Kamakura Daibutsu (Great Buddha of Kamakura), a colossal copper image of Amida-butsu (Amitabha Buddha), is the principle image of Kotoku-in.'},

  {source: 'IMG_7918.jpeg',
  title: 'N700 series Shinkansen',
  description: 'In service since March 2011 on Mizuho and Sakura services with a maximum speed of 300 km/h.'},

  {source: 'IMG_8110.jpeg',
  title: 'Hinode Ryokan - Odawara',
  description: 'Set in Odawara, less than 1 km from Odawara Castle, Hinode Ryokan features a shared lounge and rooms with free WiFi access. This 3-star ryokan offers luggage storage space. The unit on the picture features a terrace with a garden view.'},

  {source: 'IMG_8194.jpeg',
  title: 'Kinkaku-ji - Kyoto',
  description: "Kinkaku-ji (金閣寺, literally 'Temple of the Golden Pavilion'), officially named Rokuon-ji (鹿苑寺, literally 'Deer Garden Temple'), is a Zen Buddhist temple in Kyoto, Japan. It is one of the most popular buildings in Japan, attracting a large number of visitors annually."},

  {source: 'IMG_8461.jpeg',
  title: 'Kei car',
  description: 'Kei car, K-car, or 軽自動車 (kei jidōsha, lit. "light automobile"), is the Japanese legal category for the smallest and most limited power, highway-legal motor vehicles, including passenger cars (kei cars or kei-class cars), microvans, and Kei trucks (kei-class pickup trucks).'}
];

function putImageOnTop(num) {
  const image = document.querySelector('#middle img');
  image.setAttribute('src', images[num].source);
  const title = document.querySelector('#textbox h1');
  title.textContent = images[num].title;
  const description = document.querySelector('#textbox p');
  description.textContent = images[num].description;
}

function fillUpThumbnails() {
  const thumbnails = document.querySelector('#bottom');
  images.forEach(e => {
    const image = document.createElement('img');
    image.setAttribute('src', e.source);
    thumbnails.appendChild(image);
  });
}

function borderThumbnail(num) {
  const thumbnails = document.querySelectorAll('#bottom img');
  thumbnails[num].className += 'thumbnailBorder';
}

function unBorderThumbnail(num) {
  const thumbnails = document.querySelectorAll('#bottom img');
  thumbnails[num].className = '';
}

putImageOnTop(0);
fillUpThumbnails();
borderThumbnail(0);

let counter = 0;

const leftButton = document.querySelector('#leftbutton');
leftButton.onclick = () => {
  if (counter > 0) {
    unBorderThumbnail(counter);
    counter --;
    putImageOnTop(counter);
    borderThumbnail(counter);
  } else {
    unBorderThumbnail(counter);
    counter = images.length - 1;
    putImageOnTop(counter);
    borderThumbnail(counter);
  }
}

const rightButton = document.querySelector('#rightbutton');
rightButton.onclick = () => {
  if (counter < images.length - 1) {
    unBorderThumbnail(counter);
    counter ++;
    putImageOnTop(counter);
    borderThumbnail(counter);
  } else {
    unBorderThumbnail(counter);
    counter = 0;
    putImageOnTop(counter);
    borderThumbnail(counter);
  }
}

const bottomButtons = document.querySelectorAll('#bottom img');
bottomButtons.forEach((e, i) => {
  e.onclick = () => {
    bottomButtons.forEach((e, i) => {
      unBorderThumbnail(i)
    });
    putImageOnTop(i);
    borderThumbnail(i);
    counter = i;
  }
});
