const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

// con For
const newArray = [...elements];

for (item of otherElements) {
	newArray.push(item);
}
console.log("ciclo for: ", newArray);

//con ... spread
const newArray2 = [...elements, ...otherElements];
console.log("... : ", newArray2);

const newArray3 = elements.concat(otherElements);
console.log("array.concat(): ", newArray3);
