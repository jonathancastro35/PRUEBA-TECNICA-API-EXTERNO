
import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
import {Link} from "react-router-dom"


export default class Consultarfotousuario extends Component {
    
    state= {
        fotosholders: [],  
    }

    componentDidMount() {
     
        this.getFotosholders();    
    
       }

       getFotosholders = async () =>{
        const per = await axios.get('http://192.168.1.13:3000/photos/');
        this.setState({fotosholders: per.data});  

        const fecha_actual = new Date();

        const fecha ="Año:"+(fecha_actual.getFullYear()).toString()+",Mes:"+(fecha_actual.getMonth()+1).toString()+",Día:"+fecha_actual.getDate().toString()+",Hora:"+fecha_actual.getHours().toString()+",Minutos:"+fecha_actual.getMinutes().toString()+",Segundos:"+fecha_actual.getSeconds().toString()+"";


        const listaru ="listar las fotos";

        for(var jk=0; jk<(await per).data.length; jk++){

            var falbumId=(await per).data[jk].albumId;
            var fid=(await per).data[jk].id;
            var ftitle=(await per).data[jk].title;
            var furl=(await per).data[jk].url;
            var fthumbnailUrl=(await per).data[jk].thumbnailUrl;
            

            const newder={
                Fecha_Metodo_Consultado:fecha,
                Metodo_Consultado:listaru,
                albumId:falbumId, 
                id:fid,
                title:ftitle,
                url:furl,
                thumbnailUrl:fthumbnailUrl
                }
                
        await axios.post('http://localhost:9000/apijsonplaceholder/photos/',newder);  

        }

        }

     

    render() {
        
        return (
            <div className="row">
                {
                    this.state.fotosholders.map(cor => (

                        <div className="col-md-10 p-2" key={cor.id}>
                            
                        <div className="card">
                            
                            
                            <div className="card-header d-flex justify-content-between">
                             <h5><b>albumId</b>: {cor.albumId}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>id</b>: {cor.id}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>title</b>: {cor.title}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>url</b>: {cor.url}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>thumbnailUrl</b>: {cor.thumbnailUrl}</h5>  
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
