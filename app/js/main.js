$(function() {
 $('.slider__inner').slick ({
  infinite: true,
  fade: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive:[
   {
    breakpoint: 1600,
     settings: {
      dots: false,
      arrows:true
     }
    },
    {
     breakpoint: 992,
      settings: {
       dots: true,
       arrows: false
      }
     }
   ]
 });

 $('.brands__slider').slick ({
  // arrows: false,
  // dots: false,
  // infinite: true,
  // autoplay: true,
  // slidesToShow: 3,
  // slidesToScroll: 2,
  // speed: 2000,
  // variableWidth: true,
  responsive:[
   {
    breakpoint: 1600,
     settings:  'unslick'
    },
    {
     breakpoint: 576 ,
      settings: {
       arrows: false,
       dots: false,
       infinite: true,
       autoplay: true,
       slidesToShow: 3,
       slidesToScroll: 2,
       speed: 2000,
       variableWidth: true,
      }
     }
   ]
 });

 $('.header-top__burger-btn').on('click', function(){
  $('.header-mobile').toggleClass('header-mobile--active'),
  $('.header-top__burger-btn').toggleClass('header-top__burger-btn--active');
 });

 var Mixer = mixitup('.top-products__inner');
 var Mixer = mixitup('.promo__content');
});