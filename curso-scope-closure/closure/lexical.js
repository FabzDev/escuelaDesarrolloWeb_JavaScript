const myGlobal = 0;

function myFunction() {
	const myNumber = 1;
	console.log(myGlobal);

	function parent() {
		//function interna nivel 2
		const inner = 2;
		console.log(myNumber, myGlobal);

		function child() {
			// function interna nivel 3
			console.log(inner, myNumber, myGlobal);
		}
	}
}
