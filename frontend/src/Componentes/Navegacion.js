
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navegacion extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/Nintex">
                    I4DIGITAL MEDELLIN
                    </Link>


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">

                            
                        <li className="nav-item active">
                                <Link className="nav-link" to="/"><b>I4DIGITAL</b></Link>
                        </li>

                        <li className="nav-item active">
                                <Link className="nav-link" to="/ListarUsuarios"><b>LISTAR USUARIOS</b></Link>
                        </li>

                        <li className="nav-item active">
                                <Link className="nav-link" to="/ListarPublicaciones"><b>LISTAR PUBLICACIONES</b></Link>
                        </li>
                        
                        
                            
                        </ul>
                    </div>
                </div>


            </nav>
        )
    }
}

