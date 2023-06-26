
// Importando la instancia de express
import express from "express";

// Importando controlladores de la pagina actual 
import { paginaInicio,
        paginaNosotros,
        paginaViajes,
        paginaTestimoniales,
        paginaDetalleViaje
     } from "../controllers/paginasController.js";

// Importando de testimonial Guardar
import {
        guardarTestimonial
} from "../controllers/testimonialController.js"

// Creando el router
const router = express.Router();

// Asignando el router
router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);

// Comiding
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial)

// Exportando el router
export default router;