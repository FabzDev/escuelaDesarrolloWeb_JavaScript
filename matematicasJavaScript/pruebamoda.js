// VERSION JUANDC PLATZI

const objetoPrueba = [1, 2, 3, 4, 1, "a", "abc", 13, "abc", "abc"];

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
	let moda;

	for (let i = 0; i < listaCountValues.length; i++) {
		if (listaCountValues[i] > maxValue) {
			maxValue = listaCountValues[i];
			maxPos = i;
			moda = listaCountKeys[maxPos];
		}
	}

	console.log([listaCountKeys[maxPos], maxValue]);
}

calcularModa(objetoPrueba);
