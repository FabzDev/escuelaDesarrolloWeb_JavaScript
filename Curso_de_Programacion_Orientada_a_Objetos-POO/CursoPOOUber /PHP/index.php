<?php
require_once('car.php');
require_once('uberX.php');
require_once('account.php');

$uberX = new UberX("KHX416", new Account("Fabio Escobar", "1140"), "Renault", "Sandero");

$uberX->printDataCar();

?> 