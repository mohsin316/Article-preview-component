const imgHolder = document.querySelector('.img-holder');
const triangle = document.querySelector('.triangle');
const active = document.querySelector('.active');


imgHolder.addEventListener('click', () => {
    active.classList.toggle('hidden');
    triangle.classList.toggle('hidden');
    imgHolder.classList.toggle('new-color')

});

