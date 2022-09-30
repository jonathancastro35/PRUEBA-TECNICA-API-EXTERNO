

import React, { Component } from 'react'
import axios from 'axios'
//import {format} from 'timeago.js'
//import {Link} from "react-router-dom"

export default class Consultarfotousuario2 extends Component {

    state= {
        albums: [],
        fotos:[],
        busc:'' 
        
    }

    componentDidMount() {
     
        this.getfotos(); 
        this.getalbumns();  
       }


        getfotos = async () =>{
            //console.log("vinooooooooooooooooooooooooo"+(parseInt(this.props.match.params.id)+1))
            const per = await axios.get('http://192.168.1.13:3000/photos/');
            this.setState({fotos: per.data}); 
            this.setState({busc: parseInt(this.props.match.params.id)});    
            }
      
            getalbumns = async () =>{
                
                const per = await axios.get('http://192.168.1.13:3000/albums/');
                this.setState({albums: per.data});   
                }
        
                                                

    render() {
        
        return (
            <div className="row">
                {
                    this.state.albums.filter(x=> x.userId === this.state.busc).map(cor => (
                        
                        <div className="col-md-9 p-2" key={cor.id}>

                            {
                             this.state.fotos.filter(x2=> x2.albumId === cor.id).map(cor2 => (

                            <div className="card">

                            <div className="card-header d-flex justify-content-between">
                             <h5><b>albumId</b>: {cor2.albumId}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>id</b>: {cor2.id}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>title</b>: {cor2.title}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>url</b>: {cor2.url}</h5>  
                            </div>

                            <div className="card-header d-flex justify-content-between">
                            <h5><b>thumbnailUrl</b>: {cor2.thumbnailUrl}</h5>  
                            </div>

                        </div>
                             ))   
                            }

                        


                        </div>



                    ))
                }

                           
               
            </div>
        )
    }
}
