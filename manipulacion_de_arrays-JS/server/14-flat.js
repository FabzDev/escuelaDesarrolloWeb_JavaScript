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
console.log("con for: ", newMatriz);

const newMatriz2 = matriz.flat();
console.log("con flat: ", newMatriz2);
