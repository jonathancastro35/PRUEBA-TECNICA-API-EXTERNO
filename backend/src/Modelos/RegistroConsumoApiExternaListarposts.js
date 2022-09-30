
const { Schema, model } = require('mongoose');

const carvajaSchema = new Schema({
    
    Fecha_Metodo_Consultado: {
        type: String,  
    },

    Metodo_Consultado: {
        type: String,
    }, 

    userId: {
        type: Number,   
    },

    id: {
        type: Number,  
    }, 
    
    title: {
        type: String,  
    }, 

    body: {
        type: String,  
    }, 
},



{
timestamps: true
},

);

module.exports = model('registroconsultpostsexternosapi', carvajaSchema);




