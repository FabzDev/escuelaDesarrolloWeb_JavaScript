<?php
require_once("car.php");

class UberVan extends Car {
  public $typeCarAccepted;
  public $seatsMaterial;

  public function __construct($license, $driver){
    parent::__construct($license, $driver);
  }
  public function printDataCar(){
    if ($this->passenger >= 6) {
    echo "Licencia: $this->license , Driver: ".$this->driver->name. ", Pasajeros: " . $this->getPassenger() . "<br>";
    } else{
      echo "Los vehiculos UberVan deben tener al menos 6 asientos disponibles para pasajeros<br>";
    }
  }

}
?>