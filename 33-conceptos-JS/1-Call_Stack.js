function cortar(ingrediente) {
	console.log("Cortar " + ingrediente);
}

function mezclarIngredientes(n) {
	if (n <= 0) return;

	console.log("Mezclar #" + n);
	mezclarIngredientes(n - 1);
}

function comer() {
	console.log("Comer");
}

function hacerEnsaladaMixta() {
	cortar("tomate");
	cortar("lechuga");
	cortar("cebolla");
	mezclarIngredientes(5);
	comer();
}

hacerEnsaladaMixta();
