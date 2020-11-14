<?php

//-------------------------------
class Pedido {
    var $idPedido = 0;
    var $Dist = "";
    var $Direccion = "";
    var $idVentas = "";
    var $estado = "";
    
    //----------- COSTRUCTOR -------------
    function __construct($idPedido, $Dist, $Direccion, $idVentas) {
        $this->setIdPedido($idPedido);
        $this->setDist($Dist);
        $this->setDireccion($Direccion);
        $this->setIdVentas($idVentas);
    }
    //--------- GETTER Y SETTER ------------------
    
    function getDireccion() {
        return $this->Direccion;
    }

    function setDireccion($Direccion) {
        $this->Direccion = $Direccion;
    }
    
    function getIdPedido() {
        return $this->idPedido;
    }

    function setIdPedido($idPedido) {
        $this->idPedido = $idPedido;
    }
    
    function getDist() {
        return $this->Dist;
    }

    function getIdVentas() {
        return $this->idVentas;
    }

    function setDist($Dist) {
        $this->Dist = $Dist;
    }

    function setIdVentas($idVentas) {
        $this->idVentas = $idVentas;
    }

    function getEstado() {
        return $this->estado;
    }

    function setEstado($estado) {
        $this->estado = $estado;
    }

}

