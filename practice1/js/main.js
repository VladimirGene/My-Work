document.querySelector('.burger').addEventListener('click', function () {
	this.classList.toggle('active');
	document.querySelector('.nav__list').classList.toggle('open');
	
})

let html = document.querySelector("html")
document.querySelector(".burger").onclick = function () {
	html.classList.toggle("unscroll")
}

document.querySelectorAll('.nav__link').forEach(link => {
	link.addEventListener('click', () => {
		document.querySelector('.nav__list').classList.remove('open');
		html.classList.remove("unscroll")
	})
})

// ======================

