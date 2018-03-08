'use strict';

// Vanilla JavaScript
var menuToggle = document.querySelector('.menu-toggle'),
    menu = document.querySelector('.primary-menu');

menuToggle.addEventListener('click', function () {
  if (this.classList.contains('menu-toggle--white')) {
    this.classList.remove('menu-toggle--white');
    this.classList.add('is-open');
    menu.classList.add('is-active');
  } else {
    this.classList.add('menu-toggle--white');
    this.classList.remove('is-open');
    menu.classList.remove('is-active');
  }
});