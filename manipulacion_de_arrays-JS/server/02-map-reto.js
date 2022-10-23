// Reto

let products = [
	{ name: "Xbox Series S", price: 300, stock: 17 },
	{ name: "Xbox Series X", price: 500, stock: 4 },
	{ name: "Xbox Stereo Headsets", price: 60, stock: 34 },
];

let newProducts = products.map((item) => {
	return { ...item, taxes: Math.trunc(item.price * 0.19) };
});

console.log(newProducts);
