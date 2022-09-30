
const { Router } = require('express');
const router = Router();
const { getApiusuarioExternos, registrarUsuarioExterno, getApiusuarioExterno, actualizarApiusuarioExterno,  deleteApiusuarioExterno } = require('../Controladores/Registroconsuapiuextercontrolador');
 

router.route('/')
    .get(getApiusuarioExternos)
    .post(registrarUsuarioExterno)

 router.route('/:id')   
   .get(getApiusuarioExterno)
    .put(actualizarApiusuarioExterno)
    .delete(deleteApiusuarioExterno)

    
module.exports = router;