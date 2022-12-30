const numbers = [1, 30, 49, 29, 10, 13];

const referenceValue = 5;
let valueToFind;

for (item of numbers) {
	if (item == referenceValue) {
		valueToFind = item;
	}
}
console.log("con for: ", valueToFind);

const rta = numbers.find((item) => item === referenceValue);
console.log("con find: ", rta);
