// iterador en scope global (var)
function printN1() {
	for (var i = 0; i < 10; i++) {
		function eventually(n) {
			setTimeout(function () {
				console.log(n);
			}, 1000);
		}
		eventually(i);
	}
}

printN1();

// iterador en scope de bloque (let)
function printN2() {
	for (let i = 0; i < 10; i++) {
		setTimeout(function () {
			console.log(i);
		}, 1000);
	}
}

printN2();
