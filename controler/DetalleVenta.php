<?php


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

switch (isset($_POST['action'])) {
    
    case "insert" : 
        break;

    case "eliminar" : 
        break;

    case "listar" : 
        break;

    case "update" : 
        break;
        
    default:
        break;
}

class DetalleVenta  implements crud{
    var $IdDetVenta = 0;
    var $idProducto = 0;
    var $Cantidad = 0;
    var $montoPCatida = 0;
    
    //----------- COSTRUCTOR -------------
    
    function __construct($IdDetVenta, $idProducto, $Cantidad, $montoPCatida) {
        $this->IdDetVenta = $IdDetVenta;
        $this->idProducto = $idProducto;
        $this->Cantidad = $Cantidad;
        $this->montoPCatida = $montoPCatida;
    }

    //--------- GETTER Y SETTER ------------------
    
    function getIdDetVenta() {
        return $this->IdDetVenta;
    }

    function getIdProducto() {
        return $this->idProducto;
    }

    function getCantidad() {
        return $this->Cantidad;
    }

    function getMontoPCatida() {
        return $this->montoPCatida;
    }

    function setIdDetVenta($IdDetVenta) {
        $this->IdDetVenta = $IdDetVenta;
    }

    function setIdProducto($idProducto) {
        $this->idProducto = $idProducto;
    }

    function setCantidad($Cantidad) {
        $this->Cantidad = $Cantidad;
    }

    function setMontoPCatida($montoPCatida) {
        $this->montoPCatida = $montoPCatida;
    }

        
    //------------ METODOS ---------------
    public function eliminar($var) {
        
    }

    public function insertar($var) {

    }

    public function listar($var) {
        
    }

    public function update($var) {

    }
}

