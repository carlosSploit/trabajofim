<?php

//---- api producto--------

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
//-------------------------------
class Pedido  implements crud{
    var $idPedido = 0;
    var $Dist = "";
    var $Direccion = "";
    
    //----------- COSTRUCTOR -------------
    function __construct($NombreDepart,$NombreCiudad,$NombreDistrito,$Direccion,$idPedido) {
        $this->setIdPedido($idPedido);
        $this->setDireccion($Direccion);
        $this->Dist  = new Distrito($NombreDepart,$NombreCiudad,$NombreDistrito);
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

    
    //------------ METODOS ---------------
    public function eliminar($var) {
        $this->Dist->eliminar($this->Dist);
        //eliminar en cliente 
    }

    public function insertar($var) {
        $this->Dist->insertar($this->Dist);
        //insertar en cliente 
    }

    public function listar($var) {
        
    }

    public function update($var) {
        $this->Dist->update($this->Dist);
        //eliminar en cliente 
    }
}

