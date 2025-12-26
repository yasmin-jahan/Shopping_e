$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  //MatchHeight for slider 
  function MatchHeight() {
    $('.testimonial_content p').matchHeight({});
  }
  MatchHeight();

  //bubble
  particlesJS("particles-js", {
    particles: {
      number: { value: 20 },
      color: { value: "#ffedeb" },   // dark
      opacity: { value: 0.8 },
      size: {
        value: 25,                  // big bubbles
        random: true
      },
      line_linked: {
        enable: true,
        color: "#ffedeb",
        opacity: 0.3
      },
      move: {
        enable: true,
        speed: 1.2
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" }
      }
    }
  });


  //menu
  // Menu button click
    document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".header_nav").classList.add("header_mobile_nav_active");
    document.querySelector(".black_overlay").style.display = "block";

  });

  // Close button click
    document.querySelector(".close-btn").addEventListener("click", () => {
    document.querySelector(".header_nav").classList.remove("header_mobile_nav_active");
    document.querySelector(".black_overlay").style.display = "none";
  });

  // Black overlay click
    document.querySelector(".black_overlay").addEventListener("click", () => {
      document.querySelector(".header_nav").classList.remove("header_mobile_nav_active");
      document.querySelector(".black_overlay").style.display = "none";
    });


});