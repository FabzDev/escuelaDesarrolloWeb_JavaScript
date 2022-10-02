class Car {
  Integer id;
  String license;
  Account driver;
  Integer passenger;

  public Car(String license, Account driver) {
    this.license = license;
    this.driver = driver;

  }

  void printDataCar() {
    System.out.println(
        "Car licence: " + this.license + " Driver: " + this.driver.name + " Documento: " + this.driver.document
            + " Pasajeros: " + this.passenger);

  }
}
