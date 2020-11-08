<?php
require_once 'crud.php';
require 'conexion.php';

// es el data acces objet de la tabla producto

class AdministradorDAO extends conexion implements crud {

    public function __construct() {
        $con = new conexion();
    }
    //------------ METODOS ---------------
    public function eliminar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_EliminarAdminis(?)');          
            $data->bindParam(1, $var->getIdAdminis()); 
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

    public function insertar($var) {
        try {
            $obj = Conexion::singleton();      
            $data = $obj->prepare('CALL usp_InsertarAdminis(?,?,?,?,?,?,?,?,?)');
            $data->bindParam(1, $var->getDni());
            $data->bindParam(2, $var->getNombre());
            $data->bindParam(3, $var->getCorrero());
            $data->bindParam(4, $var->getTelefono());
            $data->bindParam(5, $var->getFoto());
            $data->bindParam(6, $var->getPass());
            $data->bindParam(7, $var->getTipTrabajo());
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
            $data->bindParam(1, $var['userT']);   
            $data->bindParam(2, $var['Tipo']);   
            $data->bindParam(3, $var['Nombre']);   
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
            $data = $obj->prepare('CALL usp_ActualizarAdminis(?,?,?,?,?,?,?,?,?,?)');
            $data->bindParam(1, $var->getIdAdminis());
            $data->bindParam(2, $var->getDni());
            $data->bindParam(3, $var->getNombre());
            $data->bindParam(4, $var->getCorrero());
            $data->bindParam(5, $var->getTelefono());
            $data->bindParam(6, $var->getFoto());
            $data->bindParam(7, $var->getUser());
            $data->bindParam(8, $var->getPass());
            $data->bindParam(9, $var->getTipTrabajo());
            $data->execute();
            return "Actualizado correcto";
        }catch (Exception $e) {
            throw $e->getMessage();
        }
    }

}


