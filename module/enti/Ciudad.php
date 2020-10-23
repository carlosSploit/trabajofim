<?php

require_once 'Departamento.php';

class Ciudad extends Departamento{
    var $idCiudad = 0;
    var $NombreCiudad = "";
    
    //----------- COSTRUCTOR -------------
    function __construct($idDepart,$NombreCiudad) {
        $this->setNombreCiudad($NombreCiudad);
        $this->setIdDeparmt($idDepart);
    }
    
    //--------- GETTER Y SETTER ------------------
    
    function getNombreCiudad() {
        return $this->NombreCiudad;
    }

    function setNombreCiudad($NombreCiudad) {
        $this->NombreCiudad = $NombreCiudad;
    }
    
    function getIdCiudad() {
        return $this->idCiudad;
    }

    function setIdCiudad($idCiudad) {
        $this->idCiudad = $idCiudad;
    }
}

