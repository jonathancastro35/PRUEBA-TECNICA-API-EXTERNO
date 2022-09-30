
import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"


export default class Listarphotos extends Component {
    
    state= {
        photosholders: [],  
    }

    componentDidMount() {
     
        this.getPhotosholders();    
    
       }

       getPhotosholders = async () =>{
        const per = await axios.get('http://192.168.1.13:3000/photos/');
        this.setState({photosholders: per.data});  
        }

     

    render() {
        
        return (
            <div className="row">

                    <div className="card-header d-flex justify-content-between">
                    <Link className="btn btn-success" to={"/Listarusuarioplaceholder"}>
                    CONSULTAR USUARIOS JSONPLACEHOLDER
                    </Link> 
                    </div> 

                    <div className="card-header d-flex justify-content-between">
                    <Link className="btn btn-success" to={"/ListarRegistrousuariouserjsonconsultados"}>
                    VER REGISTRO DE USUARIOS JSONPLACEHOLDER CONSULTADOS
                    </Link> 
                    </div> 

                    <div className="card-header d-flex justify-content-between">
                    <Link className="btn btn-success" to={"/Listarpostsjsonplaceholders"}>
                    CONSULTAR PUBLICACIONES(POSTS) JSONPLACEHOLDER
                    </Link> 
                    </div> 

                    <div className="card-header d-flex justify-content-between">
                    <Link className="btn btn-success" to={"/ListarRegistrousuariopostsjsonconsultados"}>
                    VER REGISTRO DE PUBLICACIONES(POSTS) JSONPLACEHOLDER CONSULTADOS
                    </Link> 
                    </div> 

                    <div className="card-header d-flex justify-content-between">
                    <Link className="btn btn-success" to={"/ConsultarFotousuarioexterno"}>
                    CONSULTAR FOTOS JSONPLACEHOLDER
                    </Link> 
                    </div> 

                    <div className="card-header d-flex justify-content-between">
                    <Link className="btn btn-success" to={"/ListarRegistrousuariofotosjsonconsultados"}>
                    VER REGISTRO DE FOTOS JSONPLACEHOLDER CONSULTADOS
                    </Link> 
                    </div> 

                    <div className="card-header d-flex justify-content-between">
                    <Link className="btn btn-success" to={"/Listarfotoparticularusuarioconid"}>
                    BUCAR FOTOS PARTICULARES USUARIO
                    </Link> 
                    </div> 

                    <div className="card-header d-flex justify-content-between">
                    <Link className="btn btn-success" to={"/EliminarUsuario"}>
                    ELIMINAR USUARIO DEL REGISTRO 
                    </Link> 
                    </div>

                    <div className="card-header d-flex justify-content-between">
                    <Link className="btn btn-success" to={"/ListarUsuariosEliminados"}>
                    LISTADO USUARIOS ELIMINADOS
                    </Link> 
                    </div>

                    <div className="card-header d-flex justify-content-between">
                    <Link className="btn btn-success" to={"/ListarHistorialUsuariosEliminadosB64"}>
                    LISTADO USUARIOS ELIMINADOS EN BASE 64
                    </Link> 
                    </div>

                    
                    

                    
                    
                    
                    
                    


                    {
                    this.state.photosholders.filter(x3=> x3.id>=1 && x3.id<=1000).map(cor => (

                        <div className="col-md-9 p-2" key={cor.id}>
                            
                        <div className="card">
                            
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>albumId</b>: {cor.albumId}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>id</b>: {cor.id}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>title</b>: {cor.title}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>url</b>: {cor.url}</h5>  
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>thumbnailUrl</b>: {cor.thumbnailUrl}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             
                             <Link className="btn btn-secondary" to={"/"}>
                              Ir a Inicio
                             </Link>
                             
                            </div>
                            
                        </div>
                        </div>

                    ))
                }
               
            </div>
        )
    }
}
