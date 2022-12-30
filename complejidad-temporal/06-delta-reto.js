/**
 * Complejidad Temporal -> O( n + n + 12 ) = O( 2n + 12) Simplificando -> O( n )
 * Complejidad Espacial -> O( n^4 + n + n + 5) = O( n^4 + 2n + 5) Simplificando -> O( n^4 )
 * Espacio Auxiliar -> O( n^4 + 2n + 5) - O( n^4 + 1 ) = O( 2n + 5)  Simplificando -> O( n )
 */

async function algoritmoDelta(payloadId, payloadAPI) {
	// S-O( n^4 ), T-O(  )
	let respuesta = await fetch(payloadAPI); // S-O( 1 ), T-O( 1 )
	let data = await respuesta.json(); // S-O( 1 ), T-O( 1 )
	let listaDePayloads = []; // S-O( n ), T-O( 1 )
	let longitudData = data.length; // S-O( 1 ), T-O( 1 )

	for (let i = 0; i < longitudData; i++) {
		// S-O( 1 ), T-O( n )
		let payloads = data[i].rocket; // S-O( 1 ), T-O( 1 )
		listaDePayloads.push(...payloads.second_stage["payloads"]); // S-O( n ), T-O( 1 )
	}

	for (let i = 0; i < listaDePayloads.length; i++) {
		// S-O( 1 ), T-O( 1 )
		let localPayloadId = listaDePayloads[i].payload_id; // S-O(  ), T-O( 1 )
		if (localPayloadId == payloadId) {
			// S-O(  ), T-O( 1 )
			return true; // S-O(  ), T-O( 1 )
		} else {
			// S-O(  ), T-O( 1 )
			return false; // S-O(  ), T-O( 1 )
		}
	}
}
