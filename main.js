const openBtn = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".menu-overlay");

function toggleMenu() {
  navMenu.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
}

openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
