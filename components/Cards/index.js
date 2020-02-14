// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(obj) {
    const cardDiv = document.createElement('div');
    const headlineB = document.createElement('div');
    const authorB = document.createElement('div');
    const authorImageWrapB = document.createElement('div');
    const authorImageB = document.createElement('img');
    const authorNameB = document.createElement('span');

    cardDiv.classList.add('card');
    headlineB.classList.add('headline');
    authorB.classList.add('author');
    authorImageWrapB.classList.add('img-container');

    authorImageWrapB.append(authorImageB);
    authorB.append(authorImageWrapB);
    authorB.append(authorNameB);
    cardDiv.append(headlineB);
    cardDiv.append(authorB);

    authorNameB.textContent = 'By ' + obj.authorName;
    authorImageB.src = obj.authorPhoto;
    headlineB.textContent = obj.headline;

    return cardDiv;
}

const cardEntry = document.querySelector('.cards-container');

let testObj = {headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects", authorPhoto: "./assets/sir.jpg", authorName: "SIR RUFF'N'STUFF"};

cardEntry.append(createCard(testObj));

console.log('This is the testObj ', testObj);


// axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
//     console.log(response);

// }).catch(error => {
//     console.log('Shit has hit the card fan', error);
// })