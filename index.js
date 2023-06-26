

// Configurando Express 
// Sintaxis common JS
// const express = require('express');

// Sintaxis moderna con modules
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

// Ejecutando el express e instanciandola
const app = express();

// Conectar o authenticarme a la Base de Datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( (err) => console.log(err));

// Definiendo el puerto del servidor
const port = process.env.PORT || 4000;

// Template engine = pug
app.set('view engine', 'pug');

// Insertando una variable via middleware
// Middleware
// Obtener el year actual
app.use( (req, res, next)=> {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    // console.log(res.locals);
    next();
    
    // next indica que se puede seguir con la siguiente linea
    
})

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true}));


// Agregando hojas de estilo | Definiendo carpeta publica o raiz
app.use(express.static('public'));

// Agrega Router | Toma el router como referencia
// "Use" es como decir: PUT, DELETE, POST, PATCH
app.use('/', router);

// Esuchando que el servidor esta arriba
app.listen(port, () => {
    console.log(`Escuchando el servidor por el puerto ${port}`);
})