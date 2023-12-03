let currentMode = "light";

 document.querySelector(".btn").addEventListener("click", function () {
    if (document.body.classList.contains("light-mode")) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
    if (document.querySelector("section").classList.contains("light-navbar")) {
      document.querySelector("section").classList.add("dark-navbar");
      document.querySelector("section").classList.remove("light-navbar");
    } else {
      document.querySelector("section").classList.add("light-navbar");
      document.querySelector("section").classList.remove("dark-navbar");
    }
    document.querySelectorAll("#card").forEach(function (card) {
      if (card.classList.contains("light-card")) {
        card.classList.add("dark-card");
        card.classList.remove("light-card");
      } else {
        card.classList.add("light-card");
        card.classList.remove("dark-card");
      }
    });
  });