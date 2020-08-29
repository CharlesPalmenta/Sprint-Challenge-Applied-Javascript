// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerDiv = document.createElement('div')
    const dateSpan = document.createElement('span')
    const title = document.createElement('h1')
    const tempSpan = document.createElement('span')
    
    headerDiv.appendChild(dateSpan)
    headerDiv.appendChild(title)
    headerDiv.appendChild(tempSpan)

    headerDiv.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')

    dateSpan.textContent = 'SMARCH 28, 2019'
    title.textContent = 'Lambda Times'
    tempSpan.textContent = '98°'

    return headerDiv
}
const header = document.querySelector('.header-container')
header.appendChild(Header())