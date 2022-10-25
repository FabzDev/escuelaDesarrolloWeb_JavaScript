const pets = ["cat", "dog", "bat"];

let rta = false;
const isIncluded = "dog";

for (item of pets) {
	if (item === isIncluded) {
		rta = true;
	}
}
console.log("ciclo For:", rta);

const isInclude2 = pets.includes(isIncluded);
console.log("array.includes:", isInclude2);
