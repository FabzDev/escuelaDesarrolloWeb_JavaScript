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

const cupon0 = new Cupones("skinby10", 10);
const cupon1 = new Cupones("skinby30", 30);
const cupon2 = new Cupones("skinby50", 50);

btn.addEventListener("click", cuponFunction);

function cuponFunction() {
	const price = inputTreatment.value;
	const cupon = inputCupon.value;
	if (cupon == cupon0.cName) {
		const cuponValue = cupon0.cValue;
		const newPrice = price * ((100 - cuponValue) / 100);
		result.innerHTML = "El precio con descuento es: $" + newPrice;
	}
	if (cupon == cupon1.cName) {
		const cuponValue = cupon1.cValue;
		const newPrice = price * ((100 - cuponValue) / 100);
		result.innerHTML = "El precio con descuento es: $" + newPrice;
	}
	if (cupon == cupon2.cName) {
		const cuponValue = cupon2.cValue;
		const newPrice = price * ((100 - cuponValue) / 100);
		result.innerHTML = "El precio con descuento es: $" + newPrice;
	}
}
const cupones = [];
for (i = 0; i < 3; i++) {
	cupones.push(cupon[i]);
}

for (vCupones of cupones) {
	if (inputCupon.value == vCupones.cName) {
		const cuponValue = vCupones.cValue;
		const newPrice = price * ((100 - cuponValue) / 100);
		result.innerHTML = "El precio con descuento es: $" + newPrice;
	}
}
