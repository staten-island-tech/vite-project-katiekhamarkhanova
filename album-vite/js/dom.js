import { albums } from "./albums.js";

const DOMSelectors = {
  app: document.querySelector("#app"),
  card: document.querySelectorAll(".card"),
  h2s: document.querySelectorAll("h2"),
  h3s: document.querySelectorAll("h3"),
  imgHTML: document.querySelectorAll("img"),
  popBtn: document.querySelector(".pop-button"),
  rockBtn: document.querySelector(".rock-button"),
  jazzBtn: document.querySelector(".jazz-button"),
  kpopBtn: document.querySelector(".kpop-button"),
  button: document.querySelectorAll("button"),
};
/* 
function addCard() {
  albums.forEach((albums) =>
    DOMSelectors.app.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
  <h2>${albums.title}</h2>
  <h3>${albums.artist}</h3>
  <img src="${albums.coverImage}" alt=""></img>
  <div class ="alignButton">
  <button type="button" id="btn">Add to Cart</button>
  </div>
</div>`
    )
  );
}
addCard(); */

function removeCard() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const card = event.currentTarget.parentElement; 
      card.remove(); 
    })
  });
}

function changeCards(y, x) {
    albums.map((y) => removeCard(y),
    x.forEach((x) =>
        (DOMSelectors.app.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
    <h2>${x.title}</h2>
    <h3>${x.artist}</h3>
    <img src="${x.coverImage}" alt=""></img>
    <div class ="alignButton">
    <button type="button" id="btn">Add to Cart</button>
    </div>
    </div>`
        ))
      )
    )
        }


function filterCardsKpop() {
  DOMSelectors.kpopBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const kpopCards = albums.filter((albums) => albums.genre.includes("kpop"));
    const popCards = albums.filter((albums) => albums.genre.includes("pop"));
    changeCards(popCards, kpopCards);
  });
}
filterCardsKpop();

function filterCardsPop() {
  DOMSelectors.popBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const popCards = albums.filter((albums) => albums.genre.includes("pop"));
    changeCards(albums, popCards);
  });
}
filterCardsPop();

