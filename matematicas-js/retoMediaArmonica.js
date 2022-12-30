const velocidades = [15, 17, 14, 13, 12];
const promArmVel = calcVel(velocidades);
function calcVel(arr) {
	if (arr.includes(0)) {
		console.log(
			"Para calcular la media armonica ninguno de los elementos puede ser nulo."
		);
	} else {
		let sumVel = 0;
		for (vel of arr) {
			let partialVel = 1 / vel;
			sumVel += partialVel;
		}
		const resultadoVel = Math.round(arr.length / sumVel);
		console.log(
			"La media armonica de las velocidades ingresadas es: " +
				resultadoVel +
				" km/h."
		);
		return resultadoVel;
	}
}
