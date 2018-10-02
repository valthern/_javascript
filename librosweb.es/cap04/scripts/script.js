window.onload = function () {
	var p = document.createElement('p');
	var texto = document.createTextNode('Este párrafo no existía en la página HTML original');

	p.appendChild(texto);
	document.body.appendChild(p);
}