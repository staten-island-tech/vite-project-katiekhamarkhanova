function switchModes() {
  document.querySelector(".btn").addEventListener("click", function () {
    if (document.body.classList.contains("light-mode")) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  });
  document.querySelector(".btn").addEventListener("click", function () {
    if (document.navbar.id.contains("light-navbar")) {
      document.navbar.id.add("dark-navbar");
      document.navbar.id.remove("light-navbar");
    } else {
      document.navbar.id.add("light-navbar");
      document.navbar.id.remove("dark-navbar");
    }
  });
}
switchModes();
