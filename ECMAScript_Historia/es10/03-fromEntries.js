const entries = new Map([
	["name", "oscar"],
	["age", 34],
]);
console.log(entries); //Map { 'name' => 'oscar', 'age' => 34 }
console.log(Object.fromEntries(entries)); // { name: 'oscar', age: 34 }

const entries2 = [
	["name", "oscar"],
	["age", 34],
];
console.log(entries2); //[ [ 'name', 'oscar' ], [ 'age', 34 ] ]
console.log(Object.fromEntries(entries2)); // { name: 'oscar', age: 34 }
