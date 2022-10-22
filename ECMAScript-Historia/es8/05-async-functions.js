const fnAsync = () => {
	return new Promise((resolve, reject) => {
		true // verdadero?
			? setTimeout(() => resolve("Async!"), 1500) // entonces has esto
			: reject(new Error("eHerRoR!")); // sino (falso) has esto otro
	});
};

const qualityFn = async () => {
	//async debe ir antes del argunmento de la arrow function
	const something = await fnAsync(); // await debe ir antes de llamado a la funcion de la promesa
	console.log(something);
	console.log("lost(?)");
};

console.log("Before"); // se ejecuta inmediatamente
qualityFn(); // espera la promesa de 1.5 segundos
console.log("after"); // se ejecuta inmediatamente despues de "Before"
// 1.5 segundos despues se ejecuta somethng->fnAsync-> "Async!"
