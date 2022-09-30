
import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"


export default class Listarpostsjsonplaceholders extends Component {
    
    state= {
        postsholders: [],  
    }

    componentDidMount() {
     
        this.getPostsholders();    
    
       }

       getPostsholders = async () =>{
        const per = await axios.get('http://192.168.1.13:3000/posts/');
        this.setState({postsholders: per.data});  

        const fecha_actual = new Date();

        const fecha ="Año:"+(fecha_actual.getFullYear()).toString()+",Mes:"+(fecha_actual.getMonth()+1).toString()+",Día:"+fecha_actual.getDate().toString()+",Hora:"+fecha_actual.getHours().toString()+",Minutos:"+fecha_actual.getMinutes().toString()+",Segundos:"+fecha_actual.getSeconds().toString()+"";


        const listaru ="listar las publicaciones";

        for(var jk=0; jk<(await per).data.length; jk++){

            var puserId=(await per).data[jk].userId;
            var pid=(await per).data[jk].id;
            var ptitle=(await per).data[jk].title;
            var pbody=(await per).data[jk].body;
            

            const newder={
                Fecha_Metodo_Consultado:fecha,
                Metodo_Consultado:listaru,
                userId:puserId, 
                id:pid,
                title:ptitle,
                body:pbody
                }
                
        await axios.post('http://localhost:9000/apijsonplaceholder/posts/',newder);  

        }

        }

     

    render() {
        
        return (
            <div className="row">
                {
                    this.state.postsholders.map(cor => (

                       
                        <div className="col-md-4 p-2" key={cor.userId}>
                            
                        <div className="card">
                            
                            
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
