function* iterate(array) {
	for (let ar of array) {
		yield ar;
	}
}

const it = iterate(["Fabio", "Yulieth", "Alejandro", "Giovita", "Laura"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
