
const DocumentoCtrl = {};

const p = require('../Modelos/RegistroConsumoApiExternaListarUsuario');

DocumentoCtrl.getApiusuarioExternos =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}

DocumentoCtrl.registrarUsuarioExterno = async (req, res) => {
    const { Fecha_Metodo_Consultado, Metodo_Consultado, id_usuario_retornado, name_usuario_retornado, username_usuario_retornado, email_usuario_retornado } = req.body;
    const ps = new p({
        Fecha_Metodo_Consultado:Fecha_Metodo_Consultado, 
        Metodo_Consultado:Metodo_Consultado, 
        id_usuario_retornado:id_usuario_retornado, 
        name_usuario_retornado:name_usuario_retornado, 
        username_usuario_retornado:username_usuario_retornado,
        email_usuario_retornado:email_usuario_retornado
        
    });
    await ps.save();
    res.json({message: 'UsuarioExterno consumo Registrada'})
}



DocumentoCtrl.getApiusuarioExterno = async (req, res) => {
    const per = await p.findById(req.params.id_usuario_retornado)
    res.json(per)
}


DocumentoCtrl.actualizarApiusuarioExterno = async (req, res) => {
    const { Fecha_Metodo_Consultado, Metodo_Consultado, id_usuario_retornado, name_usuario_retornado, username_usuario_retornado, email_usuario_retornado } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            
            Fecha_Metodo_Consultado, 
            Metodo_Consultado, 
            id_usuario_retornado, 
            name_usuario_retornado, 
            username_usuario_retornado, 
            email_usuario_retornado         
 }
 
 ); 
              
res.json({message: 'UsuarioExterno consumo Actualizado'})
}


DocumentoCtrl.deleteApiusuarioExterno = async (req, res) => {
await p.findByIdAndDelete(req.params.id);   
res.json({message: 'UsuarioExterno consumo Eliminado'})
}



module.exports = DocumentoCtrl;




