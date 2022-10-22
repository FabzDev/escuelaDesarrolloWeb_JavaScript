//enhanced object literals

function newUser(user, age, country, uId) {
	return {
		user: user, // Antigua forma de declarar
		age, // Nueva forma de declarar
		country, // Nueva forma de declarar
		id: uId,
	};
}

console.log(newUser("fabioe", 32, "CO", 123));
