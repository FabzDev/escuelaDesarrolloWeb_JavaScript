const anotherFunction = () => {
	return new Promise((res, rej) => {
		if (true) {
			res("Hey!!");
		} else {
			rej("ugh...");
		}
	});
};

anotherFunction()
	.then((response) => console.log(response))
	.catch((err) => console.log(err));
