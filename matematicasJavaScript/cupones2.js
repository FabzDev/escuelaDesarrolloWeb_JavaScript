//DEFINIENDO VARIABLES DEL HTML
const btn = document.querySelector("#btn");
const inputTreatment = document.querySelector("#treatment");
const inputCupon = document.querySelector("#cupon");
const result = document.querySelector("#result");

// CREANDO CLASE
class Cupones {
	constructor(name, value) {
		this.cName = name;
		this.cValue = value;
	}
}

// OBJETOS BASE DE DATOS
const cupon0 = {
	cName: "skinby10",
	cValue: 10,
};
const cupon1 = {
	cName: "skinby30",
	cValue: 30,
};
const cupon2 = {
	cName: "skinby50",
	cValue: 50,
};

// CREANDO ARRAY DE OBJETOS
const cupones = [cupon0, cupon1, cupon2];

// LLAMANDO AL EVENTO CLICK
btn.addEventListener("click", cuponFunction);

// CICLO EJECUTOR
function cuponFunction() {
	const cupon = inputCupon.value;
	const treatment = inputTreatment.value;
	const findCupon = cupones.filter(patito);
	let discount;
	if (findCupon.length > 0) {
		discount = findCupon[0].cValue;
	} else {
		result.innerHTML = "Cupon invalido";
		return;
	}

	const newPrice = treatment * ((100 - discount) / 100);
	result.innerHTML = "El precio con descuento es: $" + newPrice;

	console.log(findCupon);

	function patito(cuponElement) {
		return cuponElement.cName == cupon;
	}
}
