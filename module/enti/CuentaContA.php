
<?php

class CuentaContA {
    var $idSeccion = 0;
    var $idAdministrador = "";
    var $mac = "";
    var $estadoC = 0;
    
    function __construct($idSeccion, $idAdministrador, $mac, $estadoC) {
        $this->setIdSeccion($idSeccion);
        $this->setIdAdministrador($idAdministrador);
        $this->setMac($mac);
        $this->setEstadoC($estadoC);
    }

    function getIdSeccion() {
        return $this->idSeccion;
    }

    function getIdAdministrador() {
        return $this->idAdministrador;
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

    function setIdAdministrador($idAdministrador) {
        $this->idAdministrador = $idAdministrador;
    }

    function setMac($mac) {
        $this->mac = $mac;
    }

    function setEstadoC($estadoC) {
        $this->estadoC = $estadoC;
    }


}

