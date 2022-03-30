<?php
namespace App\Models;

use PDO;
use App \Models \Database;

class CrudAnimal
{
    public function __construct()
    {
        //Sin constructor
    }

    private function generaListadoAnimales($select)
    {
        $listaAnimales=[];
        foreach ($select->fetchAll() as $animal) {
            $nuevoAnimal=new Animal();
            $nuevoAnimal->setNombre($animal["nombre"]);
            $nuevoAnimal->setProtectora($animal["protectora"]);
            $nuevoAnimal->setImagen($animal["imagen"]);
            $nuevoAnimal->setTelefono($animal["telefono"]);
            $listaAnimales[]=$nuevoAnimal;
        }
        return  $listaAnimales;
    }

    public function obtenerTodos()
    {
        $db=Database::conectar();
        $select=$db->prepare("SELECT * FROM fotos");
        $select->execute();
        $listaAnimales=$this->generaListadoAnimales($select);
        Database::desconectar();
        //Devuelvo array de objetos Animal
        return  $listaAnimales;
    }

    public function obtenerAnimalesEspecie($especie)
    {
        $db=Database::conectar();
        //Indico en la consulta la especie
        $select=$db->prepare("SELECT * FROM fotos WHERE especie=:especie");
        $select->bindValue(":especie", $especie);
        $select->execute();
        $listaAnimales=$this->generaListadoAnimales($select);
        Database::desconectar();
        return  $listaAnimales;
    }

    
    
}
