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
// console.log(Object.getOwnPropertyDescriptors(fabio));

Object.defineProperty(fabio, "carrera", {
	value: "Ingenieria",
	writable: true,
	enumerable: true,
	configurable: true,
});
