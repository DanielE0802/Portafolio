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
		if (origin.anchor == 'Inicio') {
			nav.classList.add("nuevoBar");
		} else if (origin.anchor == 'Acerca' && destination.anchor == 'Inicio' && direction == 'up') {
			nav.classList.remove("nuevoBar");
		} else if (origin.anchor == 'Proyectos' && destination.anchor == 'Inicio') {
			nav.classList.remove("nuevoBar");
		} else if (origin.anchor == 'Contacto' && destination.anchor == 'Inicio') {
			nav.classList.remove("nuevoBar");
		}

	}
});


let slideEdit = document.getElementById("slideEdit");

let contenidoSlide1 = ` <div class="container-title">
<h1 class="title-proyectos">p<br>r<br>o<br>y<br>e<br>c<br>t<br>o<br>s</h1>
</div>


<div class="galeria correciones-galeria">

<!--GIFOS-->
<div class="foto">
	<div class="contenedor-modal">
		<img src="img/gifos.png" alt="" />
		<div class="overlay">
			<h5> <a href="hhttps://daniele0802.github.io/Proyecto-GIFOS/" title="Podcast"
					target="_blank">
					<img src="img/logoGifos.svg" alt=""></a>GIFOS</h5>
			<p>Sitio web interactivo, adapatado para todas las plataformas y realizado a partir de
				HTML, CSS con el preprocesador SASS y JavaScript. Es un catálogo de GIFs que cuenta
				con funcionalidades como búsqueda, intereacción con una API externa y captura de
				video para grabar tus propios GIFs</p>

			<br><a href="https://danielE0802.github.io/Proyecto-GIFOS/" title="Mi Podcast"
				target="_blank">
				<h3>Ver demo</h3>
			</a>
			<br> <a href="https://github.com/danielE0802/Proyecto-GIFOS" title="Mi Podcast"
				target="_blank">
				<h3>Ver repositorio</h3>
			</a>
		</div>
	</div>
</div>
<!--PODCAST-->
<div class="foto">
	<div class="contenedor-modal">
		<img src="img/podcast2.png" alt="" />
		<div class="overlay">
			<h5> <a href="https://danielE0802.github.io/Podcast-SAS/" title="Podcast"
					target="_blank">
					<img src="img/logo.svg" alt=""></a>Podcast</h5>
			<p>Es un sitio web estático responsivo creado a partir de HTML, CSS y anidado con SAS.
				Desde el sitio vas a poder escuchar podcasts reales que estan embebidos junto con
				imágenes y texto relacionados a su contenido. Esta diseñado con una visión mobile
				first,
				adaptada a pantallas más grandes para que funcione en todas ellas.</p>

			<br><a href="https://danielE0802.github.io/Podcast-SAS/" title="Mi Podcast"
				target="_blank">
				<h3>Ver demo</h3>
			</a>
			<br> <a href="https://github.com/danielE0802/Podcast-SAS" title="Mi Podcast"
				target="_blank">
				<h3>Ver repositorio</h3>
			</a>
		</div>
	</div>
</div>`

let contenidoSlide2 = `   <div class="slide proyecto2" id="slideEdit2">


<div class="galeria ">
	<!--FOOTER-->
	<div class="foto">
		<div class="contenedor-modal">
			<img src="img/footer.png" alt="FOOTER" />
			<div class="overlay">
				<h5><img src="img/Mi logo.svg" alt=""> Footer</h5>
				<p>Footer hecho apartir de HTML y CSS, con una paleta de colores llamativos y
					animaciones </p> <br><a href="https://danielE0802.github.io/Footer-1/"
					title="FOOTER" target="_blank">Ver demo</a>
				<br> <a href="https://github.com/danielE0802/Footer-1" title="FOOTER"
					target="_blank">Ver Repositorio</a>
			</div>
		</div>
	</div>
	<!--PICTURGRAM-->
	<div class="foto">
		<div class="contenedor-modal">
			<img src="img/Picturgram.png" alt="" />
			<div class="overlay">
				<h5> <img src="img/Mi logo.svg" alt="">Picturgram</h5>
				<p>Copia de instagram, creado apartir de HTML y CSS totalmente
					funcional, adaptado a todos los dispositivos. </p>
				<br><a href="https://danielE0802.github.io/Picturgram/" title="Mi formulario"
					target="_blank">
					<h3>Ver demo</h3>
				</a>
				<br> <a href="https://github.com/danielE0802/Picturgram" title="Mi formulario"
					target="_blank">
					<h3> Ver repositorio</h3>
				</a>
			</div>
		</div>
	</div>
	<!--TODOAPP-->
	<div class="foto">
		<div class="contenedor-modal">
			<img src="img/MYTODOAPP.png" alt="" />
			<div class="overlay">
				<h5> <img src="img/check.webp" alt="">ToDoApp</h5>
				<p>
					Es una aplicación web que te permite crear notas (puedes elegir los colores) y
					eliminar
					notas. Totalmente funcional, hecha con JavaScript. </p>
				<br><a href="https://daniele0802.github.io/TODO-app/" title="TODOAPP" target="_blank">
					<h3>Ver demo</h3>
				</a>
				<br> <a href="https://github.com/DanielE0802/TODO-app" title="TODOAPP" target="_blank">
					<h3>Ver repositorio</h3>
				</a>
			</div>
		</div>
	</div>
`

let contenidoSlide3 = `<div class="galeria ">
<!--FOOTER-->
<div class="foto">
<div class="contenedor-modal">
	<img src="img/Formulario.png" alt="" />
	<div class="overlay">
		<h5> <img src="img/Mi logo.svg" alt="">Formulario</h5>
		<p>
			Diseño desde front-end de un formulario web, permitiendo escribir todos los
			datos necesario para una inscripción, encuesta, etc. diseñado para todos los
			dispotivos. </p>
		<br><a href="https://daniele0802.github.io/Formulario-1/" title="Mi formulario"
			target="_blank">
			<h3>Ver demo</h3>
		</a>
		<br> <a href="https://github.com/daniele0802/Formulario-1" title="Mi formulario"
			target="_blank">
			<h3>Ver repositorio</h3>
		</a>
	</div>
</div>
</div>
<!--Calculadora-->
<div class="foto">
<div class="contenedor-modal">
	<img src="img/Calculadora-1.png" alt="" />
	<div class="overlay">
		<h5> <img src="img/calcular.png" alt="">Calculadora</h5>
		<p>
			Calculadora totalmente funcional. !Pruébala! </p>
		<br><a href="https://daniele0802.github.io/Calculadora-1/" title="Mi formulario"
			target="_blank">
			<h3>Ver demo</h3>
		</a>
		<br> <a href="https://github.com/daniele0802/Calculadora-1"
			title="Mi formulario" target="_blank">
			<h3>Ver repositorio</h3>
		</a>
	</div>
</div>
</div>

<div class="foto">
<div class="contenedor-modal miGithub">
	<img src="img/Mi_GitHub.png" alt="" />
	<div class="overlay">
		<h5> <img src="img/github.png" alt="">Mi GitHub</h5>
		<p>
			Escanea la foto o da clic <a href="https://github.com/DanielE0802"
				title="Mi GitHub" target="_blank">
				<span style="color: #301ecf;">Aqui</span> </a> para entrar a mi
			repositorio y ver más proyectos
		</p>

		</a>
	</div>
</div>
</div>
</div>
</div>`


let slideEdit2 = document.getElementById("slideEdit2");
containerGaleria = document.getElementById('containerGaleria')

let slideEdit3 = document.getElementById("slideEdit3");





if (screen.width < 600) {
	slideEdit.innerHTML = contenidoSlide1;
	slideEdit2.innerHTML = contenidoSlide2;

	slideEdit3.classList.remove('display-none')

	slideEdit3.innerHTML = contenidoSlide3;

	setInterval(function () {
		let body = document.getElementsByTagName('body')
		let atributo = body[0].getAttribute('class')

		if (atributo != "fp-viewing-Inicio") {
			nav.classList.add("nuevoBar");
		} else {
			nav.classList.remove("nuevoBar");
		}

	}, 400)


} else {
	slideEdit3.classList.add('display-none')

}