// import '~/app/vendor/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu');

	burger.addEventListener('click', function () {
		menu.classList.toggle('show');
	});
});
