<?php

//----------------------------------------------------

class Departamento{
    var $idDeparmt = 0;
    var $NombreDepart = "";
    
    //----------- COSTRUCTOR -------------
    function __construct($NombreDepart) {
        $this->setNombreDepart($NombreDepart);
    }
        //--------- GETTER Y SETTER ------------------
    
    function getNombreDepart() {
        return $this->NombreDepart;
    }

    function setNombreDepart($NombreDepart) {
        $this->NombreDepart = $NombreDepart;
    }
    
    function getIdDeparmt() {
        return $this->idDeparmt;
    }

    function setIdDeparmt($idDeparmt) {
        $this->idDeparmt = $idDeparmt;
    }

}





