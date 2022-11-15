var menu = document.querySelector('.menu');

var shadownMenu = document.querySelector('.shadow_menu');

//Open Menu
function openMenu() {
    shadownMenu.style.display = "block";
    menu.style.display = "flex";
}

//Close Menu
function closeMenu() {
    shadownMenu.style.display = "none";
    menu.style.display = "none";
}