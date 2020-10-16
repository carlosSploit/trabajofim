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

class Venta  implements crud{
    var $IdVenta = 0;
    var $montoTotal = "";
    var $FechaVenta = "";
    
    //----------- COSTRUCTOR -------------
    
    function __construct($IdVenta, $montoTotal, $FechaVenta) {
        $this->setIdVenta($IdVenta);
        $this->setMontoTotal($montoTotal);
        $this->setFechaVenta($FechaVenta);
    }

    
    //--------- GETTER Y SETTER ------------------
    
    function getIdVenta() {
        return $this->IdVenta;
    }

    function getMontoTotal() {
        return $this->montoTotal;
    }

    function getFechaVenta() {
        return $this->FechaVenta;
    }

    function setIdVenta($IdVenta) {
        $this->IdVenta = $IdVenta;
    }

    function setMontoTotal($montoTotal) {
        $this->montoTotal = $montoTotal;
    }

    function setFechaVenta($FechaVenta) {
        $this->FechaVenta = $FechaVenta;
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