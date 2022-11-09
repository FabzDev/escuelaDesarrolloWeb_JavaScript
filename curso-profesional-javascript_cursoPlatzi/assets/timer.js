function printN() {
	for (i = 0; i < 10; i++) {
		function eventually(n) {
			setTimeout(function () {
				console.log(n);
			}, 1000);
		}
		eventually(i);
	}
}

printN();
