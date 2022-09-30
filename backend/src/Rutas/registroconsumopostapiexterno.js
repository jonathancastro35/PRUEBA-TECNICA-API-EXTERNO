
const { Router } = require('express');
const router = Router();
const { getApipostsExternos, registrarPostsExterno, getApipostExterno, actualizarApipostExterno, deleteApipostExterno } = require('../Controladores/Registroconsuapipostextercontrolador');
 
router.route('/')
    .get(getApipostsExternos)
    .post(registrarPostsExterno)

 router.route('/:id')   
   .get(getApipostExterno)
    .put(actualizarApipostExterno)
    .delete(deleteApipostExterno)

    
module.exports = router;