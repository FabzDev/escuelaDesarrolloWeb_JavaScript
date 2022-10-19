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

// const stringifiedComplexObj = JSON.stringify(obj1);
// const obj2 = JSON.parse(stringifiedComplexObj);

// function recursiva(){
// 	if (/* validación*/){
// 		// llamados recursivos
// 	} else {
// 		// llamados normales, sin recursividad
// 	}
// }

const obj1 = {
	a: "a",
	b: "b",
	c: {
		d: "d",
		e: "e",
	},
	editA() {
		this.a = "AAAAAA";
	},
};

function isObject(obj) {
	return typeof obj == "object";
}

function isArray(arr) {
	return Array.isArray(arr);
}

function deepCopy(subject) {
	let copySubject;
	const subjectIsArray = isArray(subject);
	const subjectIsObject = isObject(subject);

	if (subjectIsArray) {
		copySubject = [];
	} else if (subjectIsObject) {
		copySubject = {};
	} else {
		return subject;
	}

	for (key in subject) {
		const keyIsObject = isObject(subject[key]);
		const keyIsArray = isArray(subject[key]);
		if (keyIsObject) {
			copySubject[key] = deepCopy(subject[key]);
		} else if (keyIsArray) {
			copySubject.push(subject[key]);
		} else {
			copySubject[key] = subject[key];
		}
	}

	return copySubject;
}

// const studentBase = {
// 	name: undefined,
// 	email: undefined,
// 	age: undefined,
// 	approvedCourses: undefined,
// 	learningPaths: undefined,
// 	socialMedia: {
// 		twitter: undefined,
// 		insagram: undefined,
// 		facebook: undefined,
// 	},
// };

// const juan = deepCopy(studentBase);
// // Object.defineProperty(juan, "name", {
// // 	value: "juanito",
// // 	configurable: false,
// // });

// Object.seal(juan);
// Object.isSealed(juan);

//
// INSTANCE OF / LEARNING PATHS / STUDENT CLASS / ETC
//

function LearningPath({ name = requiredParam("name"), courses = [] }) {
	this.name = name;
	this.courses = courses;

	// const private = {
	// 	_name: name,
	// 	_courses: courses,
	// };

	// 	const public = {
	// 		get name() {
	// 			return private["_name"];
	// 		},

	// 		set name(newName) {
	// 			if (newName.length != 0) {
	// 				private["_name"] = newName;
	// 			} else {
	// 				console.warn("Tu nombre debe tener al menos 1 caracter");
	// 			}
	// 		},

	// 		get courses() {
	// 			return private["_courses"];
	// 		},
	// 	};
	// 	return public;
}

function Student({
	name = requiredParam("name "),
	age = requiredParam("age "),
	email = requiredParam("email "),
	twitter,
	instagram,
	facebook,
	approvedCourses = [],
	learningPaths = [],
} = {}) {
	if (!isArray(learningPaths)) {
		console.warn("LearningPath no es un array");
		return;
	}

	for (paths of learningPaths) {
		if (!paths instanceof learningPaths) {
			console.warn("Uno de los cursos no es un array");
			return;
		}
	}

	this.name = name;
	this.age = age;
	this.email = email;
	this.twitter = twitter;
	this.instagram = instagram;
	this.facebook = facebook;
	this.approvedCourses = approvedCourses;
	this.learningPaths = learningPaths;

	// const private = {
	// 	_name: name,
	// 	_learningPaths: learningPaths,
	// };

	// const public = {
	// 	age: age,
	// 	email: email,
	// 	socialMedia: {
	// 		twitter: twitter,
	// 		instagram: instagram,
	// 		facebook: facebook,
	// 	},
	// 	approvedCourses: approvedCourses,

	// 	get name() {
	// 		return private["_name"];
	// 	},

	// 	set name(newName) {
	// 		if (newName.length != 0) {
	// 			private["_name"] = newName;
	// 		} else {
	// 			console.warn("Tu nombre debe tener al menos 1 caracter");
	// 		}
	// 	},

	// 	get learningPaths() {
	// 		return private["_learningPaths"];
	// 	},

	// 	set learningPaths(newLP) {
	// 		if (!newLP.name) {
	// 			console.warn("Tu Learning Path debe tener un nombre");
	// 			return;
	// 		}
	// 		if (!newLP.courses) {
	// 			console.warn("Tu Learning Path no tiene courses");
	// 			return;
	// 		}
	// 		if (!isArray(newLP.courses)) {
	// 			console.warn("Tu Learning Path no es una lista de courses");
	// 		}
	// 		private["_learningPaths"].push(newLP);
	// 	},
	// };
	// return public;
}

function requiredParam(param) {
	throw console.error(param + "es un parametro requerido");
}

const fabio = new Student({
	name: "Fabito",
	age: 12,
	email: "fabito37@hotmail.com",
	twitter: "fabitoPlay",
});
