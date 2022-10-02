class Main {
  public static void main(String[] args) {
    System.out.println("Hola mundo");

    Car car1 = new Car("KHX416", new Account("Fabio Escobar", "1140"));
    car1.passenger = 4;
    car1.printDataCar();

    Car car2 = new Car("XHK416", new Account("Alejandro Escobar", "4011"));
    car2.passenger = 3;
    car2.printDataCar();
  }
}