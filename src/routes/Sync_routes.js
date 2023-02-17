import {Router} from 'express';
const router =Router();
import {controller} from '../controllers/controllers.js'

router.get('/equipos',controller.equipos)
router.get('/locales',controller.locales)
router.get('/versiones',controller.versiones_prp)
router.get('/listadoDeApps',controller.listado_Apps)


export default router