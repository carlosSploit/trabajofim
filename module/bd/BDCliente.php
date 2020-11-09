<?php
require_once 'crud.php';
require 'conexion.php';

// es el data acces objet de la tabla producto

class ClienteDAO extends conexion implements crud {

    public function __construct() {
        $con = new conexion();
    }
    //------------ METODOS ---------------
    public function eliminar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_EliminarClient(?)');          
            $data->bindParam(1, $var->getIdClien()); 
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function insertar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_InsertarClient(?,?,?,?,?,?)');
            $data->bindParam(1, $var->getDni());
            $data->bindParam(2, $var->getNombre());
            $data->bindParam(3, $var->getCorrero());
            $data->bindParam(4, $var->getTelefono());
            $data->bindParam(5, $var->getFoto());
            $data->bindParam(6, $var->getPass());
            $data->execute();
            return "Insercion correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function listar($var) {
        try {
            $obj = Conexion::singleton();    
            $data = $obj->prepare('CALL usp_ListarAdminis(?,?,?)');          
            $data->bindParam(1, $var['tip']);   
            $data->bindParam(2, $var['uss']);   
            $data->bindParam(3, $var['pas']);   
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
            $data = $obj->prepare('CALL usp_ActualizarClient(?,?,?,?,?,?,?)');
            $data->bindParam(1, $var->getIdClien());
            $data->bindParam(2, $var->getDni());
            $data->bindParam(3, $var->getNombre());
            $data->bindParam(4, $var->getCorrero());
            $data->bindParam(5, $var->getTelefono());
            $data->bindParam(6, $var->getFoto());
            $data->bindParam(7, $var->getPass());
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

}


