// const products = [
// 	{ title: "Pizza", price: 121, id: "🍕" },
// 	{ title: "Burger", price: 121, id: "🍔" },
// 	{ title: "Hot cakes", price: 121, id: "🥞" },
// ];

// const carrito = (productID, foodData) =>
// 	foodData.filter((food) => food.id == productID);

// const stock = (productID, foodData) =>
// 	foodData.filter((food) => food.id != productID);

// console.log("Carrito: ", carrito("🍔", products));
// console.log("Stock: ", stock("🍔", products));

const productsV2 = [
	{ title: "Pizza", price: 120, id: "🍕" },
	{ title: "Burger", price: 160, id: "🍔" },
	{ title: "Hot cakes", price: 80, id: "🥞" },
];

const changes = {
	id: "🥞",
	changes: {
		price: 120,
		description: " USA",
	},
};

// const prueba = {productsV2}
// const productV3 = productsV2.find((object) => object.id == update.id);
// const productV4 = { ...productV3, ...update };
// console.log(productV4);

// IN: update
// OUT: productsVF

//SOLUCION FABIO
// function solution(update) {
// const productIndex = productsV2.findIndex((item) => item.id == update.id);
// 	const productToUpdate = productsV2.find((item) => item.id == update.id);
// 	const updatedProduct = { ...productToUpdate, ...update.changes };
// 	const replacedProduct = productsV2.splice(productIndex, 1, updatedProduct);
// 	return productsV2;
// }
// console.log(solution(changes));

//SOLUCION COMUNIDAD

const products2Update = { ...productsV2 };
const productIndex = productsV2.findIndex((item) => item.id == changes.id);

productsV2[productIndex] = { ...productsV2[productIndex], ...changes.changes };

console.log(productsV2);
