class Main {
  public static void main(String[] args) {
    System.out.println("Hola mundo");

    UberX uberX1 = new UberX("KHX416", new Account("Fabio Escobar", "1140"),
        "Renault", "Sandero");
    uberX1.setPassenger(4);
    uberX1.printDataCar();

    UberVan uberVan1 = new UberVan("KHX123", new Account("Andres Escobar", "2259"));
    uberVan1.setPassenger(6);
    uberVan1.printDataCar();

    UberX uberX2 = new UberX("XHK416", new Account("Alejandro Escobar", "4011"),
        "Renault", "Sandero");
    uberX2.setPassenger(4);
    uberX2.printDataCar();
  }
}