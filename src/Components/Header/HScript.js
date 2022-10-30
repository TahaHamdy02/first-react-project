/*=============== SHOW MENU ===============*/
const navToggle = document.querySelector('#nav__toggle'),
    navClose = document.querySelector('#nav__close');
/*==== MENU SHOW ====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        document.querySelector('#nav__list').classList.add('show-menu')
    })
}
/*==== MENU HIDDEN ====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        document.querySelector('#nav__list').classList.remove('show-menu')
    })
};
/*=============== SHOW DROP MENU ===============*/
const Other = document.getElementById('other'),
    DropContainer = document.getElementById('drop__container'),
    left = document.getElementById('down-list');
/*==== MENU SHOW ====*/
const hide = document.querySelector('.hide-drop');
const show = document.querySelector('.show-drop');
if (hide) {
    Other.addEventListener('click', () => {
        DropContainer.classList.remove('hide-drop')
        DropContainer.classList.toggle('show-drop')
        left.classList.toggle('i-downY')
    });
};

/*==== MENU HIDDEN ====*/
if (show) {
    Other.addEventListener('click', () => {
        DropContainer.classList.remove('show-drop')
        DropContainer.classList.toggle('hide-drop')
        left.classList.toggle('i-downX')
    });
};

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link'),
    linkAction = () => {
        const navList = document.querySelector('.nav__list')
        navList.classList.remove('show-menu')
    }
navLink.forEach(l => l.addEventListener('click', linkAction));