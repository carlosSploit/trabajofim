<?php

require 'Usuario.php';

class Cliente extends usuario {
    var $idClien = "";
    var $us = "";
    var $User="" ;
    var $Pass = 000000000;
    
    //----------- COSTRUCTOR -------------
    function __construct($nombre, $dni, $correro, $telefono, $foto,$idClien, $User, $Pass) {
        $this->setIdClien($idClien);
        $this->setUser($User);
        $this->setPass($Pass);
        $this->setDni($dni);
        $this->setNombre($nombre);
        $this->setCorrero($correro);
        $this->setTelefono($telefono);
        $this->setFoto($foto);
    }

    //--------- GETTER Y SETTER ------------------
    
    function getUser() {
        return $this->User;
    }

    function getPass() {
        return $this->Pass;
    }

    function setUser($User) {
        $this->User = $User;
    }

    function setPass($Pass) {
        $this->Pass = $Pass;
    }

    function getIdClien() {
        return $this->idClien;
    }

    function setIdClien($idClien) {
        $this->idClien = $idClien;
    }

}


