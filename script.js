const headline = document.querySelector('h1');
const navbar = document.querySelector('.navbar');
const brand = document.querySelector('.brand');
const burger = document.querySelector('.hamburger-button');
const navLinks = document.querySelector('.nav-links');

function checkOffset() {
    if (window.scrollY >= headline.offsetTop - headline.clientHeight) {
        brand.classList.add('show');
    } else {
        brand.classList.remove('show');
    }

    if (window.scrollY >= 50) {
        navbar.classList.add('tucked');
        navLinks.classList.add('tucked');         
    } else {
        navbar.classList.remove('tucked');
        navLinks.classList.remove('tucked');         
        
    }
}

function toggleNavLinks() {
    navLinks.classList.toggle('show');
}

document.addEventListener('scroll', checkOffset);
burger.addEventListener('click', toggleNavLinks);