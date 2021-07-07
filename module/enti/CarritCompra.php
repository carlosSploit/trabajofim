
<?php

class CarritCompra {
    var $idCarrit = 0;
    var $idClient = "";
    var $idProduc = "";
    var $cantida = 0;
    
    function __construct($idCarrit, $idClient, $idProduc, $cantida) {
        $this->setIdCarrit($idCarrit);
        $this->setIdClient($idClient);
        $this->setIdProduc($idProduc);
        $this->setCantida($cantida);
    }

    function getIdCarrit() {
        return $this->idCarrit;
    }

    function getIdClient() {
        return $this->idClient;
    }

    function getIdProduc() {
        return $this->idProduc;
    }

    function getCantida() {
        return $this->cantida;
    }

    function setIdCarrit($idCarrit) {
        $this->idCarrit = $idCarrit;
    }

    function setIdClient($idClient) {
        $this->idClient = $idClient;
    }

    function setIdProduc($idProduc) {
        $this->idProduc = $idProduc;
    }

    function setCantida($cantida) {
        $this->cantida = $cantida;
    }



}

