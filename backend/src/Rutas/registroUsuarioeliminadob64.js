
const { Router } = require('express');
const router = Router();
const { getUsuariosEliminados, registrarUsuarioEliminado, getUsuarioEliminado, actualizarUsuarioEliminado, deleteUsuarioEliminado } = require('../Controladores/RegistrousUaioriosEliminadosb64');
 

router.route('/')
    .get(getUsuariosEliminados)
    .post(registrarUsuarioEliminado)

 router.route('/:id')   
   .get(getUsuarioEliminado)
    .put(actualizarUsuarioEliminado)
    .delete(deleteUsuarioEliminado)

    
module.exports = router;