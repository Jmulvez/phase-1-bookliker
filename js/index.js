document.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM Successfully loaded")
});

function renderOneBook(book) {
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = '
        <img src="{$book.imageURL}">
        <div class="list-panel">
            <h2>${book.name}</h2>
            <p>${book.description}</p>
            </div>
            <div class="button">
                <button>"Like Button"</button>
            </div>
        '
        document.querySelector('list').appendChild(card)
}

function getBooks( {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(data => console.log(data))
    console.log(getBooks)
}

function initialize() {
    getBooks()
    console.log(getBooks)
}

