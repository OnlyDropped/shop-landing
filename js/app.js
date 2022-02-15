$('.slider').slick({
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2500,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow-next.svg" alt=""></button>',
  touchThreshold: 100,
  dots: true,
  arrows: true,
  lazyLoad: 'ondemand',
  dotsClass: 'slick-dots', 
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// код со стека
//https://ru.stackoverflow.com/questions/1286386/%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D0%B4%D0%B5%D1%80%D0%B3%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82-%D0%BF%D1%80%D0%B8-%D0%BD%D0%B0%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8
$('.new-slider').slick({
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow-next.svg" alt=""></button>',
  touchThreshold: 100,
  dots: true,
});

$('.recommend__wrap').slick({
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow-next.svg" alt=""></button>',
  touchThreshold: 100,
  dots: true,
});
$('.sale-slider').slick({
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow-next.svg" alt=""></button>',
  touchThreshold: 100,
  dots: true,
});
$('.reviews-slider').slick({
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow-next.svg" alt=""></button>',
  touchThreshold: 100,
  dots: true,
});


$('.sales-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icon/chevron-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow-next.svg" alt=""></button>',
  touchThreshold: 100,
});

$('.header-nav__btn').click(function(){
  $(this).toggleClass('open');
  $('.header-nav__list').toggleClass('header-nav__list--active');
});