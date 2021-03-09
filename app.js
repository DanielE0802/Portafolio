

// document.querySelectorAll('.contenedor-modal .overlay').forEach((el) => {
// 	el.addEventListener('click', function (ev) {
// 		ev.stopPropagation();
// 		this.parentNode.classList.add('active');
// 	});
// });

// document.querySelectorAll('.contenedor-modal ').forEach((el) => {
// 	el.addEventListener('click', function (ev) {
// 		this.classList.remove('active');
// 	});
// });

// const swiper = new Swiper('.swiper-container', {
// 	// Optional parameters
// 	direction: 'vertical',
// 	loop: true,
  
// 	// If we need pagination
// 	pagination: {
// 	  el: '.swiper-pagination',
// 	},
  
// 	// Navigation arrows
// 	navigation: {
// 	  nextEl: '.swiper-button-next',
// 	  prevEl: '.swiper-button-prev',
// 	},
  
// 	// And if we need scrollbar
// 	scrollbar: {
// 	  el: '.swiper-scrollbar',
// 	},
//   });


const seccionesPagina = new fullpage('#fullpage',{
	navigation: true,
	navigationPosition: 'right',
	anchors: ['Inicio', 'Acerca', 'Skills', 'Proyectos','Contacto'],
	navigationTooltips: ['Inicio', 'Acerca', 'Skills', 'Proyectos','Contacto'],
	scrollingSpeed: 800,
	easing: 'easeInOutCubic',
	menu: '#miMenu', 
	showActiveTooltip: true,
});


