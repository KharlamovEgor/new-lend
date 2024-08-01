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

function makeObserver(element, animation) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", animation);
      }
    });
  });

  if (Array.isArray(element)) {
    element.forEach((element) => observer.observe(element));
    return;
  }

  observer.observe(element);
}

makeObserver(
  document.querySelector(".advantages__grid img"),
  "animate__fadeIn",
);
makeObserver(
  document.querySelector(".advantages__grid-obj"),
  "animate__fadeIn",
);
makeObserver(
  Array.from(document.querySelectorAll(".service__number")),
  "animate__fadeIn",
);
makeObserver(
  Array.from(document.querySelectorAll(".service img")),
  "animate__fadeIn",
);
makeObserver(
  Array.from(document.querySelectorAll(".stack__grid p")),
  "animate__fadeIn",
);
makeObserver(document.querySelector(".solution img"), "animate__fadeIn");
makeObserver(document.querySelector(".solution p"), "animate__fadeIn");
makeObserver(document.querySelector(".possibilities img"), "animate__fadeIn");
makeObserver(document.querySelector(".possibilities p"), "animate__fadeIn");
makeObserver(document.querySelector(".possibilities p"), "animate__fadeIn");
makeObserver(
  Array.from(document.querySelectorAll(".project p")),
  "animate__fadeIn",
);
makeObserver(document.querySelector(".project img"), "animate__fadeIn");
makeObserver(document.querySelector(".price h3"), "animate__fadeIn");
