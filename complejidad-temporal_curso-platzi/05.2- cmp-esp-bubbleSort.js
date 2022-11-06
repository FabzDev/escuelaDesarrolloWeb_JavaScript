/**
 * Complejidad Temporal -> O( n^2 + 6 ) Simplificando -> O(n^2)
 * Complejidad Espacial -> O( n + 1 + 1 + 1 + 1) = O( n + 4) -> Simplificando -> O(n)
 * Espacio Auxiliar -> O( n + 1 + 1 + 1 + 1) - O( n ) = O( 4 ) -> Simplificando -> O( 1 )
 */
function bubbleSort(arreglo) {
	// O( n )
	let longitud = arreglo.length; // O( 1 )
	for (let i = 0; i < longitud; i++) {
		// O( 1 )
		for (let j = 0; j < longitud; j++) {
			// O( 1 )
			if (arreglo[j] > arreglo[j + 1]) {
				let temporal = arreglo[j]; // O( 1 )
				arreglo[j] = arreglo[j + 1];
				arreglo[j + 1] = temporal;
			}
		}
	}
	return arreglo;
}
