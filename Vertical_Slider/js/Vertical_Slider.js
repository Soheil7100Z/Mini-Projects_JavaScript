let slideLeft = document.querySelector('.leftSide')
let slideRight = document.querySelector('.rightSide')
let slideNumbers = slideRight.querySelectorAll('div').length
let containerSlide = document.querySelector('#container')
const SlideHeight = containerSlide.clientHeight
let SlideMovingIndex = 0

slideLeft.style.top = `-${(slideNumbers-1)*100}vh`
let LeadingUp = () => {
    SlideMovingIndex++
    if (SlideMovingIndex > slideNumbers - 1) {
        SlideMovingIndex = 0 //  move to the first slide //
    }
    slideRight.style.transform = `translateY(-${SlideMovingIndex * SlideHeight}px)`
    slideLeft.style.transform = `translateY(${SlideMovingIndex * SlideHeight}px)`
}
let LeadingDown = () => {
    SlideMovingIndex--
    if (SlideMovingIndex < 0) {
        SlideMovingIndex = slideNumbers - 1 //  move to the last slide //
    }
    slideRight.style.transform = `translateY(-${SlideMovingIndex * SlideHeight}px)`
    slideLeft.style.transform = `translateY(${SlideMovingIndex * SlideHeight}px)`
}
