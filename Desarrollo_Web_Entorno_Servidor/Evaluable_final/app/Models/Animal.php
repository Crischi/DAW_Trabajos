<?php
namespace App\Models;

class Animal
{
    private $id;
    private $nombre;
    private $especie;
    private $protectora;
    private $imagen;
    private $telefono;

    public function __construct()
    {
       // die("init-Función no permitida");//Sin constructor
    }

    //GETTERS
     public function getId()
    {
        return $this->id;
    }
    public function getNombre()
    {
        return $this->nombre;   //$ Se pone solo delante de this
    }  
    public function getEspecie()
    {
        return $this->especie;
    }
    public function getProtectora()
    {
        return $this->protectora;
    }
    public function getImagen()
    {
        return $this->imagen;
    }
    public function getTelefono()
    {
        return $this->telefono;
    }

    //SETTERS
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

   
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
        return $this;
    }

   
    public function setEspecie($especie)
    {
        $this->especie = $especie;
        return $this;
    }

    
    public function setProtectora($protectora)
    {
        $this->protectora = $protectora;
        return $this;
    }

    
    public function setImagen($imagen)
    {
        $this->imagen = $imagen;
        return $this;
    }

    
    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;
        return $this;
    }
}
