
<?php

class CuentaCont {
    var $idSeccion = 0;
    var $idClient = "";
    var $mac = "";
    var $estadoC = 0;
    
    function __construct($idSeccion, $idClient, $mac, $estadoC) {
        $this->setMac($mac);
        $this->setIdClient($idClient);
        $this->setIdSeccion($idSeccion);
        $this->setEstadoC($estadoC);
    }
    
    function getIdSeccion() {
        return $this->idSeccion;
    }

    function getIdClient() {
        return $this->idClient;
    }

    function getMac() {
        return $this->mac;
    }

    function getEstadoC() {
        return $this->estadoC;
    }

    function setIdSeccion($idSeccion) {
        $this->idSeccion = $idSeccion;
    }

    function setIdClient($idClient) {
        $this->idClient = $idClient;
    }

    function setMac($mac) {
        $this->mac = $mac;
    }

    function setEstadoC($estadoC) {
        $this->estadoC = $estadoC;
    }



}
