const users = [
	{ userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
	{ userId: 2, username: "Mike", attributes: ["Lovely"] },
	{ userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

const usersFlat = users.map((item) => item.attributes).flat();
console.log("con flat: ", usersFlat);

const usersFlatMap = users.map((item) => item.attributes).flat();
console.log("con flat-map: ", usersFlatMap);
