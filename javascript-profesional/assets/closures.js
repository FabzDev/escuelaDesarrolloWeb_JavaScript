// IIFE: Inmediatly invoque function expression
(function () {
	let color = "green";

	function printColor() {
		console.log(color);
	}

	printColor();
})();

function mkColorPrinter(color) {
	let colorMessage = `El color es ${color}`;
	return function () {
		console.log(colorMessage);
	};
}

const printGreen = mkColorPrinter("green");

function makeCounter(n) {
	let count = n;
	return {
		increase: function () {
			count++;
		},
		decrease: function () {
			count--;
		},
		getCount: function () {
			return count;
		},
	};
}

let counter = makeCounter(7);
