// const hamburgerButton = document.getElementById('hamburger');
// const navBar = document.getElementById('nav-bar');

// hamburgerButton.addEventListener('click', displayNavbar);

// function displayNavbar() {
//   navBar.classList.toggle('open-nav-bar')
// }


document.getElementsByClassName('theme-button')[0].addEventListener('click', changeTheme)

function changeTheme() {
  document.body.classList.toggle('light');
}

// ______________________________________________________________________


const educationDetailsHeight = document.getElementById('education-details').clientHeight;

const mainStream = document.getElementById('main-stream');

mainStream.style.height = `${educationDetailsHeight / 16}rem`
console.log(`${educationDetailsHeight}`);


// ____________________________________________________________________


const hamburgerButton = document.querySelector('.hamburger');
const navItem = document.querySelector('.nav-item');
const themeButton = document.querySelector('.theme-button');

hamburgerButton.addEventListener('click', openNavbar)

function openNavbar() {
  navItem.classList.toggle('open-navbar');
  themeButton.classList.toggle('open-navbar');
  // hamburgerButton.classList.toggle('toggled-button')
}


// ____________________________________________________________________