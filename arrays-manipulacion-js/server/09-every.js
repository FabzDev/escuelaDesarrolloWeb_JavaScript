const numbers = [1, 30, 29, 10, 11, 13];

let rta = true;
for (item of numbers) {
	if (item >= 40) {
		rta = false;
	}
}
console.log("ciclo for:", rta);

const rta2 = numbers.every((item) => item < 40);
console.log("array.every:", rta2);
