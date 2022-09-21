const carousel = document.querySelector('.carousel');
const button = carousel.querySelectorAll('button');
const slide = carousel.querySelector('.slide')

button.forEach(btn => {
  btn.addEventListener('click', () => {
    let allSlide = [...slide.children]
    let activeIndex = [...slide.children].indexOf(slide.querySelector('[data-active = true]'))
    let buttonType = btn.className
    let nextIndex = activeIndex
    
    if (buttonType == 'next') {
      nextIndex = activeIndex + 1
    }
    else nextIndex = activeIndex - 1
    
    if (nextIndex < 0) nextIndex = slide.children.length - 1
    if (nextIndex >= slide.children.length) nextIndex = 0
    
    allSlide[nextIndex].dataset.active = true
    delete allSlide[activeIndex].dataset.active
    
  })
})

setInterval(autoSlide, 5000)

function autoSlide() {
  let allSlide = [...slide.children]
  let activeIndex = [...slide.children].indexOf(slide.querySelector('[data-active = true]'))
  let nextIndex = activeIndex + 1

  if (nextIndex > activeIndex) {
    if (nextIndex < 0) nextIndex = slide.children.length - 1
    if (nextIndex >= slide.children.length) nextIndex = 0

    allSlide[nextIndex].dataset.active = true
    delete allSlide[activeIndex].dataset.active
  }

}


// __________________________________________________________________

document.getElementsByClassName('theme-button')[0].addEventListener('click', changeTheme)

function changeTheme() {
  document.body.classList.toggle('light');
}

// ______________________________________________________________________

const dropdownButton = document.querySelectorAll('.dropdown-button')
const dropdownContent = document.querySelectorAll('.dropdown-content')

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

