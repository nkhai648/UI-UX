const slider = document.querySelector('.slider'),
    slides = document.querySelectorAll('.slide'),
    nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    slideIcons = document.querySelectorAll('.slide-icon'),
    numberOfSlide = slides.length;
var currentSlide = 0


function removeActive(){
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((icon) => {
        icon.classList.remove('active')
    })
}
// Next BTN
nextBtn.addEventListener('click', function() {
    removeActive();
    currentSlide++;
    if(currentSlide > (numberOfSlide - 1)) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add('active')
    slideIcons[currentSlide].classList.add('active')
})

// Prev BTN 
prevBtn.addEventListener('click', function() {
    removeActive();
    
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = numberOfSlide - 1;
    }

    slides[currentSlide].classList.add('active')
    slideIcons[currentSlide].classList.add('active')
})

// Navigation btn 
for(let i = 0; i < slideIcons.length; i++) {
    slideIcons[i].addEventListener('click', function() {
        removeActive();
        slides[i].classList.add('active')
        slideIcons[i].classList.add('active')
    })
}

// Autoplay
function autoPlay() {
    playSlide = setInterval(function() {
        removeActive();
        
        currentSlide++;
        if(currentSlide > (numberOfSlide - 1)) {
            currentSlide = 0;
        }
    
        slides[currentSlide].classList.add('active')
        slideIcons[currentSlide].classList.add('active')
    }, 2000)
}
autoPlay();
// Stop slide when mouseover 
slider.addEventListener('mouseover', function(){
    clearInterval(playSlide);
})

// Resume slide when mouseout
slider.addEventListener('mouseout', function(){
    autoPlay();
})