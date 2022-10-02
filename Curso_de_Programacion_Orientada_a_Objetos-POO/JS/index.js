// var car1 = new Car();
// car1.license = "KHX416";
// car1.driver = "Fabio Escobar";
// console.log("Car licence: " + car1.license + " Driver: " + car1.driver);

var car1 = new Car("KHX416", new Account("Fabio Escobar", "1140"));
car1.printDataCar();

var car2 = new Car("XHK416", new Account("Alejandro Escobar", "4011"));
car2.printDataCar();
