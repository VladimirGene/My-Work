
(function () {

	// Табуляция

	const sliderConteiner = document.querySelector('.slider-container__tab');

	sliderConteiner.addEventListener('click', toggleTab);

	function toggleTab(e) {

		const sliderControl = e.target.closest('.slider-container__tab-link');

		if (!sliderControl) return

		e.preventDefault()

		if (sliderControl.classList.contains('tab--active')) return

		const sliderContentID = sliderControl.getAttribute('href');

		document.querySelector('.slider--show').classList.remove('slider--show')
		document.querySelector(sliderContentID).classList.add('slider--show')

		document.querySelector('.tab--active').classList.remove('tab--active')
		sliderControl.classList.add('tab--active')
	}

	// Бургер
	
	const burger = document.querySelector('.burger ')

	burger.addEventListener('click', toggleBurger);

	function toggleBurger(e) {

		burger.classList.toggle('burger--open')
	}
	
	burger.addEventListener('click', toggleMenu);

	const openMenu = document.querySelector('.body');
	
	function toggleMenu(e) {

		if ( openMenu.classList.contains('body--burger-show')) {
			openMenu.classList.remove('body--burger-show')
		} else {
			openMenu.classList.add('body--burger-show')
		}
	}
	


})()