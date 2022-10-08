from car import Car
from account import Account

if __name__ == "__main__":
  print("Hola mundo")
  
  car1 = Car("KHX416", Account("Fabio Escobar", "1140"))
  print(vars(car1))
  print(vars(car1.driver))

  # car2 = Car()
  # car2.license = "XHK416"
  # car2.driver = "Alejandro Escobar"
  # print(vars(car2))