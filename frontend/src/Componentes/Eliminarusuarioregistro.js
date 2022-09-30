



import React, { Component } from 'react'
import axios from 'axios'
//import DatePicker from 'react-datepicker'
//import {Link} from "react-router-dom"
import 'react-datepicker/dist/react-datepicker.css'
import btoa from 'btoa'
//import Buffer from 'buffer'



export default class Eliminarusuarioregistro extends Component {
  state= {
    id_usuario_retornado:'',
    _id:'',
    Registrouserjsonplaceholder: [],  
}

componentDidMount() {
     
  this.getRegistrouserjsonplaceholder();    

 }

 getRegistrouserjsonplaceholder = async () =>{
  const per = await axios.get('http://localhost:9000/apijsonplaceholder/users/');
  this.setState({Registrouserjsonplaceholder: per.data});  
  }

  deleteusuario = async () => {
  
              const per = await axios.get('http://localhost:9000/apijsonplaceholder/users/');

              const fecha_actual = new Date();
        const fecha ="Año:"+(fecha_actual.getFullYear()).toString()+",Mes:"+(fecha_actual.getMonth()+1).toString()+",Día:"+fecha_actual.getDate().toString()+",Hora:"+fecha_actual.getHours().toString()+",Minutos:"+fecha_actual.getMinutes().toString()+",Segundos:"+fecha_actual.getSeconds().toString()+"";

              var x="";
              
              for(var jk=0; jk<(await per).data.length; jk++){

              if((await per).data[jk]._id===this.state._id && jk === 0){
                x = (await per).data[jk]._id;
    await axios.delete('http://localhost:9000/apijsonplaceholder/users/' +x.trim().toString());

    const dd = {
      Metodo_Consultado:"Usuarios Eliminados historia",
      Fecha_usuarioeliminado:fecha,
      id_usuario_eliminado:(await per).data[jk].id_usuario_retornado
    }
    await axios.post('http://localhost:9000/api/usuarioseliminados/',dd);

    //inicio base64
    var ccc = btoa(fecha);

    var ccc2 = ""+(await per).data[jk].id_usuario_retornado+"";
    var ccc3 = btoa(ccc2.toString());

    var c64 = "Usuarios Eliminados, historial";
    var c644 = btoa(c64);

    const dd2 = {
      Metodo_Consultado:c644.toString(),
      Fecha_usuarioeliminado:ccc.toString(),
      id_usuario_eliminado:ccc3.toString()
    }

    await axios.post('http://localhost:9000/api/usuarioseliminadosb64/',dd2);  
   //fin base64   
   
              }

              if((await per).data[jk]._id===this.state._id && jk !== 0){
                x = (await per).data[jk]._id;
    await axios.delete('http://localhost:9000/apijsonplaceholder/users/' +x.trim().toString());

    const dd = {
      Metodo_Consultado:"Usuarios Eliminados, historial",
      Fecha_usuarioeliminado:fecha,
      id_usuario_eliminado:(await per).data[jk].id_usuario_retornado
    }

    await axios.post('http://localhost:9000/api/usuarioseliminados/',dd);

        //inicio base64
    var ccca = btoa(fecha);

    var ccc2a = ""+(await per).data[jk].id_usuario_retornado+"";
    var ccc3a = btoa(ccc2a.toString());

    const dd2 = {
      Metodo_Consultado:c644.toString(),
      Fecha_usuarioeliminado:ccca.toString(),
      id_usuario_eliminado:ccc3a.toString()
    }

    await axios.post('http://localhost:9000/api/usuarioseliminadosb64/',dd2);  
   //fin base64 

              }

              }

             
window.location.href = '/ListarRegistrousuariouserjsonconsultados'; 
  
     
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
                  
    
    
                 <select value={this.state.value} onChange={this.onInputChange} name="_id" >
                 
                            {
                              
                              <option>
                                   
                              {"ESCOJA EL USUARIO"}
                              
                            </option>
                                                                   
                             }

                            {
                              
                              this.state.Registrouserjsonplaceholder.map(infaa => 
                               
                                
                               <option key={infaa._id} value={infaa._id}>
                                   
                                   {infaa.id_usuario_retornado} - {infaa.name_usuario_retornado}
                                   
                                 </option>
                                 
                                 )
                                                                   
                             }
                                           
                 </select>
                  </label>
                  </form>
                  </div>
                
                    

                    <div className="card-footer">
                                <button className="btn btn-danger" onClick={() => this.deleteusuario()}>
                                    Eliminar Usuario
                                </button>
                            </div> 

                    </div>

                            
            </div>


           
        )
    }
}






/*
 //insercion base64
    let conv1 = ""+fecha+"";
    let idcov = ""+(await per).data[jk].id_usuario_retornado+""; 
    
    let conv11 = new Buffer(conv1);
    let conv111= conv11.toString('base64');

    let conv1111 = new Buffer(idcov.toString());
    let conv11111= conv1111.toString('base64');

    const dd2 = {
      Fecha_usuarioeliminado:conv111,
      id_usuario_eliminado:conv11111
    }
    
    await axios.post('http://localhost:9000/api/usuarioseliminadosb64/',dd2);  
    //fin incersion base64
*/