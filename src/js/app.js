const menuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".mobile-menu button");
const menuLinks = document.querySelector(".mobile-menu__links");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

menuLinks.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
