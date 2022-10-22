// declarando
class User {}
// instancia de una clase
// const user1 = new User();

class user {
	// metodos
	greeting() {
		return "Hello World!";
	}
}

const fabio04 = new user();
console.log(fabio04.greeting());
const yuliet2horta = new user();
console.log(yuliet2horta.greeting());

// constructor

class user {
	// Constructor
	constructor() {
		console.log("Nuevo Usuario");
	}
	greeting() {
		return "Hello World!";
	}
}

const alejandro02 = new user();

// this
class user {
	constructor(name) {
		this.name = name;
	}
	// metodos
	speak() {
		return "Hello";
	}
	greeting() {
		return `${this.speak()} ${this.name}!`;
	}
}

const laurita = new user("Laura");
console.log(laurita.greeting());

// setters and getters

class user {
	// constructor
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	// metodos
	speak() {
		return "Hello";
	}
	greeting() {
		return `${this.speak()} ${this.name}!`;
	}
	get uAge() {
		return this.age;
	}

	set uAge(n) {
		this.age = n;
	}
}

const mrButi = new user("Fabio", 32);
console.log(mrButi.uAge);
console.log((mrButi.uAge = 20));
