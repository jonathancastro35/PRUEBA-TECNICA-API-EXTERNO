
const { Router } = require('express');
const router = Router();
const { getApifotosExternos, registrarfotosExterno, getApifotExterno, actualizarApifotosExterno, deleteApifotosExterno } = require('../Controladores/Registroconsuapifotoextercontrolador');
 
router.route('/')
    .get(getApifotosExternos)
    .post(registrarfotosExterno)

 router.route('/:id')   
   .get(getApifotExterno)
    .put(actualizarApifotosExterno)
    .delete(deleteApifotosExterno)

    
module.exports = router;