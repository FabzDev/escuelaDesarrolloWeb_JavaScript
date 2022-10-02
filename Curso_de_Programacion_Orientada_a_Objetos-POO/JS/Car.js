function Car(license, driver) {
	this.id;
	this.license = license;
	this.driver = driver;
	this.passenger;
}

Car.prototype.printDataCar = function () {
	console.log(
		"Car licence: " +
			this.license +
			" Driver: " +
			this.driver.name +
			" Documento: " +
			this.driver.document
	);
};
