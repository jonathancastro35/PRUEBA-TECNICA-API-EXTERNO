
const { Schema, model } = require('mongoose');

const carvajaSchema = new Schema({

    Metodo_Consultado: {
        type: String,
    },     

Fecha_usuarioeliminado: {
    type: String,  
},


id_usuario_eliminado: {
    type: String,   
}, 



},



{
timestamps: true
},

);

module.exports = model('historialusuarioeliminadoconvb64', carvajaSchema);


