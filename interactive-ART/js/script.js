let menu = document.querySelector(".menu");
let menuIcon = document.querySelector(".ham-menu i");
let menuBtn = document.querySelector(".ham-menu");

menuBtn.addEventListener("click", () => {
  if (menuIcon.classList.contains("fa-bars")) {
    menu.style.left = "0";
    menuIcon.classList = "fa-solid fa-x";
  } else {
    menu.style.left = "-16rem";
    menuIcon.classList = "fa fa-bars";
  }
});
