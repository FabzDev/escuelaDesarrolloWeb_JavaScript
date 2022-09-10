// CALCULAR PROMEDIO
const notasP = [2, 3, 4, 5];
const sumaLista = notasP.reduce((valorAcum, valorNew) => valorAcum + valorNew);

const promedio = sumaLista / notasP.length;
console.log("Tu promedio de notas en este corte es: " + promedio);
// FUNCION OPCIONAL
// function sumarElements(valorAcum, valorNew) {
// 	return valorAcum + valorNew;
// }

// CALCULAR MEDIANA SIN ORDENAR
const notasM = [89, 2, 8000, 3, 500, 479, 4, 5];

function calcMediana(arr) {
	if (esimPar(arr)) {
		const indiceMed = Math.floor(arr.length / 2);
		const mediana = arr[indiceMed];
		console.log("Impar - " + mediana);
		return mediana;
	} else {
		const indiceMed = arr.length / 2;
		const mediana = (arr[indiceMed] + arr[indiceMed - 1]) / 2;
		console.log("Par - " + mediana);
		return mediana;
	}

	function esimPar(lista) {
		return lista.length % 2;
	}
}

// FUNCION METODO SORT PARA ORDENAR LISTA

function calcOrden(arr) {
	return arr.sort(ordenar);

	function ordenar(valorAcumulado, valorNuevo) {
		if (valorAcumulado > valorNuevo) {
			return 1;
		}
		if (valorAcumulado == valorNuevo) {
			return 0;
		}
		if (valorAcumulado < valorNuevo) {
			return -1;
		}
	}
}

// CALCULAR MEDIANA ORDENADA
console.log(calcOrden(notasM));
const pruebaReturnMediana = calcMediana(calcOrden(notasM));
console.log(pruebaReturnMediana);
