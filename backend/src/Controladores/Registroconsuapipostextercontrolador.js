
const DocumentoCtrl = {};

const p = require('../Modelos/RegistroConsumoApiExternaListarposts');

DocumentoCtrl.getApipostsExternos =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}

DocumentoCtrl.registrarPostsExterno = async (req, res) => {
    const { Fecha_Metodo_Consultado, Metodo_Consultado, userId, id, title, body } = req.body;
    const ps = new p({
        Fecha_Metodo_Consultado:Fecha_Metodo_Consultado, 
        Metodo_Consultado:Metodo_Consultado, 
        userId:userId, 
        id:id, 
        title:title,
        body:body
    });
    await ps.save();
    res.json({message: 'PostExterno consumo Registrado'})
}

DocumentoCtrl.getApipostExterno = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarApipostExterno = async (req, res) => {
    const { Fecha_Metodo_Consultado, Metodo_Consultado, userId, id, title, body } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Fecha_Metodo_Consultado,
            Metodo_Consultado,
            userId, 
            id, 
            title,
            body        
 }
 );           
res.json({message: 'PostExterno consumo Actualizado'})
}


DocumentoCtrl.deleteApipostExterno = async (req, res) => {
await p.findByIdAndDelete(req.params.id);   
res.json({message: 'PostExterno consumo Eliminado'})
}

module.exports = DocumentoCtrl;





