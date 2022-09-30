
import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"


export default class ListarRegistrouserjsonplaceholder extends Component {
    
    state= {
        Registrouserjsonplaceholder: [],  
    }

    componentDidMount() {
     
        this.getRegistrouserjsonplaceholder();    
    
       }

       getRegistrouserjsonplaceholder = async () =>{
        const per = await axios.get('http://localhost:9000/apijsonplaceholder/users/');
        this.setState({Registrouserjsonplaceholder: per.data});  
        }


    render() {
        
        return (
            <div className="row">
                {
                    this.state.Registrouserjsonplaceholder.map(cor => (

                       
                        <div className="col-md-10 p-2" key={cor._id}>
                            
                        <div className="card">
                            
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Fecha_Metodo_Consultado</b>: {cor.Fecha_Metodo_Consultado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Metodo_Consultado</b>: {cor.Metodo_Consultado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>id_usuario</b>: {cor.id_usuario_retornado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>name_usuario</b>: {cor.name_usuario_retornado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>username_usuario</b>: {cor.username_usuario_retornado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>email_usuario</b>: {cor.name_usuario_retornado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Modificar usuario</b>: {cor.id_usuario_retornado}</h5>
                           
                             <Link className="btn btn-secondary" to={"/EditarUsuario/" + cor._id}>
                             Editar Usuario
                             </Link>
                             
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
