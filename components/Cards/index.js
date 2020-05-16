// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
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
// Use your function to create a card for each of the articles and add the card to the DOM.
const newArticle = () => {
    const card = document.createElement('div')
    const divHeadline = document.createElement('div')
    const author = document.createElement('div')
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    const byAuthor = document.createElement('span')

    image.src = response['authorPhoto']
    divHeadline.textContent = response.headline
    byAuthor.textContent = authorName

    card.classList.add('card')
    divHeadline.classList.add('headline')
    author.classList.add('author')
    imageContainer.classList.add('img-container')

    card.appendChild(divHeadline)
    card.appendChild(author)
    author.appendChild(imageContainer)
    imageContainer.appendChild(image)
    author.appendChild(byAuthor)

    return card
}


const addArticle = document.querySelector('.cards-container')

const Testrun = newArticle()
addArticle.appendChild(Testrun)
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response)
    console.log('articles', response.data.articles)
    console.log('topics', response.data.articles.bootstrap[0])

    response.data.articles.forEach(function(articles) {
        
        const pinArticle = newArticle(articles)
        addArticle.appendChild(pinArticle)
        console.log('pin Article', pinArticle)
    })
    
})
.catch(err => {
    console.log('ERROR')
})

