// array destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

// object destructuring

let user = { username: "Fabio", age: 32 };
let { username, age } = user;
console.log(username, user.age);

// spead operator

let person = { name: "Fabio", age: 32 };
let country = "CO";

let data = { id: 1, ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
	console.log(values);
	console.log(num + values[1]);
	return num + values[1];
}

sum(1, 1, 3, 3);
