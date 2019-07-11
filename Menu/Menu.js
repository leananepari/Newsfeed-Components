/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  Pass the function an array as it's only argument.
  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
  Step 5: return the menu component.
  Step 6: add the menu component to the DOM.
  
*/


function buildMenu(arr) {
  //Create Menu div
  let div = document.createElement('div');
  div.className = 'menu';

  //Create <ul> element
  let ul = document.createElement('ul');
  
  //Add arr li to ul element
  arr.forEach(element => {
    let li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
  })
  
  //Append ul to div
  div.appendChild(ul);

  return document.querySelector('.articles').parentNode.insertBefore(div, document.querySelector('.articles').nextSibling)
}

buildMenu(menuItems);



// Menu Slide IN/OUT functionality
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

