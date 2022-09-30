from car import Car

if __name__ == "__main__":
  print("Hola Mundo")

  car = Car()
  car.license = "AMS234"
  car.driver = "Andres Herrera"
  print(vars(car))

  car2 = Car()
  car2.driver = "Fabio"
  car2.license = "KHX416"
  print(vars(car2))