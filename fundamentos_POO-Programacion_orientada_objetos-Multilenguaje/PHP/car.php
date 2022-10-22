<?php
require_once("account.php");

class Car extends Account{
  public $id;
  public $license;
  public $driver;
  protected $passenger;

  public function __construct($license, $driver){
    $this->license = $license;
    $this->driver = $driver;
  }

  public function printDataCar(){
    echo "<br>Licencia: $this->license , Driver: ".$this->driver->name. ", Pasajeros: " . $this->getPassenger();
    }
  

  public function getPassenger(){
    return $this->passenger;
  }

  public function setPassenger($passenger){
    $this->passenger = $passenger;
  }
}
?>