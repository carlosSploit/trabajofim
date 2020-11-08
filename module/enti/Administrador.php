<?php

require_once 'Usuario.php';

class Administrador extends usuario{
    var $idAdminis=0;
    var $User= "" ;
    var $Pass = 000000000;
    var $tipTrabajo = "";
    
    //----------- COSTRUCTOR -------------
    
    function __construct($nombre, $dni, $correro, $telefono, $foto,$idAdminis, $User, $Pass,$tipTrabajo) {
        $this->setNombre($nombre);
        $this->setDni($dni);
        $this->setCorrero($correro);
        $this->setTelefono($telefono);
        $this->setFoto($foto);
        $this->setIdAdminis($idAdminis);
        $this->setUser($User);
        $this->setPass($Pass);
        $this->setTipTrabajo($tipTrabajo);
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
    
    function getTipTrabajo() {
        return $this->tipTrabajo;
    }

    function setTipTrabajo($tipTrabajo) {
        $this->tipTrabajo = $tipTrabajo;
    }
    function getIdAdminis() {
        return $this->idAdminis;
    }

    function setIdAdminis($idAdminis) {
        $this->idAdminis = $idAdminis;
    }    
}


