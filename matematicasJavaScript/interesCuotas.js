// Variables a ingresar
let valorPrestamo = 45000000;
let tasaInteres = 0.01;
let periodoTiempo = 60;

// Variables Algoritmo
let numeroCuota;
let valorCuota;
let valorIntereses;
let valorCapital;
let saldoCapital;

let listaCuotas = [];
for (let i = 0; i < periodoTiempo; i++) {
	function crearArray(valorPrestamo, tasaInteres, periodoTiempo) {
		let listaCuotas = new Object();
		let valorCuota =
			(tasaInteres * valorPrestamo) /
			(1 - Math.pow(1 + tasaInteres, -periodoTiempo));
		let valorIntereses = valorPrestamo * tasaInteres;
		let valorCapital = valorCuota - valorIntereses;
		let saldoCapital = valorPrestamo - valorCapital;
	}
}

valorCuota =
	(tasaInteres * valorPrestamo) /
	(1 - Math.pow(1 + tasaInteres, -periodoTiempo));
console.log("Valor cuota: " + valorCuota);

valorIntereses = valorPrestamo * tasaInteres;
console.log("Valor Intereses: " + valorIntereses);

valorCapital = valorCuota - valorIntereses;
console.log("Valor Capital: " + valorCapital);

saldoCapital = valorPrestamo - valorCapital;
console.log("Saldo Capital: " + saldoCapital);

// // for
// numeroCuota = i;
// valorIntereses = saldoCapital[i - 0] * tasaInteres;
// valorCapital = valorCuota[i] - valorIntereses[i];
// saldoCapital[i] = saldoCapital[i - 1] - valorCapital[i];
