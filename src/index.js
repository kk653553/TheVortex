var openNavBtn = document.getElementById('openNav');
var closeNavBtn = document.getElementById('closeNav');
var navElement = document.getElementById('nav-main');

openNavBtn.addEventListener('click', function() {
  navElement.classList.add('nav-open');
});

closeNavBtn.addEventListener('click', function() {
  navElement.classList.remove('nav-open');
});
