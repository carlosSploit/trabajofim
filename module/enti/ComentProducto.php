<?php

class comentProducto{
    
    var $idComent = 0;
    var $idProducto = 0;
    var $descripccion = "";
    var $idCliente = 0;
    var $calif_prod = 0;
    
    function __construct($idComent, $idProducto, $descripccion, $idCliente, $calif_prod) {
        $this->idComent = $idComent;
        $this->idProducto = $idProducto;
        $this->descripccion = $descripccion;
        $this->idCliente = $idCliente;
        $this->calif_prod = $calif_prod;
    }

    function getIdComent() {
        return $this->idComent;
    }

    function getIdProducto() {
        return $this->idProducto;
    }

    function getDescripccion() {
        return $this->descripccion;
    }

    function getIdCliente() {
        return $this->idCliente;
    }

    function getCalif_prod() {
        return $this->calif_prod;
    }

    function setIdComent($idComent) {
        $this->idComent = $idComent;
    }

    function setIdProducto($idProducto) {
        $this->idProducto = $idProducto;
    }

    function setDescripccion($descripccion) {
        $this->descripccion = $descripccion;
    }

    function setIdCliente($idCliente) {
        $this->idCliente = $idCliente;
    }

    function setCalif_prod($calif_prod) {
        $this->calif_prod = $calif_prod;
    }

}

