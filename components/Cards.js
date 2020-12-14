import axios from 'axios'


// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.



const lambdaCard = document.querySelector("div.cards-container");


axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
        console.log(res.data.articles)
        const Array = Object.values(res.data.articles)
        console.log(Object.values(res.data.articles))
        Array.forEach(articles => {
            articles.forEach(article => {
                const articlesCard = articleMaker(article)
                lambdaCard.appendChild(articlesCard)
            })
        })
        .catch((err) => {
            console.log(err);
        });
    })

    function articleMaker(data){
        const div = document.createElement('div');
        div.classList.add('card');

        const headline = document.createElement('div');
        headline.classList.add('headline');
        headline.innerHTML = data.headline;
        div.append(headline);

        const author = document.createElement('div');
        author.classList.add('author');
        div.append(author);

        const imageCon = document.createElement('div');
        imageCon.classList.add('img-container');
        author.append(imageCon);

        const imgurl = document.createElement('img');
        imgurl.src = data.authorPhoto;
        imageCon.append(imgurl);

        const span = document.createElement('span');
        span.innerHTML = data.authorName;
        author.append(span);


        div.addEventListener('click', () => {
            console.log(headLine);
        })

        return div;


    } 