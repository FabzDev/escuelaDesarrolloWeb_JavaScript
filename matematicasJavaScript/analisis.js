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

// Restructuracion de informacion a objetos
let empresas = {};
for (persona of salarios) {
	for (trabajo of persona.trabajos) {
		if (!empresas[trabajo.empresa]) {
			empresas[trabajo.empresa] = {};
		}

		if (!empresas[trabajo.empresa][trabajo.year]) {
			empresas[trabajo.empresa][trabajo.year] = [];
		}
		empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
	}
}
console.log(empresas);

function medianaEmpresas(empresaNombre, year) {
	if (!empresas[empresaNombre]) {
		console.warn("Empresa invalida");
		return;
	}
	if (!empresas[empresaNombre][year]) {
		console.warn("En el año ingresado no hubo ninguna contratación");
		return;
	}
	const medianaEmpresa = PlatziMath.calcMediana(empresas[empresaNombre][year]);
	console.log(medianaEmpresa);
}

medianaEmpresas("Freelance", 2021);

/*   
objeto:
Kotomani : {
	2018: 500, 700, 900;
	2019: 320, 510, 800;
}
*/
