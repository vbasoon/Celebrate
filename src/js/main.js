let menuBtn = document.querySelector("#menu-btn");
let menuNav = document.querySelector(".header__menu");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  menuNav.classList.toggle("active");
};

let img = document.querySelectorAll(".home__slider img").forEach((images) => {
  images.onclick = () => {
    let src = images.getAttribute("src");
    document.querySelector(".home__image img").src = src;
  };
});
