

import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
//import {Link} from "react-router-dom"

export default class Eliminarusuarioregistro2 extends Component {

    state= {
        usuarios: [], 
        
    }

    componentDidMount() {
     
        this.getusuarios();    
       
       }


       getusuarios = async () =>{
        console.log("ppppp"+this.props.match.params.id);
        const per = await axios.get('http://localhost:9000/apijsonplaceholder/users/');
        this.setState({usuarios: per.data});    
        
        }
        

        deleteusuario = async (id) => {
            await axios.delete('http://localhost:9000/apijsonplaceholder/users' + id); 
            
            this.getusuarios();     
            
        }
                                            

    render() {
        
        return (
            <div className="row">
                {
                    this.state.usuarios.filter(x=> x._id === this.props.match.params.id).map(cor => (
                        
                        <div className="col-md-4 p-2" key={cor._id}>
                            
                        <div className="card">
                            
                    
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Fecha_Metodo_Consultado</b>: {cor.Fecha_Metodo_Consultado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>Metodo_Consultado</b>: {cor.Metodo_Consultado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>id_usuario_retornado</b>: {cor.id_usuario_retornado}</h5>  
                            </div>
                            

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>name_usuario_retornado</b>: {cor.name_usuario_retornado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>username_usuario_retornado</b>: {cor.username_usuario_retornado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>email_usuario_retornado</b>: {cor.email_usuario_retornado}</h5>  
                            </div>

                            

                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deleteusuario(cor._id)}>
                                    Eliminar Usuario
                                </button>
                            </div> 

                           

                        </div>
                        </div>

                    ))
                }
               
            </div>
        )
    }
}
