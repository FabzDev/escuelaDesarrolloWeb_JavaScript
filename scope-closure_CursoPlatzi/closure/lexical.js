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

// VIDEO YOUTUBE

function crearContador() {
	let contador = 0;
	return function incrementar() {
		contador++;
		return contador;
	};
}

const contador1 = crearContador();
contador1();
contador1();
contador1();
const contador2 = crearContador();
contador2();
