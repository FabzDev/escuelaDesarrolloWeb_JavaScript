const products = [
	{ title: "Pizza", price: 121, id: "🍕" },
	{ title: "Burger", price: 121, id: "🍔" },
	{ title: "Hot cakes", price: 121, id: "🥞" },
];

function asd(productID, datos) {
	const productIndex = datos.find((item) => item.id == productID);
	const carrito = [];
	const inventario = [];
	for (food of datos) {
		if (food == productIndex) {
			carrito.push(productIndex);
		} else {
			inventario.push(food);
		}
	}
	console.log(carrito);
	console.log(inventario);
}

asd("🥞", products);
