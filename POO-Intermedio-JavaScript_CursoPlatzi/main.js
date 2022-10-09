const fabio = {
	name: "Fabio",
	age: 32,
	approvedCourses: ["Curso 1"],
	addCourse(newCourse) {
		console.log("This", this);
		console.log("This.approveCourses", this.approvedCourses);
		this.approvedCourses.push(newCourse);
	},
};
// console.log(Object.keys(fabio));
// console.log(Object.getOwnPropertyNames(fabio));
// console.log(Object.entries(fabio));

Object.defineProperty(fabio, "pruebaNasa", {
	value: "Extreterrestre",
	enumerable: false,
	writable: false,
	configurable: false,
});

Object.defineProperty(fabio, "navigator", {
	value: "Chrome",
	enumerable: false,
	writable: true,
	configurable: true,
});

Object.defineProperty(fabio, "editor", {
	value: "VSCode",
	enumerable: true,
	writable: false,
	configurable: true,
});

Object.defineProperty(fabio, "terminal", {
	value: "WSL",
	enumerable: true,
	writable: true,
	configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(fabio));
