const seccionesPagina = new fullpage('#fullpage', {
	navigation: true,
	navigationPosition: 'right',
	anchors: ['Inicio', 'Acerca', 'Proyectos', 'Contacto'],
	navigationTooltips: ['Inicio', 'Acerca', 'Proyectos', 'Contacto'],
	scrollingSpeed: 800,
	easing: 'easeInOutCubic',
	menu: '#miMenu',
	showActiveTooltip: true,
	onLeave: function (origin, destination, direction) {
		console.log(direction)
		if(origin.anchor == 'Inicio'){
			nav.classList.add("nuevoBar");
		}

		else if( origin.anchor == 'Acerca' & direction == 'up'){
			nav.classList.remove("nuevoBar");
		}

	}
});
