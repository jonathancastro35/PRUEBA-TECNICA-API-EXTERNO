
import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"


export default class ListarhistorialUsuariosEliminados extends Component {
    
    state= {
        usuarioseliminados: [],  
    }

    componentDidMount() {
     
        this.getRegistrousuarioseliminados();    
    
       }

       getRegistrousuarioseliminados = async () =>{
        const per = await axios.get('http://localhost:9000/api/usuarioseliminados/');
        this.setState({usuarioseliminados: per.data});  
        }


    render() {
        
        return (
            <div className="row">
                {
                    this.state.usuarioseliminados.map(cor => (

                       
                        <div className="col-md-10 p-2" key={cor._id}>
                            
                        <div className="card">
                            
                        
                        <div className="card-header d-flex justify-content-between">
                             <h5><b>Metodo Utilizado</b>: {cor.Metodo_Consultado}</h5>  
                            </div>
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Fecha De Eliminación</b>: {cor.Fecha_usuarioeliminado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Usuario Eliminado</b>: {cor.id_usuario_eliminado}</h5>  
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
