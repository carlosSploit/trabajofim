<?php

class Cliente {
    var $idClien = "";
    var $us = "";
    var $User="" ;
    var $Pass = 000000000;
    
    //----------- COSTRUCTOR -------------
    function __construct($nombre, $dni, $correro, $telefono, $foto,$idClien, $User, $Pass) {
        $this->setIdClien($idClien);
        $this->setUser($User);
        $this->setPass($Pass);
        $this->us = new usuario($nombre, $dni, $correro, $telefono, $foto);
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


