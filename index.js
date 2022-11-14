var menu = document.querySelector('.menu');

var shadownMenu = document.querySelector('.shadow_menu');

function openMenu() {
    shadownMenu.style.display = "block";
    menu.style.display = "flex";
}

function closeMenu() {
    shadownMenu.style.display = "none";
    menu.style.display = "none";
}