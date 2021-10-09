window.addEventListener("load", function() {
    const sliderMain = document.querySelector('.slider-main');
    const sliderItems = document.querySelectorAll('.slider-item');
    const nextBtn = document.querySelector('.slider-next');
    const prevBtn = document.querySelector('.slider-prev');
    const dotItems = document.querySelectorAll('.slider-dot-item');
    const sliderLength = sliderItems.length;
    const sliderItemsWidth = sliderItems[0].offsetWidth;
    // console.log(sliderLength);
    let positionX = 0;
    let index = 0;

    nextBtn.addEventListener('click', function() {
        handlerChangeSlide(1);
    });
    prevBtn.addEventListener('click', function() {
        handlerChangeSlide(-1);
    });

    [...dotItems].forEach((item) => 
        item.addEventListener('click', function(e) {
            [...dotItems].forEach((el) => el.classList.remove('active'));
            e.target.classList.add('active');
            const slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;
            positionX = -1 * index *  sliderItemsWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
        })
    );

    function handlerChangeSlide(direction) {
        if(direction === 1) {
            if(index >= sliderLength - 1) {
                index = sliderLength - 1;
                return;
            }
            positionX -= sliderItemsWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
            console.log(index);
        }else if(direction === -1) {
            if(index <= 0) {
                index = 0;
                return;
            }
            positionX += sliderItemsWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index--;
            console.log(index);
        }
        [...dotItems].forEach((el) => el.classList.remove('active'));
        dotItems[index].classList.add('active')
    } 
})