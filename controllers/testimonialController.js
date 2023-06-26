
// Importar a Testimoniales
import { Testimonial} from '../models/Testimonial.js'


const guardarTestimonial = async (req, res)=> {

    const {nombre, correo, mensaje} = req.body

    const errores = [];

    if (nombre.trim() == '') {
        errores.push({mensaje: 'El nombre esta vacio'})
    }

    if (correo.trim() == '') {
        errores.push({mensaje: 'El correo esta vacio'})
    }

    if (mensaje.trim() == '') {
        errores.push({mensaje: 'El mensaje esta vacio'})
    }

    if (errores.length > 0) {

        const testimoniales = await Testimonial.findAll();
        // Pasar a vista de testimonial 
        res.render('testimoniales', {
            pagina: 'Testimoniales', 
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales 

        })
    } else {

       

        // Guardar datos del formulario en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }
    }

    // console.log(errores)
}

export {
    guardarTestimonial
}