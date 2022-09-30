
const { Schema, model } = require('mongoose');

const carvajaSchema = new Schema({
    

    Fecha_Metodo_Consultado: {
        type: String,  
    },

    Metodo_Consultado: {
        type: String,
    }, 
    
    albumId: {
        type: Number,  
    }, 

    id: {
        type: Number, 
    }, 

    title: {
        type: String,  
    }, 

    url: {
        type: String,  
    },

    thumbnailUrl: {
        type: String,  
    },
},



{
timestamps: true
},

);

module.exports = model('registroconsultafotosexternasapi', carvajaSchema);






