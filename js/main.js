VanillaTilt.init(document.querySelector(".overlap-image"), {
    max: 8,
    speed: 200,
    glare: true,
    "max-glare": 0.5
  });
  

  document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.bg-main-color');
      // You can adjust the "50" to the height you want the effect to start changing
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  });

  
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  
  
  