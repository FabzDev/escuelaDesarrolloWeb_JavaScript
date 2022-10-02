<?php
require_once("car.php");
require_once("uberX.php");
require_once("account.php");
require_once("uberVan.php");


$car1 = new UberX("KHX416", new Account("Fabio Escobar", "1140"), "Renault", "Sandero");
$car1->setPassenger(4);
$car1->printDataCar();

$car2 = new UberVan("XHK416", new Account("Alejandro Escobar", "1140"), "Toyota", "Prado");
$car2->setPassenger(8);
$car2->printDataCar();