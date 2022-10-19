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

function createLearningPath({ name = requiredParam("name"), courses = [] }) {
	const private = {
		_name: name,
	};

	const public = {
		get name() {
			return private["_name"];
		},

		set name(newName) {
			if (newName.length != 0) {
				private["_name"] = newName;
			} else {
				console.warn("Tu nombre debe tener al menos 1 caracter");
			}
		},
	};
	return public;
}

function createStudent({
	name = requiredParam("name "),
	age = requiredParam("age "),
	email = requiredParam("email "),
	twitter,
	instagram,
	facebook,
	approvedCourses = [],
	learningPaths = [],
} = {}) {
	const private = {
		_name: name,
	};

	const public = {
		age: age,
		email: email,
		socialMedia: {
			twitter: twitter,
			instagram: instagram,
			facebook: facebook,
		},
		approvedCourses: approvedCourses,
		learningPaths: learningPaths,

		get name() {
			return private["_name"];
		},

		set name(newName) {
			if (newName.length != 0) {
				private["_name"] = newName;
			} else {
				console.warn("Tu nombre debe tener al menos 1 caracter");
			}
		},
	};

	// Object.defineProperty(public, "readName", {
	// 	writable: false,
	// 	configurable: false,
	// });

	// Object.defineProperty(public, "changeName", {
	// 	writable: false,
	// 	configurable: false,
	// });

	return public;
}

function requiredParam(param) {
	throw console.error(param + "es un parametro requerido");
}

const fabio = createStudent({
	name: "Fabito",
	age: 12,
	email: "fabito37@hotmail.com",
	twitter: "fabitoPlay",
});
