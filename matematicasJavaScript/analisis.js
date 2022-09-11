// Analisis para persona

function calcularMedianaPorPersona(personaBuscar) {
	const objPersona = salarios.find((arr) => arr.name == personaBuscar);
	const arrayTrabajos = objPersona.trabajos;
	const arraySalarios = filtrarSalarios(arrayTrabajos);
	const medianaSalarios = PlatziMath.calcMediana(arraySalarios);
	// console.log(salarios);
	// console.log(objPersona);
	console.log(arrayTrabajos);
	console.log(arraySalarios);
	console.log(medianaSalarios);

	function filtrarSalarios(arr) {
		const arraySal = [];
		for (element of arr) {
			arraySal.push(element.salario);
		}
		return arraySal;
	}
}

console.log(calcularMedianaPorPersona("Alex"));
