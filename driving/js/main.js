const swiper = new Swiper(".swiper", {
  // Optional parameters
  effect: "cube",
  grabCursor: true,
  speed: 2000,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

(function () {
  const modal = document.querySelector(".modal");
  const btnModal = document.querySelector(".control__button");
  const regBtn = document.querySelector(".modal__button");

  btnModal.addEventListener("click", openModal);
  modal.addEventListener("click", closeModal);
  regBtn.addEventListener("click", regClose);
  function openModal(e) {
    e.preventDefault();
    document.body.classList.toggle("modal--open");
  }
  function closeModal(e) {
    e.preventDefault();
    if (e.target.classList.contains("modal")) {
      document.body.classList.remove("modal--open");
    }
  }
  function regClose(e) {
    e.preventDefault();
    if (e.target.classList.contains("modal__button")) {
      document.body.classList.remove("modal--open");
    }
  }
})();
