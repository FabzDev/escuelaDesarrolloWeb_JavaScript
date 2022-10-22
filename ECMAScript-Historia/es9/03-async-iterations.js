async function* anotherGenerator() {
	yield await Promise.resolve(1);
	yield await Promise.resolve(2);
	yield await Promise.resolve(3);
	yield await Promise.resolve("Fabio");
}

const other = anotherGenerator();
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
console.log("Hello!");

async function arrayOfNames(array) {
	for await (let ar of array) {
		console.log(ar);
	}
}

const names = arrayOfNames(["Fabio", "Yulieth", "Alejandro"]);
console.log("After");
