<?php

class tipoProducto{
    
    var $idTipo = 0;
    var $nombreTipo = "";
    
    function __construct($idTipo, $nombreTipo) {
        $this->setIdTipo($idTipo);
        $this->setNombreTipo($nombreTipo);
    }

    function getIdTipo() {
        return $this->idTipo;
    }

    function getNombreTipo() {
        return $this->nombreTipo;
    }

    function setIdTipo($idTipo) {
        $this->idTipo = $idTipo;
    }

    function setNombreTipo($nombreTipo) {
        $this->nombreTipo = $nombreTipo;
    }

}
