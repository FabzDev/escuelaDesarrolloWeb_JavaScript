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

const obj1 = {
	a: "a",
	b: "b",
	c: {
		d: "d",
		e: "e",
	},
};

const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);
