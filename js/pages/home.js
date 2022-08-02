// header start
const navHoverDOM = document.querySelectorAll('[data-hover-button]')
const dropDownDOM = document.querySelectorAll('[data-dropdown-1]')

navHoverDOM[0].addEventListener("mouseover", function () {
    dropDownDOM[0].classList.add("visible-flex")
})
navHoverDOM[0].addEventListener("mouseleave", function () {
    dropDownDOM[0].classList.remove("visible-flex")
})
navHoverDOM[1].addEventListener("mouseover", function () {
    dropDownDOM[1].classList.add("visible-flex")
})
navHoverDOM[1].addEventListener("mouseleave", function () {
    dropDownDOM[1].classList.remove("visible-flex")
})


// header end

// hero start
// hero end

// Express Functionality start
// Express Functionality end

// Easily communicate start
// Easily communicate end

// Make Your Device start

// Make Your Device end

// How sApp works start
// How sApp works end

// Simple & Beautiful start
// Simple & Beautiful start top
// renkames tada kai norim judinti X asyje
const slidesPackDOM = document.querySelector('.carousel-container .slides');

// renkames tada kai reikia rinktis specifine skaidre
const slideEachDOM = document.querySelectorAll('.carousel-container .slide');

// mygtukai Nodelist
const buttonsDOM = document.querySelectorAll('.row .buttons button');

// Root elementai
const rootHTML = document.querySelector(':root');
const rootData = getComputedStyle(rootHTML);
let gapValue = rootData.getPropertyValue('--gap-carousel').slice(0, -2) * 1;
let slideWidthValue = rootData.getPropertyValue('--slideWidth').slice(0, -2) * 1;

// Klonavimas
for (let i = 0; i < slideEachDOM.length; i++) {
    let cloneRight = slideEachDOM[i].cloneNode(true);
    slidesPackDOM.append(cloneRight);
};

for (let i = slideEachDOM.length - 1; i > -1; i--) {
    let cloneLeft = slideEachDOM[i].cloneNode(true);
    slidesPackDOM.prepend(cloneLeft);
};

// pradine reiksme
let index = 0;
let indexWidth = slideWidthValue + gapValue;

// pradinis plotis
let defaultPosition = indexWidth * slideEachDOM.length;
slidesPackDOM.style.transform = `translateX(-${defaultPosition}px)`;

let slideWidth = slideEachDOM[index].offsetWidth + 10;

setInterval(() =>{
    if (index < slideEachDOM.length + 1) {
        buttonsDOM.forEach(button => button.classList.remove('purple-clicked'));
        slidesPackDOM.style.transition = 'all 2s';
        ++index
        if (index !== buttonsDOM.length) {
            buttonsDOM[index].classList.add('purple-clicked');
        } else{
            buttonsDOM[index - buttonsDOM.length].classList.add('purple-clicked');
        }
    slidesPackDOM.style.transform = `translateX(-${defaultPosition + indexWidth * index}px)`
    if (index >= slideEachDOM.length) {
        setTimeout(() => {
            index = 0;
            buttonsDOM.forEach(button => button.classList.remove('purple-clicked'));
            buttonsDOM[index].classList.add('purple-clicked');
            slidesPackDOM.style.transition = 'none';
            slidesPackDOM.style.transform = `translateX(-${defaultPosition + indexWidth * index}px)`
    }, 2000)
    }
}
}, 4000)

for (let i = 0; i < slideEachDOM.length; i++) {

    buttonsDOM[i].addEventListener('click', () => {
        buttonsDOM.forEach(button => button.classList.remove('purple-clicked'));
        slidesPackDOM.style.transition = 'all 2s';
        index = i;
        buttonsDOM[index].classList.add('purple-clicked');
        slidesPackDOM.style.transform = `translateX(-${defaultPosition + indexWidth * index}px)`
    });
    
}
// Simple & Beautiful end top

// Simple & Beautiful end

// Unlock Full Power start
// Unlock Full Power end

// Frequently Asked Questions start
// Frequently Asked Questions end

// Our Team Experts start
// Our Team Experts end

// sApp is available start
// sApp is available end

// Subscribe to get updates start
// Subscribe to get updates end

// Stay Tuned start
// Stay Tuned end

// Footer start
// Footer end