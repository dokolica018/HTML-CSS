$(document).ready(function() {
// kuckanje u headeru
var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: ['radimo frontend sajta', 'radimo custom WordPress temu', 'postavljamo sajt na server'],
    typeSpeed:100,
    smartBackspace:true,
    backSpeed:100,
    loop:true,
    loopCount:Infinity,
    startDelay:1000,

    
  });

//   novosti
$('.novosti').delay(2000).slideDown().delay(5000).fadeOut();

//  owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000
});


});