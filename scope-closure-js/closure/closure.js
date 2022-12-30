function greeting() {
	let username = "Oscar";
	return displayUserName;

	function displayUserName() {
		return `Hello ${username}`;
	}
}

const saludo = greeting();

console.log(saludo);
console.log(saludo());
