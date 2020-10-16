<?php
include ("../controler/Cliente.php");
switch ($variable) {
    case "Adm": //Administrador
        header("Location: ../controler/Administrador.php?");
        break;
    case "Cid": //Ciudad
        header("Location: ../controler/Ciudad.php?");
        break;
    case "ComP"://ComentProducto
        header("Location: ../controler/ComentProducto.php");
        break;
    case "Clit"://Cliente
        header("Location: ../controler/Cliente.php?");
        break;
    case "Vet": //Ventas
        break;
    case $value:
        break;
    case $value:
        break;
    case $value:
        break;
    default:
        break;
}

