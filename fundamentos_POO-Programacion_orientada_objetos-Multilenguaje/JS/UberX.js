class UberX extends Car {
	constructor(license, driver, brand, model) {
		super(license, driver);
		this.brand = brand;
		this.model = model;
	}

	printDataUberX() {
		console.log(
			"Car licence: " +
				this.license +
				" Driver: " +
				this.driver.name +
				" Documento: " +
				this.driver.document +
				" Marca: " +
				this.brand +
				" Modelo: " +
				this.model
		);
	}
}
