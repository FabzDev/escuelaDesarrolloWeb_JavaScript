const notas = [2, 3, 4];

// let suma = 0;
// let prom = 0;

// for (not of notas) {
// 	suma += not;
// 	prom = suma / notas.length;
// }

// console.log(prom);

// const resultado = document.querySelector("h1");

const sumaLista = notas.reduce((valorAcum, valorNew) => valorAcum + valorNew);

// function sumarElements(valorAcum, valorNew) {
// 	return valorAcum + valorNew;
// }

const promedio = sumaLista / notas.length;
console.log("Tu promedio de notas en este corte es: " + promedio);
