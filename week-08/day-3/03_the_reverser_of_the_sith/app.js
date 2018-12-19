const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());

app.post('/sith', (req, res) => {
  if (isEmpty(req.body) || !('text' in req.body) || req.body.text === '') {
    res.json({
      "error": "Feed me some text you have to, padawan young you are. Hmmm."
    });
  } else {
    let text = req.body.text;
    res.json({
      "sith_text": covertToSith(text)
    });
  } 
});

const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    } else {
      return true;
   }
  }
}

/* TODO
1. split for sentences (at .)
2. replace adjacent word 
3. Replace capital letters
4. Join text with random extra hmmmms.
*/

const convertToSith = (text) => {
  let sithText = [];
  sithText = text.split('.');
  for (let sentence = 0; sentence < sithText.length; sentence ++) {
    let wordsOfSentence = sithText[sentence].split(' ');
    for (let word = 0; word < wordsOfSentence.length; word += 2) {
      [wordsOfSentence[word], wordsOfSentence[word + 1]] = [wordsOfSentence[word + 1], wordsOfSentence[word]];
    }
    sithText[sentence].join(' '); 
  } 
  
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
