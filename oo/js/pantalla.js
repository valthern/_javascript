function Pantalla() {
	this._nombre = '';
}

Pantalla.prototype.setNombre = function(nombre) {
	this._nombre = nombre;
};

Pantalla.prototype.getNombre = function() {
	return this._nombre;
};

Pantalla.prototype.mostrar = function() {
	// body...
};

Pantalla.prototype.ocultar = function() {
	// body...
};

Pantalla.prototype.destruir = function() {
	// body...
};