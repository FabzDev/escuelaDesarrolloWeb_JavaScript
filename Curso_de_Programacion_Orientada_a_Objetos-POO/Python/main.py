from car import Car
from account import Account

if __name__ == "__main__":
  print("Hola Mundo")

  car = Car("KHX416", Account("Fabio Escobar", "1140"))
  print(vars(car))
  print(vars(car.driver))
  