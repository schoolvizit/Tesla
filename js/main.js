// burger js
const burger = document.querySelector('.burger'),
      buttonClose = document.querySelector('.burger span'),
      menu = document.querySelector('.header__menu'),
      links = document.querySelectorAll('.header__link'),

      // блок перекрывающий контент body
      overlay = document.querySelector('.burger__overlay');



burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  buttonClose.classList.toggle('active');
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('lock');
});



overlay.addEventListener('click', () => {
  burger.classList.remove('active');
  buttonClose.classList.remove('active');
  menu.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('lock');
});


links.forEach(function (item) {
  item.addEventListener('click', () => {
    burger.classList.remove('active');
    buttonClose.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('lock');
  });
});


// active class of menu items onscroll


// window.addEventListener('scroll', () => {
//   let scrollDistance = window.scrollY;
  

// 	if (window.innerWidth > 768) {
// 		document.querySelectorAll('.fullscreen').forEach((el, i) => {
// 			if (el.offsetTop - document.querySelector('.header__menu').clientHeight <= scrollDistance) {
// 				document.querySelectorAll('.header__menu a').forEach((el) => {
// 					if (el.classList.contains('active')) {
// 						el.classList.remove('active');
// 					}
// 				});

// 				document.querySelectorAll('.header__menu li')[i].querySelector('a').classList.add('active');
// 			}
// 		});
// 	}
// });

// Slider Slick

$(function(){
	$('.slider').slick({
    arrows:false,
    fade:true,
    dots:true,
    autoplay: true,

    // Адаптив
    responsive:[
 			{
 				breakpoint: 479,
 				settings: {
          dots:false,
 				}
 			}
 		]
  });
});
