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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
   .then((response) => {
     console.log(response);
     const cardsCont = document.querySelector(".cards-container");
     const arrayValues = Object.values(response.data.articles);
     arrayValues.forEach(element => {
       element.forEach(article => {
         cardsCont.appendChild(createCard(article));
         console.log("CreatedCard");
       })
     })
   })
   .catch((error) => {

   })

 function createCard(object){

   const card = document.createElement("div")
   const headline = document.createElement("div")
   const authorContainer = document.createElement("div")
   const imgContainer = document.createElement("div")
   const img = document.createElement("img")
   const authorName = document.createElement("span")

   card.appendChild(headline)
   card.appendChild(authorContainer)
   authorContainer.appendChild(imgContainer)
   imgContainer.appendChild(img)
   authorContainer.appendChild(authorName)

   card.classList.add("card")
   headline.classList.add("headline")
   authorContainer.classList.add("author")
   imgContainer.classList.add("img-container")
   
   headline.textContent = object.headline
   img.src = object.authorPhoto
   authorName.textContent = `By ${object.authorName}`
   

   return card;

 } 

