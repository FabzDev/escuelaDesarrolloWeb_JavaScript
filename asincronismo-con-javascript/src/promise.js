const prom = new Promise(function (res, rej) {
	res(`Hey developer!`);
});

const cows = 15;

const countCows = new Promise(function (res, rej) {
	if (cows > 10) {
		res(`We have ${15} cows on the farm`);
	} else {
		rej("There is no enough cows in the farm");
	}
});

countCows
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => console.log("Finally"));

function delay(time, message) {
	return new Promise(function (resolve, reject) {
		window.setTimeout(() => resolve(message), time);
	});
}

delay(2000, "Hello after 2s").then((message) => console.log(message));

function delay(time, message) {
	return new Promise((resolve, reject) => {
		window.setTimeout(() => {
			resolve(message);
		}, time);
	});
}
