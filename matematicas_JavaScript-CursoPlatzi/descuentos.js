const btn = document.querySelector("#calculate");
const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const pResult = document.querySelector("#result");
btn.addEventListener("click", calculateDiscount);

function calculateDiscount() {
	const newPrice = inputPrice.value * ((100 - inputDiscount.value) / 100);
	if (
		inputPrice.value <= 0 ||
		inputDiscount.value < 0 ||
		inputDiscount.value > 100
	) {
		pResult.innerHTML =
			"El valor del producto debe ser mayor a cero<br>El valor del descuento debe estar entre 0% y 100%";
	} else {
		pResult.innerHTML =
			"El valor con descuento es: $" +
			newPrice +
			"<br><br>Felicidades, ahorraste $" +
			(inputPrice.value - newPrice) +
			" dolares!";
	}
}
