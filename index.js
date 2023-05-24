const {getConnection} = require('./src/db/Conexion-mongo');
const express = require('express')
const cors = require('cors');
const app = express()

const port = process.env.PORT || 6000

//process.evn.port ||
app.use(cors());
getConnection();

//Parseo Json
app.use(express.json());

app.use('/Tipos_Proyectos',require('./src/router/tipos_Proyectos'));
app.use('/Clientes',require('./src/router/clientes'));
app.use('/Universidades',require('./src/router/universidades'));
app.use('/Etapas',require('./src/router/etapas'));
app.use('/Proyectos',require('./src/router/proyectos'));

app.listen(port, () => {
    console.log(`Ejecución en el Puerto ${port}`)
  })


