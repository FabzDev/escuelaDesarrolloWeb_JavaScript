/**
 * Complejidad Temporal -> O( n^2 + 6 ) Simplificando -> O( n^2 )
 * Complejidad Espacial -> O( n^4 + 3 ) Simplificando -> O( n^4 )
 * Espacio Auxiliar -> O( n^4 + 3 ) - O( n^4) = O( 3) Simplificando -> O( 1 )
 */
async function algoritmoAlfa(payloadId, payloadAPI) {
	// S-O( n^4 ), T-O(  )
	let respuesta = await fetch(payloadAPI); // S-O( 1 ), T-O( 1 )
	let data = await respuesta.json(); // S-O(  ), T-O( 1 )
	for (let i = 0; i < data.length; i++) {
		// S-O( 1 ), T-O( n )
		let payloads = data[i].rocket.second_stage["payloads"]; // S-O( 1 ), T-O( 1 )
		for (let j = 0; j < payloads.length; j++) {
			// S-O(  ), T-O( n )
			if (payloadId == payloads[j].payload_id) {
				// S-O(  ), T-O( 1 )
				return true; // S-O(  ), T-O( 1 )
			}
		}
	}
	return false; // S-O( ), T-O( 1 )
}
