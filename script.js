const books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "images/fairy-tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "images/the-divine-comedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "images/the-epic-of-gilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "imageLink": "images/the-book-of-job.jpg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "title": "The Book Of Job",
    "year": -600
  }];

let tarjetas = `<section>`

for (let i = 0; i < books.length; i++) {
  tarjetas += `<div>
                      <img src="./images/${books[i].imageLink}" alt="Fotacas">
                      <h2 class="title">${books[i].title}</h2>
                      <p class="author">Author: ${books[i].author}</p>
                      <p class="year">Year: ${books[i].year}</p>
                      <p class="country">Country: ${books[i].country}</p>
                      <p class="pages">Number of pages: ${books[i].pages}</p>
                      <p class="language">Lenguage: ${books[i].language}</p>
                      <a href="${books[i].link}">${books[i].link}</a>
                  </div>`
}

tarjetas += `</section>`;
document.getElementById('listaLibros').innerHTML = tarjetas;





// CREANDO UN DIV
const parentDiv = document.createElement("div");

// CREANDO UN IMG
const childImg = document.createElement("img");
childImg.setAttribute("src", `./images/${books[i].imageLink}`);
childImg.setAttribute("alt", `Fotacas`);

// CREANDO UN TITLE
const childTitle = document.createElement("h2");
childTitle.setAttribute("class", "title");
let innerTitle = document.createTextNode(`${books[i].title}`);
document.getElementsByClassName("title").innerHTML = innerTitle;

parentDiv.appendChild(childTitle);

document.getElementById("lista2Libros").appendChild(parentDiv);
