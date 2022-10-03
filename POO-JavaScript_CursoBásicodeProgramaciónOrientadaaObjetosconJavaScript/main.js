// OBJETO LITERAL
const natalia = {
	name: "Natalia",
	age: "20",
	cursosAprobados: [
		"Curso definitivo de HTML y CSS",
		"Curso practico de HTML y CSS",
	],

	aprobarCurso(cursoAprobado) {
		this.cursosAprobados.push(cursoAprobado);
	},
};

natalia.aprobarCurso(
	"Curso Básico de Programación Orientada a Objetos con JavaScript"
);

//OBJETO POO
function Student(name, age, cursosAprobados) {
	this.name = name;
	this.age = age;
	this.cursosAprobados = cursosAprobados;

	// METODO DECLARADO DENTRO DE LA CLASE PROTOTIPO:
	// Student.prototype.aprobarCurso = function (cursoAprobado) {
	//   this.cursosAprobados.push(cursoAprobado);
	// }
}

Student.prototype.aprobarCurso = function (cursoAprobado) {
	this.cursosAprobados.push(cursoAprobado);
};

//LLAMADO DE OBJETO Y METODO
const juanita = new Student("Juanita", 15, ["curso1", "curso2"]);
juanita.aprobarCurso("curso3");

//PROTOTIPOS CON LA SINTAXIS CLASE
class Student2 {
	constructor({ name, age, email, cursosAprobados = [] }) {
		this.age = age;
		this.email = email;
		this.cursosAprobados = cursosAprobados;
		this.name = name;
	}
	// METODO DECLARADO DENTRO DE LA CLASE PROTOTIPO:
	aprobarCurso(cursoAprobado) {
		this.cursosAprobados.push(cursoAprobado);
	}
}

const miguel = new Student2({
	age: 28,
	name: "Miguelito",
	email: "miguelito@platzi.com",
});

miguel.aprobarCurso("Desarrollo Python para ciencia de datos");
