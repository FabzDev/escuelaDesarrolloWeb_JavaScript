// Array original
const words = ["spray", "elites", "limit", "apple", "exuberant"];

// METODO SIN FILTER
const newWords = [];
for (item of words) {
	if (item.length > 5) {
		newWords.push(item);
	}
}
console.log("\nOriginal Array", words);
console.log("New Array", newWords);

// METODO CON FILTER
const newWords2 = words.filter((item) => item.length > 5);
console.log("\nOriginal Array", words);
console.log("New Array con filter", newWords2);

// RETO CON FILTER: filtrar ordenes de compra que ya fueron filtradas
const orders = [
	{
		customerName: "Nicolas",
		total: 60,
		delivered: true,
	},
	{
		customerName: "Zulema",
		total: 120,
		delivered: false,
	},
	{
		customerName: "Santiago",
		total: 180,
		delivered: true,
	},
	{
		customerName: "Valentina",
		total: 240,
		delivered: true,
	},
];

const deliveredOrders = orders.filter(
	// debe devolver las ordenes entregadas con un valor superior a $100
	(item) => item.delivered && item.total > 100
);
console.log("\nOriginal Array", words);
console.log("Delivered orders > $100", deliveredOrders);

// const searchOrder = orders.filter((item) => item.customerName.includes("Nico"));
// console.log("search: Nico: ", searchOrder);

// FUNCION TRADICIONAL
function searchOrder(query) {
	const searchArray = orders.filter((item) =>
		item.customerName.includes(query)
	);
	console.log(query, searchArray);
}

// FUNCION CON CONSTANTE

const searchArray2 = (query) => {
	return orders.filter((item) => item.customerName.includes(query));
};

console.log("Search: 'ico'", searchArray2("ico"));
