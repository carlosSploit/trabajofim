<?php

require_once 'crud.php';
require_once 'conexion.php';
//----------------------------------------------------
/*
 * procedimiento almacenados usados: 
 * usp_InsertarDepart(?) ->insertar
 * usp_ActualizarDepart(?) -> Actualizar
 * usp_ListarDepart() -> listar
 * usp_EliminarDepart(?) -> eliminar
 */
class DepartamentoDAO extends conexion  implements crud{
    
    public function __construct() {
        $con = new conexion();
    }
    //------------ METODOS ---------------
    public function eliminar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_EliminarDepart(?)');          
            $data->bindParam(1, $var->getIdDeparmt()); 
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function insertar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_InsertarDepart(?)');          
            $data->bindParam(1, $var->getNombreDepart());       
            $data->execute();
            return "Insercion correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function listar($var) {
        try {
            $obj = Conexion::singleton();    
            $data = $obj->prepare('CALL usp_ListarDepart()');          
            $data->bindParam(1, $idC);   
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
            $data = $obj->prepare('CALL usp_ActualizarDepart(?,?)');          
            $data->bindParam(1, $var->getIdDeparmt()); 
            $data->bindParam(2, $var->getNombreDepart());
            $data->execute();
            return "ActualizadoActualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

}





