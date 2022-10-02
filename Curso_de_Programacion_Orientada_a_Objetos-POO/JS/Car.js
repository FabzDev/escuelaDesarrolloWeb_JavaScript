class Car {
	constructor(license, driver) {
		this.id;
		this.license = license;
		this.driver = driver;
		this.passenger;
	}
	printDataCar() {
		console.log(
			"Car licence: " +
				this.license +
				" Driver: " +
				this.driver.name +
				" Documento: " +
				this.driver.document
		);
	}
}
