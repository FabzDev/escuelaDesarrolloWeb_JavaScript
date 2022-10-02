<?php
require_once("car.php");
require_once("uberX.php");
require_once("account.php");

$car1 = new UberX("KHX416", new Account("Fabio Escobar", "1140"), "Renault", "Sandero");
$car1->printDataCar();