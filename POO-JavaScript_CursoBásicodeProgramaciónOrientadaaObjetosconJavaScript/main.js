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
	learningPaths: [
		{
			name: "desarrolloWeb",
			contenido: "Curso 1, Curso2, Curso3",
		},
		{
			name: "englishAcademy",
			contenido: "Curso 4, Curso5, Curso6",
		},
	],
});
