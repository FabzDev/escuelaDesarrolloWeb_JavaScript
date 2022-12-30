const team = [
	{
		name: "Nicolas",
		age: 12,
	},
	{
		name: "Andrea",
		age: 8,
	},
	{
		name: "Zulema",
		age: 2,
	},
	{
		name: "Santiago",
		age: 15,
	},
];

const team1 = team.every((item) => item.age < 15);
console.log("Cumple condición de edad? ", team1);
