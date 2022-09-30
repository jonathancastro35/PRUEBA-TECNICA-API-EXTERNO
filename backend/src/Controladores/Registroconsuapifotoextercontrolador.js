
const DocumentoCtrl = {};

const p = require('../Modelos/RegistroConsumoApiExternaListarfotos');

DocumentoCtrl.getApifotosExternos =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}

DocumentoCtrl.registrarfotosExterno = async (req, res) => {
    const { Fecha_Metodo_Consultado, Metodo_Consultado, albumId, id, title, url, thumbnailUrl } = req.body;
    const ps = new p({
        Fecha_Metodo_Consultado:Fecha_Metodo_Consultado, 
        Metodo_Consultado:Metodo_Consultado, 
        albumId:albumId,
        id:id, 
        title:title,
        url:url,
        thumbnailUrl:thumbnailUrl

    });
    await ps.save();
    res.json({message: 'foto Externo consumo Registrado'})
}

DocumentoCtrl.getApifotExterno = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarApifotosExterno = async (req, res) => {
    const { Fecha_Metodo_Consultado, Metodo_Consultado, albumId, userId, id, title, body } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Fecha_Metodo_Consultado,
            Metodo_Consultado,
            albumId,
            userId, 
            id, 
            title,
            body        
 }
 );           
res.json({message: 'foto Externa consumo Actualizada'})
}


DocumentoCtrl.deleteApifotosExterno = async (req, res) => {
await p.findByIdAndDelete(req.params.id);   
res.json({message: 'foto Externo consumo Eliminado'})
}

module.exports = DocumentoCtrl;








