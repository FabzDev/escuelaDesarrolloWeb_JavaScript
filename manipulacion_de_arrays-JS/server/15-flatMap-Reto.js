const calendars = {
	primaryCalendar: [
		{
			startDate: new Date(2021, 1, 1, 15),
			endDate: new Date(2021, 1, 1, 15, 30),
			title: "Cita 1",
		},
		{
			startDate: new Date(2021, 1, 1, 17),
			endDate: new Date(2021, 1, 1, 18),
			title: "Cita 2",
		},
	],
	secondaryCalendar: [
		{
			startDate: new Date(2021, 1, 1, 12),
			endDate: new Date(2021, 1, 1, 12, 30),
			title: "Cita 2",
		},
		{
			startDate: new Date(2021, 1, 1, 9),
			endDate: new Date(2021, 1, 1, 10),
			title: "Cita 4",
		},
	],
};

// calendars.primaryCalendar[0].startDate
const rta3 = Object.values(calendars)
	.flat()
	.map((item) => item.startDate);
console.log(rta3);

// Desafios playgroung

const phyton = [
	"Beautiful is better than ugly",
	"Explicit is better than implicit",
	"Simple is better than complex",
	"Complex is better than complicated",
];

const rta = phyton.join(" ").split(" ").length;
console.log("Fabio: ", rta);

const rta2 = phyton.flatMap((item) => item.split(" ")).length;
console.log("Comunidad: ", rta2);
