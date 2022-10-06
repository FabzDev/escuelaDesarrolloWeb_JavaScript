function videoPlay(id) {
	const urlSecreta = "https://PlatziURLsecreta";
	console.log("Se esta reproduciendo el video " + urlSecreta);
}

function videoStop(id) {
	const urlSecreta = "https://PlatziURLsecreta";
	console.log("Se pauso el video " + urlSecreta);
}

class PlatziClass {
	constructor({ name, videoID }) {
		this.name = name;
		this.videoID = videoID;
	}
	reproducir() {}

	pausar() {}
}

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
		this._username = username;
		this.socialMedia = {
			facebook,
			instagram,
			twitter,
		};
		this.approvedCourses = approvedCourses;
		this.learningPaths = learningPaths;
	}
	get username() {
		return this._username;
	}

	set name(newUsername) {
		this._username = newUsername;
	}
}

class Path {
	constructor({ name, contenido = [] }) {
		this._name = name;
		this.contenido = contenido;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		this._name = newName;
	}
}

class Courses {
	constructor({ name, clases = [] }) {
		this._name = name;
		this.clases = clases;
	}
	get name() {
		return this._name;
	}
}
const cursoProgBasica = new Courses({
	name: "Programacion Básica",
	clases: ["clase1", "clase2", "clase3"],
});

const cursoPython = new Courses({
	name: "Introducción a Python",
	clases: ["clase4", "clase5", "clase6"],
});

const cursoJava = new Courses({
	name: "Programacion en Java",
	clases: ["clase1", "clase2", "clase3"],
});

const desarrolloWeb = new Path({
	name: "Escuela de desarrollo Web",
	contenido: [cursoProgBasica, "Curso2", "Curso3"],
});
const dataSciense = new Path({
	name: "Escuela de dataSciense",
	contenido: [cursoProgBasica, "Curso5", "Curso6"],
});
const englishAcademy = new Path({
	name: "English Academy",
	contenido: [cursoProgBasica, "Curso8", "Curso9"],
});

const fabio = new Student({
	name: "Fabio Escobar",
	username: "fabio04",
	email: "fabioescobar02@hotmail.com",
	facebook: "@fabioalejandro",
	twitter: "@fabiopolitica",
	instagram: "@fabioelpaspi",
	approvedCourses: [cursoProgBasica, cursoPython, cursoJava],
	learningPaths: [desarrolloWeb, dataSciense, englishAcademy],
});
