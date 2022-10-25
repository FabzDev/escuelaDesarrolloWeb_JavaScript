// Reduce reloaded

const arrayReloaded = [1, 3, 2, 3, 3, 1, 10];

const rta = arrayReloaded.reduce((obj, item) => {
	if (obj[item]) {
		obj[item] += 1;
	} else {
		obj[item] = 1;
	}
	return obj;
}, {});

console.log(rta);

// output
// 1: 1,
// 3: 2,
// 2: 1
