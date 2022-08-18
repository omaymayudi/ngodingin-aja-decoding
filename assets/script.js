const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-nav");

// Jika menu bar di click
menuBar.addEventListener('click', function(){
    menuNav.classList.toggle("menu-active");
})