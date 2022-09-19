var swiper = new Swiper(".mySwiper2", {});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
  }

  function fadeOut(){
    setInterval(loader, 3000)
  }

  window.onload = fadeOut;
  