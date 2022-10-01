from car import Car

if __name__ == "__main__":
  print("Hola mundo")
  car1 = Car()
  car1.license = "KHX416"
  car1.driver = "Fabio Escobar"
  print(vars(car1))

  car2 = Car()
  car2.license = "XHK416"
  car2.driver = "Alejandro Escobar"
  print(vars(car2))