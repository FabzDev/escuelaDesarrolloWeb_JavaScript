class Student {
	constructor({
		name,
		username,
		email = undefined,
		facebook = undefined,
		twitter = undefined,
		instagram = undefined,
		approvedCourses = [],
		learningPaths = [],
	}) {
		this.name = name;
		this.email = email;
		this.username = username;
		this.socialMedia = {
			facebook,
			instagram,
			twitter,
		};
		this.approvedCourses = approvedCourses;
		this.learningPaths = learningPaths;
	}
}

class path {
	constructor({ name, contenido = [] }) {
		this.name = name;
		this.contenido = contenido;
	}
}

const fabio = new Student({
	name: "Fabio Escobar",
	username: "fabio04",
	email: "fabioescobar02@hotmail.com",
	facebook: "@fabioalejandro",
	twitter: "@fabiopolitica",
	instagram: "@fabioelpaspi",
	approvedCourses: [
		"Curso basico de programacion",
		"Curso gratis de programacion",
		"Curso de git hub",
	],
	learningPaths: [desarrolloWeb, dataSciense, englishAcademy],
});

const desarrolloWeb = new path({
	name: "Escuela de desarrollo Web",
	contenido: ["Curso1", "Curso2", "Curso3"],
});
const dataSciense = new path({
	name: "Escuela de dataSciense",
	contenido: ["Curso4", "Curso5", "Curso6"],
});
const englishAcademy = new path({
	name: "English Academy",
	contenido: ["Curso7", "Curso8", "Curso9"],
});
