// const fabio = {
// 	name: "Fabio",
// 	age: 32,
// 	approvedCourses: ["Curso 1"],
// 	addCourse(newCourse) {
// 		console.log("This", this);
// 		console.log("This.approveCourses", this.approvedCourses);
// 		this.approvedCourses.push(newCourse);
// 	},
// };

// const obj1 = {
// 	a: "a",
// 	b: "b",
// 	c: {
// 		d: "d",
// 		e: "e",
// 	},
// };

// const stringifiedComplexObj = JSON.stringify(obj1);
// const obj2 = JSON.parse(stringifiedComplexObj);

// function recursiva(){
// 	if (/* validación*/){
// 		// llamados recursivos
// 	} else {
// 		// llamados normales, sin recursividad
// 	}
// }
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 5665, 2, 5, 5, 41, 2, 3, 6, 5];
let numero = 0;

// for (let index = 0; index < numeros.length; index++) {
// 	numero = numeros[index];
// 	console.log({ index, numero });
// }

function recursiva(numbersArray) {
	if (numbersArray.length != 0) {
		const firstNum = numbersArray[0];
		console.log(firstNum);
		numbersArray.shift();
		return recursiva(numbersArray);
	}
}

recursiva(numeros);
