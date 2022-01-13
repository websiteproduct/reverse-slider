const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const slider = document.querySelector('.slider');
const slidesCount = slider.querySelectorAll('div').length;

let activeSlideIndex = 0;

slider.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
})

downBtn.addEventListener('click', () => {
    changeSlide('down');
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex--;

        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    } else if (direction === 'down') {
        activeSlideIndex++;

        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    }

    const height = container.clientHeight;

    slider.style.transform = `translateY(${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(-${activeSlideIndex * height}px)`;
}