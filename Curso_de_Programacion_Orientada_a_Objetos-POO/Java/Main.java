class Main {
  public static void main(String[] args) {
    System.out.println("Hola mundo");

    Car car1 = new Car();
    car1.license = "KHX416";
    car1.driver = "Fabio Escobar";
    car1.passenger = 4;
    car1.printDataCar();

    Car car2 = new Car();
    car2.license = "XHK416";
    car2.driver = "Alejandro Escobar";
    car2.passenger = 2;
    car2.printDataCar();

  }
}