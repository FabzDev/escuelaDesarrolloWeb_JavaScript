/**
 * Complejidad Temporal -> O( n^3 + n + 12 ) Simplificando -> O( n^3 )
 * Complejidad Espacial -> O( n^4 + n^2 + 2n + 8 ) Simplificando -> O( n^4)
 * Espacio Auxiliar -> O( n^4 + n^2 + 8) - O(n^4) Simplificando -> O( n^2 )
 */

async function algoritmoBeta(payloadId, payloadAPI) {
	// S-O(n^4 ), T-O( 0 )
	let arreglosCoinciden = (arreglo1, arreglo2) => {
		// S-O(n^2 ), T-O( 1 )
		if (arreglo1.length != arreglo2.length) {
			// S-O( 1 ), T-O( 1 )
			return false; //T-O( 1 )
		}
		for (let i = 0; i < arreglo1.length; i++) {
			// S-O( 1 ), T-O( n )
			if (arreglo1[i] != arreglo2[i]) {
				//T-O( 1 )
				return false;
				T - O(1); //T-O( 1 )
			}
		}
		return true; //T-O( 1 )
	};
	let respuesta = await fetch(payloadAPI); //S-O( 1 ),T-O( 1 )
	let data = await respuesta.json(); //S-O( 1 ),T-O( 1 )
	let payloadIdArray = payloadId.split(""); //S-O( 1 ),T-O( 1 )
	for (let i = 0; i < data.length; i++) {
		//S-O( 1 ),T-O( n )
		let payloads = data[i].rocket.second_stage.payloads; //S-O( 1 ),
		for (let j = 0; j < payloads.length; j++) {
			//S-O( 1 ),T-O( n )
			if (arreglosCoinciden(payloadIdArray, payloads[j].payload_id.split(""))) {
				//S-O( 1 ),T-O( 1 )
				return true; //T-O( 1 )
			}
		}
	}
	return false; //T-O( 1 )
}
