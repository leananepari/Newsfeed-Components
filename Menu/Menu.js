let open = false;

const toggleMenu = (event) => {
  // Toggle the "menu--open" class on your menu refence. 
  open ? slideOut() : slideIn();
}

const slideIn = () => {
  menu.style.animation = 'slideIn 2s'
  menu.classList.toggle('menu--open');
  open = true;
  setTimeout(function() {
    menu.removeAttribute('style');
  }, 2000)
}

function slideOut() {
  menu.style.animation = 'slideOut 2s'
  console.log(menu)
  open = false;
  setTimeout(function() {
    menu.classList.toggle('menu--open');
    menu.removeAttribute('style');
  }, 2000)

}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu')
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', (event) => {
  toggleMenu();
})

