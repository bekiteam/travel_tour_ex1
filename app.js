let imgFirst = document.getElementById('dubai_text');
let imgTwo = document.getElementById('burj');
let imgThree = document.getElementById('stars');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    imgFirst.style.left = value * -2 + 'px';
});
// js scroll effect img
