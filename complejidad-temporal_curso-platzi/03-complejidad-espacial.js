// Complejidad espacial
function contar(n) {
	for (let index = 1; index <= n; index++) {
		console.log(index);
	}
}

function repetir(arreglo) {
	const nuevoArreglo = arreglo;
}

function convertirAString(arreglo) {
	const arString = arreglo.map((elemento) => elemento.toString());
	return arString;
}

function dosDimensiones(valor) {
	let x = new Array(valor);
	for (let i = 0; i < valor; i++) {
		x[i] = new Array(valor);
		for (let j = 0; j < valor; j++) {
			x[i][j] = 0;
		}
	}
}
