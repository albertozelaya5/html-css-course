const menuIcon = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

menuIcon.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
