class UberX extends Car {
  String brand;
  String model;

  public UberX(String license, Account driver, String brand, String model) {
    super(license, driver);
    this.brand = brand;
    this.model = model;

  }

  @Override
  void printDataCar() {
    System.out.println(
        "Car licence: " + getLicense() + " Driver: " + getDriver().name + "Documento: " + getDriver().document
            + " Pasajeros: " + getPassenger() + " Marca: " + brand + " Modelo: " +
            model);
  }
}

// void printDataUberX() {
// System.out.println(
// "Car licence: " + getLicense() + " Driver: " + getDriver().name + "Documento:
// " + getDriver().document
// + " Pasajeros: " + getPassenger() + " Marca: " + this.brand + " Modelo: " +
// this.model);
// }
