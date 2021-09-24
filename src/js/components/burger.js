const burger = document.querySelector(".burger");
const navbar = document.querySelector(".header-nav__list");

burger.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("burger--active");
  navbar.classList.toggle("header-nav__list--active");
});

const navList = document.querySelector(".header-nav__list");
navList.addEventListener("click", (e) => {
  const target = e.target;
  if (
    target.classList.contains("nav__link") &&
    navList.classList.contains("header-nav__list--active")
  ) {
    burger.classList.remove("burger--active");
    navbar.classList.remove("header-nav__list--active");
  } else {
    return;
  }
});
