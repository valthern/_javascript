window.onload = function () {
	var nuevoP = document.createElement('p');
	var texto = document.createTextNode('Segundo párrafo, antes del primero');
	nuevoP.appendChild(texto);

	var anteriorP = document.getElementsByTagName('p')[0];
	document.body.insertBefore(nuevoP, anteriorP);
}