
const { Router } = require('express');
const router = Router();
const { getApiusuarioExternos, registrarUsuarioExterno, getApiusuarioExterno, actualizarApiusuarioExterno,  deleteApiusuarioExterno } = require('../Controladores/Crearusuariocontrolador');
 

router.route('/')
    .get(getApiusuarioExternos)
    .post(registrarUsuarioExterno)

 router.route('/:id_usuario_retornado')   
   .get(getApiusuarioExterno)
    .put(actualizarApiusuarioExterno)
    .delete(deleteApiusuarioExterno)

    
module.exports = router;