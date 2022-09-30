


import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



export default class Crearusuario extends Component {
    state = {

        Fecha_Metodo_Consultado:'', 
        Metodo_Consultado:'', 
        id_usuario_retornado:'', 
        name_usuario_retornado:'', 
        username_usuario_retornado:'',
        email_usuario_retornado:'',

        editing: false
        
    }

    async componentDidMount(){
        
      if(this.props.match.params.id){
        const res = await axios.get('http://localhost:9000/apijsonplaceholder/users/' + this.props.match.params.id);
        
        this.setState({

            Fecha_Metodo_Consultado: res.data.Fecha_Metodo_Consultado,
            Metodo_Consultado: res.data.Metodo_Consultado,
            id_usuario_retornado: res.data.id_usuario_retornado,
            name_usuario_retornado: res.data.name_usuario_retornado,
            username_usuario_retornado:res.data.username_usuario_retornado,
            email_usuario_retornado:res.data.email_usuario_retornado,

            editing: true,
            _id: this.props.match.params.id
        })
    }
  }



    createUsuario= async a =>{

        a.preventDefault();

        const newDir = {

            Fecha_Metodo_Consultado: this.state.Fecha_Metodo_Consultado,
            Metodo_Consultado: this.state.Metodo_Consultado,
            id_usuario_retornado: this.state.id_usuario_retornado,
            name_usuario_retornado: this.state.name_usuario_retornado,
            username_usuario_retornado:this.state.username_usuario_retornado,
            email_usuario_retornado:this.state.email_usuario_retornado,
  
            editing: true,
            _id: this.props.match.params.id
        
        };

        
        if(this.state.editing){
          
          await axios.put('http://localhost:9000/apijsonplaceholder/users/' + this.props.match.params.id, newDir);
          window.location.href = '/';  
          
         }
          /*
          else{

        await axios.post('http://localhost:8000/api/persona/', newDir);
        
        window.location.href = '/';  
          
      }*/
      
        
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
              <h4 align="center">REGISTRAR USUARIO</h4>
              <h4 bgcolor="black">REGISTRAR</h4>
                
              <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Digite la fecha, año. mes. dia. hora" 
                      name="Fecha_Metodo_Consultado"
                      onChange= {this.onInputChange}
                      value={this.state.Fecha_Metodo_Consultado}
                      required
                      />  
                    </div>

                    <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Nombre del metodo consultado" 
                      name="Metodo_Consultado"
                      onChange= {this.onInputChange}
                      value={this.state.Metodo_Consultado}
                      required
                      />  
                    </div>

                    <div className="form-group">
                      <input 
                      type="number" 
                      className="form-control" 
                      placeholder="digite id_usuario" 
                      name="id_usuario_retornado"
                      onChange= {this.onInputChange}
                      value={this.state.id_usuario_retornado}
                      required
                      />  
                    </div>

                    <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="nombre del usuario" 
                      name="name_usuario_retornado"
                      onChange= {this.onInputChange}
                      value={this.state.name_usuario_retornado}
                      required
                      />  
                    </div>

                    <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="digite el username" 
                      name="username_usuario_retornado"
                      onChange= {this.onInputChange}
                      value={this.state.username_usuario_retornado}
                      required
                      />  
                    </div>

                    <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control" 
                      placeholder="email" 
                      name="email_usuario_retornado"
                      onChange= {this.onInputChange}
                      value={this.state.email_usuario_retornado}
                      required
                      />  
                    </div>

                    

              <form onSubmit={this.createUsuario}>
                        <button type="submit" className="btn btn-primary">
                         GUARDAR USUARIO
                        </button>
                    </form>

                    </div>
            </div>
           
        )
    }
}


