// ======NAVBAR DESIGN=========

const menu = document.querySelector('.hamburger')
const menuList = document.querySelector('header ul')
menu.addEventListener('click', ()=>{
    menuList.classList.toggle('showmenu')
    })


// =============FADEUP DESIGN============

const elements = document.querySelectorAll('.fade-up');

function checkFade() {
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 50) {
            element.classList.add('fade-up-show');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);