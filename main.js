const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const cartAsideMenu = document.querySelector('.product-detail');

navEmail.addEventListener('click', () => toggleElement(desktopMenu, cartAsideMenu));
mobileMenuIcon.addEventListener('click', () => toggleElement(mobileMenu, cartAsideMenu));
cartMenuIcon.addEventListener('click', () => toggleElement(cartAsideMenu, mobileMenu));

function toggleElement(element, isOpen) {
    element.classList.toggle('inactive');
    isOpen.classList.add('inactive');
}