
const seccionesPagina = new fullpage('#fullpage',{
	navigation: true,
	navigationPosition: 'right',
	anchors: ['Inicio', 'Acerca', 'Proyectos','Contacto'],
	navigationTooltips: ['Inicio', 'Acerca', 'Proyectos','Contacto'],
	scrollingSpeed: 800,
	easing: 'easeInOutCubic',
	menu: '#miMenu', 
	showActiveTooltip: true,
});


setInterval(() => {
	var inicio= document.getElementById("inicio").getAttribute("class");
	var mi= document.getElementById("mi").getAttribute("class")
	if(inicio == "active"){
		nav.classList.remove("nuevoBar");
	}
	else{
		nav.classList.add("nuevoBar");
	}
}, 300); 





// window.addEventListener("", function(e){
// 	cambió=true;
// 	if(cambio=true){
// 		nav.classList.toggle("nuevoBar");
// 		alert("encima")
// 	}
	
// 	console.log(cambió)
// },false)

// console.log(cambió)


