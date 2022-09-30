
const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI 
: 'mongodb://localhost/i4digital';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false

});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conectado A BD i4digital');
});


