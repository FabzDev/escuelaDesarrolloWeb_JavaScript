// https://www.youtube.com/watch?v=KuoIy6EF55o

const generator = function* () {
	yield new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(1);
		}, 2000);
	});
	yield new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(2);
		}, 2000);
	});
};

const generatorObject = generator();

console.log(generator);
console.log(generatorObject);
