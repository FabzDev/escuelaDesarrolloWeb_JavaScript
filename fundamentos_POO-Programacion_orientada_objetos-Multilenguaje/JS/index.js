// var car1 = new Car();
// car1.license = "KHX416";
// car1.driver = "Fabio Escobar";
// console.log("Car licence: " + car1.license + " Driver: " + car1.driver);

var car1 = new Car(
	"KHX416",
	new Account("Fabio Escobar", "1140"),
	"Renault",
	"Sandero"
);
car1.passenger = 4;
car1.printDataCar();

var car2 = new UberX(
	"XHK416",
	new Account("Alejandro Escobar", "4011"),
	"Renault",
	"Sandero"
);
car1.passenger = 3;
car2.printDataUberX();
