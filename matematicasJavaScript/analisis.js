// console.log(salarios);

// Analisis personal para Juanita
const busquedaPersona = "Juanita";
const salariosPersona = salarios.find(encontrar);

function encontrar(arr) {
	return arr.name == busquedaPersona;
}

console.log(salariosPersona);
