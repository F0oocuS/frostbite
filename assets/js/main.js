var openBtn = document.getElementById('open');
var closeBtn = document.getElementById('close');
var fullNav = document.getElementById('full-nav');

openBtn.addEventListener('click', function() {
	fullNav.classList.add('show');
});

closeBtn.addEventListener('click', function() {
	fullNav.classList.remove('show');
});
