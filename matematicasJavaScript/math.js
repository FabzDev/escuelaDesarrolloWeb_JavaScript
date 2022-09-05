//CUADRADO
console.group("Cuadrado");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
	ladoCuadrado,
	perimetroCuadrado,
	areaCuadrado,
});

function calcularCuadrado(lado) {
	return {
		perimetro: lado * 4,
		area: lado * lado,
	};
}

console.groupEnd("Cuadrado");

// TRIANGULO
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
	return {
		perimetro: lado1 + lado2 + base,
		area: (base * altura) / 2,
	};
}

console.log({
	ladoTriangulo1,
	ladoTriangulo2,
	ladoTrianguloBase,
	alturaTriangulo,
	perimetroTriangulo,
	areaTriangulo,
});

console.log(
	calcularTriangulo(
		ladoTriangulo1,
		ladoTriangulo2,
		ladoTrianguloBase,
		alturaTriangulo
	)
);
console.groupEnd("Triangulo");

//CIRCULO
console.group("Circulo");
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;

const circunferencia = diametroCirculo * Math.PI;
const areaCirculo = Math.PI * radioCirculo ** 2;

console.log({
	radioCirculo,
	diametroCirculo,
	circunferencia,
	areaCirculo,
});

function calcularCirculo(radio) {
	const diametro = 2 * radio;
	const radioCuadrado = Math.pow(radio, 2);
	return {
		circunferencia: diametro * Math.PI,
		areaCirculo: radioCuadrado * Math.PI,
	};
}

console.groupEnd("Circulo");
