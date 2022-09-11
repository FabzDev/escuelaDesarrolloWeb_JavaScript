const PlatziMath = {};

// PROMEDIO
PlatziMath.calcPromedio = function calcPromedio(arr) {
	const sumaLista = arr.reduce((valorAcum, valorNew) => valorAcum + valorNew);
	const promedio = sumaLista / notas.length;
	return promedio;
};

// MEDIANA
PlatziMath.calcMediana = function calcMediana(arr) {
	const arrO = calcOrden(arr);

	if (esimPar(arrO)) {
		const indiceMed = Math.floor(arrO.length / 2);
		const mediana = arrO[indiceMed];
		console.log("Impar - " + mediana);
		return mediana;
	} else {
		const indiceMed = arrO.length / 2;
		const mediana = (arrO[indiceMed] + arrO[indiceMed - 1]) / 2;
		console.log("Par - " + mediana);
		return mediana;
	}

	function esimPar(lista) {
		return lista.length % 2;
	}
	function calcOrden(arr) {
		return arr.sort((a, b) => a - b);
	}
};
