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
	return medianaSalarios;
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
// console.log(empresas);

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
	return medianaEmpresa;
}

// medianaEmpresas("Freelance", 2021);

/*   
objeto:
Kotomani : {
	2018: 500, 700, 900;
	2019: 320, 510, 800;
}
*/
function proySalarioEmpresa(empNombre, year) {
	const objLength = Object.keys(empresas[empNombre]).length;
	const objList = Object.keys(empresas[empNombre]);

	let listaSalarios = [];
	for (let i = 0; i < objLength; i++) {
		listaSalarios.push(PlatziMath.calcMediana(empresas[empNombre][objList[i]]));
	}
	console.log(listaSalarios); //

	const pendiente =
		(listaSalarios[listaSalarios.length - 1] - listaSalarios[0]) /
		(listaSalarios.length - 1);
	const proyeccion = pendiente * (year - 2018) + listaSalarios[0];
	console.log(proyeccion);
}
// proySalarioEmpresa("Freelance", 2030);

// Proyeccion salario como JuanDC
function proySalarioJuan(empresaPar) {
	const yearList = Object.keys(empresas[empresaPar]);
	const medianaList = yearList.map((year) => {
		return medianaEmpresas(empresaPar, year);
	});

	const porcentajesCrecimiento = [];
	for (let i = 1; i < yearList.length; i++) {
		const salarioActual = medianaList[i];
		proySalarioJuan("Freelance");
		proySalarioJuan("Freelance");

		const crecimiento = salarioActual - salarioPasado;
		const porcentajeCrecimiento = crecimiento / salarioPasado;
		porcentajesCrecimiento.push(porcentajeCrecimiento);
	}
	const medianaPorcentajeCrecimiento = PlatziMath.calcMediana(
		porcentajesCrecimiento
	);
	const ultimoSalario = medianaList[yearList.length - 1];
	const aumento = ultimoSalario * medianaPorcentajeCrecimiento;
	const salarioProyectado = ultimoSalario + aumento;
	console.log(salarioProyectado);
}

function medianaGeneral(porcentaje) {
	const listaPersonas = salarios.map((persona) => persona.name);
	const listaMedianaPersona = listaPersonas.map((persona) => {
		return calcularMedianaPorPersona(persona);
	});
	const medianaListaMediana = PlatziMath.calcMediana(listaMedianaPersona);
	//return medianaListaMediana;

	const listaMedianaSorted = listaMedianaPersona.sort((a, b) => b - a);

	const porcentajeTop = Math.floor(
		(listaMedianaSorted.length * porcentaje) / 100
	);
	const top10Salarios = listaMedianaSorted.filter(function top(media, indice) {
		if (indice < porcentajeTop) {
			return media;
		}
	});
	const top10Mediana = PlatziMath.calcMediana(top10Salarios);
	console.log(top10Mediana);
}
medianaGeneral(10);
