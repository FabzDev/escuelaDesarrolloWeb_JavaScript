// variables

var a; // declarando
var b = "b"; // declarando y asignando
b = "bb"; // reasignación
var a = "aa"; // redeclaración

// Global Scope

var fruit = "apple";

function bestFruit() {
	console.log(fruit);
}

bestFruit();

function bestCountry() {
	country = "Colombia"; // declarando y asignando una variable GLOBAL
	console.log(country);
}

bestCountry();
console.log(country);
