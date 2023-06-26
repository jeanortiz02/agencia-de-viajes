import Sequelize from "sequelize";
import db from "../config/db.js";


// Constructor de la base de datos con SEQUELIZE 
// Las mismas columnas que se definen aqui deben ser las mismas de las bases de datos

export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    }, 
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    }, 
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    }, 
    slug: {
        type: Sequelize.STRING
    }
})