import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegacion from './Componentes/Navegacion';

import Listaruplaceholder from './Componentes/Listaruserjsonplaceholder'
import Listarpostsjsonplaceholder from './Componentes/Listarpostsplaceholder'
import ListarPhotos from './Componentes/Listarphotos'
import ListarRegistrousuariouserjsonconsultados from './Componentes/ListarRegistrouserjsonplaceholder'
import ListarRegistrousuariopostsjsonconsultados from './Componentes/ListarRegistropostsjsonplaceholder'
import GuardarConsultarFotousuarioexterno from './Componentes/Consultarfotousuario'
import ListarRegistrousuariofotosjsonconsultados from './Componentes/ListarConsultafotousuario'
import Listarfotoparticularusuarioconid from './Componentes/Listarfotousuarioparticular'
import ListarFotosUsuario from './Componentes/Consultarfotousuario2'
import ListarUsuarios from './Componentes/ListarUsuarios'
import ListarPublicaciones from './Componentes/ListarPublicaciones'
import EditarUsuario from './Componentes/Crearusuario'
import EliminarUsuario from './Componentes/Eliminarusuarioregistro'
import Eliminarusuario2 from './Componentes/Eliminarusuarioregistro2'
import ListarUsuariosEliminados from './Componentes/ListarhistorialUsuariosEliminados'
import ListarHistorialUsuariosEliminadosB64 from './Componentes/ListarHistorialusueliminadosenb64'

function App() {
  return (
    <Router>
      <Navegacion />

      <div className="container p-4">
        <Route path="/" exact component={ListarPhotos} />

        <Route path="/Listarusuarioplaceholder" component={Listaruplaceholder} />
        <Route path="/Listarpostsjsonplaceholders" component={Listarpostsjsonplaceholder} />
        <Route path="/ListarPhotos" component={ListarPhotos} />
        <Route path="/ListarRegistrousuariouserjsonconsultados" component={ListarRegistrousuariouserjsonconsultados} />
        <Route path="/ListarRegistrousuariopostsjsonconsultados" component={ListarRegistrousuariopostsjsonconsultados} />
        <Route path="/ConsultarFotousuarioexterno" component={GuardarConsultarFotousuarioexterno} />
        <Route path="/ListarRegistrousuariofotosjsonconsultados" component={ListarRegistrousuariofotosjsonconsultados} />
        <Route path="/Listarfotoparticularusuarioconid" component={Listarfotoparticularusuarioconid} />
        <Route path="/ListarFotosUsuario/:id" component={ListarFotosUsuario} />
        <Route path="/ListarUsuarios" component={ListarUsuarios} />
        <Route path="/ListarPublicaciones" component={ListarPublicaciones} />
        <Route path="/EditarUsuario/:id" component={EditarUsuario} />
        <Route path="/EliminarUsuario" component={EliminarUsuario} />
        <Route path="/Eliminarusuario2/:_id" component={Eliminarusuario2} />
        <Route path="/ListarUsuariosEliminados" component={ListarUsuariosEliminados} />
        <Route path="/ListarHistorialUsuariosEliminadosB64" component={ListarHistorialUsuariosEliminadosB64} />
       
        
        
       
      </div>
      
    </Router>
  );
}

export default App;
