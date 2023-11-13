document.querySelector(".btn").addEventListener("click", function () {
    if(document.body.classList.contains("light-mode")){
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
    }
})