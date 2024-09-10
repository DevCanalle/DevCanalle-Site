const barranav = document.querySelector('.barranav');
const mobilebarranav = document.querySelector('.barranav_mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobilebarranav.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return barranav.classList.add('active');
  return barranav.classList.remove('active');
});
