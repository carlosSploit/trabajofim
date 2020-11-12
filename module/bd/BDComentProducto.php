<?php
require_once 'crud.php';
require 'conexion.php';
//----------------------------------------------------
/*
 * procedimiento almacenados usados: 
 * usp_InsertarCiu(?) ->insertar
 * usp_ActualizarCiu(?) -> Actualizar
 * usp_ListarCiu() -> listar
 * usp_EliminarCiu(?) -> eliminar
 */

class ComentProduDAO extends conexion  implements crud{
    
    public function __construct() {
        $con = new conexion();
    }
    //------------ METODOS ---------------
    public function eliminar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_EliminarComent(?)');          
            $data->bindParam(1, $var->getIdComent()); 
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function insertar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_InsertarComent(?,?,?,?)');
            $data->bindParam(1, $var->getIdCliente());
            $data->bindParam(2, $var->getIdProducto());
            $data->bindParam(3, $var->getDescripccion());
            $data->bindParam(4, $var->getCalif_prod());
            $data->execute();
            return "Insercion correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function listar($var) {
        try {
            $obj = Conexion::singleton();    
            $data = $obj->prepare('CALL usp_ListarComent(?,?)');          
            $data->bindParam(1, $var['tip']);   
            $data->bindParam(2, $var['idpo']);   
            $data->execute();
            $lista = $data->fetchAll();                      
            return $lista;         

        }catch (Exception $e) {
            throw $e;
        }
    }

    public function update($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_ActualizarComent(?,?,?,?,?)');
            $data->bindParam(1, $var->getIdComent());
            $data->bindParam(2, $var->getIdCliente());
            $data->bindParam(3, $var->getIdProducto());
            $data->bindParam(4, $var->getDescripccion());
            $data->bindParam(5, $var->getCalif_prod());
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }
}
