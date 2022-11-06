function contar(n) {
	for (let index = 1; index <= n; index++) {
		console.log(index);
	}
}

console.time("Duracion");
contar(5);
console.timeEnd("Duracion");
