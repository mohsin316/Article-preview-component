const imgHolder = document.querySelector('.img-holder');
const triangle = document.querySelector('.triangle');
const active = document.querySelector('.active');
const logoHolder = document.querySelector('.logo-holder')


imgHolder.addEventListener('click', () => {
    active.classList.toggle('transition');
    logoHolder.classList.toggle('transition-logos')
    triangle.classList.toggle('transition');
    imgHolder.classList.toggle('new-color')

});

