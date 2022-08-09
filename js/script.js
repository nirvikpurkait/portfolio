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


const diplomaDetailsHeights = document.querySelector('.diploma-details').clientHeight;
const diplomaSectionHeight = document.querySelector('.diploma');
const higherSecondaryDetailsHeights = document.querySelector('.higher-secondary-details').clientHeight;
const higherSecondarySectionHeight = document.querySelector('.higher-secondary');
const secondaryDetailsHeights = document.querySelector('.secondary-details').clientHeight;
const secondarySectionHeight = document.querySelector('.secondary');


diplomaSectionHeight.style.height = `${diplomaDetailsHeights}px`
higherSecondarySectionHeight.style.height = `${higherSecondaryDetailsHeights}px`
secondarySectionHeight.style.height = `${secondaryDetailsHeights}px`

const educationDetailsHeight = document.getElementById('education-details').clientHeight;
const mainStream = document.getElementById('main-stream');

mainStream.style.height = `${educationDetailsHeight}px`
console.log(educationDetailsHeight);

// ____________________________________________________________________


const hamburgerButton = document.querySelector('.hamburger');
const navItem = document.querySelector('.nav-item');
const themeButton = document.querySelector('.theme-button');

hamburgerButton.addEventListener('click', openNavbar)

function openNavbar() {
  navItem.classList.toggle('open-navbar');
  themeButton.classList.toggle('open-navbar');
  hamburgerButton.classList.toggle('toggled-button')
}


// ____________________________________________________________________

