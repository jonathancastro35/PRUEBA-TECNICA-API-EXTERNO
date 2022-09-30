
const DocumentoCtrl = {};

const p = require('../Modelos/UsuariosEliminadosConbase64');

DocumentoCtrl.getUsuariosEliminados =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}


DocumentoCtrl.registrarUsuarioEliminado = async (req, res) => {
    const { Metodo_Consultado, Fecha_usuarioeliminado, id_usuario_eliminado } = req.body;
    const ps = new p({
        Metodo_Consultado:Metodo_Consultado,
        Fecha_usuarioeliminado:Fecha_usuarioeliminado, 
        id_usuario_eliminado:id_usuario_eliminado
    });
    await ps.save();
    res.json({message: 'Usuario Eliminado Registrado'})
}

DocumentoCtrl.getUsuarioEliminado = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarUsuarioEliminado = async (req, res) => {
    const { Metodo_Consultado, Fecha_usuarioeliminado, id_usuario_eliminado } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Metodo_Consultado,
            Fecha_usuarioeliminado,
            id_usuario_eliminado       
 }
 );           
res.json({message: 'Usuario Eliminado Actualizado'})
}


DocumentoCtrl.deleteUsuarioEliminado = async (req, res) => {
await p.findByIdAndDelete(req.params.id);   
res.json({message: 'Usuario Eliminado, Eliminado de la bd'})
}

module.exports = DocumentoCtrl;













