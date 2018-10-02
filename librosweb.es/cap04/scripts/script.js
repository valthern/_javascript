window.onload = function () {
	var nuevoP = document.createElement('p');
	var texto = document.createTextNode('Segundo párrafo');
	nuevoP.appendChild(texto);

	document.body.appendChild(nuevoP);
}