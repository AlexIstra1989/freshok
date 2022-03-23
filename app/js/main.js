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

 $('.header-top__burger-btn').on('click', function(){
  $('.header-mobile').toggleClass('header-mobile--active'),
  $('.header-top__burger-btn').toggleClass('header-top__burger-btn--active');
 });


});