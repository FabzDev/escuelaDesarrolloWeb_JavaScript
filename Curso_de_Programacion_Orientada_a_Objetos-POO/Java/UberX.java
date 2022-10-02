class UberX extends Car {
  String brand;
  String model;

  public UberX(String license, Account driver, String brand, String model) {
    super(license, driver);
    this.brand = brand;
    this.model = model;
  }

  void printDataUberX() {
    System.out.println(
        "Car licence: " + this.license + " Driver: " + this.driver.name + " Documento: " + this.driver.document
            + " Pasajeros: " + this.passenger + " Marca: " + this.brand + " Modelo: " + this.model);

  }

}
