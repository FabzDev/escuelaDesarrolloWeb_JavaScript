<?php

class Car extends Account{
public $id;
public $license;
public $driver;
public $passanger;



public function __construct($license, $driver){
  $this->license = $license;
  $this->$driver = $driver;
}

public function printDataCar(){
  echo $this->license;
}

}
?>