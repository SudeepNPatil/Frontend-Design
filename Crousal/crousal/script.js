
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel img');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentIndex = 0;

function updateSlide() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
});
