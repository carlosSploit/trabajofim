<?php
require_once 'crud.php';
require 'conexion.php';

// es el data acces objet de la tabla producto

class AnaliticDAO extends conexion implements crud {

    public function __construct() {
        $con = new conexion();
    }
    //------------ METODOS ---------------
    public function eliminar($var) {
    }

    public function insertar($var) {
    }

    public function listar($var) {
        try {
            $obj = Conexion::singleton();    
            $data = $obj->prepare('CALL usp_Analitic(?)');          
            $data->bindParam(1, $var);     
            $data->execute();
            $lista = $data->fetchAll();                      
            return $lista;         

        }catch (Exception $e) {
            throw $e;
        }
    }

    public function update($var) {
    }

}

