const notas = [2, 3, 4, 5];

function calcMediana(arr) {
	if (esimPar(arr)) {
		const indiceMed = Math.floor(notas.length / 2);
		const mediana = arr[indiceMed];
		console.log("impar" + mediana);
	} else {
		const indiceMed = arr.length / 2;
		const mediana = (arr[indiceMed] + arr[indiceMed - 1]) / 2;
		console.log("par" + mediana);
	}
	function esimPar(lista) {
		return lista.length % 2;
	}
}

calcMediana(notas);

//COPIA PROMEDIO
//const notas = [2, 3, 4];

// let suma = 0;
// let prom = 0;

// for (not of notas) {
// 	suma += not;
// 	prom = suma / notas.length;
// }

// console.log(prom);

// const resultado = document.querySelector("h1");

const sumaLista = notas.reduce((valorAcum, valorNew) => valorAcum + valorNew);

// function sumarElements(valorAcum, valorNew) {
// 	return valorAcum + valorNew;
// }

const promedio = sumaLista / notas.length;
console.log("Tu promedio de notas en este corte es: " + promedio);
