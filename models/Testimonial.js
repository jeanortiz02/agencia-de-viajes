import Sequelize from "sequelize";
import db from "../config/db.js";


// Constructor de la base de datos con SEQUELIZE 
// Las mismas columnas que se definen aqui deben ser las mismas de las bases de datos

export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})

