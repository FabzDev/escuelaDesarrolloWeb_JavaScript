// Analisis para persona
function calcularMedianaPorPersona(nombrePersona) {
	const objPersona = salarios.find((arr) => arr.name == nombrePersona);
	const arrayTrabajos = objPersona.trabajos;
	const arraySalarios = filtrarSalarios(arrayTrabajos);
	const medianaSalarios = PlatziMath.calcMediana(arraySalarios);
	// console.log(salarios);
	// console.log(objPersona);
	// console.log(arrayTrabajos);
	// console.log(arraySalarios);
	// console.log(medianaSalarios);

	function filtrarSalarios(arr) {
		const arraySal = [];
		for (element of arr) {
			arraySal.push(element.salario);
		}
		return arraySal;
	}
}
//console.log(calcularMedianaPorPersona("Alex"));

// Analisis de proyeccion de sueldo
function proyectarSalario(nombrePersona, añoProyectado) {
	const objPersona = salarios.find((arr) => arr.name == nombrePersona);
	const arrayTrabajos = objPersona.trabajos;
	const arraySalarios = arrayTrabajos.map((element) => element.salario);

	console.log(arraySalarios);

	const pendiente =
		(arraySalarios[arraySalarios.length - 1] - arraySalarios[0]) /
		(arraySalarios.length - 1);
	const proyeccion = pendiente * (añoProyectado - 2018) + arraySalarios[0];
	console.log(proyeccion);
}
// proyectarSalario("Julia", 2025);

// Analisis de proyeccion por empresa
function filtrarEmpresas(nombreEmpresa, year) {
	const arrUnico = [];

	for (sal of salarios) {
		const arrTrabajo = sal.trabajos;
		for (arrT of arrTrabajo) {
			arrUnico.push(arrT);
		}
	}
	const arrFiltradoEmpresa = arrUnico.filter(
		(arr) => arr.empresa == nombreEmpresa
	);
	const arrFiltradoAño = arrFiltradoEmpresa.filter((arr) => arr.year == year);
	console.log(arrFiltradoAño);
}
filtrarEmpresas("Freelance", 2022);
