<?php
require_once("car.php");

class UberX extends Car {
  public $brand;
  public $model;

  public function __construct($license, $driver, $brand, $model){
    parent::__construct($license, $driver);
    $this->brand = $brand;
    $this->model = $model;
  }

  public function printDataCar(){
    if ($this->passenger >= 4) {
    echo "Licencia: $this->license , Driver: ".$this->driver->name. ", Pasajeros: " . $this->getPassenger(). ", Marca: $this->brand" . ", Modelo: $this->model" . "<br>";
    } else{
      echo "Los vehiculos UberX deben tener al menos 4 asientos disponibles para pasajeros <br>";
    }
  }


  // public function printDataUberX(){
  //   echo "Licencia: $this->license, Driver: " , $this->driver->name , ", Marca: " , $this->brand , ", Modelo: " . $this->model;
  // }
}
?>