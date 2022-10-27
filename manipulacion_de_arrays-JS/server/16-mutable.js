const products = [
	{ title: "Pizza", price: 121, id: "🍕" },
	{ title: "Burger", price: 121, id: "🍔" },
	{ title: "Hot cakes", price: 121, id: "🥞" },
];

const carrito = (productID, foodData) =>
	foodData.filter((food) => food.id == productID);

const stock = (productID, foodData) =>
	foodData.filter((food) => food.id != productID);

console.log("Carrito: ", carrito("🍔", products));
console.log("Stock: ", stock("🍔", products));
