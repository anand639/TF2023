const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items-b");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})