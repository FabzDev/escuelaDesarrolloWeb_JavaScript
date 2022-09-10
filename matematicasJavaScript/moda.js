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
	console.log(listaCount);
}

calcularModa([1, 2, 3, 4, 1, "a", "abc", 13, "abc", "abc"]);
