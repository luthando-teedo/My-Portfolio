const menuIcon = document.querySelector('.menu-icon-container');
const projectBtns = document.querySelectorAll('category-btn');

var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows : true,
	},
	pagination: {
		el: '.swiper-pagination',
	},
});

// var logo = document.getItemById("brand").addEventListener('click', function(){
// 	console.log(123);
// });

// function change(){
// 	document.getItemById("work-img").src="../img/pic1.jpg";
// };

menuIcon.addEventListener('click', toggleMenu);
window.addEventListener('click', toggleProjects);

function toggleMenu() {
	let sideNav = document.querySelector('.menu-container');

	menuIcon.classList.toggle('active');
	sideNav.classList.toggle('active');
}

function toggleProjects(e) {
	let projectImage = document.querySelector('.project-image');
	let imageSoures = [
		'./img/ezamabhinqa.jpg',
		'./img/Banner.jpg',
		'./img/signage.png',
		'./img/reddrum.jpg',
		'./img/posta.jpg',
		'./img/pizza.jpg',
		'./img/ezamabhinqa.jpg'
	]

	imageSoures.forEach((src, i) => {
		if(e.target.id == i) {
			projectImage.src = src;
		}
	})
}
