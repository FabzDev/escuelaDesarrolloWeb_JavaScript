const listaModa = [1, 10, 14, 3, 24, 14, 10, 35, 13, 14];

calcModa(listaModa);

function calcModa(arr) {
	let contador = 0;
	let moda = 0;
	for (let i = 0; i < listaModa.length; i++) {
		let iterador = listaModa[i];
		let contador2 = 0;
		for (let i = 0; i < listaModa.length; i++) {
			if (iterador == listaModa[i]) {
				contador2 = contador2 + 1;
				if (contador2 > contador) {
					contador = contador2;
					moda = iterador;
				}
			}
		}
	}
	console.log(contador);
	console.log(moda);
}

// VERSION JUANDC PLATZI

function calcularModa(list) {
	const listaCount = {};

	for (let i = 0; i < list.length; i++) {
		let elemento = list[i];
		if (listaCount[elemento]) {
			listaCount[elemento] += 1;
		} else {
			listaCount[elemento] = 1;
		}
	}

	const listaCountValues = Object.values(listaCount);
	const listaCountKeys = Object.keys(listaCount);

	let maxValue = 0;
	let maxPos = 0;

	for (let i = 0; i < listaCountValues.length; i++) {
		if (listaCountValues[i] > maxValue) {
			maxValue = arr[i];
			maxPos = i;
		}
	}
	const objetoModa = [listaCountKeys[maxPos], maxValue];
	return objetoModa;
}

//const objetoPrueba = { 1: 2, 2: 1, 3: 1, 4: 1, 13: 1, a: 1, abc: 3 };
const objetoPruebaValues = Object.values(objetoPrueba);
const objetoPruebaKeys = Object.keys(objetoPrueba);

function calcMaxValue(arr) {
	const maxValue = 0;
	const maxPos = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > maxValue) {
			maxValue = arr[i];
			maxPos = i;
		}
	}
	return maxValue, maxPos;
	return maxPos;
}
