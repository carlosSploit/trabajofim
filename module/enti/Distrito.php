<?php

require_once 'Ciudad.php';

class Distrito extends Ciudad{
    var $idDistrito = 0;
    var $NombreDistrito = "";
    
    //----------- COSTRUCTOR -------------
    function __construct($idCiuda,$NombreDistrito) {
        $this->setNombreDistrito($NombreDistrito);
        $this->setIdCiudad($idCiuda);
    }
    
    //--------- GETTER Y SETTER ------------------
    
    function getNombreDistrito() {
        return $this->NombreDistrito;
    }

    function setNombreDistrito($NombreDistrito) {
        $this->NombreDistrito = $NombreDistrito;
    }
    
    function getIdDistrito() {
        return $this->idDistrito;
    }

    function setIdDistrito($idDistrito) {
        $this->idDistrito = $idDistrito;
    }

}