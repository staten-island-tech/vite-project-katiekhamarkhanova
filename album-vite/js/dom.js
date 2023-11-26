import { albums } from "./albums.js";

const DOMSelectors = {
  app: document.querySelector("#app"),
  card: document.querySelectorAll(".card"),
  h2s: document.querySelectorAll("h2"),
  h3s: document.querySelectorAll("h3"),
  imgHTML: document.querySelectorAll("img"),
};

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
addCard();
