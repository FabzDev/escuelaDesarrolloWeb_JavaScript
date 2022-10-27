const matriz = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const newMatriz = [];
for (vector of matriz) {
	for (item of vector) {
		newMatriz.push(item);
	}
}
// console.log("con for: ", newMatriz);

// const newMatriz2 = matriz.flat();
// console.log("con flat: ", newMatriz2);

// flat con recursividad

const matrizMakia = [[1, 2, [3, 4, [11, 12]]], 5, 6, [7, 8], 9, 0];
// const newArray = [];
function flatHechiza(matriz) {
	let newArray = [];
	for (vector of matriz) {
		if (Array.isArray(vector)) {
			newArray = newArray.concat(flatHechiza(vector));
		} else {
			newArray.push(vector);
		}
	}
	return newArray;
}
console.log(flatHechiza(matrizMakia));
