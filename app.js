const express = require('express');
const app = express();

app.listen(3030, () => console.log('Nuestro servidor esta funcionando en el puerto 3030'))

const homeRoute = require('./routes/home')
const sucursalesRoute = require('./routes/sucursales')
const autosRoute = require('./routes/autos')
const marcasRoute = require('./routes/marcas')

app.use('/', homeRoute)
app.use('/sucursales', sucursalesRoute)
app.use('/autos', autosRoute)
app.use('/marcas', marcasRoute)