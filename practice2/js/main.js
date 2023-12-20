

(function () {

	document.addEventListener('click', burgerInit)

	function burgerInit(e) {


		const burger = e.target.closest('.burger')
		const navLink = e.target.closest('.nav__link')

		if (!burger && !navLink) return
		
		document.body.classList.toggle('body--open-menu')

		const element = document.getElementsByClassName('burger')[0];
		element.classList.toggle("active");
	}

})()





