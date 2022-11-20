const fnAsync = () => {
	return new Promise((resolve, reject) => {
		true ? setTimeout(() => resolve("Async!"), 2000) : reject(new Error("Error Imposible"));
	});
};

const anotherFn = async () => {
	const respuesta = await fnAsync();
	console.log(respuesta);
	console.log("Hello!");
};

console.log("Before");
anotherFn();
console.log("After");
