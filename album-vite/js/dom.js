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
  button: document.querySelectorAll("button")
};

function addCard(arr) {
  arr.forEach((album) =>
    DOMSelectors.app.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
  <h2>${album.title}</h2>
  <h3>${album.artist}</h3>
  <img src="${album.coverImage}" alt=""></img>
  <div class ="alignButton">
  <button type="button" id="btn">Add to Cart</button>
  </div>
</div>`
    )
  );
}
addCard(albums);

// filter cards

function addPopCards() {
  DOMSelectors.popBtn.addEventListener("click", function () {
    DOMSelectors.app.innerHTML = ""
    // filter cards here : const popCards = ...
    addCard(popCards)
}
function addRockCards() {
  DOMSelectors.rockBtn.addEventListener("click", function () {
    DOMSelectors.app.innerHTML = ""
    // filter cards here : const rockCards = ...
    addCard(rockCards)
}
function addJazzCards() {
  DOMSelectors.jazzBtn.addEventListener("click", function () {
    DOMSelectors.app.innerHTML = ""
    // filter cards here : const jazzCards = ...
    addCard(jazzCards)
}
function addKpopCards() {
  DOMSelectors.kpopBtn.addEventListener("click", function () {
    DOMSelectors.app.innerHTML = ""
    // filter cards here : const kpopCards = ...
    addCard(kpopCards)
}
