console.log('home page...');

// header start
const navHoverDOM = document.querySelectorAll('[data-hover-button]')
const dropDownDOM = document.querySelectorAll('[data-dropdown-1]')
console.log(navHoverDOM);

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