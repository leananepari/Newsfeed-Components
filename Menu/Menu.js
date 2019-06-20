let open = false;

const toggleMenu = (event) => {
  // Toggle the "menu--open" class on your menu refence. 
  open ? slideOut() : slideIn();
}

const slideIn = () => {
  menu.classList.toggle('menu--open');
  open = true;
}

const slideOut = () => {
  menu.classList.toggle('menu--open');
  open = false;
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu')
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
const body = document.querySelectorAll('.articles').item(0);

menuButton.addEventListener('click', (event) => {
  toggleMenu();
})
body.addEventListener('click', (event) => {
  if (open === true) {
    slideOut();
  }
})

