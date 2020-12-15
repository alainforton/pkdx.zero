// pkdx - js
window.onload = function(){

	// css ? hacer globarl div contenedor estilo centrado(posible utiles global?)
	// construccion del div y su content (array[][] o canvas?)
	// evento
	// llamada y devolucion de datos con la api
	// pintar resultados
	// posible init ?
	
	document.body.appendChild(contenedor);	
		
	return console.log(contenedor);
} 


let contenedor = document.createElement('div');

let estilosPrincipal = {

	position : "absolute",
	left : "0",
	top : "0",
	right : "0",
	bottom : "0",
	margin : "auto",
	backgroundColor : "red",
	height : "300px",
	width : "500px",
	borderRadius : "50px"
}

const ponerStylos = Object.assign(contenedor.style, estilosPrincipal);

