function contar(n) {
	for (let index = 1; index <= n; index++) {
		console.log(index);
	}
}

let inicio = performance.now();
contar(5);
let fin = performance.now();

let duracion = fin - inicio;
duracion = Number(duracion.toFixed(2));
console.log(`El algoritmo contar ha durado ${duracion} ms`);
