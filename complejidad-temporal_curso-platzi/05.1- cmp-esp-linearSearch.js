/**
 * Complejidad Temporal -> O( n + 3 ) Simplificando -> O( n )
 * Complejidad Espacial -> O( n + 2 ) Simplificando -> O( n )
 * Espacio Auxiliar -> O( n + 2 - n - 1) Simplificando -> O( 1 )
 */
function linearSearch(arreglo, clave) {
	// O( n + 1)
	for (let indice = 0; indice < arreglo.length; indice++) {
		// O( 1 )
		if (arreglo[indice] === clave) {
			return indice;
		}
	}
	return -1;
}
