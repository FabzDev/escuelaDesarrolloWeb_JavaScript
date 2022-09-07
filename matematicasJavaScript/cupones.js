const btn = document.querySelector("#btn");
const inputTreatment = document.querySelector("#treatment");
const inputCupon = document.querySelector("#cupon");
const result = document.querySelector("#result");

//CLASE
class Cupones {
	constructor(name, value) {
		this.cName = name;
		this.cValue = value;
	}
}

const c10 = new Cupones("skinby10", 10);
const c30 = new Cupones("skinby30", 30);
const c50 = new Cupones("skinby50", 50);

btn.addEventListener("click", cuponFunction);

function cuponFunction() {
	const price = inputTreatment.value;
	const cupon = inputCupon.value;
	if (cupon == c10.cName) {
		const cuponValue = c10.cValue;
		const newPrice = price * ((100 - cuponValue) / 100);
		result.innerHTML = "El precio con descuento es: $" + newPrice;
	}
	if (cupon == c30.cName) {
		const cuponValue = c30.cValue;
		const newPrice = price * ((100 - cuponValue) / 100);
		result.innerHTML = "El precio con descuento es: $" + newPrice;
	}
	if (cupon == c50.cName) {
		const cuponValue = c50.cValue;
		const newPrice = price * ((100 - cuponValue) / 100);
		result.innerHTML = "El precio con descuento es: $" + newPrice;
	}
}
