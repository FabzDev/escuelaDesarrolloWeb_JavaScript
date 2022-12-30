const data = [
	1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8,
	8, 8, 9, 9, 9, 10, 10,
];

// REDUCE reto SIN Filter
const rtaSinFilter = data.reduce((acum, item) => {
	//1-5
	if (item <= 5) {
		if (!acum["1-5"]) {
			acum["1-5"] = 1;
		} else {
			acum["1-5"] += 1;
		}
	}
	//6-8
	if (item > 5 && item <= 8) {
		if (!acum["6-8"]) {
			acum["6-8"] = 1;
		} else {
			acum["6-8"] += 1;
		}
	}
	//9-10
	if (item > 8 && item <= 10) {
		if (!acum["9-10"]) {
			acum["9-10"] = 1;
		} else {
			acum["9-10"] += 1;
		}
	}
	return acum;
}, {});

console.log("con Reduce", rtaSinFilter);

// REDUCE reto CON Filter
let rtaConFilter = (array) => {
	let acum = {};
	acum["1-5"] = array.filter((item) => item <= 5).length;
	acum["6-8"] = array.filter((item) => item > 5 && item <= 8).length;
	acum["9-10"] = array.filter((item) => item > 8 && item <= 10).length;
	return acum;
};

console.log("con Filter", rtaConFilter(data));
