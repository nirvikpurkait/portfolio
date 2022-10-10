
const projectTemplate = document.querySelector('.project-template')
const card = [...(projectTemplate.children)]
const timeBetweenEachSlide = 5000

card[0].dataset.card = 'active'
card[1].dataset.card = 'next'
card[card.length - 1].dataset.card = 'prev'

document.body.onload = makingCarousel()

window.addEventListener("resize", makingCarousel );

function makingCarousel() {
  let width = window.innerWidth

  if (width <= 1200) {
    projectTemplate.dataset.projectCardCarousel = 'active'
  }
  else {
    projectTemplate.dataset.projectCardCarousel = 'inactive'
  }

  if (width <= 1200 && width > 560) {
    projectTemplate.dataset.device = 'medium'
  }
  else if (width <= 560) {
    projectTemplate.dataset.device = 'small'
  }
  else {
    delete projectTemplate.dataset.device
  }
}

setInterval(loop, timeBetweenEachSlide)

function loop() {
  let activeCardIndex = card.indexOf(projectTemplate.querySelector('[data-card = "active"]'))
  let nextCardIndex = activeCardIndex + 1
  
  if (nextCardIndex >= card.length) {
    nextCardIndex = 0
  }

  card.forEach(ele => {
    ele.dataset.card = ''
  })

  card[nextCardIndex].dataset.card = 'active'

  let currenlyActiveCard = card.indexOf(projectTemplate.querySelector('[data-card = "active"]'))
  let prevActiveCard = currenlyActiveCard - 1
  let nextActiveCard = currenlyActiveCard + 1
  
  if (prevActiveCard < 0) prevActiveCard = card.length - 1
  if (nextActiveCard == card.length) nextActiveCard = 0

  card[prevActiveCard].dataset.card = 'prev'
  card[nextActiveCard].dataset.card = 'next'
}