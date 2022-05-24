// Requerir express
const express = require('express')

// Asignar express a app para empezar a utilizarlo.
const app = express();

//Permite ver por consola lo que llega al servidor
const morgan = require('morgan');

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Configurar los espacios del json.
app.set('json spaces', 2)

// Middlewares
app.use(morgan('dev'));

// Recibe formatos de formulario.
app.use(express.urlencoded({extended:false}));

// Recibe formatos json y los entiende express.
app.use(express.json());

// Rutas
app.use(require('./routes/index'))
app.use('/api/movies',require('./routes/movies.js'))



// Hacer que el servidor arranque
app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
})