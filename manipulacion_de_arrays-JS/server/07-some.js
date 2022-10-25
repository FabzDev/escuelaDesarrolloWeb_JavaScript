const numbers = [1, 5, 2, 3, 7];

let isPar = false;
for (item of numbers) {
	if (item % 2 == 0) {
		isPar = true;
		break;
	}
}
console.log(isPar);

// Con Some
