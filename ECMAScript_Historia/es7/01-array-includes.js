let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("El array incluye el numero 4? " + numbers.includes(4));
console.log("El array incluye el numero 10? " + numbers.includes(10));

const list = [
	"Fabio",
	"Yulieth",
	"Alejandro",
	"Laurita",
	"Giovita",
	"FabioPapa",
	"Gladis",
];
console.log("El array incluye a Alejandro? " + list.includes("Alejandro"));
console.log(
	"El array incluye a fabio con minusculas? " + list.includes("fabio")
);
