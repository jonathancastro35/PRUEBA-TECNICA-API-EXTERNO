
import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
//import {Link} from "react-router-dom"


export default class ListarRegistropostsjsonplaceholder extends Component {
    
    state= {
        Registropostsjsonplaceholder: [],  
    }

    componentDidMount() {
     
        this.getRegistropostsjsonplaceholder();    
    
       }

       getRegistropostsjsonplaceholder = async () =>{
        const per = await axios.get('http://localhost:9000/apijsonplaceholder/posts/');
        this.setState({Registropostsjsonplaceholder: per.data});  
        }


    render() {
        
        return (
            <div className="row">
                {
                    this.state.Registropostsjsonplaceholder.map(cor => (

                       
                        <div className="col-md-15 p-2" key={cor._id}>
                            
                        <div className="card">
                            
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Fecha_Metodo_Consultado</b>: {cor.Fecha_Metodo_Consultado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>Metodo_Consultado</b>: {cor.Metodo_Consultado}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>userId</b>: {cor.userId}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>id</b>: {cor.id}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>title</b>: {cor.title}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>body</b>: {cor.body}</h5>  
                            </div>

                            
                            
                        </div>
                        </div>

                    ))
                }
               
            </div>
        )
    }
}
