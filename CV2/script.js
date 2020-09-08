const menuBar = document.querySelector(".header");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  menuBar.classList.toggle("nav-change");
  burger.classList.toggle("toggle");
});
