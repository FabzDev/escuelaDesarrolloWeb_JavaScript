// Reduce reloaded
const arrayReloaded = [1, 3, 2, 3, 3, 1, 10];
const rta5 = arrayReloaded.reduce((obj, item) => {
	if (obj[item]) {
		obj[item] += 1;
	} else {
		obj[item] = 1;
	}
	return obj;
}, {});

console.log(rta5);

// output
// 1: 1,
// 3: 2,
// 2: 1

const data = [
	{
		name: "Nicolas",
		level: "low",
	},
	{
		name: "Andrea",
		level: "medium",
	},
	{
		name: "Zulema",
		level: "high",
	},
	{
		name: "Santiago",
		level: "low",
	},
	{
		name: "Valentina",
		level: "medium",
	},
	{
		name: "Lucia",
		level: "low",
	},
];

const rta = data.reduce((acum, item) => {
	//case low
	if (item["level"] == "low") {
		if (!acum["Low"]) {
			acum["Low"] = 1;
		} else {
			acum["Low"] += 1;
		}
	}
	//case medium
	if (item["level"] == "medium") {
		if (!acum["Medium"]) {
			acum["Medium"] = 1;
		} else {
			acum["Medium"] += 1;
		}
	}
	//case high
	if (item["level"] == "high") {
		if (!acum["High"]) {
			acum["High"] = 1;
		} else {
			acum["High"] += 1;
		}
	}
	return acum;
}, {});

console.log(rta);
// OUTPUT
// low: 3
// medium: 2
// high: 4

// REDUCE RETO
