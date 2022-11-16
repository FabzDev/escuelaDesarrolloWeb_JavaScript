// this en el scope global
console.log(`this: ${this}`);

// this en el scope de una funcion
function whoIsThis() {
	return this;
}
console.log(`whoIsThis(): ${whoIsThis()}`);

// this en el scope de una funcion en strict mode
function whoIsThisStrict() {
	"use strict";
	return this;
}
console.log(`whoIsThisStrict(): ${whoIsThisStrict()}`);

// this en el contexto de un objeto
const person = {
	name: "Fabio",
	saludar: function () {
		console.log(`Hola, soy ${this.name}`);
	},
};

person.saludar();

// cuando sacamos a una funcion de un objeto
const accion = person.saludar;
accion();

// this en el contexto de una clase
function Persona(name) {
	this.name = name;
}

Persona.prototype.presentarse = function () {
	console.log(`Hola, me llamo ${this.name}`);
};

const fabio = new Persona("Fabio");
