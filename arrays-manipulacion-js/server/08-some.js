const numbers = [1, 5, 3, 7];

let isPar = false;
for (item of numbers) {
	if (item % 2 == 0) {
		isPar = true;
		break;
	}
}
console.log(isPar);

// Con Some

const rta = numbers.some((item) => item % 2 == 0);

console.log(rta);
