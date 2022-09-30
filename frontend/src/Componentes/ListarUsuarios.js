
import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"


export default class Listaruserjsonplaceholder extends Component {
    
    state= {
        usuarioplaceholder: [], 
        usuarioplaceholder2: [], 
        usuarioplaceholder3: [], 
        
    }

    componentDidMount() {
     
        this.getusuarioplaceholder();    
        
       }


       getusuarioplaceholder = async () =>{
        
        const per = await axios.get('http://192.168.1.13:3000/users/');
        this.setState({usuarioplaceholder:per.data}); 
        this.setState({usuarioplaceholder2:per.data}); 
        this.setState({usuarioplaceholder3:per.data});

        }

    render() {
        
        
        return (
            <div className="row">
                {
                    this.state.usuarioplaceholder.map(cor => (

                       
                        <div className="col-md-4 p-2" key={cor.id}>
                            
                        <div className="card">
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>id</b>: {cor.id}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>name</b>: {cor.name}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>username</b>: {cor.username}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>email</b>: {cor.email}</h5>  
                            </div>

                            {
                             
                             this.state.usuarioplaceholder3.filter(x3=> x3.id===cor.id).map(infa23 =>  
                 
                                 <div className="col-md-8 p-2" key={infa23.id}>
                                             
                                         <div className="card">
                 
                                         <div className="card-header d-flex justify-content-between">
                                              <h5><b>address</b></h5> 
                                              </div>
                 
                                         <div className="card-header d-flex justify-content-between">
                                              <h5><b>street</b>: {infa23.address.street}</h5>  
                                             </div>
                 
                                             <div className="card-header d-flex justify-content-between">
                                              <h5><b>suite</b>: {infa23.address.suite}</h5>  
                                             </div>
                 
                                             <div className="card-header d-flex justify-content-between">
                                              <h5><b>city</b>: {infa23.address.city}</h5>  
                                             </div>

                                             <div className="card-header d-flex justify-content-between">
                                              <h5><b>zipcode</b>: {infa23.address.zipcode}</h5>  
                                             </div>
                                             
                                             <div className="card-header d-flex justify-content-between">
                                             <h5><b>geo</b></h5> 
                                              </div>
                                             <div className="card-header d-flex justify-content-between">
                                              <h5><b>lat</b>: {infa23.address.geo.lat}</h5>  
                                             </div>

                                             <div className="card-header d-flex justify-content-between">
                                              <h5><b>lng</b>: {infa23.address.geo.lng}</h5>  
                                             </div>

                                             </div>
                                             </div>  
                                                 )                                      
                                                 }

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>phone</b>: {cor.phone}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>website</b>: {cor.website}</h5>  
                            </div>

                            
                            {
                             
            this.state.usuarioplaceholder2.filter(x=> x.id===cor.id ).map(infa2 =>  

                <div className="col-md-8 p-2" key={infa2.id}>
                            
                        <div className="card">

                        <div className="card-header d-flex justify-content-between">
                             <h5><b>company</b></h5> 
                             </div>

                        <div className="card-header d-flex justify-content-between">
                             <h5><b>name</b>: {infa2.company.name}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>catchPhrase</b>: {infa2.company.catchPhrase}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>bs</b>: {infa2.company.bs}</h5>  
                            </div>

                            </div>
                            </div>  
                                )                                      
                                }

                            
                            
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

