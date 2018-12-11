'use strict'

let httpRequest = new XMLHttpRequest();
const myAPIKey = '035faba8cbec442ea31082b8a26132fb';
var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon&landing&apollo&11?begin_date=19690701?end_date=19690831&api_key=${myAPIKey}&limit=10`;
httpRequest.open('GET', url, true);
httpRequest.send();

httpRequest.onreadystatechange = () => {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      const response = JSON.parse(httpRequest.responseText).response.docs;
      const mybody = document.querySelector('body');
      for (let i = 0; i < response.length; i ++) {
        let actualArticle = document.createElement('ul');
        let actualHeadline = document.createElement('li');
        let actualSnippet = document.createElement('li');
        let actualPubDate = document.createElement('li');
        actualSnippet.innerText = response[i].snippet;
        if (typeof response[i].pub_date !== "undefined") {
          actualPubDate.innerText = response[i].pub_date.slice(0, 10);
        } else {
          actualPubDate.innerText = 'Unknown publication date';
        }
        let link = document.createElement('a');
        link.setAttribute('href', response[i].web_url);
        link.innerText = response[i].headline.main;
        actualHeadline.appendChild(link);
        actualArticle.appendChild(actualHeadline);
        actualArticle.appendChild(actualSnippet);
        actualArticle.appendChild(actualPubDate);
        mybody.appendChild(actualArticle);
      }    
    }
  }
}
