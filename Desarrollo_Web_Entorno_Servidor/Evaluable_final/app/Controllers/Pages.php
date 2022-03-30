<?php

namespace App\Controllers ;

use CodeIgniter \Controller;
use App \Models \CrudAnimal;
use App \ Models \Animal;

class Pages extends Controller
{

    /**************************************************************
                      FUNCIONES ACCESORIAS
    **************************************************************/

    //Comprueba si la vista existe y lanza excepción si no.
    public function vistaExiste($ruta, $pagina)
    {
        if (!is_file(APPPATH. $ruta .$pagina. '.php')) {
            throw new \CodeIgniter\Exceptions\PageNotFoundException($page);
        } else {
            return true;
        }
    }

    //muestra vistas
    public function muestraVista($page, $data, $title)
    {
        //Si la encuentra pone como título de la página el titulo de la vista
        $data['title'] =  $title;
        
        //muestra header + vista elegida + footer y mediante data imprime todo lo que hay en esa vista.
        echo view('templates/header', $data);
        echo view('pages/'.$page, $data);
        echo view('templates/footer', $data);
    }


    /**************************************************************
    VISTA POR DEFECTO
    **************************************************************/
    //Llama a la vista indicada o por defecto a portada.php
    public function view($page = 'portada')
    {
        $this->vistaExiste('/Views/pages/', $page);

        $data['title'] = ucfirst($page);
        $this->muestraVista($page, $data, $data['title']);
    }

    /**************************************************************
    VISTAS BÚSQUEDA POR NOMBRE (API REST)
    **************************************************************/
    public function formularioNombre($page='formularioNombre')
    {
        $this->vistaExiste('/Views/pages/', $page);

        $data['title'] = ucfirst($page);
        $this->muestraVista($page, $data, $data['title']);
    }


    //Llama a la vista que muestra animales
    public function llamaRest($page='galeria')
    {
        //Verificacion entrada formulario
        $nombre=(isset($_GET["nombre"])) ? strip_tags(trim(htmlspecialchars($_GET["nombre"]))) : "";

        //Llamada a la API
        if ($nombre!=null) {
            $url='http://localhost:8081/fotos/nombre/'. $nombre;
        } else {
            $url='http://localhost:8081/fotos/nombre/';
        }
        $result = file_get_contents($url);
        $data['fotos'] =$this->convierteArrayObjetos(json_decode($result, true));

        $this->vistaExiste('/Views/pages/', $page);
        $this->muestraVista($page, $data, "Listado de fotos");
    }

    public function convierteArrayObjetos($respuestaRest)
    {
        $listaAnimales=[];
        //parsea de arrays a objetos y los almacena en un array para devolverlo
        foreach ($respuestaRest["data"] as $animal) {
            $nuevoAnimal=new Animal();
            $nuevoAnimal->setNombre($animal["nombre"]);
            $nuevoAnimal->setProtectora($animal["protectora"]);
            $nuevoAnimal->setImagen(utf8_decode($animal["imagen"]));
            $nuevoAnimal->setTelefono($animal["telefono"]);
            $listaAnimales[]=$nuevoAnimal;
        }
        return  $listaAnimales;
    }

    /**************************************************************
    VISTAS BÚSQUEDA POR ESPECIE (CRUD)
    **************************************************************/
    public function formularioEspecie($page='formularioEspecie')
    {
        $this->vistaExiste('/Views/pages/', $page);
      
        $data['title'] = ucfirst($page);
        $this->muestraVista($page, $data, $data['title']);
    }

    //Llama a la vista que muestra especie
    public function llamaCrud($page='galeria')
    {
        $crud= new CrudAnimal();
        $animal= new Animal();

        //Verificacion entrada formulario
        $especie=(isset($_GET["especie"])) ? strip_tags(trim(htmlspecialchars($_GET["especie"]))) : "";
   
        if ($especie!="") {
            $data['fotos']=$crud->obtenerAnimalesEspecie($especie);
        } else {
            $data['fotos']=$crud->obtenerTodos();
        }
     
        $this->vistaExiste('/Views/pages/', $page);
        $this->muestraVista($page, $data, "Listado de fotos");
    }
}
