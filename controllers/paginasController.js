
import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimonial.js';

const paginaInicio = async (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    
    // Hace los Await Al mismo tiempo
    const promiseDB = [];
    promiseDB.push (Viaje.findAll({ limit : 3}));
    promiseDB.push (Testimonial.findAll({ limit :3}));

    try {
        // Opcion normal pero toma mucho tiempo para ejecutarse
        // const viajes = await Viaje.findAll({ limit : 3});
        // const testimoniales = await Testimonial.findAll({ limit : 3});
        const resultado = await Promise.all(promiseDB);
        
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });

    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    
    
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    // Consulta de viajes 

    const viajes = await Viaje.findAll();
    // console.log(viajes);
    
    
    res.render('viajes', {
        pagina: 'Proximos viajes',
        viajes
    });
}

// Muestra un viaje por su Slug
const paginaDetalleViaje = async (req, res) => {
    
    const { slug } = req.params;
    try {
        //         parametro busca referencia por la base de datos y variable creada 
        const viaje = await Viaje.findOne({ where: {slug} });
        res.render('viaje', {
            pagina: `Informacion del viaje de ${viaje.titulo}`,
            viaje
        });
        // console.log(resultado);

    } catch (error) {
        console.log(error);
    }
}

const paginaTestimoniales = async(req, res) => { // req - lo que enviamos : res - lo que express nos responde
    
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje

}