"use strict";

var confirm_pass = document.querySelector('.re-type');
console.log(confirm_pass);
var pass = document.querySelector('.password');
console.log(pass);
confirm_pass.addEventListener('input', function (e) {
  e.preventDefault();

  if (pass.value === confirm_pass.value) {
    pass.style.borderColor = 'green';
    confirm_pass.style.borderColor = 'green';
  } else {
    pass.style.borderColor = 'red';
    confirm_pass.style.borderColor = 'red';
  }
});
var slider = document.querySelector('.gallery');
var isDown = false;
var startX;
var scrollLeft;
slider.addEventListener('mousedown', function (e) {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', function (_) {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', function (_) {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', function (e) {
  if (!isDown) return;
  e.preventDefault();
  var x = e.pageX - slider.offsetLeft;
  var SCROLL_SPEED = 3;
  var walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});