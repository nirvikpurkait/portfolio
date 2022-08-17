
// __________________________________________________________________

document.getElementsByClassName('theme-button')[0].addEventListener('click', changeTheme)

function changeTheme() {
  document.body.classList.toggle('light');
}

// ______________________________________________________________________

const dropdownButton = document.querySelectorAll('.dropdown-button')
const dropdownContent = document.querySelectorAll('.dropdown-content')

const dropdownContentHeight_1 = dropdownContent[0].clientHeight
const dropdownContentHeight_2 = dropdownContent[1].clientHeight
const dropdownContentHeight_3 = dropdownContent[2].clientHeight

dropdownButton[0].addEventListener('click', function () {
  // remove other dropdown
  dropdownContent[1].classList.remove('dropdown-open')
  dropdownContent[2].classList.remove('dropdown-open')
  //toggle for the selected dropdown
  dropdownContent[0].classList.toggle('dropdown-open')
})

dropdownButton[1].addEventListener('click', function () {
  // remove other dropdown
  dropdownContent[0].classList.remove('dropdown-open')
  dropdownContent[2].classList.remove('dropdown-open')
  //toggle for the selected dropdown
  dropdownContent[1].classList.toggle('dropdown-open')
})

dropdownButton[2].addEventListener('click', function () {
  // remove other dropdown
  dropdownContent[0].classList.remove('dropdown-open')
  dropdownContent[1].classList.remove('dropdown-open')
  //toggle for the selected dropdown
  dropdownContent[2].classList.toggle('dropdown-open')
})



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

