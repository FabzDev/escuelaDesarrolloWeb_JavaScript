const data = [
	1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8,
	8, 8, 9, 9, 9, 10, 10,
];

const rta = data
	.filter((item) => item > 5)
	.reduce((acum, item) => {
		acum.push(item);
		return acum;
	}, []);

console.log(rta);
