const notas = [2, 3, 4];

let suma = 0;
let prom = 0;

for (not of notas) {
	suma += not;
	prom = suma / notas.length;
}

console.log(prom);

const resultado = document.querySelector("h1");

resultado.innerText = "Tu promedio de notas este corte es: " + prom;
