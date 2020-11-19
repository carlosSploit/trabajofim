<?php

require_once 'crud.php';
require 'conexion.php';

// es el data acces objet de la tabla producto

class ReportDAO extends conexion implements crud {

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
            $data = $obj->prepare('CALL usp_reporte(?,?,?)');          
            $data->bindParam(1, $var['tip']);     
            $data->bindParam(2, $var['desde']);     
            $data->bindParam(3, $var['hasta']);     
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

