
import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"


export default class ListarHistorialusueliminadosenb64 extends Component {
    
    state= {
        usuarioseliminadosenb64: [],  
    }

    componentDidMount() {
     
        this.getRegistrousuarioseliminadosenb4();    
    
       }

       getRegistrousuarioseliminadosenb4 = async () =>{
        const per = await axios.get('http://localhost:9000/api/usuarioseliminadosb64/');
        this.setState({usuarioseliminadosenb64: per.data});  
        }


    render() {
        
        return (
            <div className="row">
                {
                    this.state.usuarioseliminadosenb64.map(cor => (

                       
                        <div className="col-md-10 p-2" key={cor._id}>
                            
                        <div className="card">
                                

                        <div className="card-header d-flex justify-content-between">
                             <h5><b>Metodo Consultado</b>: {cor.Metodo_Consultado}</h5>  
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
