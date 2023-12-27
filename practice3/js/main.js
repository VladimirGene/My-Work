

(function () {

	// Бургер меню

	document.addEventListener('click', burgerInit)

	function burgerInit(e) {


		const burger = e.target.closest('.burger')
		const navLink = e.target.closest('.nav__link')

		if (!burger && !navLink) return

		document.body.classList.toggle('body--open-menu')

		const element = document.getElementsByClassName('burger')[0];
		element.classList.toggle("active");
	}

	// модальное окно

	const modal = document.querySelector('.modal')
	const modalButton = document.querySelector('.gift-btn')

	modalButton.addEventListener('click', openModal)
	modal.addEventListener('click', closeModal)

	function openModal(e) {
		e.preventDefault()
		document.body.classList.toggle('body--open-modal')
	}
	function closeModal(e) {
		e.preventDefault()
		if (e.target.closest('.modal__cancel') || e.target.classList.contains('modal')) {
			document.body.classList.remove('body--open-modal')

		}
	}

	// Табы

	const programTab = document.querySelector('.program__tab')

	programTab.addEventListener('click', toggleTab)

	function toggleTab(e) {

		const programLink = e.target.closest('.program__link')

		if (!programLink) return
		e.preventDefault()
		if (programLink.classList.contains('link--active')) return

		const programLinkId = programLink.getAttribute('href')

		document.querySelector('.tab-content--show').classList.remove('tab-content--show')
		document.querySelector(programLinkId).classList.add('tab-content--show')

		document.querySelector('.link--active').classList.remove('link--active')
		programLink.classList.add('link--active')
	}

	// Аккардеон

	const accordionList = document.querySelectorAll('.accordion-list');

	accordionList.forEach(el => {

		el.addEventListener('click', (e) => {

			const accordionLists = e.currentTarget
			const accordionOpenedItem = accordionLists.querySelector('.accordion-list__item--opened')
			const accordionOpenedContent = accordionLists.querySelector('.accordion-list__item--opened .accordion-list__content')

			const accordionControl = e.target.closest('.accordion-list__control')
			if (!accordionControl) return
			const accordionItem = accordionControl.parentElement
			const accordionContent = accordionControl.nextElementSibling

			if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
				accordionOpenedItem.classList.remove('accordion-list__item--opened');
				accordionOpenedContent.style.maxHeight = null;
			}

			accordionItem.classList.toggle('accordion-list__item--opened')



			if (accordionItem.classList.contains('accordion-list__item--opened')) {
				accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
			} else {
				accordionContent.style.maxHeight = null
			}
		});
	});

	// слайдер фото галереи

	const swiper = new Swiper('.photo-gallery__swiper', {
		// Optional parameters
		slidesPerView: 1,
		spaceBetween: 32,
		
	
		// If we need pagination
		pagination: {
			el: '.photo-gallery__pagination',
			type: "fraction",
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.photo-gallery__next',
			prevEl: '.photo-gallery__prev',
		},

		breakpoints: {
			1201: {
				slidesPerView: 4,
			},
			1001: {
				slidesPerView: 3,
			},
			601: {
				slidesPerView: 2,
			}

		}
	
	});



})()


