function newUser(name, age, country) {
	var name = name || "Oscar";
	var age = age || "34";
	var country = country || "MX";
	console.log(name, age, country);
}

newUser();

function newUser2(name = "Fabio", age = 32, country = "CO") {
	console.log(name, age, country);
}

newUser2();
newUser2("Yulieth", 25, "CO");
