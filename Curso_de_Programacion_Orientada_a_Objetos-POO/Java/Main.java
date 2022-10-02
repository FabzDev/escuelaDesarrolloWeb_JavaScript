class Main {
  public static void main(String[] args) {
    System.out.println("Hola mundo");

    UberX uberX1 = new UberX("KHX416", new Account("Fabio Escobar", "1140"), "Renault", "Sandero");
    uberX1.passenger = 4;
    uberX1.printDataUberX();

    UberX uberX2 = new UberX("XHK416", new Account("Alejandro Escobar", "4011"), "Renault", "Sandero");
    uberX2.passenger = 3;
    uberX2.printDataUberX();
  }
}