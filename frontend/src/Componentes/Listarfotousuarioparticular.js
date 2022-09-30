


import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
//import {Link} from "react-router-dom"
import 'react-datepicker/dist/react-datepicker.css'

export default class Listarfotousuarioparticular extends Component {
    state = {

        id:'1', 
        usuarios:[],
        editing: false
        
    }

    async componentDidMount(){
    this.getUsuarios();   
  }

    getUsuarios = async () =>{
    const per = await axios.get('http://192.168.1.13:3000/users/');
    this.setState({usuarios: per.data});  
    }

  
 

    
    buscarusuario = async a =>{

        a.preventDefault();
        

    window.location.href  = "/ListarFotosUsuario/"+this.state.id; 
    
    }

    

    onInputChange = e =>{
        
        this.setState({
          [e.target.name]: e.target.value  
        })
    }

    onInputChange2 = e =>{
        
      this.setState({
        [e.target.name]: e.target.value  
      })
  }


    onChangeFechanac = e => {
      this.setState({e})
    }

    

    render() {

        return (

          <div className="col-md-25 offset-md-1">
          <div className="card card-body">
              <h4 align="center">ESCOJA EL USUARIO POR SU ID</h4>
              
              <div className="form-group">
                  <form onSubmit={this.onInputChange}>
                  <label>
                  <h5 align="left">ID</h5> 
                  
    
    
                 <select value={this.state.value} onChange={this.onInputChange} name="id" >
                 
                                     {
                              
                              this.state.usuarios.map(infaa => 
                               
                               <option key={infaa.id} value={infaa.id}>
                                   
                                   {infaa.id} - {infaa.name}
                                   
                                 </option>
                                 )
                                                                   
                             }
                                           
                 </select>
                  </label>
                  </form>
                  </div>
                
                    
              <form onSubmit={this.buscarusuario}>
                        <button type="submit" className="btn btn-primary">
                         BUSCAR
                        </button>
                    </form>

                    </div>

                            
            </div>


           
        )
    }
}


