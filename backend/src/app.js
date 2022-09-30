
const express = require('express');
const cors = require('cors');
const app = express();

//settiings
app.set('port', process.env.PORT || 9000);

//middlewares
app.use(cors());
app.use(express.json());

//rutas

app.use('/apijsonplaceholder/users', require('./Rutas/registroconsumousuapiexterno'));
app.use('/apijsonplaceholder/posts', require('./Rutas/registroconsumopostapiexterno'));
app.use('/apijsonplaceholder/photos', require('./Rutas/registroconsumofotoapiexterno'));
app.use('/api/usuarioseliminados', require('./Rutas/registroUsuarioeliminado'));
app.use('/api/usuarioseliminadosb64', require('./Rutas/registroUsuarioeliminadob64'));



module.exports = app;

