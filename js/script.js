
// бургер

let BurgerOpen = document.querySelector('.burger');
let menu = document.querySelector('.header-content__nav');
let links = menu.querySelectorAll('.header-content__list-item');

BurgerOpen.addEventListener('click', function(){

    BurgerOpen.classList.toggle('burger-active');
    menu.classList.toggle('nav-active');
    document.body.classList.toggle('stop-scroll');
});


//отключаю бургер при нажатии на ссылки
links.forEach(function(el){
    el.addEventListener('click', function(){

        BurgerOpen.classList.remove('burger-active');
        menu.classList.remove('nav-active');
        document.body.classList.remove('stop-scroll');
    });
});

//------------------------------------------

// search

let openForm = document.querySelector('.header-content__form');
let openBtn = document.querySelector('.header-content__form-buttonclick');
let closedBtn = document.querySelector('.header-content__form-closed');

openBtn.addEventListener('click', function(){
    openForm.classList.add('form-active');
});

closedBtn.addEventListener('click', function(){
    openForm.classList.remove('form-active');
});

//------------------------------------------


// tabs

let tabsBtn = document.querySelectorAll('.step__btn');
let tabsItem = document.querySelectorAll('.work-slyder');

tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn){ btn.classList.remove('step__btn-active')});
        e.currentTarget.classList.add('step__btn-active');

        tabsItem.forEach(function (element) { element.classList.remove('work-slyder-active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('work-slyder-active');
    });
});

//------------------------------------------

// slyder

new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true,

    a11y: {

        paginationBulletMessage: ' милена привет'

    }

});


new Accordion('.accordion-container');



