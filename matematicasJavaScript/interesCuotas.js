// Variables a ingresar
const valorPrestamo = 30000000;
const tasaInteres = 0.01;
const periodoTiempo = 60;
const valorCuota = Math.round(
	(tasaInteres * valorPrestamo) /
		(1 - Math.pow(1 + tasaInteres, -periodoTiempo))
);
let saldoCapital = valorPrestamo;
let listaCuotas = [];
const pagadoTotal = valorCuota * periodoTiempo;
const interesesTotal = pagadoTotal - valorPrestamo;

// FUNCION CREADORA DE OBJETO
function ObjCuotas(numCuota, valCuota, valIntereses, valCapital, salCapital) {
	this.numeroCuota = numCuota;
	this.valorCuota = valCuota;
	this.valorIntereses = valIntereses;
	this.valorCapital = valCapital;
	this.saldoCapital = salCapital;
}

// ciclo FOR
for (i = 0; i < periodoTiempo; i++) {
	let numeroCuota = i + 1;
	let valorIntereses = Math.round(saldoCapital * tasaInteres);
	let valorCapital = Math.round(valorCuota - valorIntereses);
	saldoCapital -= Math.round(valorCapital); //VERIFICAR SI FUNCIONA ASI
	listaCuotas[i] = new ObjCuotas(
		numeroCuota,
		valorCuota,
		valorIntereses,
		valorCapital,
		saldoCapital
	);
}

console.log(listaCuotas);
