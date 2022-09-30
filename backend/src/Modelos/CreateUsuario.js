
const { Schema, model } = require('mongoose');

const carvajaSchema = new Schema({

Fecha_Metodo_Consultado: {
    type: String,  
},

Metodo_Consultado: {
    type: String,
}, 

id_usuario_retornado: {
    type: Number,  
}, 

name_usuario_retornado: {
    type: String,  
}, 
username_usuario_retornado: {
    type: String,  
}, 
email_usuario_retornado: {
    type: String,  
},

},



{
timestamps: true
},

);

module.exports = model('createusuario', carvajaSchema);