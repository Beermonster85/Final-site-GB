const confirm_pass = document.querySelector('.re-type');
console.log(confirm_pass);
const pass =document.querySelector('.password');
console.log(pass);

confirm_pass.addEventListener('input', (e) => {
    e.preventDefault();
    if (pass.value === confirm_pass.value) {
           pass.style.borderColor = 'green'
           confirm_pass.style.borderColor = 'green';
        } else {
            pass.style.borderColor = 'red'
           confirm_pass.style.borderColor = 'red';
}
}
)


const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

