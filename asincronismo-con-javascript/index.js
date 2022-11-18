function sum(num1, num2) {
	return num1 + num2;
}

function calc(num1, num2, callback) {
	return callback(num1, num2);
}

console.log(calc(2, 2, sum));

setTimeout(() => console.log("Hola JavaScript"), 1000);

function saludo(nombre) {
	console.log(`Hola ${nombre}`);
}

setTimeout(() => saludo("Fabio"), 2000);
