$(function() {
 document.querySelector('.header-bottom__catalog-btn').addEventListener('click', function(){
 document.querySelector('.header-bottom__catalog-list').classList.toggle('header-bottom__catalog-list--visible');
 this.classList.toggle('header-bottom__catalog-btn--active');
});
});


$(function() {
 $('.header-top__burger-btn').on('click', function(){
  $('.header-mobile').toggleClass('header-mobile--active'),
  $('.header-top__burger-btn').toggleClass('header-top__burger-btn--active');
 });



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

 $('.product-slider').slick ({
  responsive:[
   {
    breakpoint: 1600,
     settings: {
      arrows:true
     }
    },
    {
     breakpoint: 576,
      settings: {
       arrows: false
      }
     }
   ]
 });

 $('.recent-slider__inner').slick ({
  // infinite: true,
  // autoplay: true,
  // slidesToShow: 4,
  // slidesToScroll: 2,
  // variableWidth: true,
  responsive:[
   {
    breakpoint: 2700,
     settings: {
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      
      slidesToShow: 4,
      slidesToScroll: 2
     }
    },
   {
    breakpoint: 992,
     settings: {
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: false,
      mobileFirst: true,
      slidesToShow: 3,
      slidesToScroll: 2,
     }
    },
    {
     breakpoint: 768,
      settings: {
       dots: true,
       arrows: false,
       infinite: true,
       autoplay: false,
       mobileFirst: true,
       slidesToShow: 3,
       slidesToScroll: 2,
      }
     },
     {
      breakpoint: 576,
       settings: {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 2,
       }
      }
    ]
 });

 $('.filter-price__field').ionRangeSlider({
  type: "double",
  min: 0,
  max: 999,
  prefix: $,
  onStart: function (data) {
   $('.filter-price__from').text(data.from);
   $('.filter-price__to').text(data.to);
  },
  onChange: function (data) {
   $('.filter-price__from').text(data.from);
   $('.filter-price__to').text(data.to);
  },
 });

 $('.product__star').rateYo({
  starWidth: "16px",
  normalFill: "#ccccce",
  retedFill: "#FFB800 ",
  rating: 3.6
 });

 $('.product-tabs__link').on('click', function (e) {
  e.preventDefault();
  $('.product-tabs__link').removeClass('product-tabs__link--active');
  $(this).addClass('product-tabs__link--active');
  $('.product-tabs__item').removeClass('product-tabs__item--active');
  $($(this).attr('href')).addClass('product-tabs__item--active');
 });




});

$(document).ready(function() {
 $('.product__btn-minus').click(function () {
     var $input = $(this).parent().find('input');
     var count = parseInt($input.val()) - 1;
     count = count < 1 ? 1 : count;
     $input.val(count);
     $input.change();
     return false;
 });
 $('.product__btn-plus').click(function () {
     var $input = $(this).parent().find('input');
     $input.val(parseInt($input.val()) + 1);
     $input.change();
     return false;
 });
});

$(function() {
 var Mixer = mixitup('.top-products__inner');
 var Mixer = mixitup('.promo__content'); 
});