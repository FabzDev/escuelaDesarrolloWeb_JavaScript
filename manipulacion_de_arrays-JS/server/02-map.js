// Sin MAP

const letters = ["a", "b", "c", "d", "e"];

const newArray = [];
for (eachValue of letters) {
	const element = eachValue + "++";
	newArray.push(element);
}

console.log("Array original :" + letters); // Array original :a,b,c,d,e
console.log("Array nuevo :" + newArray); // Array nuevo :a++,b++,c++,d++,e++

// Con MAP
const letters2 = ["f", "g", "h", "i", "j"];

const newArray2 = letters2.map((eachValue) => eachValue + "++");

console.log("\nArray original :" + letters2); // Array original :a,b,c,d,e
console.log("Array nuevo :" + newArray2); // Array nuevo :a++,b++,c++,d++,e++
