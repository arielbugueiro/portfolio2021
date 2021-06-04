$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.menu-navegacion').addClass("sticky");
    } else {
      $('.menu-navegacion').removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }

  })

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({
      scrollTop: 0
    });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });


  // toggle menu/navbar script
  $('.boton-menu').click(function () {
    $('.menu-navegacion .menu').toggleClass("active");
    $('.boton-menu i').toggleClass("active");
  });


  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [, "Desarrollador de Software.", "Apasionado por el mundo de la tecnología."],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });



  //PRUEBA PROYECTO
  const grid = new Muuri('.grid', {
    layout: {
      rounding: false
    }
  });

  window.addEventListener('load', () => {
    grid.refreshItems().layout();
    // document.getElementById('grid').classList.add('imagenes-cargadas');
  });

  // Agregamos los listener de los enlaces para filtrar por categoria.
  const enlaces = document.querySelectorAll('#categorias a');
  enlaces.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
      evento.preventDefault();
      enlaces.forEach((enlace) => enlace.classList.remove('activo'));
      evento.target.classList.add('activo');

      const categoria = evento.target.innerHTML.toLowerCase();
      categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
    });
  });

  // Agregamos listener para las imagenes
  const overlay = document.getElementById('overlay');
  document.querySelectorAll('.grid .item img').forEach((elemento) => {
    const ruta = elemento.getAttribute('src');
    const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

  });


  // Animacion de Particulas Json
  particlesJS({
    "particles": {
      "number": {
        "value": 104,
        "density": {
          "enable": true,
          "value_area": 552.4033491425909
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5451601006942778,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.5684540486109415,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "bottom-right",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


});