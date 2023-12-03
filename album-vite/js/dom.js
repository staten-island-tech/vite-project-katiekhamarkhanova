import { albums } from "./albums.js";

const DOMSelectors = {
  app: document.querySelector("#app"),
  card: document.querySelectorAll("#card"),
  h2s: document.querySelectorAll("h2"),
  h3s: document.querySelectorAll("h3"),
  imgHTML: document.querySelectorAll("img"),
  popBtn: document.querySelector(".pop-button"),
  rockBtn: document.querySelector(".rock-button"),
  jazzBtn: document.querySelector(".jazz-button"),
  kpopBtn: document.querySelector(".kpop-button"),
  button: document.querySelectorAll("button"),
};

function addCard(arr) {
  arr.forEach((album) =>
    DOMSelectors.app.insertAdjacentHTML(
      "beforeend",
      `<div class="light-card" id="card">
  <h2>${album.title}</h2>
  <h3>${album.artist}</h3>
  <img src="${album.coverImage}" alt=""></img>
  <div class ="alignButton">
  <button type="button" id="btn">Add to Cart</button>
  </div>
</div>`
    ),
  );
}
addCard(albums);

let buttons = document.querySelectorAll("#genre-button");
buttons.forEach((button) => button.addEventListener("click", function() {
  DOMSelectors.app.innerHTML = "";
  let filter = button.textContent
  const filteredCards = albums.filter((albums) => albums.genre.includes(filter))
  addCard(filteredCards)
  filteredCardModes()
}
))
function filteredCardModes() {
  const body = document.querySelector("body");
  const isDarkMode = body.classList.contains("dark-mode");
  document.querySelectorAll("#card").forEach(function (card) {
    if (isDarkMode) {
      card.classList.add("dark-card");
      card.classList.remove("light-card");
    } else {
      card.classList.add("light-card");
      card.classList.remove("dark-card");
    }
  });
}