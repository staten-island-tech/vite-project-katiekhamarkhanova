document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
  if (document.nav.classList.contains("light-navbar")) {
    document.nav.classList.add("dark-navbar");
    document.nav.classList.remove("light-navbar");
  } else {
    document.nav.classList.add("light-navbar");
    document.nav.classList.remove("dark-navbar");
  }
});
document.querySelector(".btn").addEventListener("click", function () {
  if (document.nav.classList.contains("light-navbar")) {
    document.nav.classList.add("dark-navbar");
    document.nav.classList.remove("light-navbar");
  } else {
    document.nav.classList.add("light-navbar");
    document.nav.classList.remove("dark-navbar");
  }
});
