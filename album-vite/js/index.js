function switchModes() {
  document.querySelector(".btn").addEventListener("click", function () {
    if (document.body.classList.contains("light-mode")) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
    document.querySelector(".btn").addEventListener("click", function () {
      if (document.div.classList.contains("light-navbar")) {
        document.div.classList.add("dark-navbar");
        document.div.classList.remove("light-navbar");
      } else {
        document.div.classList.add("light-navbar");
        document.div.classList.remove("dark-navbar");
      }
    });
  });
}
switchModes();
