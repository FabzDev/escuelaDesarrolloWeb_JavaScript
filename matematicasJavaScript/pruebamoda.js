// VERSION FABIO CON ARRAYS

const objetoPrueba = [1, 2, 3, 4, 1, "a", "abc", 13, "abc", "abc"];

const objetoPruebaCount = contarLista(objetoPrueba);

function contarLista(arr) {
	const listaCount = {};

	for (let i = 0; i < arr.length; i++) {
		let elemento = arr[i];
		if (listaCount[elemento]) {
			listaCount[elemento] += 1;
		} else {
			listaCount[elemento] = 1;
		}
	}
	return listaCount;
}

const objetoPruebaEntries = Object.entries(objetoPruebaCount);

const objetoPruebaEntriesSorted = objetoPruebaEntries.sort(ordenarListaSort);

function ordenarListaSort(valorAcumulado, nuevoValor) {
	return valorAcumulado[1] - nuevoValor[1];
}

const objetoModa =
	objetoPruebaEntriesSorted[objetoPruebaEntriesSorted.length - 1];

console.log("La moda de esta lista es: " + objetoModa[0]);

// CALCULANDO SIN SORTEAR LA LISTA
// function calcularModa(list) {
// 	const listaCount = {};

// 	for (let i = 0; i < list.length; i++) {
// 		let elemento = list[i];
// 		if (listaCount[elemento]) {
// 			listaCount[elemento] += 1;
// 		} else {
// 			listaCount[elemento] = 1;
// 		}
// 	}

// 	const listaCountValues = Object.values(listaCount);
// 	const listaCountKeys = Object.keys(listaCount);
// 	const listaCountEntries = Object.entries(listaCount);

// 	let maxValue = 0;
// 	let maxPos = 0;
// 	let moda;

// 	for (let i = 0; i < listaCountValues.length; i++) {
// 		if (listaCountValues[i] > maxValue) {
// 			maxValue = listaCountValues[i];
// 			maxPos = i;
// 			moda = listaCountKeys[maxPos];
// 		}
// 	}

// 	console.log(listaCountEntries[maxPos]);
// }

// calcularModa(objetoPrueba);
