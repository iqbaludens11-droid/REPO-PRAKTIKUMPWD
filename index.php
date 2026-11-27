<?php
require_once 'Kucing.php';
require_once 'Anjing.php';

$Kucing = new Kucing();
$Anjing = new Anjing();

$Kucing->setNama("Miko");
$Kucing->setUmur(2);

$Anjing->setNama("Bruno");
$Anjing->setUmur(3);

echo "Nama Kucing : " . $Kucing->getNama() . "<br>";
echo "Umur Kucing : " . $Kucing->getUmur() . "<br>";
echo "Suara Kucing : " . $Kucing->getSuara() . "<br>";
echo "<br>";
echo "Nama Anjing : " . $Anjing->getNama() . "<br>";
echo "Umur Anjing : " . $Anjing->getUmur() . "<br>";
echo "Suara Anjing : " . $Anjing->getSuara() . "<br>";
