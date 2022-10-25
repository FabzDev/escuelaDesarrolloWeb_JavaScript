const products = [
	{
		name: "Pizza",
		price: 12,
		id: "🍕",
	},
	{
		name: "Burger",
		price: 23,
		id: "🍔",
	},
	{
		name: "Hot dog",
		price: 34,
		id: "🌭",
	},
	{
		name: "Hot cakes",
		price: 355,
		id: "🥞",
	},
];

// find
const ref = "🌭";
let product = products.find((item) => item.id == ref);
console.log(product);

//findIndex
let index = products.findIndex((item) => item.id == ref);
console.log(index);
