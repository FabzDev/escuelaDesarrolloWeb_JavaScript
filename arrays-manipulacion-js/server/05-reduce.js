// con ciclo For
const totals = [1, 2, 3, 4];
let valor = 0;
for (item of totals) {
	valor += item;
}
console.log("Con ciclo For: ", valor);

// Ejemplo con Reduce
const totals2 = [1, 2, 3, 4];
let sum = totals2.reduce((acc, cur) => acc + cur);
console.log("Con Reduce: ", sum);

// Prueba con Reduce
const totals3 = ["Fa", "bio", " ", "Es", "cobar"];
let sum2 = totals3.reduce(
	(acc, cur) => acc + cur,
	"El programador mas pro es: "
);
console.log("Prueba con Reduce: ", sum2);
